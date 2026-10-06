import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaWhatsapp, FaLanguage } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { pathname } = useLocation();

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.products, path: '/products' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.contact, path: '/contact' }
  ];

  const whatsappUrl = 'https://wa.me/919876543210?text=Hello!';

  return (
    <nav className="fixed z-50 w-full border-b border-white/10 bg-[#07140d]/94 text-white backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="rounded-2xl bg-white px-2 py-1" onClick={() => setIsOpen(false)}>
            <img src="/logo.webp" alt="Surekha Krushi Udyog" className="h-14 w-auto mix-blend-multiply md:h-16" />
          </Link>

          <div className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-semibold whitespace-nowrap transition duration-300 ${
                  pathname === link.path ? 'text-lime' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => setLanguage(language === 'en' ? 'mr' : 'en')}
              className="flex items-center gap-2 font-semibold whitespace-nowrap text-white/80 hover:text-white"
            >
              <FaLanguage size={24} />
              {language === 'en' ? 'मराठी' : 'English'}
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-lime px-4 py-2 text-sm font-bold whitespace-nowrap text-ink transition hover:bg-white"
            >
              <FaWhatsapp size={18} />
              {t.nav.whatsapp}
            </a>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setLanguage(language === 'en' ? 'mr' : 'en')}
              className="text-white"
              aria-label={language === 'en' ? 'मराठी' : 'English'}
            >
              <FaLanguage size={28} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute w-full border-t border-white/10 bg-[#07140d] lg:hidden">
          <div className="space-y-1 px-3 pt-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block rounded-xl px-3 py-3 text-base font-semibold ${
                  pathname === link.path ? 'bg-white/10 text-lime' : 'text-white/90 hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block rounded-full bg-lime px-3 py-3 text-center text-base font-bold text-ink"
            >
              {t.nav.whatsapp}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
