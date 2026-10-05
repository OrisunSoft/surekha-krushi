import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="bg-green-700 py-16 text-white text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          {t.about.title}
        </motion.h1>
        <p className="mt-4 text-green-100 max-w-2xl mx-auto px-4">
          {t.about.subtitle}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
            >
              <img src="/logo.webp" alt="Surekha Krushi Udyog Logo" className="w-full h-auto rounded" />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{t.about.storyTitle}</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>{t.about.story1}</p>
              <p>{t.about.story2}</p>
              <p>{t.about.story3}</p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow border-t-4 border-green-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{t.about.missionTitle}</h3>
            <p className="text-gray-600">{t.about.missionDesc}</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow border-t-4 border-green-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{t.about.visionTitle}</h3>
            <p className="text-gray-600">{t.about.visionDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
