import { motion } from 'framer-motion';
import { Cloud, ArrowDown, Linkedin, Mail, MapPin } from 'lucide-react';
import { heroContent, personalInfo, stats } from '../data/portfolio';
import { AnimatedCounter } from './AnimatedCounter';
import ResumeDownload from './ResumeDownload';
import ParallaxLayer from './ParallaxLayer';
import TiltCard from './TiltCard';
import HeroName3D from './HeroName3D';

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

const floatingBadges = ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'CI/CD'];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0 azure-hero-bg animate-gradient opacity-95" aria-hidden="true" />
      <div className="absolute inset-0 mesh-gradient opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-40 bg-gradient-to-t from-holo-bg to-transparent"
        aria-hidden="true"
      />
      <div className="absolute inset-0 holo-grid opacity-10" aria-hidden="true" />

      {floatingBadges.map((badge, i) => (
        <ParallaxLayer
          key={badge}
          speed={0.15 + i * 0.05}
          className={`pointer-events-none absolute hidden text-[10px] font-semibold uppercase tracking-wider text-cyan-400/25 lg:block ${
            i === 0 ? 'left-[8%] top-[28%]' :
            i === 1 ? 'right-[10%] top-[22%]' :
            i === 2 ? 'left-[12%] bottom-[30%]' :
            i === 3 ? 'right-[8%] bottom-[35%]' :
            'left-1/2 top-[18%]'
          }`}
        >
          <motion.span
            animate={{ y: [0, -8, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
          >
            {badge}
          </motion.span>
        </ParallaxLayer>
      ))}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 py-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 inline-flex items-center gap-2 rounded-fluent border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200 backdrop-blur-sm"
            >
              <Cloud className="h-3.5 w-3.5" aria-hidden="true" />
              {heroContent.badge}
            </motion.p>

            <HeroName3D />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mb-2 text-xl font-semibold text-cyan-200 sm:text-2xl"
            >
              {personalInfo.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mb-6 font-mono text-sm text-white/60 sm:text-base"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mb-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl"
            >
              {heroContent.headline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mb-8 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base"
            >
              {heroContent.subheading}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-8 inline-flex items-center gap-2 rounded-fluent border border-cyan-400/15 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-cyan-100/80 backdrop-blur-sm"
            >
              <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {personalInfo.locationBadge}
            </motion.p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="mb-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <motion.button
                type="button"
                variants={fadeUp}
                onClick={() => scrollTo('#projects')}
                whileHover={{ scale: 1.02, boxShadow: '0 0 24px rgba(80, 230, 255, 0.2)' }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary"
              >
                View Projects
              </motion.button>
              <motion.div variants={fadeUp}>
                <ResumeDownload className="btn-secondary-light" />
              </motion.div>
              <motion.button
                type="button"
                variants={fadeUp}
                onClick={() => scrollTo('#contact')}
                whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(80, 230, 255, 0.15)' }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary-light"
              >
                Contact Me
              </motion.button>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="mb-10 flex items-center gap-3"
            >
              <motion.a
                variants={fadeUp}
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, boxShadow: '0 0 16px rgba(80,230,255,0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="rounded-fluent border border-cyan-400/15 bg-white/[0.04] p-2.5 text-cyan-200/80 backdrop-blur-sm transition-colors hover:text-cyan-100"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                variants={fadeUp}
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.08, boxShadow: '0 0 16px rgba(80,230,255,0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="rounded-fluent border border-cyan-400/15 bg-white/[0.04] p-2.5 text-cyan-200/80 backdrop-blur-sm transition-colors hover:text-cyan-100"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid w-full max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3 lg:max-w-none lg:grid-cols-3 xl:grid-cols-5"
            >
              {stats.map((stat, i) => (
                <TiltCard
                  key={i}
                  variants={fadeUp}
                  tilt={10}
                  lift={-4}
                  depth={10}
                  showGlare={false}
                  holo={false}
                  className="hero-stat-card rounded-fluent-lg p-4 text-center"
                >
                  <div className="text-2xl font-semibold text-white sm:text-3xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                  </div>
                  <div className="mt-1 text-xs text-blue-100/90 sm:text-sm">{stat.label}</div>
                </TiltCard>
              ))}
            </motion.div>
          </div>

          <ParallaxLayer speed={0.3} className="relative mx-auto flex shrink-0 justify-center lg:mx-0 -mt-6 lg:-mt-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative px-2 pb-10 pt-0 sm:px-4 sm:pb-12"
            >
              <motion.div
                className="absolute -inset-10 rounded-full border-2 border-cyan-300/70 shadow-[0_0_24px_rgba(80,230,255,0.35)]"
                animate={{ rotate: 360, opacity: [0.75, 1, 0.75] }}
                transition={{
                  rotate: { duration: 50, repeat: Infinity, ease: 'linear' },
                  opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                aria-hidden="true"
              />
              <motion.div
                className="absolute -inset-5 rounded-full border-2 border-dashed border-cyan-200/75"
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                aria-hidden="true"
              />
              <motion.div
                className="absolute -inset-14 rounded-full border-2 border-cyan-400/45 shadow-[0_0_32px_rgba(80,230,255,0.2)]"
                animate={{ rotate: 360, scale: [1, 1.03, 1] }}
                transition={{
                  rotate: { duration: 65, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                }}
                aria-hidden="true"
              />
              <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
                <div className="absolute left-1/2 top-1/2 h-[130%] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-cyan-300/55 to-transparent" />
                <div className="absolute left-1/2 top-1/2 h-px w-[130%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-300/55 to-transparent" />
                <div className="absolute left-1/2 top-1/2 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full border border-cyan-400/30" />
                <div className="absolute left-1/2 top-1/2 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full border border-cyan-400/30" />
              </div>

              <TiltCard tilt={12} lift={-8} depth={18} showGlare className="gradient-border scanline relative z-[1] !overflow-visible">
                <div
                  className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-400/35 to-azure-500/25 blur-md"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-2xl border-2 border-cyan-400/50 bg-white/[0.04] p-1.5 shadow-[0_0_30px_rgba(80,230,255,0.2)] backdrop-blur-sm">
                  <img
                    src={personalInfo.photoPath}
                    alt={personalInfo.photoAlt}
                    width={320}
                    height={400}
                    className="h-72 w-60 rounded-xl object-cover object-top sm:h-80 sm:w-72 lg:h-96 lg:w-80"
                  />
                </div>
              </TiltCard>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-2 right-0 z-20 max-w-[calc(100%-0.5rem)] rounded-xl border border-cyan-400/30 bg-azure-700/95 px-4 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-md sm:bottom-4 sm:right-2 sm:px-5"
              >
                <p className="text-xs font-semibold leading-snug text-white sm:text-sm">
                  {personalInfo.title}
                </p>
                <p className="mt-0.5 text-[11px] leading-snug text-cyan-100/90 sm:text-xs">
                  {personalInfo.location}
                </p>
              </motion.div>
            </motion.div>
          </ParallaxLayer>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => scrollTo('#about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400/50 transition-colors hover:text-cyan-300"
          aria-label="Scroll to about section"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown className="h-6 w-6" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
