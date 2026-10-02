import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA, SERVICES_PHILOSOPHY } from '../data/servicesData';
import { PROJECTS_DATA } from '../data/projectsData';
import { ArrowUpRight, CheckCircle2, ShieldCheck, PenTool } from 'lucide-react';
import { MarqueeBanner } from '../components/MarqueeBanner';
import { MoodboardPresentationBoard } from '../components/MoodboardPresentationBoard';

export const ServicesPage: React.FC = () => {
  return (
    <div className="w-full bg-[#FAF8F2]/30 min-h-screen">
      {/* Services Header */}
      <section className="bg-[#FAF8F2] py-16 md:py-24 border-b border-[#C99933]/20">
        <div className="max-w-[1150px] mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#C99933] font-semibold block mb-2">
              {SERVICES_PHILOSOPHY.header}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-[#1A1612] leading-tight">
              Creating{' '}
              <span className="text-[#C99933]">elegant, comfortable,</span>{' '}
              &amp; truly personal interiors
            </h1>
            <p className="text-base text-[#757779] mt-6 leading-relaxed">
              {SERVICES_PHILOSOPHY.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Two Pillar Breakdown Section: DESIGN SERVICES & SITE SUPERVISION */}
      <section className="py-20 bg-white">
        <div className="max-w-[1150px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Design Services Box */}
            <div className="p-8 md:p-10 rounded-2xl bg-[#FAF8F2] border border-[#C99933]/30 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#C99933] text-white flex items-center justify-center mb-6">
                  <PenTool size={24} />
                </div>
                <h2 className="text-2xl font-serif text-[#1A1612] mb-4">
                  {SERVICES_PHILOSOPHY.designServicesTitle}
                </h2>
                <p className="text-sm text-[#757779] mb-6 leading-relaxed">
                  Transforming aspirations into spaces that are both beautiful and purposeful through comprehensive architectural and interior documentation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES_PHILOSOPHY.designServices.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs font-medium text-[#2C2C2C] bg-white p-3 rounded-lg border border-[#C99933]/20">
                      <CheckCircle2 size={16} className="text-[#C99933] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Site Supervision Box */}
            <div className="p-8 md:p-10 rounded-2xl bg-[#FAF8F2] border border-[#C99933]/30 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#C99933] text-white flex items-center justify-center mb-6">
                  <ShieldCheck size={24} />
                </div>
                <h2 className="text-2xl font-serif text-[#1A1612] mb-2">
                  {SERVICES_PHILOSOPHY.siteSupervisionTitle}
                </h2>
                <p className="text-xs text-[#757779] mb-6 leading-relaxed">
                  {SERVICES_PHILOSOPHY.siteSupervisionIntro}
                </p>

                <h4 className="text-xs uppercase tracking-widest font-semibold text-[#C99933] mb-4 font-sans">
                  {SERVICES_PHILOSOPHY.siteServicesTitle}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES_PHILOSOPHY.siteServices.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs font-medium text-[#2C2C2C] bg-white p-3 rounded-lg border border-[#C99933]/20">
                      <CheckCircle2 size={16} className="text-[#C99933] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy Banner Quote */}
          <div className="mt-14 p-8 rounded-2xl bg-[#C99933] text-white text-center shadow-xl">
            <p className="text-xl md:text-2xl font-serif italic max-w-3xl mx-auto leading-relaxed">
              "{SERVICES_PHILOSOPHY.conclusion}"
            </p>
          </div>
        </div>
      </section>

      {/* NEW INTERACTIVE MOODBOARD & SPECIFICATION SHEETS (MATCHING USER SCREENSHOT) */}
      <MoodboardPresentationBoard />

      {/* Services Detailed Scope Cards */}
      <section className="py-20 bg-[#FAF8F2]/40 border-t border-slate-100">
        <div className="max-w-[1150px] mx-auto px-4">
          <div className="mb-14">
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#C99933] font-semibold block mb-2">
              Detailed Scope
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1A1612]">
              Specialised Interior Design Services
            </h2>
          </div>

          <div className="flex flex-col gap-16">
            {SERVICES_DATA.map((service, idx) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-16 border-b border-slate-200/80 ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Link to={`/services/${service.slug}`} className="block overflow-hidden rounded-2xl shadow-xl group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[360px] md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </Link>
                </div>

                {/* Content */}
                <div className={`lg:col-span-6 flex flex-col gap-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="text-xs uppercase tracking-widest text-[#C99933] font-mono font-semibold">
                    0{idx + 1} / Service
                  </span>
                  <h3 className="text-3xl md:text-4xl font-serif text-[#1A1612]">
                    {service.title}
                  </h3>
                  <p className="text-base text-[#757779] leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-2">
                    {service.keyFeatures.slice(0, 4).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-[#2C2C2C]">
                        <CheckCircle2 size={15} className="text-[#C99933] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link to={`/services/${service.slug}`}>
                      <button className="btnGoldOutline text-xs py-3 px-6 inline-flex items-center gap-2">
                        <span>Explore Details</span>
                        <ArrowUpRight size={14} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <MarqueeBanner />

      {/* OUR COMPLETED PROJECTS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-[1150px] mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#C99933] font-semibold block mb-2">
                Proven Track Record
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-[#1A1612]">
                Our Completed Projects
              </h2>
            </div>
            <div>
              <Link to="/work">
                <button className="btnGoldOutline">View All Projects</button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_DATA.slice(0, 6).map((project) => (
              <Link
                key={project.id}
                to={`/work/${project.slug}`}
                className="group relative h-[380px] rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 block bg-black"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 card-gradient-overlay flex flex-col justify-end p-6 text-white transition-all">
                  <span className="text-[11px] uppercase tracking-widest text-slate-300 font-sans mb-1 truncate">
                    {project.location}
                  </span>
                  <h3 className="text-2xl font-serif font-semibold text-white group-hover:text-[#FFEFA2] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-sans line-clamp-1 mt-1">
                    {project.subtitle}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-sans tracking-wider uppercase text-[#C99933] bg-white/90 w-fit px-3 py-1.5 rounded-full text-[#2C2C2C] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View Project Details</span>
                    <ArrowUpRight size={14} className="text-[#C99933]" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
