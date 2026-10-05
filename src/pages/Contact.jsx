import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="bg-green-700 py-16 text-white text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          {t.contact.title}
        </motion.h1>
        <p className="mt-4 text-green-100 max-w-2xl mx-auto px-4">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">{t.contact.getInTouch}</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-green-100 p-4 rounded-full text-green-600 mr-6">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{t.contact.locTitle}</h3>
                  <p className="text-gray-600">Main Market Road, Krushi Nagar<br />Maharashtra, India 411001</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-4 rounded-full text-green-600 mr-6">
                  <FaPhoneAlt size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{t.contact.phoneTitle}</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-4 rounded-full text-green-600 mr-6">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{t.contact.emailTitle}</h3>
                  <p className="text-gray-600">info@surekhakrushiudyog.shop</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-4 rounded-full text-green-600 mr-6">
                  <FaWhatsapp size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{t.contact.waTitle}</h3>
                  <p className="text-gray-600 mb-2">{t.contact.waDesc}</p>
                  <a 
                    href="https://wa.me/919876543210" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded font-semibold transition"
                  >
                    {t.contact.waBtn}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.contact.formTitle}</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.contact.name}</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-green-500 focus:border-green-500 outline-none transition" placeholder={t.contact.namePh} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.contact.phone}</label>
                <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-green-500 focus:border-green-500 outline-none transition" placeholder={t.contact.phonePh} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.contact.msg}</label>
                <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-green-500 focus:border-green-500 outline-none transition" placeholder={t.contact.msgPh}></textarea>
              </div>
              <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded transition shadow-md">
                {t.contact.send}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
