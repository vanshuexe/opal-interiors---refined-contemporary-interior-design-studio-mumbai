import React, { useState } from 'react';
import { Gift, Users, CheckCircle, Mail } from 'lucide-react';
import { referralFaqs, referralRewards, referralTerms } from '../data/referralData';
import { saveReferral } from '../data/referralsStore';

export const ReferralPage: React.FC = () => {
  const [draftOpened, setDraftOpened] = useState(false);
  const [saveError, setSaveError] = useState('');
  const [form, setForm] = useState({ name: '', phone: '', clientName: '', clientPhone: '', budget: '' });
  const submitReferral = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      saveReferral(form);
      setSaveError('');
      setDraftOpened(true);
    } catch (error) {
      setSaveError(error instanceof Error && error.message === 'Please complete all referral details.' ? error.message : 'Your referral could not be saved. Please try again or email the studio directly.');
    }
  };
  const steps = [
    ['Refer a friend', 'Share Opal Interior’s contact details with friends or family planning an interior design project.'],
    ['Your friend connects with us', 'Ask your friend to mention your name as the referrer when contacting Opal Interior.'],
    ['Project confirmation', 'Your friend accepts the project proposal and completes the required booking or initial payment formalities.'],
    ['Receive your reward', 'Your applicable reward is credited within 45 days of successful conversion, subject to verification and receipt of required details.'],
  ];

  return (
    <div>
      <section className="bg-[#1A1612] text-white py-16 md:py-24">
        <div className="max-w-[1150px] mx-auto px-5 grid md:grid-cols-[1fr_300px] items-center gap-12">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#E6D59A] mb-5">Opal Interior presents</p>
            <h1 className="text-4xl md:text-6xl leading-tight">Refer a friend.<br /><span className="text-[#E6D59A] italic">Get rewarded.</span></h1>
            <p className="text-lg text-white/75 leading-relaxed max-w-xl mt-6">Beautiful spaces deserve to be shared. Refer your friends and family to Opal Interior and earn rewards when they become our clients.</p>
            <a href="#refer-a-friend" className="btnConsultation mt-8">Refer a friend</a>
          </div>
          <div className="border border-[#C99933]/40 p-8 rounded-2xl bg-white/5">
            <Gift size={36} className="text-[#E6D59A] mb-6" />
            <p className="font-serif text-3xl">Your referral.<br />Their dream home.<br />Your reward.</p>
            <p className="text-sm text-[#E6D59A] mt-6 pt-5 border-t border-white/15">Valid until 31 December 2026</p>
          </div>
        </div>
      </section>

      <section className="max-w-[1150px] mx-auto px-5 py-16 md:py-20">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
          <div><p className="text-sm uppercase tracking-widest text-[#8C691C] mb-3">Referral rewards</p><h2 className="text-3xl md:text-4xl">A thoughtful introduction.<br />A rewarding connection.</h2><p className="text-[#636363] leading-relaxed mt-5">Know someone planning to design or renovate their home? Your reward grows with their project budget.</p><p className="text-sm text-[#636363] mt-5">Rewards are based on the confirmed minimum estimated project budget, excluding taxes and subsequently added scope, unless otherwise agreed.</p></div>
          <div className="bg-white border border-[#C99933]/25 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-sm sm:text-base"><caption className="sr-only">Project budgets and applicable referral rewards</caption><thead className="bg-[#1A1612] text-white"><tr><th scope="col" className="p-4 font-medium">Project budget</th><th scope="col" className="p-4 font-medium">Your reward</th></tr></thead><tbody>{referralRewards.map(([budget, reward]) => <tr key={budget} className="border-b last:border-b-0 border-[#C99933]/15"><th scope="row" className="p-4 font-normal">{budget}</th><td className="p-4 text-[#8C691C] font-semibold">{reward}</td></tr>)}</tbody></table>
          </div>
        </div>
        <p className="text-sm text-[#636363] mt-6">Subject to successful conversion and programme terms. The studio will confirm the applicable tier for projects of exactly ₹20 lakh and communicate the surprise voucher’s value and nature.</p>
      </section>

      <section className="bg-white border-y border-[#C99933]/15 py-16">
        <div className="max-w-[1150px] mx-auto px-5"><h2 className="text-3xl md:text-4xl mb-10">How it works</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">{steps.map(([title, description], index) => <div key={title}><span className="font-serif text-4xl text-[#C99933]">0{index + 1}</span><h3 className="text-xl mt-4 mb-3">{title}</h3><p className="text-[#636363] text-base leading-relaxed">{description}</p></div>)}</div></div>
      </section>

      <section id="refer-a-friend" className="max-w-[1150px] mx-auto px-5 py-16 md:py-20 scroll-mt-24">
        <div className="grid lg:grid-cols-2 gap-12">
          <div><Users className="text-[#C99933] mb-5" size={36} /><h2 className="text-3xl md:text-4xl">Ready to refer?</h2><p className="text-[#636363] leading-relaxed mt-5">Share your details and your friend’s details with our studio. Please get their consent before sharing their contact information.</p><a href="mailto:opalinterior05@gmail.com" className="inline-flex items-center gap-2 text-[#8C691C] break-all mt-6"><Mail size={18} className="shrink-0" />opalinterior05@gmail.com</a><p className="text-sm text-[#636363] mt-5">In this local preview, the form saves your referral to this browser’s admin list. Email your details to the studio to register your referral under the programme.</p></div>
          <form onSubmit={submitReferral} className="bg-white p-6 sm:p-8 border border-[#C99933]/25 rounded-2xl space-y-5">
            {([['name', 'Your name', 'text'], ['phone', 'Your contact number', 'tel'], ['clientName', 'Referred client’s name', 'text'], ['clientPhone', 'Referred client’s contact number', 'tel'], ['budget', 'Estimated project budget', 'text']] as const).map(([key, label, type]) => <div key={key}><label htmlFor={`referral-${key}`} className="block text-sm font-medium mb-2">{label} *</label><input id={`referral-${key}`} type={type} required maxLength={100} value={form[key]} onChange={event => { setForm({ ...form, [key]: event.target.value }); setDraftOpened(false); }} className="w-full border border-[#E8E3DF] rounded-lg p-3 text-base focus:outline-none focus:ring-2 focus:ring-[#C99933]" /></div>)}
            <label className="flex gap-3 items-start text-sm text-[#636363] leading-relaxed"><input type="checkbox" required className="mt-1 accent-[#C99933]" /><span>I confirm that the referred person has consented to sharing their contact details, and I have read the <a href="#referral-terms" className="underline text-[#8C691C]">programme terms</a>.</span></label>
            <button className="btnConsultation w-full" type="submit" disabled={draftOpened}>{draftOpened ? 'Referral saved' : 'Submit referral'}</button>
            {saveError && <p role="alert" className="text-sm text-red-700">{saveError}</p>}
            {draftOpened && <div className="space-y-3"><p role="status" className="text-sm text-[#636363] flex gap-2"><CheckCircle size={20} className="shrink-0 text-[#8C691C]" />Referral saved to the admin list in this browser. Email the studio to complete programme registration.</p><a className="text-sm underline text-[#8C691C]" href={`mailto:opalinterior05@gmail.com?subject=${encodeURIComponent('Opal Interior – Referral Submission')}&body=${encodeURIComponent(`Referrer’s Name: ${form.name}\nReferrer’s Contact Number: ${form.phone}\nReferred Client’s Name: ${form.clientName}\nReferred Client’s Contact Number: ${form.clientPhone}\nEstimated Project Budget: ${form.budget}\n\nI confirm that the referred person has consented to sharing their contact details. Please register this referral under the Opal Interior Refer a Friend Programme.`)}`}>Email this referral to the studio</a></div>}
          </form>
        </div>
      </section>

      <section className="bg-white py-16"><div className="max-w-[900px] mx-auto px-5"><h2 className="text-3xl md:text-4xl mb-8">Frequently asked questions</h2>{referralFaqs.map(([question, answer]) => <details key={question} className="border-b border-[#C99933]/20 py-5"><summary className="cursor-pointer text-base font-medium pr-4">{question}</summary><p className="text-[#636363] leading-relaxed mt-4">{answer}</p></details>)}</div></section>

      <section id="referral-terms" className="max-w-[900px] mx-auto px-5 py-16 scroll-mt-24"><h2 className="text-3xl md:text-4xl mb-8">Terms &amp; conditions</h2><ol className="list-decimal pl-5 space-y-4 text-[#636363] leading-relaxed">{referralTerms.map(term => <li key={term} className="pl-2">{term}</li>)}</ol></section>
    </div>
  );
};
