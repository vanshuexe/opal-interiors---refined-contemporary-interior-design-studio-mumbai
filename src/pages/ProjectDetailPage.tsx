import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/projectsData';
import { ArrowLeft, MapPin, Calendar, CheckCircle2, Building2, Ruler } from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = PROJECTS_DATA.find((p) => p.slug === slug) || PROJECTS_DATA[0];

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
            Back to Projects
          </button>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-16 md:py-20 bg-[#FAF8F2]/60 border-b border-slate-100">
        <div className="max-w-[1150px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#C99933] font-semibold">
                {project.category} Portfolio
              </span>
              <h1 className="text-4xl md:text-6xl font-serif text-[#1A1612] leading-tight">
                {project.title}
              </h1>
              <p className="text-xl font-serif italic text-[#C99933]">
                {project.subtitle}
              </p>
            </div>

            {/* Quick Specs Card */}
            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-[#C99933]/25 shadow-lg flex flex-col gap-3">
              <div className="flex items-center gap-3 text-xs text-[#757779]">
                <MapPin size={16} className="text-[#C99933] shrink-0" />
                <span className="font-sans leading-tight">{project.location}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#757779]">
                <Building2 size={16} className="text-[#C99933] shrink-0" />
                <span className="font-sans">Client: {project.client}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#757779]">
                <Calendar size={16} className="text-[#C99933] shrink-0" />
                <span className="font-sans">Completed: {project.year}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#757779]">
                <Ruler size={16} className="text-[#C99933] shrink-0" />
                <span className="font-sans">Project Area: {project.area}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Showcase Image */}
      <section className="py-12">
        <div className="max-w-[1150px] mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-2xl h-[450px] md:h-[580px] relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Detailed Description & Scope */}
      <section className="py-12">
        <div className="max-w-[1150px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <h3 className="text-2xl font-serif text-[#090B19]">Project Overview</h3>
              <p className="text-base text-[#757779] leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#FAF8F2] p-8 rounded-2xl border border-[#C99933]/25">
              <h3 className="text-xl font-serif text-[#090B19] mb-4">OPAL INTERIOR Scope of Work</h3>
              <ul className="list-none space-y-3 p-0 m-0">
                {project.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#2C2C2C]">
                    <CheckCircle2 size={18} className="text-[#C99933] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-[#C99933]/20">
                <Link to="/contact">
                  <button className="btnConsultation w-full py-3.5 text-xs">
                    BOOK FREE CONSULTATION
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      {project.gallery.length > 0 && (
        <section className="py-12 bg-[#FAF8F2]/40 border-t border-slate-100">
          <div className="max-w-[1150px] mx-auto px-4">
            <h3 className="text-2xl font-serif text-[#090B19] mb-8">Project Photo Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {project.gallery.map((imgUrl, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden shadow-md h-64 group">
                  <img
                    src={imgUrl}
                    alt={`${project.title} gallery photo ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
