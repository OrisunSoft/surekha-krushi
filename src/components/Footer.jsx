import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <img src="/logo.webp" alt="Surekha Krushi Udyog" className="h-16 w-auto mb-4 bg-white p-1 rounded" />
            <p className="text-gray-400 mb-4 max-w-md">
              {t.footer.desc}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition"><FaFacebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><FaInstagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><FaTwitter size={24} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-500">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition">{t.nav.home}</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">{t.nav.about}</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition">{t.nav.products}</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition">{t.nav.services}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-500">{t.footer.contact}</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>Surekha Krushi Udyog</p>
              <p>Main Market Road, Krushi Nagar</p>
              <p>Maharashtra, India 411001</p>
              <p>Email: <a href="mailto:info@surekhakrushiudyog.shop" className="hover:text-white transition">info@surekhakrushiudyog.shop</a></p>
              <p>Phone: +91 98765 43210</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="hover:text-white transition">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
