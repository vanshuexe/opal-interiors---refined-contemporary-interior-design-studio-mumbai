import React from 'react';

export const TermsPage: React.FC = () => {
  return (
    <div className="w-full bg-white min-h-screen py-16 md:py-24">
      <div className="max-w-[900px] mx-auto px-4">
        <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#479572] font-semibold block mb-2">
          Legal Agreement
        </span>
        <h1 className="text-4xl md:text-5xl font-serif text-[#2C2C2C] mb-8">
          Terms &amp; Conditions
        </h1>

        <div className="prose prose-slate max-w-none text-sm text-[#757779] leading-relaxed space-y-6">
          <p>
            Welcome to <strong>Opal Interior</strong>. These Terms and Conditions govern your use of our website, interior design consultations, spatial architecture planning, bespoke detailing, and site supervision contracts in Mumbai, India.
          </p>

          <h3 className="text-lg font-serif text-[#090B19] font-bold">1. Project Proposals &amp; Quotations</h3>
          <p>
            All design proposals, preliminary concepts, space planning layouts, and material estimates provided by Opal Interior are valid for 30 calendar days from issue date.
          </p>

          <h3 className="text-lg font-serif text-[#090B19] font-bold">2. Design &amp; Site Supervision Scope</h3>
          <p>
            Opal Interior provides comprehensive design documentation, working drawings, material selections, and site visits to ensure contractors execute work in accordance with approved drawings.
          </p>

          <h3 className="text-lg font-serif text-[#090B19] font-bold">3. Payment Milestones</h3>
          <p>
            Unless agreed otherwise in writing, design and consultation fees are structured around milestones: Initial Sign-Up &amp; Concept Phase, Detailed Design &amp; Working Drawings, and On-Site Execution Supervision.
          </p>

          <h3 className="text-lg font-serif text-[#090B19] font-bold">4. Intellectual Property</h3>
          <p>
            All 3D visualisations, mood boards, CAD drawings, and custom joinery designs developed by Mansi Sharma, Pushapraj Sharma and Opal Interior remain the intellectual property of Opal Interior.
          </p>

          <h3 className="text-lg font-serif text-[#090B19] font-bold">5. Governing Law &amp; Jurisdiction</h3>
          <p>
            These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the Courts of Mumbai, Maharashtra.
          </p>

          <div className="pt-6 border-t border-slate-200 text-xs text-slate-500">
            <p>Last updated: 2026 | Opal Interior, B-112, Shiv Mahal, RNP park, Next to Jesal Park, Bhayandar East, Thane- 401105. Phone: +91 7400260508 | Email: Opalinterior05@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
