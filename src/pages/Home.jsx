import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { FaBug, FaFlask, FaLeaf, FaSeedling, FaShieldAlt, FaTint, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const spring = { type: 'spring', stiffness: 120, damping: 18 };

const leafPaths = [
  { start: 0.12, d: 'M100 430 C 150 410 160 370 140 350 C 120 360 100 390 100 430' },
  { start: 0.24, d: 'M100 370 C 50 350 40 310 62 292 C 82 304 100 332 100 370' },
  { start: 0.36, d: 'M100 310 C 156 292 166 250 144 232 C 122 244 100 270 100 310' },
  { start: 0.48, d: 'M100 250 C 48 232 36 190 60 172 C 82 186 100 214 100 250' },
  { start: 0.6, d: 'M100 190 C 150 172 158 132 136 116 C 116 128 100 154 100 190' },
  { start: 0.72, d: 'M100 140 C 58 124 46 88 70 72 C 88 86 100 108 100 140' },
];

function GrowingLeaf({ progress, start, d, reduce }) {
  const scale = useTransform(progress, [start, Math.min(start + 0.14, 1)], [0, 1]);
  return (
    <motion.path
      d={d}
      fill="#1f9d55"
      style={{ scale: reduce ? 1 : scale, transformOrigin: '100px 300px' }}
    />
  );
}

const devanagari = '०१२३४५६७८९';

function toLatinDigits(value) {
  return value.replace(/[०-९]/g, (digit) => String(devanagari.indexOf(digit)));
}

function toDevanagariDigits(value) {
  return value.replace(/\d/g, (digit) => devanagari[digit]);
}

function StatValue({ value, reduce }) {
  const latin = toLatinDigits(value);
  const target = Number.parseInt(latin, 10);
  const [shown, setShown] = useState(Number.isNaN(target) || reduce ? value : latin.startsWith('0') ? '00' : '0');

  useEffect(() => {
    if (reduce || Number.isNaN(target)) return undefined;
    let frame = 0;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / 900);
      const current = Math.round(target * (1 - (1 - progress) ** 3));
      const padded = String(current).padStart(latin.length, '0');
      setShown(/[०-९]/.test(value) ? toDevanagariDigits(padded) : padded);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [latin, reduce, target, value]);

  return shown;
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: spring },
};

const Home = () => {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const heroRef = useRef(null);
  const growRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const videoY = useTransform(heroScroll, [0, 1], [0, 48]);
  const copyY = useTransform(heroScroll, [0, 1], [0, 28]);
  const { scrollYProgress: growProgress } = useScroll({
    target: growRef,
    offset: ['start 80%', 'end 40%'],
  });

  const stem = useTransform(growProgress, [0, 1], [0, 1]);
  const bloom = useTransform(growProgress, [0.82, 1], [0, 1]);

  const features = [
    { icon: FaBug, title: t.home.feat1Title, desc: t.home.feat1Desc, wide: true },
    { icon: FaSeedling, title: t.home.feat2Title, desc: t.home.feat2Desc },
    { icon: FaLeaf, title: t.home.feat3Title, desc: t.home.feat3Desc },
    { icon: FaShieldAlt, title: t.home.feat4Title, desc: t.home.feat4Desc },
  ];

  const range = [
    { icon: FaBug, title: t.products.c1, desc: t.products.c1d },
    { icon: FaShieldAlt, title: t.products.c2, desc: t.products.c2d },
    { icon: FaTint, title: t.products.c3, desc: t.products.c3d },
    { icon: FaFlask, title: t.products.c4, desc: t.products.c4d },
    { icon: FaSeedling, title: t.products.c5, desc: t.products.c5d },
    { icon: FaLeaf, title: t.products.c6, desc: t.products.c6d },
  ];

  const steps = [
    { title: t.services.s1, desc: t.services.s1d },
    { title: t.services.s2, desc: t.services.s2d },
    { title: t.services.s3, desc: t.services.s3d },
    { title: t.services.s4, desc: t.services.s4d },
  ];

  const stats = [
    { n: t.home.stat1n, l: t.home.stat1l },
    { n: t.home.stat2n, l: t.home.stat2l },
    { n: t.home.stat3n, l: t.home.stat3l },
    { n: t.home.stat4n, l: t.home.stat4l },
  ];

  const ribbon = [...range.map((item) => item.title), t.services.s1, t.services.s3];
  const words = t.home.headline.split(' ');

  const spotlight = (event) => {
    const node = event.currentTarget;
    const box = node.getBoundingClientRect();
    node.style.setProperty('--mx', `${event.clientX - box.left}px`);
    node.style.setProperty('--my', `${event.clientY - box.top}px`);
  };

  return (
    <div className="overflow-x-hidden bg-cream text-ink">
      {!reduce && (
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="fixed top-0 left-0 z-[60] h-1 w-full origin-left bg-lime"
        />
      )}

      <section ref={heroRef} className="relative flex min-h-[100svh] items-end overflow-hidden">
        <motion.div className="absolute inset-0" style={reduce ? undefined : { y: videoY }}>
          <video
            src="/hero_video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-[115%] w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07140d]/88 via-[#07140d]/55 to-[#07140d]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07140d]/90 via-transparent to-[#07140d]/35" />
          <div className="orb absolute -left-16 top-28 h-72 w-72 rounded-full bg-emerald-400/25 blur-3xl" />
          <div className="orb-late absolute right-0 bottom-10 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl" />
          {!reduce && [14, 32, 58, 76].map((left, index) => (
            <FaLeaf
              key={left}
              aria-hidden="true"
              size={16 + index * 4}
              className="leaf-float pointer-events-none absolute bottom-0 text-lime"
              style={{ left: `${left}%`, animationDelay: `${index * 1.8}s`, animationDuration: `${14 + index * 2}s` }}
            />
          ))}
        </motion.div>

        <motion.div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-32 pb-16 sm:px-6 lg:px-8 lg:pb-24" style={reduce ? undefined : { y: copyY }}>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-lime backdrop-blur"
          >
            <span className="pulse-dot h-2 w-2 rounded-full bg-lime" />
            {t.home.eyebrow}
          </motion.p>

          <p className="mb-3 py-1 text-sm font-semibold leading-normal tracking-[0.18em] text-white/70 uppercase">
            {t.home.welcomePrefix}
            <span className="font-display text-base leading-normal tracking-normal text-lime normal-case italic">{t.home.brand}</span>
            {t.home.welcomeSuffix}
          </p>

          <h1 className="max-w-4xl font-display text-[2.6rem] leading-[1.05] font-semibold text-white sm:text-6xl lg:text-7xl">
            {words.map((word, index) => (
              <span key={`${word}-${index}`} className="mr-[0.28em] inline-block overflow-hidden px-[0.04em] pt-[0.14em] pb-[0.34em] -mt-[0.08em] -mb-[0.34em] align-bottom leading-none">
                <motion.span
                  className="inline-block"
                  initial={reduce ? false : { y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ ...spring, delay: reduce ? 0 : 0.08 + index * 0.05 }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl"
          >
            {t.home.subtitle}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              to="/products"
              className="rounded-full bg-lime px-7 py-3.5 text-center text-base font-bold text-ink shadow-lg transition hover:-translate-y-0.5 hover:bg-white"
            >
              {t.home.explore}
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hello"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-base font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-ink"
            >
              <FaWhatsapp />
              {t.home.contactWa}
            </a>
          </motion.div>

          <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.l}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.08 }}
                className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur"
              >
                <dt className="font-display text-3xl text-lime">
                  <StatValue value={stat.n} reduce={reduce} />
                </dt>
                <dd className="mt-1 text-sm text-white/75">{stat.l}</dd>
              </motion.div>
            ))}
          </dl>

          <p className="mt-10 hidden items-center gap-3 text-xs font-semibold tracking-[0.22em] text-white/50 uppercase sm:flex">
            <span className="relative h-12 w-px overflow-hidden bg-white/25">
              <motion.span
                className="absolute inset-x-0 top-0 h-4 bg-lime"
                animate={reduce ? undefined : { y: [0, 32, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              />
            </span>
            {t.home.scrollCue}
          </p>
        </motion.div>
      </section>

      <div className="overflow-hidden border-y border-ink/10 bg-ink py-4 text-cream">
        <div className="marquee-track gap-10">
          {[...ribbon, ...ribbon].map((label, index) => (
            <span key={`${label}-${index}`} className="flex items-center gap-10 text-sm font-semibold tracking-wide">
              {label}
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            </span>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 max-w-2xl"
        >
          <motion.h2 variants={fadeUp} className="font-display text-4xl leading-tight text-ink md:text-5xl">
            {t.home.whyChoose}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-lg leading-relaxed text-ink/70">
            {t.home.whyDesc}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                onMouseMove={spotlight}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={reduce ? undefined : { y: -6 }}
                transition={spring}
                className={`spotlight rounded-3xl border border-ink/8 p-7 shadow-sm ${feature.wide ? 'md:col-span-2' : ''}`}
              >
                <motion.div
                  whileHover={reduce ? undefined : { rotate: -8, scale: 1.08 }}
                  transition={spring}
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-lime"
                >
                  <Icon size={24} />
                </motion.div>
                <h3 className="font-display text-2xl text-ink">{feature.title}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-ink/70">{feature.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="bg-ink py-20 text-cream lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold tracking-[0.2em] text-lime uppercase">{t.home.rangeKicker}</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">{t.home.rangeTitle}</h2>
              <p className="mt-4 text-lg text-white/70">{t.home.rangeDesc}</p>
            </div>
            <Link
              to="/products"
              className="w-fit whitespace-nowrap rounded-full bg-lime px-6 py-3 font-bold text-ink transition hover:bg-white"
            >
              {t.home.viewAll}
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {range.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ ...spring, delay: reduce ? 0 : (index % 3) * 0.06 }}
                  whileHover={reduce ? undefined : { y: -6 }}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-lime/40 hover:bg-white/10"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-display text-lime/80">{String(index + 1).padStart(2, '0')}</span>
                    <Icon className="text-lime" size={22} />
                  </div>
                  <h3 className="font-display text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{item.desc}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section ref={growRef} className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
        <div>
          <p className="text-sm font-bold tracking-[0.2em] text-primary uppercase">{t.home.stepsKicker}</p>
          <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">{t.home.stepsTitle}</h2>
          <p className="mt-4 max-w-xl text-lg text-ink/70">{t.home.stepsDesc}</p>
          <ol className="relative mt-10 space-y-6">
            <motion.span
              aria-hidden="true"
              className="absolute top-2 bottom-2 left-5 w-px origin-top bg-ink/15"
              style={{ scaleY: reduce ? 1 : growProgress }}
            />
            {steps.map((step, index) => (
              <motion.li
                key={step.title}
                initial={reduce ? false : { opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ ...spring, delay: reduce ? 0 : index * 0.05 }}
                className="flex gap-4"
              >
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink font-display text-lime">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-ink">{step.title}</h3>
                  <p className="mt-1 leading-relaxed text-ink/70">{step.desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="relative hidden h-[520px] overflow-hidden rounded-[2rem] bg-gradient-to-b from-emerald-100 to-cream lg:block">
          <div className="orb absolute top-10 left-10 h-40 w-40 rounded-full bg-lime/50 blur-2xl" />
          <svg viewBox="0 0 200 520" className="absolute inset-x-0 bottom-0 mx-auto h-full w-auto">
            <motion.path
              d="M100 520 C 108 400 92 320 100 240 C 108 170 96 110 100 48"
              fill="none"
              stroke="#123524"
              strokeWidth="7"
              strokeLinecap="round"
              style={{ pathLength: reduce ? 1 : stem }}
            />
            {leafPaths.map((leaf) => (
              <GrowingLeaf key={leaf.start} progress={growProgress} reduce={reduce} {...leaf} />
            ))}
            <motion.g style={{ scale: reduce ? 1 : bloom, transformOrigin: '100px 48px' }}>
              <circle cx="100" cy="36" r="10" fill="#e7b34c" />
              <circle cx="122" cy="52" r="10" fill="#e7b34c" />
              <circle cx="112" cy="74" r="10" fill="#e7b34c" />
              <circle cx="88" cy="74" r="10" fill="#e7b34c" />
              <circle cx="78" cy="52" r="10" fill="#e7b34c" />
              <circle cx="100" cy="56" r="8" fill="#9a6412" />
            </motion.g>
          </svg>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink px-4 py-20 text-center text-cream sm:px-6 lg:py-28">
        <div className="orb absolute -top-10 left-1/4 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="orb-late absolute right-10 bottom-0 h-64 w-64 rounded-full bg-amber-300/20 blur-3xl" />
        <motion.div
          className="relative mx-auto max-w-3xl"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={spring}
        >
          <h2 className="font-display text-4xl leading-tight md:text-6xl">{t.home.ctaTitle}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">{t.home.ctaDesc}</p>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-lime px-8 py-3.5 text-base font-bold text-ink transition hover:-translate-y-0.5 hover:bg-white"
          >
            {t.home.getInTouch}
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
