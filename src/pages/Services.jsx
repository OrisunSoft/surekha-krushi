import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaComments, FaLeaf, FaSearch, FaTruck, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/PageHero';

const spring = { type: 'spring', stiffness: 120, damping: 18 };
const icons = [FaComments, FaLeaf, FaSearch, FaTruck];

const Services = () => {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  const services = [
    { title: t.services.s1, desc: t.services.s1d },
    { title: t.services.s2, desc: t.services.s2d },
    { title: t.services.s3, desc: t.services.s3d },
    { title: t.services.s4, desc: t.services.s4d },
  ];

  return (
    <div className="min-h-screen bg-cream text-ink">
      <PageHero kicker={t.home.stepsKicker} title={t.services.title} subtitle={t.services.subtitle} />

      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
        {services.map((svc, index) => {
          const Icon = icons[index];
          return (
            <motion.article
              key={svc.title}
              initial={reduce ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ ...spring, delay: reduce ? 0 : (index % 2) * 0.06 }}
              className="flex flex-col rounded-3xl border border-white/10 bg-ink p-7 text-cream"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-display text-4xl text-lime">{String(index + 1).padStart(2, '0')}</span>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lime">
                  <Icon size={20} />
                </span>
              </div>
              <h2 className="font-display text-3xl">{svc.title}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-white/70">{svc.desc}</p>
              <a
                href={`https://wa.me/919876543210?text=Service: ${svc.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-bold text-ink transition hover:bg-white"
              >
                <FaWhatsapp />
                {t.services.req}
              </a>
            </motion.article>
          );
        })}
      </section>
    </div>
  );
};

export default Services;
