import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const LOGO_URL = "https://ik.imagekit.io/fdhgiehjz/WhatsApp%20Image%202026-09-30%20at%2011.26.43%20AM.jpeg";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-s3t-koncepts' },
    { name: 'Portfolio', path: '/work' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 w-full z-[99999] bg-white shadow-sm transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div>
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-full overflow-hidden border border-[#C99933]/50 shadow-sm shrink-0 bg-[#FAF8F2] flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform">
              <img
                src={LOGO_URL}
                alt="OPAL INTERIOR Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-[#1A1612] font-serif group-hover:text-[#C99933] transition-colors leading-none">
                OPAL <span className="text-[#C99933] font-bold">INTERIOR</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#757779] font-sans mt-0.5">
                interior design studio
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="xl:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#C99933] hover:text-[#1A1612] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-1">
          <ul className="flex items-center gap-2 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`px-4 py-1.5 rounded-full text-[13px] uppercase tracking-wider transition-all duration-300 border ${
                    isActive(link.path)
                      ? 'border-[#C99933] text-[#1A1612] font-semibold bg-[#C99933]/10'
                      : 'border-transparent text-[#757779] hover:border-[#C99933]/50 hover:text-[#C99933]'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <Link
            to="/referral-programme"
            aria-current={isActive('/referral-programme') ? 'page' : undefined}
            className={`inline-flex items-center justify-center rounded-full border border-[#C99933] px-4 py-3 text-sm font-semibold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C99933] ${isActive('/referral-programme') ? 'bg-[#C99933] text-white' : 'text-[#8C691C] hover:bg-[#C99933]/10'}`}
          >
            Refer a Friend
          </Link>
          <Link to="/contact">
            <button className="btnConsultation text-[11px] py-2 px-5 tracking-wider">
              BOOK FREE CONSULTATION
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-[#C99933]/20 px-6 py-6 shadow-xl animate-fadeIn">
          <ul className="flex flex-col gap-4 list-none m-0 p-0 text-center">
            {navLinks.map((link) => (
              <li key={link.name} className="py-1">
                <Link
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`inline-block px-5 py-2 rounded-full text-sm uppercase tracking-wider ${
                    isActive(link.path)
                      ? 'border border-[#C99933] text-[#1A1612] font-semibold bg-[#C99933]/10'
                      : 'text-[#C99933]'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/referral-programme"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-current={isActive('/referral-programme') ? 'page' : undefined}
                className={`inline-flex items-center justify-center w-full rounded-full border border-[#C99933] px-5 py-3 text-sm font-semibold transition-colors ${isActive('/referral-programme') ? 'bg-[#C99933] text-white' : 'text-[#8C691C] hover:bg-[#C99933]/10'}`}
              >
                Refer a Friend
              </Link>
            </li>
            <li className="pt-4 border-t border-slate-100">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="btnConsultation w-full py-3.5 text-xs tracking-wider">
                  BOOK FREE CONSULTATION
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
