import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Linkedin, MapPin, Phone, Mail, User, Lock } from 'lucide-react';
import { LOGO_URL } from './Navbar';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#090B19]/10 pt-14 pb-8 text-[#757779]">
      <div className="max-w-[1150px] mx-auto px-4">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#090B19]/15">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#C99933]/50 shadow-sm shrink-0 bg-[#FAF8F2] flex items-center justify-center p-0.5">
                <img
                  src={LOGO_URL}
                  alt="OPAL INTERIOR Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#1A1612] font-serif">
                OPAL <span className="text-[#C99933] font-bold">INTERIOR</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-[#757779]">
              A Mumbai-based interior design studio creating refined, contemporary spaces that are deeply personal and timeless. Founded in 2019 by Interior Designer <strong>Mansi Sharma</strong> with Partner <strong>Pushapraj Sharma</strong>.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2 text-[#C99933]">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1A1612] hover:scale-110 transition-all p-1.5 rounded-full hover:bg-[#FAF8F2]"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://in.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1A1612] hover:scale-110 transition-all p-1.5 rounded-full hover:bg-[#FAF8F2]"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1A1612] hover:scale-110 transition-all p-1.5 rounded-full hover:bg-[#FAF8F2]"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1A1612] hover:scale-110 transition-all p-1.5 rounded-full hover:bg-[#FAF8F2]"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Studio */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-[#C99933] font-sans font-semibold text-lg mb-1">Studio</h4>
            <ul className="list-none space-y-2.5 p-0 m-0 text-sm">
              <li>
                <Link to="/about-s3t-koncepts" className="text-[#757779] hover:text-[#C99933] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#757779] hover:text-[#C99933] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-[#757779] hover:text-[#C99933] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#757779] hover:text-[#C99933] transition-colors">
                  Contact Studio
                </Link>
              </li>
              <li><Link to="/referral-programme" className="text-[#757779] hover:text-[#C99933] transition-colors">Refer a Friend</Link></li>
              <li>
                <Link to="/terms-and-conditions" className="text-[#757779] hover:text-[#C99933] transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Design Expertise */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-[#C99933] font-sans font-semibold text-lg mb-1">Expertise</h4>
            <ul className="list-none space-y-2.5 p-0 m-0 text-sm">
              <li>
                <Link to="/services/concept-and-design" className="text-[#757779] hover:text-[#C99933] transition-colors">
                  Concept &amp; Interior Design
                </Link>
              </li>
              <li>
                <Link to="/services/site-supervision-quality-control" className="text-[#757779] hover:text-[#C99933] transition-colors">
                  Site Supervision &amp; Quality
                </Link>
              </li>
              <li>
                <Link to="/services/custom-furniture-joinery" className="text-[#757779] hover:text-[#C99933] transition-colors">
                  Custom Furniture &amp; Joinery
                </Link>
              </li>
              <li>
                <Link to="/services/spatial-architecture-mep" className="text-[#757779] hover:text-[#C99933] transition-colors">
                  Spatial Architecture &amp; MEP
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-[#C99933] font-sans font-semibold text-lg mb-1">Contact Studio</h4>
            <ul className="list-none space-y-3 p-0 m-0 text-sm">
              <li>
                <div className="flex items-start gap-2.5 text-[#757779]">
                  <User size={18} className="text-[#C99933] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1A1612] block">MANSI SHARMA &amp; PUSHAPRAJ SHARMA</span>
                    <span className="text-xs text-[#757779]">PRINCIPAL DESIGNER &amp; PARTNER</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-[#757779]">
                  <MapPin size={18} className="text-[#C99933] shrink-0 mt-0.5" />
                  <span>Opal Interior, B-112, Shiv Mahal, RNP park, Next to Jesal Park, Bhayandar East, Thane- 401105</span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2.5 text-[#757779]">
                  <Phone size={18} className="text-[#C99933] shrink-0" />
                  <span>
                    <a href="tel:+917400260508" className="hover:text-[#C99933] transition-colors font-medium">+91 7400260508</a>
                  </span>
                </div>
              </li>
              <li>
                <a
                  href="mailto:Mansi@opalinterior.in"
                  className="flex items-center gap-2.5 text-[#757779] hover:text-[#C99933] transition-colors"
                >
                  <Mail size={18} className="text-[#C99933] shrink-0" />
                  <span><span className="block text-xs text-[#757779]">Support</span>Mansi@opalinterior.in</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#757779]">
          <p>© Copyright {new Date().getFullYear()}, All Rights Reserved by OPAL INTERIOR</p>
          <div className="flex items-center gap-4">
            <Link to="/terms" className="hover:text-[#C99933] transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-slate-300">•</span>
            <Link
              to="/admin"
              className="hover:text-[#C99933] transition-colors inline-flex items-center gap-1.5 opacity-70 hover:opacity-100 font-medium"
              title="Studio Administrative Console"
            >
              <Lock size={12} className="text-[#C99933]" />
              <span>Studio Portal</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
