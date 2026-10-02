import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/projectsData';
import { SERVICES_DATA } from '../data/servicesData';
import { MarqueeBanner } from '../components/MarqueeBanner';
import { MoodboardPresentationBoard } from '../components/MoodboardPresentationBoard';
import { ArrowUpRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeHero, setActiveHero] = useState(0);

  const heroSlides = [
    {
      eyebrow: 'Mumbai · Residential interiors',
      title: 'Spaces with a point of view.',
      copy: 'Thoughtful interiors, tailored to the way you live.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=85',
    },
    {
      eyebrow: 'Bandra West · Contemporary living',
      title: 'Quiet luxury, made personal.',
      copy: 'Material-led design with warmth, balance, and intention.',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85',
    },
    {
      eyebrow: 'Bespoke design studio · Since 2019',
      title: 'Every detail has a reason.',
      copy: 'From first sketch to final styling, we bring clarity to the process.',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=85',
    },
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHero((current) => (current + 1) % heroSlides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [heroSlides.length]);

  const testimonials = [
    {
      author: 'Aarav Mehta',
      role: 'Worli Penthouse Residence',
      excerpt:
        'Working with OPAL INTERIOR was a seamless and deeply personal experience. Mansi Sharma and Pushapraj Sharma transformed our bare-shell space into an elegant, timeless home crafted with meticulous attention to detail and proportion.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    },
    {
      author: 'Rhea Singhania',
      role: 'Bandra West Corporate Office',
      excerpt:
        'OPAL INTERIOR brings a level of refinement, material selection, and on-site supervision that is rare to find. Their design approach created a sophisticated environment that feels effortlessly comfortable and purposeful.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[78vh] md:min-h-[calc(100vh-4rem)] flex flex-col justify-end -mt-16 bg-[#1A1612] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, index) => (
            <img
              key={slide.image}
              src={slide.image}
              alt={slide.title}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${index === activeHero ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10"></div>
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto w-full px-5 sm:px-8 pb-10 md:pb-14 pt-32">
          <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-end">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-5 text-[11px] uppercase tracking-[0.28em] text-white/80">
                <span className="w-10 h-px bg-[#C99933]"></span>
                {heroSlides[activeHero].eyebrow}
              </div>
              <h1 className="text-5xl sm:text-7xl lg:text-[6.5rem] font-serif font-medium tracking-[-0.04em] leading-[0.92] max-w-4xl">
                {heroSlides[activeHero].title}
              </h1>
              <p className="text-base md:text-lg font-light text-white/85 max-w-md mt-6 leading-relaxed">
                {heroSlides[activeHero].copy}
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-8">
                <Link to="/contact">
                  <button className="btnConsultation text-xs md:text-sm py-4 px-8 shadow-2xl">BOOK A CONSULTATION</button>
                </Link>
                <Link to="/work">
                  <button className="btnGoldOutline border-white/60 text-white bg-white/5 hover:bg-[#C99933] hover:border-[#C99933] px-7 py-4 backdrop-blur-sm">EXPLORE OUR WORK</button>
                </Link>
              </div>
            </div>

            <div className="hidden lg:block bg-white/10 backdrop-blur-xl border border-white/25 p-7 mb-1">
              <p className="text-[#E6D59A] text-xs uppercase tracking-[0.25em] mb-4">Begin your project</p>
              <p className="font-serif text-2xl leading-tight">Let’s shape a home that feels unmistakably yours.</p>
              <Link to="/contact" className="inline-flex items-center mt-7 text-xs uppercase tracking-[0.2em] border-b border-[#E6D59A] pb-2 text-white hover:text-[#E6D59A] transition-colors">Talk to our studio <ArrowUpRight size={15} className="ml-2" /></Link>
            </div>
          </div>

          <div className="flex items-center gap-5 mt-12">
            <div className="flex gap-2">
              {heroSlides.map((slide, index) => (
                <button key={slide.image} onClick={() => setActiveHero(index)} aria-label={`Show hero slide ${index + 1}`} className={`h-1 transition-all duration-300 ${index === activeHero ? 'w-14 bg-[#C99933]' : 'w-7 bg-white/50 hover:bg-white'}`} />
              ))}
            </div>
            <span className="font-mono text-xs text-white/70">0{activeHero + 1} / 0{heroSlides.length}</span>
          </div>
        </div>
      </section>

      {/* 2. Who We Are / About Info Section */}
      <section className="py-20 md:py-28 bg-white border-b border-[#090B19]/10">
        <div className="max-w-[1150px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-2 gap-4 items-center">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                    alt="OPAL INTERIOR Design Studio"
                    className="w-full h-[320px] md:h-[420px] object-cover rounded-lg shadow-md"
                  />
                  {/* Rotating Since 2019 Badge */}
                  <div className="absolute -bottom-10 -right-6 md:-right-10 w-36 h-36 md:w-44 md:h-44 bg-[#C99933] rounded-full flex items-center justify-center text-white shadow-2xl z-20 border-4 border-white">
                    <div className="absolute inset-0 flex items-center justify-center p-2 border-2 border-dashed border-white/40 rounded-full circular-rotate">
                      <svg viewBox="0 0 100 100" className="w-full h-full text-white/90 font-sans text-[10px] tracking-widest fill-current">
                        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                        <text>
                          <textPath href="#circlePath" startOffset="0%">
                            • ESTABLISHED 2019 • OPAL INTERIOR
                          </textPath>
                        </text>
                      </svg>
                    </div>
                    <div className="text-center z-10">
                      <span className="text-2xl md:text-3xl font-serif font-bold leading-none block">2019</span>
                      <span className="text-[9px] md:text-[10px] font-sans tracking-widest uppercase font-light">Founded</span>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block pt-12">
                  <img
                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
                    alt="OPAL INTERIOR Bespoke Craftsmanship"
                    className="w-full h-[280px] md:h-[360px] object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>

            {/* Right Text Description */}
            <div className="lg:col-span-6 lg:pl-6 flex flex-col gap-6">
              <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#C99933] font-semibold">
                Who we are
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-[#1A1612] leading-tight">
                Interior design studio creating{' '}
                <span className="text-[#C99933]">refined, timeless</span> spaces
              </h2>
              <p className="text-base text-[#757779] leading-relaxed">
                Founded in 2019 by Interior Designer <strong>Mansi Sharma</strong> with her Partner <strong>Pushapraj Sharma</strong>, OPAL INTERIOR offers a seamless design experience — bringing together interior architecture, spatial planning, material selection, bespoke detailing, design management, and on-site supervision.
              </p>
              <div className="pt-2">
                <Link to="/about-s3t-koncepts">
                  <button className="btnGoldOutline">Learn More About Us</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Explore Our Work / Portfolio Slider */}
      <section className="py-20 bg-[#FAF8F2]">
        <div className="max-w-[1150px] mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#C99933] font-semibold block mb-2">
                Explore our work
              </span>
              <h3 className="text-3xl md:text-5xl font-serif text-[#1A1612]">
                A collection of our{' '}
                <span className="text-[#C99933]">curated spaces</span>
              </h3>
            </div>
            <div>
              <Link to="/work">
                <button className="btnGoldOutline">View All Projects</button>
              </Link>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_DATA.slice(0, 6).map((project) => (
              <Link
                key={project.id}
                to={`/work/${project.slug}`}
                className="group relative h-[380px] rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 block"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 card-gradient-overlay flex flex-col justify-end p-6 text-white transition-opacity group-hover:bg-black/60">
                  <span className="text-[11px] uppercase tracking-widest text-slate-300 font-sans mb-1 truncate">
                    {project.location}
                  </span>
                  <h5 className="text-2xl font-serif font-semibold text-white group-hover:text-[#FFEFA2] transition-colors">
                    {project.title}
                  </h5>
                  <div className="mt-3 flex items-center gap-2 text-xs font-sans tracking-wider uppercase text-[#C99933] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View Project Details</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Infinite Marquee Skill Banner */}
      <MarqueeBanner />

      {/* 5. Interior Concept & Material Specification Sheets */}
      <MoodboardPresentationBoard />

      {/* 6. Testimonials Section */}
      <section className="py-24 bg-[#FAF8F2] border-b border-[#C99933]/20">
        <div className="max-w-[1150px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Testimonial Quote & Info */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#C99933] font-semibold">
                Client Reflections
              </span>
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#313131] leading-relaxed italic">
                "{testimonials[activeTestimonial].excerpt}"
              </p>
              <div>
                <h4 className="text-lg font-bold text-[#C99933] font-sans">
                  {testimonials[activeTestimonial].author}
                </h4>
                <p className="text-xs uppercase tracking-widest text-[#757779]">
                  {testimonials[activeTestimonial].role}
                </p>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-4 pt-4">
                <button
                  onClick={() =>
                    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
                  }
                  className="w-12 h-12 rounded-full border border-[#C99933] text-[#C99933] flex items-center justify-center hover:bg-[#C99933] hover:text-white transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() =>
                    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
                  }
                  className="w-12 h-12 rounded-full border border-[#C99933] text-[#C99933] flex items-center justify-center hover:bg-[#C99933] hover:text-white transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight size={20} />
                </button>
                <span className="text-xs text-[#757779] font-mono ml-2">
                  0{activeTestimonial + 1} / 0{testimonials.length}
                </span>
              </div>
            </div>

            {/* Testimonial Image */}
            <div className="lg:col-span-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].author}
                  className="w-full h-[360px] object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full text-[#C99933]">
                  <Star size={20} className="fill-[#C99933] text-[#C99933]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Services Offered / Areas of Expertise */}
      <section className="py-24 bg-white">
        <div className="max-w-[1150px] mx-auto px-4">
          <div className="mb-14">
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#C99933] font-semibold block mb-2">
              Services Offered
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#090B19]">
              Our areas of expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {SERVICES_DATA.slice(0, 4).map((service) => (
              <div key={service.id} className="group">
                <Link to={`/services/${service.slug}`} className="block overflow-hidden rounded-lg mb-4">
                  <div className="relative h-[320px] md:h-[380px] overflow-hidden rounded-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                </Link>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-xl font-sans font-semibold text-[#090B19] hover:text-[#C99933] underline underline-offset-4 transition-colors"
                >
                  <span>{service.title}</span>
                  <ArrowUpRight size={18} className="text-[#C99933]" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="bg-[#1A1612] text-white py-14 md:py-20">
        <div className="max-w-[1150px] mx-auto px-5 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-[#E6D59A] mb-4">Opal Interior · Refer a Friend</p>
            <h2 className="text-3xl md:text-5xl">Their dream home.<br /><span className="italic text-[#E6D59A]">Your reward.</span></h2>
            <p className="text-white/75 mt-5 leading-relaxed">Introduce a friend to our studio and receive rewards when their project is confirmed. Explore the reward tiers and programme terms.</p>
          </div>
          <div><Link to="/referral-programme" className="btnConsultation">Explore referral programme</Link><p className="text-sm text-white/60 mt-4">Valid until 31 December 2026</p></div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-[1150px] mx-auto px-4">
          <div className="bg-[#FAF8F2] border border-[#C99933]/30 rounded-2xl p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
            <div className="max-w-xl flex flex-col gap-4">
              <h3 className="text-3xl md:text-4xl font-serif text-[#1A1612]">
                Interested in seeing more of{' '}
                <span className="text-[#C99933]">our work</span>?
              </h3>
              <p className="text-base text-[#636363] leading-relaxed">
                Explore our portfolio to see examples of private residences and commercial environments designed by OPAL INTERIOR.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link to="/contact">
                  <button className="btnConsultation text-xs py-3.5 px-7">
                    BOOK FREE CONSULTATION
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="btnGoldOutline text-xs py-3.5 px-7">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative shrink-0">
              <Link to="/work" className="group block">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#C99933] text-white flex flex-col items-center justify-center p-4 text-center shadow-xl group-hover:scale-110 transition-transform">
                  <span className="text-xs uppercase tracking-widest font-sans">View</span>
                  <span className="text-sm font-serif italic font-bold">Portfolio</span>
                  <ArrowUpRight size={18} className="mt-1" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
