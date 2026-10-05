import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Products = () => {
  const { t } = useLanguage();
  
  const categories = [
    { title: t.products.c1, desc: t.products.c1d, items: [t.products.c1i1, t.products.c1i2, t.products.c1i3] },
    { title: t.products.c2, desc: t.products.c2d, items: [t.products.c2i1, t.products.c2i2, t.products.c2i3] },
    { title: t.products.c3, desc: t.products.c3d, items: [t.products.c3i1, t.products.c3i2, t.products.c3i3] },
    { title: t.products.c4, desc: t.products.c4d, items: [t.products.c4i1, t.products.c4i2, t.products.c4i3] },
    { title: t.products.c5, desc: t.products.c5d, items: [t.products.c5i1, t.products.c5i2, t.products.c5i3] },
    { title: t.products.c6, desc: t.products.c6d, items: [t.products.c6i1, t.products.c6i2, t.products.c6i3] }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="bg-green-700 py-16 text-white text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          {t.products.title}
        </motion.h1>
        <p className="mt-4 text-green-100 max-w-2xl mx-auto px-4">
          {t.products.subtitle}
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="bg-green-50 px-6 py-4 border-b border-green-100">
                <h2 className="text-xl font-bold text-green-800">{cat.title}</h2>
              </div>
              <div className="p-6 flex flex-col h-full">
                <p className="text-gray-600 mb-4 h-16">{cat.desc}</p>
                <ul className="space-y-2 flex-grow">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-4 border-t border-gray-100">
                  <a 
                    href={`https://wa.me/919876543210?text=I am interested in ${cat.title}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-gray-50 hover:bg-green-500 hover:text-white text-green-700 font-semibold py-2 rounded transition"
                  >
                    {t.products.inquire}
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

export default Products;
