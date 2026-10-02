import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MOODBOARDS_DATA, RoomMoodboard } from '../data/moodboardsData';
import { Sparkles, Layers, Palette, Sun, CheckCircle, ArrowRight } from 'lucide-react';

export const MoodboardPresentationBoard: React.FC = () => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(MOODBOARDS_DATA[0].id);

  const activeBoard = MOODBOARDS_DATA.find((m) => m.id === selectedRoomId) || MOODBOARDS_DATA[0];

  return (
    <div className="w-full bg-[#F7F5EE] py-12 px-4 border-y border-[#C99933]/30">
      <div className="max-w-[1250px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#C99933]/20">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#C99933] font-semibold block mb-2">
              DESIGN SPECIFICATIONS &amp; MOODBOARDS
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#1A1612]">
              Interior Concept <span className="text-[#C99933]">Presentation Sheets</span>
            </h2>
            <p className="text-sm text-[#757779] mt-2 max-w-xl">
              Explore our comprehensive room-by-room material palettes, lighting schemes, key design elements, and layout specifications.
            </p>
          </div>

          {/* Room Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {MOODBOARDS_DATA.map((board) => (
              <button
                key={board.id}
                onClick={() => setSelectedRoomId(board.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-sans uppercase tracking-wider transition-all duration-300 border ${
                  selectedRoomId === board.id
                    ? 'bg-[#C99933] text-white font-semibold border-[#C99933] shadow-md'
                    : 'bg-white text-[#757779] border-slate-200 hover:border-[#C99933] hover:text-[#C99933]'
                }`}
              >
                {board.roomTitle}
              </button>
            ))}
          </div>
        </div>

        {/* Presentation Board Container (Replica of Provided Screenshot Sheet) */}
        <div className="bg-[#FAF8F2] border-2 border-[#C99933]/40 rounded-2xl p-6 md:p-10 shadow-2xl overflow-hidden font-sans text-[#1A1612]">
          {/* Sheet Header Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-stone-300 gap-4">
            <div>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-[#1A1612] tracking-wide uppercase">
                {activeBoard.roomTitle}
              </h3>
              <p className="text-xs font-sans text-[#757779] uppercase tracking-widest mt-1">
                {activeBoard.subtitle}
              </p>
            </div>
            {/* Tag Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-sans font-medium text-[#757779]">
              {activeBoard.tags.map((tag, idx) => (
                <span key={idx} className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-stone-200 shadow-xs">
                  <span>{tag}</span>
                  {idx < activeBoard.tags.length - 1 && <span className="text-[#C99933] font-bold">•</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Board Grid: 2 Main Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT COLUMN: Main Visual, Style & Layout */}
            <div className="lg:col-span-6 flex flex-col gap-8">
              {/* Main Room Visual */}
              <div className="relative rounded-xl overflow-hidden border border-stone-300 shadow-lg h-[380px] md:h-[480px]">
                <img
                  src={activeBoard.mainImage}
                  alt={activeBoard.roomTitle}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-semibold border border-white/20">
                  3D Render &amp; Spatial View
                </div>
              </div>

              {/* Style & Feel */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs">
                <h4 className="text-xs uppercase tracking-widest text-[#C99933] font-bold font-sans mb-2 flex items-center gap-1.5">
                  <Sparkles size={14} />
                  STYLE &amp; FEEL
                </h4>
                <p className="text-xs md:text-sm text-[#4A4A4A] leading-relaxed">
                  {activeBoard.styleDesc}
                </p>
              </div>

              {/* Layout & Furniture Inspiration */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs">
                <h4 className="text-xs uppercase tracking-widest text-[#C99933] font-bold font-sans mb-3 flex items-center gap-1.5">
                  <Layers size={14} />
                  FURNITURE &amp; LAYOUT INSPIRATION
                </h4>
                <div className="grid grid-cols-3 gap-3 items-center">
                  <div className="col-span-1 rounded-lg border border-stone-200 p-2 bg-stone-50 h-28 flex flex-col justify-center items-center text-center">
                    <span className="text-[10px] font-bold uppercase text-stone-600 block mb-1">ARCHITECTURAL 2D LAYOUT</span>
                    <div className="w-full h-16 bg-stone-200/80 rounded flex items-center justify-center text-[9px] text-stone-500 font-mono">
                      [FLOORPLAN]
                    </div>
                  </div>
                  <div className="col-span-2 grid grid-cols-2 gap-2">
                    <div className="rounded-lg overflow-hidden h-28 border border-stone-200">
                      <img src={activeBoard.keyElements[1]?.image || activeBoard.mainImage} alt="Furniture render" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-lg overflow-hidden h-28 border border-stone-200">
                      <img src={activeBoard.materials[2]?.image || activeBoard.mainImage} alt="Decor accent" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Finishing Touches Row */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#C99933] font-bold font-sans mb-3">
                  FINISHING TOUCHES
                </h4>
                <div className="grid grid-cols-5 gap-2">
                  {activeBoard.finishingTouches.map((touch, idx) => (
                    <div key={idx} className="flex flex-col gap-1 text-center">
                      <div className="w-full h-20 rounded-lg overflow-hidden border border-stone-300 shadow-2xs">
                        <img src={touch.image} alt={touch.title} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[9px] font-semibold text-stone-700 uppercase tracking-tight line-clamp-1">
                        {touch.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Color Palette, Materials, Key Elements & Lighting */}
            <div className="lg:col-span-6 flex flex-col gap-8">
              {/* COLOR PALETTE */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs">
                <h4 className="text-xs uppercase tracking-widest text-[#C99933] font-bold font-sans mb-4 flex items-center gap-1.5">
                  <Palette size={14} />
                  COLOR PALETTE
                </h4>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  {activeBoard.colorPalette.map((color, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1.5">
                      <div
                        className="w-12 h-12 rounded-full border border-stone-300 shadow-md"
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      <span className="text-[9px] font-semibold text-stone-700 uppercase tracking-tighter text-center max-w-[65px]">
                        {color.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* MATERIALS & TEXTURES */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#C99933] font-bold font-sans mb-3">
                  MATERIALS &amp; TEXTURES
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {activeBoard.materials.map((mat, idx) => (
                    <div key={idx} className="flex flex-col gap-1.5 text-center bg-white p-1.5 rounded-lg border border-stone-200 shadow-2xs">
                      <div className="w-full h-28 rounded overflow-hidden border border-stone-200">
                        <img src={mat.image} alt={mat.title} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[8.5px] font-bold text-stone-800 uppercase tracking-tight leading-tight h-6 flex items-center justify-center">
                        {mat.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* KEY DESIGN ELEMENTS */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#C99933] font-bold font-sans mb-3">
                  KEY DESIGN ELEMENTS
                </h4>
                <div className="grid grid-cols-5 gap-2">
                  {activeBoard.keyElements.map((elem, idx) => (
                    <div key={idx} className="flex flex-col gap-1 text-center bg-white p-1.5 rounded-lg border border-stone-200">
                      <div className="w-full h-20 rounded overflow-hidden border border-stone-200">
                        <img src={elem.image} alt={elem.title} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[8.5px] font-bold text-stone-800 uppercase tracking-tight leading-tight h-6 flex items-center justify-center">
                        {elem.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* LIGHTING CONCEPT */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#C99933] font-bold font-sans mb-3 flex items-center gap-1.5">
                  <Sun size={14} />
                  LIGHTING CONCEPT
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {activeBoard.lightingConcept.map((light, idx) => (
                    <div key={idx} className="flex flex-col gap-1.5 text-center bg-white p-2 rounded-lg border border-stone-200">
                      <div className="w-full h-24 rounded overflow-hidden border border-stone-200">
                        <img src={light.image} alt={light.title} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[9px] font-bold text-stone-800 uppercase tracking-tight leading-tight">
                        {light.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* COMPLETED PROJECT BANNER (Replica from Provided Screenshot) */}
              {activeBoard.completedProjectTag && (
                <div className="mt-2 bg-[#1A1612] text-white rounded-xl p-6 shadow-xl border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#C99933] font-semibold block mb-1">
                      PROJECT VERIFICATION
                    </span>
                    <h5 className="text-lg md:text-xl font-serif font-bold tracking-wide uppercase text-amber-50">
                      {activeBoard.completedProjectTag}
                    </h5>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-flex items-center gap-2 bg-[#C99933] text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md">
                      <span>View Live Site</span>
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              )}

              {/* Consultation CTA Banner */}
              <div className="mt-4 p-5 bg-white rounded-xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
                <div>
                  <h5 className="text-sm font-serif font-bold text-[#1A1612]">Inspired by this moodboard design?</h5>
                  <p className="text-xs text-stone-500 mt-0.5">Let Mansi Sharma &amp; Pushapraj Sharma create a bespoke concept for your home.</p>
                </div>
                <Link to="/contact">
                  <button className="btnConsultation text-xs py-3 px-6 shadow-md">
                    BOOK FREE CONSULTATION
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
