import { motion, useReducedMotion } from 'framer-motion';

const spring = { type: 'spring', stiffness: 120, damping: 18 };

const PageHero = ({ kicker, title, subtitle }) => {
  const reduce = useReducedMotion();

  return (
    <header className="relative overflow-hidden bg-ink px-4 pt-32 pb-16 text-cream sm:px-6 lg:px-8 lg:pb-24">
      <div className="orb pointer-events-none absolute -left-16 top-10 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="orb-late pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-amber-300/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        {kicker && (
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-sm font-bold tracking-[0.2em] text-lime uppercase"
          >
            {kicker}
          </motion.p>
        )}
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: reduce ? 0 : 0.06 }}
          className="max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduce ? 0 : 0.16 }}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </header>
  );
};

export default PageHero;
