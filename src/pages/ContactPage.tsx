import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Send, CheckCircle, Upload } from 'lucide-react';
import { LOGO_URL } from '../components/Navbar';
import { saveNewInquiry } from '../data/inquiriesStore';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Interior Architecture & Design',
    budget: '₹ 25 Lakhs - 50 Lakhs',
    message: '',
    file: null as File | null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveNewInquiry({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      budget: formData.budget,
      message: formData.message || 'Client inquired via website contact form.',
    });
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#FAF8F2]/30 min-h-screen pb-20">
      {/* Contact Header */}
      <section className="bg-[#FAF8F2] py-16 md:py-24 border-b border-[#C99933]/20">
        <div className="max-w-[1150px] mx-auto px-4 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#C99933] font-semibold block mb-2">
            Work With Us
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-[#1A1612] leading-tight">
            Let's design a <span className="italic text-[#C99933]">timeless space</span> together
          </h1>
          <p className="text-base text-[#757779] mt-4 leading-relaxed">
            Connect with Principal Designer <strong>Mansi Sharma</strong> and Partner <strong>Pushapraj Sharma</strong> and the OPAL INTERIOR studio team for bespoke interior design, spatial planning, and site supervision.
          </p>
        </div>
      </section>

      {/* "Work with us!" Hero Card */}
      <div className="max-w-[1150px] mx-auto px-4 pt-8"><div className="bg-white border border-[#C99933]/25 rounded-xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"><p className="text-base">Know someone planning their dream home? <span className="text-[#8C691C]">Refer a friend. Get rewarded.</span></p><Link to="/referral-programme" className="text-sm font-semibold text-[#8C691C] underline underline-offset-4 shrink-0">View referral programme</Link></div></div>
      <section className="py-12">
        <div className="max-w-[1150px] mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white min-h-[480px] bg-slate-900 text-white flex flex-col justify-between p-8 md:p-14 group">
            {/* Background Moodboard Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80"
                alt="OPAL INTERIOR Moodboard"
                className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40"></div>
            </div>

            {/* Top Heading */}
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-serif font-light tracking-wide text-amber-50/95">
                Work with us!
              </h2>
            </div>

            {/* Bottom Grid: Gold Logo Badge & Detailed Info */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-12 border-t border-white/20">
              {/* Circle Badge Logo Replica with Official Image */}
              <div className="md:col-span-4 flex justify-start">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#E6D59A] via-[#C99933] to-[#8C691C] p-1.5 shadow-2xl flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#FAF8F2] overflow-hidden flex items-center justify-center p-1 border border-[#C99933]/50">
                    <img
                      src={LOGO_URL}
                      alt="OPAL INTERIOR Official Logo"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Exact Info from Screenshot */}
              <div className="md:col-span-8 flex flex-col gap-5 text-slate-100 font-sans">
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif font-medium tracking-wide uppercase text-amber-100">
                    MANSI SHARMA &amp; PUSHAPRAJ SHARMA
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-[#C99933] font-semibold block mt-1">
                    PRINCIPAL DESIGNER &amp; PARTNER
                  </span>
                </div>

                <div className="space-y-3 text-sm md:text-base">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#C99933] font-semibold block">EMAIL</span>
                    <a href="mailto:Opalinterior05@gmail.com" className="text-white hover:text-[#FFEFA2] transition-colors font-medium">
                      Opalinterior05@gmail.com
                    </a>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#C99933] font-semibold block">CONTACT NUMBER</span>
                    <a href="tel:+917400260508" className="text-white hover:text-[#FFEFA2] transition-colors font-medium">
                      +91 7400260508
                    </a>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#C99933] font-semibold block">ADDRESS</span>
                    <p className="text-slate-200 leading-relaxed max-w-xl">
                      Opal Interior, B-112, Shiv Mahal, RNP park, Next to Jesal Park, Bhayandar East, Thane- 401105
                    </p>
                  </div>

                  <div className="pt-2">
                    <a href="#inquiry-form">
                      <button className="btnConsultation text-xs md:text-sm py-3.5 px-8 shadow-2xl">
                        BOOK FREE CONSULTATION
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Quick Info Cards */}
      <section className="py-8">
        <div className="max-w-[1150px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Address */}
            <div className="p-6 bg-white rounded-xl border border-[#C99933]/25 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FAF8F2] text-[#C99933] flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-base font-semibold text-[#101828] font-sans">Our Address</h4>
                <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                  B-112, Shiv Mahal, RNP park, Next to Jesal Park, Bhayandar East, Thane- 401105
                </p>
              </div>
            </div>

            {/* Card 2: Phone */}
            <div className="p-6 bg-white rounded-xl border border-[#C99933]/25 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FAF8F2] text-[#C99933] flex items-center justify-center shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-base font-semibold text-[#101828] font-sans">Direct Phone</h4>
                <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                  <a href="tel:+917400260508" className="hover:text-[#C99933] font-semibold text-sm block">+91 7400260508</a>
                  <span className="text-[10px] text-[#757779]">Mansi Sharma &amp; Pushapraj Sharma</span>
                </p>
              </div>
            </div>

            {/* Card 3: Email */}
            <a
              href="mailto:Opalinterior05@gmail.com"
              className="p-6 bg-white rounded-xl border border-[#C99933]/25 shadow-md flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#FAF8F2] text-[#C99933] flex items-center justify-center shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-base font-semibold text-[#101828] font-sans">Official Email</h4>
                <p className="text-xs text-[#64748B] mt-1 leading-relaxed font-medium">
                  Opalinterior05@gmail.com
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Main Form & Location Map Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-[1150px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column */}
            <div id="inquiry-form" className="lg:col-span-7 scroll-mt-28">
              <div className="bg-[#FAF8F2]/60 p-8 md:p-10 rounded-2xl border border-[#C99933]/25 shadow-lg">
                <h3 className="text-2xl font-serif text-[#090B19] mb-2">Send Us a Direct Message</h3>
                <p className="text-xs text-[#757779] mb-6">
                  Fill out the form below and Mansi Sharma, Pushapraj Sharma &amp; the OPAL INTERIOR design team will get in touch with you.
                </p>

                {submitted ? (
                  <div className="p-8 bg-[#C99933]/10 border border-[#C99933] rounded-xl text-center flex flex-col items-center gap-3">
                    <CheckCircle className="text-[#C99933]" size={48} />
                    <h4 className="text-2xl font-serif text-[#090B19]">Inquiry Received!</h4>
                    <p className="text-sm text-[#757779] max-w-md">
                      Thank you <strong>{formData.name}</strong>. Mansi Sharma, Pushapraj Sharma and our team have received your project details and will get back to you at <strong>{formData.email}</strong> or <strong>{formData.phone}</strong>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btnGoldOutline text-xs mt-2"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#344054] mb-1 font-sans">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ananya Roy"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-[#E8E3DF] bg-white text-sm focus:outline-none focus:border-[#C99933]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#344054] mb-1 font-sans">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. ananya@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-[#E8E3DF] bg-white text-sm focus:outline-none focus:border-[#C99933]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#344054] mb-1 font-sans">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 7400260508"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-[#E8E3DF] bg-white text-sm focus:outline-none focus:border-[#C99933]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#344054] mb-1 font-sans">
                          Service Required
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-[#E8E3DF] bg-white text-sm focus:outline-none focus:border-[#C99933]"
                        >
                          <option value="Concept & Preliminary Design">Concept &amp; Preliminary Design</option>
                          <option value="Space Planning & Schematic Design">Space Planning &amp; Schematic Design</option>
                          <option value="Detailed Interior Design">Detailed Interior Design</option>
                          <option value="Site Supervision & Quality Control">Site Supervision &amp; Quality Control</option>
                          <option value="Custom Furniture & Joinery Design">Custom Furniture &amp; Joinery Design</option>
                          <option value="Private Residence">Private Residence</option>
                          <option value="Commercial Environment">Commercial Environment</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#344054] mb-1 font-sans">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-[#E8E3DF] bg-white text-sm focus:outline-none focus:border-[#C99933]"
                      >
                        <option value="₹ 15 Lakhs - 25 Lakhs">₹ 15 Lakhs - 25 Lakhs</option>
                        <option value="₹ 25 Lakhs - 50 Lakhs">₹ 25 Lakhs - 50 Lakhs</option>
                        <option value="₹ 50 Lakhs - 1 Crore">₹ 50 Lakhs - 1 Crore</option>
                        <option value="₹ 1 Crore +">₹ 1 Crore +</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#344054] mb-1 font-sans">
                        Project Message / Space Details
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your home, apartment, or commercial space location, sq.ft. area, and design goals..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-[#E8E3DF] bg-white text-sm focus:outline-none focus:border-[#C99933]"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#344054] mb-1 font-sans">
                        Attach Floorplans or Moodboard (Optional)
                      </label>
                      <div className="border border-dashed border-[#C99933]/50 rounded-lg p-4 bg-white text-center cursor-pointer hover:bg-[#FAF8F2] transition-colors">
                        <Upload size={20} className="mx-auto text-[#C99933] mb-1" />
                        <span className="text-xs text-[#757779]">
                          {formData.file ? formData.file.name : 'Click to select DWG, PDF, or JPG file (Max 25MB)'}
                        </span>
                        <input
                          type="file"
                          onChange={(e) => e.target.files && setFormData({ ...formData, file: e.target.files[0] })}
                          className="hidden"
                        />
                      </div>
                    </div>

                    <button type="submit" className="btnConsultation w-full py-4 text-xs tracking-widest flex items-center justify-center gap-2">
                      <Send size={16} />
                      <span>BOOK FREE CONSULTATION</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Map & Studio Hours Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-[#101828] text-white p-8 rounded-2xl shadow-xl">
                <h4 className="text-xl font-serif text-[#FFFCE8] mb-2">Studio &amp; Office Hours</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  B-112, Shiv Mahal, RNP park, Next to Jesal Park, Bhayandar East, Thane- 401105
                </p>
                <div className="mt-4 pt-4 border-t border-slate-700 text-xs text-slate-300 space-y-1">
                  <p><strong>Direct Line:</strong> +91 7400260508</p>
                  <p><strong>Email:</strong> Opalinterior05@gmail.com</p>
                  <p><strong>Hours:</strong> Mon - Sat: 10:00 AM - 7:00 PM</p>
                </div>
              </div>

              {/* Map iFrame */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-[380px]">
                <iframe
                  title="Opal Interior Bhayandar East Thane Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.7230482598377!2d72.8580!3d19.3001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b025a1234567%3A0x123456789abcdef0!2sJesal%20Park%2C%20Bhayandar%20East%2C%20Mira%20Bhayandar%2C%20Maharashtra%20401105!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
