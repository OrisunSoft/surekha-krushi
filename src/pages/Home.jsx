import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaLeaf, FaBug, FaSeedling, FaShieldAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  
  const l1 = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
  const l2 = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  const l3 = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);
  const l4 = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  const l5 = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);
  const l6 = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);
  const l7 = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);
  const l8 = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);
  const flowerScale = useTransform(scrollYProgress, [0.85, 1], [0, 1]);

  const features = [
    { icon: <FaBug size={40} className="text-green-600 mb-4" />, title: t.home.feat1Title, desc: t.home.feat1Desc },
    { icon: <FaSeedling size={40} className="text-green-600 mb-4" />, title: t.home.feat2Title, desc: t.home.feat2Desc },
    { icon: <FaLeaf size={40} className="text-green-600 mb-4" />, title: t.home.feat3Title, desc: t.home.feat3Desc },
    { icon: <FaShieldAlt size={40} className="text-green-600 mb-4" />, title: t.home.feat4Title, desc: t.home.feat4Desc }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Video - h-[110%] and object-top crops the bottom watermark */}
        <div className="absolute inset-0 z-0">
          <video 
            src="/hero_video.mp4"
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-[110%] object-cover object-top"
          >
            Your browser does not support the video tag.
          </video>
          {/* Overlay to darken video for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg"
          >
            {t.home.welcomePrefix}<span className="text-green-400">{t.home.brand}</span>{t.home.welcomeSuffix}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-2xl mb-8 drop-shadow-md text-gray-200"
          >
            {t.home.subtitle}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/products" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition shadow-lg text-center">
              {t.home.explore}
            </Link>
            <a href={`https://wa.me/919876543210?text=Hello`} target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-100 text-green-700 px-8 py-3 rounded-full text-lg font-semibold transition shadow-lg text-center">
              {t.home.contactWa}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us / Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{t.home.whyChoose}</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{t.home.whyDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center transition"
              >
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">{t.home.ctaTitle}</h2>
          <p className="text-lg mb-8 text-green-100">{t.home.ctaDesc}</p>
          <Link to="/contact" className="bg-white text-green-700 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition shadow-lg">
            {t.home.getInTouch}
          </Link>
        </div>
      </section>

      {/* Growing Plant Animation */}
      <svg 
        viewBox="-20 0 140 500" 
        preserveAspectRatio="xMidYMax meet"
        className="fixed right-2 md:right-8 bottom-0 z-40 pointer-events-none drop-shadow-lg h-[60vh] max-h-[500px] w-auto opacity-40 md:opacity-100"
      >
        <motion.path d="M 50 500 Q 60 350 40 200 T 50 50" fill="transparent" stroke="#16a34a" strokeWidth="6" strokeLinecap="round" style={{ pathLength: scrollYProgress }} />
        <motion.path d="M 53 450 C 78 445 83 425 83 425 C 83 425 63 425 53 450" fill="#15803d" style={{ scale: l1, transformOrigin: '53px 450px' }} />
        <motion.path d="M 56 400 C 31 395 26 375 26 375 C 26 375 46 375 56 400" fill="#15803d" style={{ scale: l2, transformOrigin: '56px 400px' }} />
        <motion.path d="M 58 350 C 83 345 88 325 88 325 C 88 325 68 325 58 350" fill="#15803d" style={{ scale: l3, transformOrigin: '58px 350px' }} />
        <motion.path d="M 50 300 C 25 295 20 275 20 275 C 20 275 40 275 50 300" fill="#15803d" style={{ scale: l4, transformOrigin: '50px 300px' }} />
        <motion.path d="M 42 250 C 67 245 72 225 72 225 C 72 225 52 225 42 250" fill="#15803d" style={{ scale: l5, transformOrigin: '42px 250px' }} />
        <motion.path d="M 40 200 C 15 195 10 175 10 175 C 10 175 30 175 40 200" fill="#15803d" style={{ scale: l6, transformOrigin: '40px 200px' }} />
        <motion.path d="M 45 150 C 70 145 75 125 75 125 C 75 125 55 125 45 150" fill="#15803d" style={{ scale: l7, transformOrigin: '45px 150px' }} />
        <motion.path d="M 48 100 C 23 95 18 75 18 75 C 18 75 38 75 48 100" fill="#15803d" style={{ scale: l8, transformOrigin: '48px 100px' }} />
        <motion.g style={{ scale: flowerScale, transformOrigin: '50px 50px' }}>
          <circle cx="50" cy="32" r="8" fill="#fbbf24" />
          <circle cx="67" cy="44" r="8" fill="#fbbf24" />
          <circle cx="61" cy="62" r="8" fill="#fbbf24" />
          <circle cx="39" cy="62" r="8" fill="#fbbf24" />
          <circle cx="33" cy="44" r="8" fill="#fbbf24" />
          <circle cx="50" cy="50" r="6" fill="#b45309" />
        </motion.g>
      </svg>
    </div>
  );
};

export default Home;
