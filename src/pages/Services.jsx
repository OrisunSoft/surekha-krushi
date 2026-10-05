import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    { title: t.services.s1, desc: t.services.s1d },
    { title: t.services.s2, desc: t.services.s2d },
    { title: t.services.s3, desc: t.services.s3d },
    { title: t.services.s4, desc: t.services.s4d }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="bg-green-700 py-16 text-white text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          {t.services.title}
        </motion.h1>
        <p className="mt-4 text-green-100 max-w-2xl mx-auto px-4">
          {t.services.subtitle}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {services.map((svc, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/3 bg-green-50 flex items-center justify-center p-8">
                <div className="w-24 h-24 bg-green-200 rounded-full flex items-center justify-center text-green-600 text-3xl font-bold">
                  0{idx + 1}
                </div>
              </div>
              <div className="w-full md:w-2/3 p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{svc.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{svc.desc}</p>
                <div>
                  <a 
                    href={`https://wa.me/919876543210?text=Service: ${svc.title}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded transition shadow"
                  >
                    {t.services.req}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
