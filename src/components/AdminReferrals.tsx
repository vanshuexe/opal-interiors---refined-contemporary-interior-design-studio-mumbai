import React, { useEffect, useState } from 'react';
import { getReferrals, REFERRALS_CHANGED, REFERRALS_KEY, Referral, referralStatuses, ReferralStatus, updateReferralStatus } from '../data/referralsStore';

export const AdminReferrals: React.FC = () => {
  const [records, setRecords] = useState<Referral[]>([]);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('All');
  const [error, setError] = useState('');
  const refresh = () => {
    try { setRecords(getReferrals()); setError(''); }
    catch { setError('Could not read saved referrals. Please check browser storage and refresh.'); }
  };
  useEffect(() => {
    refresh();
    const onStorage = (event: StorageEvent) => { if (event.key === REFERRALS_KEY || event.key === null) refresh(); };
    window.addEventListener('storage', onStorage);
    window.addEventListener('focus', refresh);
    window.addEventListener(REFERRALS_CHANGED, refresh);
    return () => { window.removeEventListener('storage', onStorage); window.removeEventListener('focus', refresh); window.removeEventListener(REFERRALS_CHANGED, refresh); };
  }, []);
  const filtered = records.filter(record => (status === 'All' || record.status === status) && [record.name, record.phone, record.clientName, record.clientPhone, record.budget].some(value => value.toLowerCase().includes(query.trim().toLowerCase())));
  const changeStatus = (id: string, next: ReferralStatus) => {
    try { setRecords(updateReferralStatus(id, next)); setError(''); }
    catch { setError('Status could not be saved. Please refresh and try again.'); }
  };
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-between items-center gap-4"><div><h2 className="font-serif text-3xl text-white">Referral programme</h2><p className="text-sm text-slate-400 mt-2">Referrers, referred clients and reward progress.</p></div><button onClick={refresh} className="rounded-lg border border-white/20 px-4 py-2 text-sm hover:bg-white/10">Refresh referrals</button></div>
      <div className="grid sm:grid-cols-3 gap-4">{[['Total referrals', records.length], ['New referrals', records.filter(record => record.status === 'New').length], ['Converted / rewarded', records.filter(record => record.status === 'Converted' || record.status === 'Reward Paid').length]].map(([label, value]) => <div key={label} className="bg-[#151922] border border-white/10 p-5 rounded-xl"><p className="text-sm text-slate-400">{label}</p><p className="text-3xl mt-2 text-[#FFEFA2]">{value}</p></div>)}</div>
      <p className="text-sm text-slate-400">Local preview: records are saved in this browser only. Email referrals are not imported automatically.</p>
      {error && <p role="alert" className="rounded-lg border border-red-500/40 bg-red-950/40 p-4 text-red-200">{error}</p>}
      <div className="flex flex-col sm:flex-row gap-4"><input type="search" aria-label="Search referrals" placeholder="Search referrer, client or phone…" value={query} onChange={event => setQuery(event.target.value)} className="flex-1 rounded-lg border border-white/15 bg-[#151922] p-3 text-base" /><select aria-label="Filter referral status" value={status} onChange={event => setStatus(event.target.value)} className="rounded-lg border border-white/15 bg-[#151922] p-3 text-base"><option value="All">All statuses</option>{referralStatuses.map(value => <option key={value}>{value}</option>)}</select></div>
      <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#151922]"><table className="w-full text-left text-sm min-w-[850px]"><caption className="sr-only">Submitted referrals</caption><thead className="bg-white/5 text-slate-400"><tr>{['Date', 'Referrer', 'Referred client', 'Project budget', 'Status'].map(label => <th key={label} scope="col" className="p-4 font-medium">{label}</th>)}</tr></thead><tbody>{filtered.map(record => <tr key={record.id} className="border-t border-white/10"><td className="p-4 text-slate-400 whitespace-nowrap">{new Date(record.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' })}</td><td className="p-4"><p className="font-semibold">{record.name}</p><p className="text-slate-400 mt-1">{record.phone}</p></td><td className="p-4"><p className="font-semibold">{record.clientName}</p><p className="text-slate-400 mt-1">{record.clientPhone}</p><p className="text-[#C99933] mt-2">Consent confirmed</p></td><td className="p-4">{record.budget}</td><td className="p-4"><select aria-label={`Status for ${record.clientName}`} value={record.status} onChange={event => changeStatus(record.id, event.target.value as ReferralStatus)} className="border border-white/20 rounded-lg bg-[#0E1118] p-2 text-[#FFEFA2]">{referralStatuses.map(value => <option key={value}>{value}</option>)}</select></td></tr>)}{!error && filtered.length === 0 && <tr><td colSpan={5} className="p-10 text-center text-slate-400">{records.length === 0 ? 'No referrals yet. Referrals submitted through the website form will appear here.' : 'No referrals match your search.'}</td></tr>}</tbody></table></div>
    </div>
  );
};
