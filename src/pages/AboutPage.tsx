import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Compass, Sparkles, UserCheck, Layers } from 'lucide-react';
import { MarqueeBanner } from '../components/MarqueeBanner';

export const AboutPage: React.FC = () => {
  const stats = [
    { number: '2019', label: 'Founded in Mumbai' },
    { number: '150+', label: 'Curated Residences & Spaces' },
    { number: '100%', label: 'Bespoke Detailing' },
    { number: '1', label: 'Seamless Design Experience' },
  ];

  const coreServices = [
    'Interior Architecture',
    'Spatial Planning',
    'Material Selection',
    'Bespoke Detailing',
    'Design Management',
    'On-Site Supervision',
    'Private Residences',
    'Sophisticated Commercial Environments',
  ];

  return (
    <div className="w-full bg-[#FAF8F2]/30">
      {/* Hero Header */}
      <section className="bg-[#FAF8F2] py-16 md:py-24 border-b border-[#C99933]/20">
        <div className="max-w-[1150px] mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#C99933] font-semibold block mb-2">
                About OPAL INTERIOR
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#1A1612] leading-tight">
                Creating{' '}
                <span className="text-[#C99933]">refined, contemporary</span>{' '}
                spaces that are deeply personal and timeless
              </h1>
            </div>
            <div className="border-l-2 border-[#C99933] pl-6 text-[#757779] max-w-md">
              <p className="text-sm leading-relaxed">
                A Mumbai-based interior design studio founded in 2019 by Interior Designer <strong>Mansi Sharma</strong> &amp; her Partner <strong>Pushapraj Sharma</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Story & Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1150px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Main Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#C99933] font-semibold">
                Our Story &amp; Philosophy
              </span>

              <p className="text-lg text-[#090B19] font-serif leading-relaxed italic">
                "OPAL INTERIOR is a Mumbai-based interior design studio creating refined, contemporary spaces that are deeply personal and timeless."
              </p>

              <div className="space-y-4 text-base text-[#757779] leading-relaxed">
                <p>
                  We believe luxury is not simply about beautiful materials or striking aesthetics. It is about thoughtful details, exceptional craftsmanship, and creating spaces that feel effortlessly comfortable, purposeful, and uniquely yours.
                </p>
                <p>
                  From private residences to sophisticated commercial environments, we offer a seamless design experience — bringing together interior architecture, spatial planning, material selection, bespoke detailing, design management, and on-site supervision. Every project is approached with meticulous attention to proportion, functionality, texture, light, and the individual character of the space.
                </p>
                <p>
                  Founded in 2019 by Interior Designer <strong>Mansi Sharma</strong> with her Partner <strong>Pushapraj Sharma</strong>, OPAL INTERIOR has evolved into a design practice driven by creativity, precision, and a deep understanding of contemporary lifestyles.
                </p>
                <p>
                  For us, every project is an opportunity to create something personal. We work closely with our clients from the earliest concept to the final detail, transforming their aspirations into spaces that are sophisticated, inviting, and enduring.
                </p>
                <p className="text-[#1A1612] font-medium font-serif text-lg pt-2">
                  At OPAL INTERIOR, we don't simply design interiors. We create experiences, shaped around the way you live, work, and feel.
                </p>
              </div>

              {/* Founders Feature Box */}
              <div className="mt-4 p-6 rounded-2xl bg-[#FAF8F2] border border-[#C99933]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#1A1612]">Founders</h4>
                  <p className="text-sm text-[#C99933] font-medium mt-0.5">
                    Mansi Sharma <span className="text-[#757779] font-normal">(Principal Designer)</span> &amp; Pushapraj Sharma <span className="text-[#757779] font-normal">(Partner)</span>
                  </p>
                  <p className="text-xs text-[#757779] mt-1">Established 2019 in Mumbai, India</p>
                </div>
                <div className="shrink-0">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#C99933]/15 text-[#C99933] text-xs font-semibold uppercase tracking-wider">
                    Mumbai Studio
                  </span>
                </div>
              </div>
            </div>

            {/* Right Visual & Services Column */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
                  alt="OPAL INTERIOR Mumbai Studio"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white p-5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                  <p className="text-xs font-serif italic text-slate-100">
                    "Every project is an opportunity to create something personal — shaped around the way you live, work, and feel."
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-[#FFEFA2] mt-2 font-sans font-semibold">
                    — Mansi Sharma &amp; Pushapraj Sharma
                  </p>
                </div>
              </div>

              {/* What We Bring / Comprehensive Offering */}
              <div className="bg-[#FAF8F2] p-8 rounded-2xl border border-[#C99933]/30">
                <h3 className="text-xl font-serif text-[#1A1612] mb-4">The Seamless Opal Experience</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {coreServices.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#2C2C2C]">
                      <Sparkles size={14} className="text-[#C99933] shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats counter */}
      <section className="py-16 bg-[#C99933] text-white">
        <div className="max-w-[1150px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="text-4xl md:text-5xl font-serif font-bold text-[#FFFDF9]">
                  {s.number}
                </span>
                <span className="text-xs uppercase tracking-widest font-sans opacity-95">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Design Pillars */}
      <section className="py-20 bg-white border-b border-[#090B19]/10">
        <div className="max-w-[1150px] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#C99933] font-semibold block mb-2">
              Our Core Pillars
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1A1612]">
              Precision, proportion &amp; personal character
            </h2>
            <p className="text-sm text-[#757779] mt-3">
              Designing interiors that balance aesthetics with uncompromised comfort and functional order.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#FAF8F2] border border-[#C99933]/25 flex flex-col gap-3">
              <Compass className="text-[#C99933]" size={32} />
              <h3 className="text-xl font-serif text-[#1A1612]">Spatial Planning &amp; Proportion</h3>
              <p className="text-xs text-[#757779] leading-relaxed">
                Meticulous attention to spatial flow, light orientation, and natural proportions ensures every room feels open, purposeful, and harmonious.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF8F2] border border-[#C99933]/25 flex flex-col gap-3">
              <Layers className="text-[#C99933]" size={32} />
              <h3 className="text-xl font-serif text-[#1A1612]">Bespoke Detailing &amp; Texture</h3>
              <p className="text-xs text-[#757779] leading-relaxed">
                Custom joinery, curated natural stones, rich textiles, and architectural metalwork harmonized to create tactile luxury.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF8F2] border border-[#C99933]/25 flex flex-col gap-3">
              <UserCheck className="text-[#C99933]" size={32} />
              <h3 className="text-xl font-serif text-[#1A1612]">On-Site Supervision</h3>
              <p className="text-xs text-[#757779] leading-relaxed">
                From initial 3D design concept to on-site execution supervision, we ensure absolute fidelity to the design intent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <MarqueeBanner />

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1150px] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-[#1A1612] mb-6">
            Ready to design a <span className="text-[#C99933]">space uniquely yours</span>?
          </h2>
          <p className="text-base text-[#757779] max-w-xl mx-auto mb-8">
            Schedule a design consultation with Mansi Sharma, Pushapraj Sharma and the OPAL INTERIOR team.
          </p>
          <Link to="/contact">
            <button className="btnConsultation py-4 px-10 text-sm">
              BOOK FREE CONSULTATION
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};
