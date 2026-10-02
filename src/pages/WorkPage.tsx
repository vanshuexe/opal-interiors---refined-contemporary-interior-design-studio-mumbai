import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/projectsData';
import { ArrowUpRight, Filter } from 'lucide-react';

export const WorkPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Residential', 'Commercial'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full bg-[#FAF8F2]/30 min-h-screen">
      {/* Portfolio Header */}
      <section className="bg-[#FAF8F2] py-16 md:py-24 border-b border-[#C99933]/20">
        <div className="max-w-[1150px] mx-auto px-4">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#C99933] font-semibold block mb-2">
              Explore Our Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-[#1A1612] leading-tight">
              A showcase of <span className="italic text-[#C99933]">crafted spaces</span>
            </h1>
            <p className="text-base text-[#757779] mt-4 leading-relaxed">
              Explore our curated portfolio of completed private residences, sea-facing penthouses, and executive commercial environments designed by OPAL INTERIOR.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-[1150px] mx-auto px-4">
          {/* Category Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-slate-100">
            <span className="text-xs uppercase tracking-widest text-[#757779] font-sans mr-3 flex items-center gap-1">
              <Filter size={14} />
              Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-sans tracking-wider uppercase transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#C99933] text-white shadow-md font-semibold'
                    : 'bg-[#FAF8F2] text-[#C99933] hover:bg-[#C99933]/15 border border-[#C99933]/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
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
                  <div className="mt-4 flex items-center gap-2 text-xs font-sans tracking-wider uppercase text-[#C99933] bg-white/90 w-fit px-3 py-1.5 rounded-full text-[#1A1612] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View Project</span>
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
