import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/PageHero';

const spring = { type: 'spring', stiffness: 120, damping: 18 };

const Contact = () => {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  const details = [
    { icon: FaMapMarkerAlt, title: t.contact.locTitle, body: 'Main Market Road, Krushi Nagar, Maharashtra, India 411001' },
    { icon: FaPhoneAlt, title: t.contact.phoneTitle, body: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: FaEnvelope, title: t.contact.emailTitle, body: 'info@surekhakrushiudyog.shop', href: 'mailto:info@surekhakrushiudyog.shop' },
  ];

  return (
    <div className="min-h-screen bg-cream text-ink">
      <PageHero kicker={t.home.brand} title={t.contact.title} subtitle={t.contact.subtitle} />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
        <div>
          <h2 className="font-display text-4xl">{t.contact.getInTouch}</h2>
          <div className="mt-8 space-y-4">
            {details.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ink text-lime">
                    <Icon size={18} />
                  </span>
                  <span>
                    <span className="block font-bold">{item.title}</span>
                    <span className="mt-1 block text-ink/70">{item.body}</span>
                  </span>
                </>
              );
              return (
                <motion.div
                  key={item.title}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ ...spring, delay: reduce ? 0 : index * 0.05 }}
                >
                  {item.href ? (
                    <a href={item.href} className="flex gap-4 rounded-3xl border border-ink/10 bg-white p-5 transition hover:-translate-y-0.5">
                      {content}
                    </a>
                  ) : (
                    <div className="flex gap-4 rounded-3xl border border-ink/10 bg-white p-5">{content}</div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-bold text-ink transition hover:bg-white"
          >
            <FaWhatsapp />
            {t.contact.waBtn}
          </a>
          <p className="mt-3 text-sm text-ink/60">{t.contact.waDesc}</p>
        </div>

        <motion.form
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={spring}
          className="rounded-[2rem] bg-ink p-6 text-cream sm:p-8"
          onSubmit={(event) => event.preventDefault()}
        >
          <h2 className="font-display text-3xl">{t.contact.formTitle}</h2>
          <div className="mt-6 space-y-5">
            <label className="block text-sm font-semibold text-white/80">
              {t.contact.name}
              <input
                type="text"
                required
                placeholder={t.contact.namePh}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-lime"
              />
            </label>
            <label className="block text-sm font-semibold text-white/80">
              {t.contact.phone}
              <input
                type="tel"
                required
                placeholder={t.contact.phonePh}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-lime"
              />
            </label>
            <label className="block text-sm font-semibold text-white/80">
              {t.contact.msg}
              <textarea
                rows="5"
                required
                placeholder={t.contact.msgPh}
                className="mt-2 w-full resize-y rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-lime"
              />
            </label>
            <button type="submit" className="w-full rounded-full bg-lime py-3.5 font-bold text-ink transition hover:bg-white">
              {t.contact.send}
            </button>
          </div>
        </motion.form>
      </section>
    </div>
  );
};

export default Contact;
