import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES_DATA } from '../data/servicesData';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { MoodboardPresentationBoard } from '../components/MoodboardPresentationBoard';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const service = SERVICES_DATA.find((s) => s.slug === slug) || SERVICES_DATA[0];

  return (
    <div className="w-full bg-white min-h-screen pb-20">
      {/* Back Button Bar */}
      <div className="bg-[#FAF8F2] py-4 border-b border-[#C99933]/20">
        <div className="max-w-[1150px] mx-auto px-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#C99933] hover:text-[#1A1612] transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Services
          </button>
        </div>
      </div>

      {/* Header */}
      <section className="py-16 md:py-20 bg-[#FAF8F2]/60 border-b border-slate-100">
        <div className="max-w-[1150px] mx-auto px-4">
          <div className="max-w-3xl flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#C99933] font-semibold">
              Service Expertise
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-[#1A1612] leading-tight">
              {service.title}
            </h1>
            <p className="text-xl font-serif italic text-[#C99933]">
              {service.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Feature Content */}
      <section className="py-16">
        <div className="max-w-[1150px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <h3 className="text-2xl md:text-3xl font-serif text-[#1A1612]">Overview</h3>
              <p className="text-base text-[#757779] leading-relaxed">
                {service.fullDesc}
              </p>

              <h4 className="text-lg font-serif text-[#1A1612] pt-2">Key Deliverables</h4>
              <div className="grid grid-cols-1 gap-2.5">
                {service.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-[#2C2C2C]">
                    <CheckCircle2 size={18} className="text-[#C99933] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[420px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Process Workflow Steps */}
          <div className="pt-12 border-t border-slate-100">
            <h3 className="text-2xl md:text-3xl font-serif text-[#1A1612] mb-8 text-center">
              Our {service.title} Execution Process
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#C99933]/25 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-3xl font-serif italic text-[#C99933] font-bold block mb-2">
                      {step.number}
                    </span>
                    <h4 className="text-base font-semibold text-[#1A1612] mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#757779] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE MOODBOARD PRESENTATION BOARD */}
      <MoodboardPresentationBoard />

      <section className="py-10">
        <div className="max-w-[1150px] mx-auto px-4">
          {/* CTA Box */}
          <div className="bg-[#C99933] text-white rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#FFFDF9]">
                Inquire about {service.title}
              </h3>
              <p className="text-sm opacity-95 mt-1">
                Connect directly with Mansi Sharma, Pushapraj Sharma and our design studio directors in Mumbai.
              </p>
            </div>
            <Link to="/contact">
              <button className="bg-white text-[#C99933] hover:bg-[#FAF8F2] px-8 py-3.5 rounded-full font-sans uppercase text-xs tracking-widest font-bold transition-all shadow-md hover:scale-105 active:scale-95 shrink-0">
                BOOK FREE CONSULTATION
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
