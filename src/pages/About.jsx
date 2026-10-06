import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/PageHero';

const spring = { type: 'spring', stiffness: 120, damping: 18 };

const About = () => {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  const pillars = [
    { title: t.about.missionTitle, desc: t.about.missionDesc },
    { title: t.about.visionTitle, desc: t.about.visionDesc },
  ];

  return (
    <div className="min-h-screen bg-cream text-ink">
      <PageHero kicker={t.home.brand} title={t.about.title} subtitle={t.about.subtitle} />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={spring}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-emerald-100 to-cream p-8"
        >
          <div className="orb absolute top-6 left-6 h-32 w-32 rounded-full bg-lime/60 blur-2xl" />
          <img src="/logo.webp" alt="Surekha Krushi Udyog" className="relative mx-auto w-full max-w-sm rounded-3xl bg-white p-6" />
        </motion.div>

        <div>
          <h2 className="font-display text-4xl">{t.about.storyTitle}</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/70">
            <p>{t.about.story1}</p>
            <p>{t.about.story2}</p>
            <p>{t.about.story3}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-20 sm:px-6 md:grid-cols-2 lg:px-8">
        {pillars.map((item, index) => (
          <motion.article
            key={item.title}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ ...spring, delay: reduce ? 0 : index * 0.06 }}
            className="rounded-3xl border border-ink/10 bg-white p-8"
          >
            <p className="font-display text-2xl text-[#0f7a3c]">{String(index + 1).padStart(2, '0')}</p>
            <h3 className="mt-3 font-display text-3xl">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-ink/70">{item.desc}</p>
          </motion.article>
        ))}
      </section>
    </div>
  );
};

export default About;
