import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-ink pt-16 pb-8 text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <img src="/logo.webp" alt="Surekha Krushi Udyog" className="mb-5 h-16 w-auto rounded-2xl bg-white p-1" />
            <p className="mb-5 max-w-md leading-relaxed text-white/65">{t.footer.desc}</p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-lime hover:text-lime"><FaFacebook size={18} /></a>
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-lime hover:text-lime"><FaInstagram size={18} /></a>
              <a href="#" aria-label="Twitter" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-lime hover:text-lime"><FaTwitter size={18} /></a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-display text-xl text-lime">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/65 transition hover:text-white">{t.nav.home}</Link></li>
              <li><Link to="/about" className="text-white/65 transition hover:text-white">{t.nav.about}</Link></li>
              <li><Link to="/products" className="text-white/65 transition hover:text-white">{t.nav.products}</Link></li>
              <li><Link to="/services" className="text-white/65 transition hover:text-white">{t.nav.services}</Link></li>
              <li><Link to="/contact" className="text-white/65 transition hover:text-white">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-xl text-lime">{t.footer.contact}</h3>
            <address className="space-y-2 text-white/65 not-italic">
              <p>Surekha Krushi Udyog</p>
              <p>Main Market Road, Krushi Nagar</p>
              <p>Maharashtra, India 411001</p>
              <p>Email: <a href="mailto:info@surekhakrushiudyog.shop" className="transition hover:text-white">info@surekhakrushiudyog.shop</a></p>
              <p>Phone: <a href="tel:+919876543210" className="transition hover:text-white">+91 98765 43210</a></p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row">
          <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
          <div className="flex gap-4">
            <a href="#" className="transition hover:text-white">{t.footer.privacy}</a>
            <a href="#" className="transition hover:text-white">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
