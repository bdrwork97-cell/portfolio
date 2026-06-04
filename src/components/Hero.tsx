import { motion } from 'framer-motion';
import {
  Cloud,
  Server,
  Network,
  Container,
  Download,
  ArrowDown,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';
import { heroContent, personalInfo, stats } from '../data/portfolio';
import { AnimatedCounter } from './AnimatedCounter';

const floatingIcons = [
  { Icon: Cloud, x: '8%', y: '18%', delay: 0, size: 44 },
  { Icon: Server, x: '88%', y: '12%', delay: 1, size: 38 },
  { Icon: Network, x: '78%', y: '68%', delay: 2, size: 40 },
  { Icon: Container, x: '12%', y: '72%', delay: 1.5, size: 34 },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0 azure-hero-bg animate-gradient" aria-hidden="true" />
      <div className="absolute inset-0 mesh-gradient opacity-90" aria-hidden="true" />

      {/* Azure-style subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      {floatingIcons.map(({ Icon, x, y, delay, size }, i) => (
        <motion.div
          key={i}
          className="absolute text-azure-300/25"
          style={{ left: x, top: y }}
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 6, delay, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <Icon size={size} strokeWidth={1} />
        </motion.div>
      ))}

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 py-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 inline-flex items-center gap-2 rounded-fluent bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-azure-200 backdrop-blur-sm"
            >
              <Cloud className="h-3.5 w-3.5" aria-hidden="true" />
              Azure · AWS · Kubernetes
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {personalInfo.name.split(' ')[0]}{' '}
              <span className="gradient-text">{personalInfo.name.split(' ').slice(1).join(' ')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mb-2 text-xl font-semibold text-azure-200 sm:text-2xl"
            >
              {personalInfo.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mb-6 font-mono text-sm text-white/70 sm:text-base"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mb-8 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl"
            >
              {heroContent.headline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mb-10 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base"
            >
              {heroContent.subheading}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mb-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <button type="button" onClick={() => scrollTo('#projects')} className="btn-primary !bg-white !text-azure-600 hover:!bg-azure-50 hover:!text-azure-700">
                View Projects
              </button>
              <a href={personalInfo.resumePath} target="_blank" rel="noopener noreferrer" className="btn-secondary-light">
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
              <button type="button" onClick={() => scrollTo('#contact')} className="btn-secondary-light">
                Contact Me
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mb-10 flex items-center gap-3"
            >
              {[Github, Linkedin, Mail].map((Icon, idx) => {
                const href =
                  idx === 0
                    ? personalInfo.github
                    : idx === 1
                      ? personalInfo.linkedin
                      : `mailto:${personalInfo.email}`;
                const label = idx === 0 ? 'GitHub' : idx === 1 ? 'LinkedIn' : 'Email';
                return (
                  <a
                    key={label}
                    href={href}
                    target={idx < 2 ? '_blank' : undefined}
                    rel={idx < 2 ? 'noopener noreferrer' : undefined}
                    className="rounded-fluent bg-white/10 p-2.5 text-white/80 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
                    aria-label={`${label} profile`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="grid w-full max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3 lg:max-w-none lg:grid-cols-3 xl:grid-cols-5"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-fluent-lg border border-white/15 bg-white/10 p-4 text-center backdrop-blur-md"
                >
                  <div className="text-2xl font-semibold text-white sm:text-3xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                  </div>
                  <div className="mt-1 text-xs text-azure-100/90 sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative mx-auto flex shrink-0 justify-center lg:mx-0"
          >
            <div className="relative">
              <div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-azure-300/60 to-azure-500/40 blur-md"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-2xl border-2 border-white/30 bg-white/10 p-1.5 shadow-2xl backdrop-blur-sm">
                <img
                  src={personalInfo.photoPath}
                  alt={personalInfo.photoAlt}
                  width={320}
                  height={400}
                  className="h-72 w-60 rounded-xl object-cover object-top sm:h-80 sm:w-72 lg:h-96 lg:w-80"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-3 -right-3 rounded-fluent-lg border border-white/20 bg-azure-600 px-4 py-2 shadow-lg"
              >
                <p className="text-xs font-semibold text-white">{personalInfo.title}</p>
                <p className="text-[10px] text-azure-200">{personalInfo.location}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => scrollTo('#about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 transition-colors hover:text-azure-300"
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
