import { motion } from 'framer-motion';
import AnimatedPhrase from './AnimatedPhrase';
import HeroName3D from './HeroName3D';
import { heroContent, personalInfo } from '../data/portfolio';

export default function IntroLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-gradient-to-br from-azure-600 via-azure-500 to-azure-700"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="absolute inset-0 mesh-gradient-dark opacity-60" aria-hidden="true" />
      <div className="absolute inset-0 holo-grid opacity-25" aria-hidden="true" />

      <motion.div
        className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: [0, 1, 0] }}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      <div className="relative z-10 px-6 text-center">
        <motion.div
          className="mx-auto mb-6 h-16 w-16 rounded-full border border-cyan-400/30 bg-cyan-400/5"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          aria-hidden="true"
        >
          <motion.div
            className="mx-auto mt-4 h-8 w-8 rounded-full border border-cyan-300/40"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>

        <HeroName3D className="!text-2xl sm:!text-3xl !mb-0" />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-cyan-200/80 sm:text-base"
        >
          {personalInfo.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="mt-6 text-lg font-medium text-cyan-100/90 sm:text-xl"
        >
          <AnimatedPhrase words={heroContent.mantra} baseDelay={0.65} stagger={0.28} />
        </motion.div>

        <motion.div
          className="mx-auto mt-8 h-0.5 w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
}
