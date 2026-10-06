import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaBug, FaFlask, FaLeaf, FaSeedling, FaShieldAlt, FaTint, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/PageHero';

const spring = { type: 'spring', stiffness: 120, damping: 18 };
const icons = [FaBug, FaShieldAlt, FaTint, FaFlask, FaSeedling, FaLeaf];

const Products = () => {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  const categories = [
    { title: t.products.c1, desc: t.products.c1d, items: [t.products.c1i1, t.products.c1i2, t.products.c1i3] },
    { title: t.products.c2, desc: t.products.c2d, items: [t.products.c2i1, t.products.c2i2, t.products.c2i3] },
    { title: t.products.c3, desc: t.products.c3d, items: [t.products.c3i1, t.products.c3i2, t.products.c3i3] },
    { title: t.products.c4, desc: t.products.c4d, items: [t.products.c4i1, t.products.c4i2, t.products.c4i3] },
    { title: t.products.c5, desc: t.products.c5d, items: [t.products.c5i1, t.products.c5i2, t.products.c5i3] },
    { title: t.products.c6, desc: t.products.c6d, items: [t.products.c6i1, t.products.c6i2, t.products.c6i3] },
  ];

  return (
    <div className="min-h-screen bg-cream text-ink">
      <PageHero kicker={t.home.rangeKicker} title={t.products.title} subtitle={t.products.subtitle} />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8 lg:py-20">
        {categories.map((cat, index) => {
          const Icon = icons[index];
          return (
            <motion.article
              key={cat.title}
              initial={reduce ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ ...spring, delay: reduce ? 0 : (index % 3) * 0.05 }}
              className="flex flex-col rounded-3xl border border-ink/10 bg-white p-6"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-2xl text-[#0f7a3c]">{String(index + 1).padStart(2, '0')}</span>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-lime">
                  <Icon size={20} />
                </span>
              </div>
              <h2 className="font-display text-2xl">{cat.title}</h2>
              <p className="mt-3 leading-relaxed text-ink/70">{cat.desc}</p>
              <ul className="mt-5 flex-1 space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/919876543210?text=I am interested in ${cat.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-bold text-lime transition hover:bg-[#123524]"
              >
                <FaWhatsapp />
                {t.products.inquire}
              </a>
            </motion.article>
          );
        })}
      </section>
    </div>
  );
};

export default Products;
