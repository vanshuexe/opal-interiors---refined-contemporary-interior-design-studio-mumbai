export const REFERRALS_KEY = 'opal_interiors_referrals';
export const REFERRALS_CHANGED = 'opal-referrals-changed';
export const referralStatuses = ['New', 'In Discussion', 'Converted', 'Reward Paid', 'Not Eligible'] as const;
export type ReferralStatus = typeof referralStatuses[number];
export interface Referral {
  id: string;
  name: string;
  phone: string;
  clientName: string;
  clientPhone: string;
  budget: string;
  consent: true;
  createdAt: string;
  status: ReferralStatus;
}

export function getReferrals(): Referral[] {
  const raw = localStorage.getItem(REFERRALS_KEY);
  if (!raw) return [];
  const records: unknown = JSON.parse(raw);
  if (!Array.isArray(records) || !records.every(record => record && typeof record.id === 'string' && typeof record.name === 'string' && typeof record.phone === 'string' && typeof record.clientName === 'string' && typeof record.clientPhone === 'string' && typeof record.budget === 'string' && typeof record.createdAt === 'string' && referralStatuses.includes(record.status) && record.consent === true)) {
    throw new Error('Saved referral data could not be read.');
  }
  return records;
}

function persistReferrals(referrals: Referral[]) {
  localStorage.setItem(REFERRALS_KEY, JSON.stringify(referrals));
  window.dispatchEvent(new Event(REFERRALS_CHANGED));
}

export function saveReferral(input: Pick<Referral, 'name' | 'phone' | 'clientName' | 'clientPhone' | 'budget'>): Referral {
  const fields = Object.fromEntries(Object.entries(input).map(([key, value]) => [key, value.trim()])) as typeof input;
  if (Object.values(fields).some(value => !value)) throw new Error('Please complete all referral details.');
  const record: Referral = { ...fields, id: `ref-${crypto.randomUUID()}`, consent: true, createdAt: new Date().toISOString(), status: 'New' };
  persistReferrals([record, ...getReferrals()]);
  return record;
}

export function updateReferralStatus(id: string, status: ReferralStatus): Referral[] {
  const records = getReferrals();
  if (!records.some(record => record.id === id)) throw new Error('Referral no longer exists. Refresh the list.');
  const updated = records.map(record => record.id === id ? { ...record, status } : record);
  persistReferrals(updated);
  return updated;
}
