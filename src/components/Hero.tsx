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
  { Icon: Cloud, x: '10%', y: '20%', delay: 0, size: 48 },
  { Icon: Server, x: '85%', y: '15%', delay: 1, size: 40 },
  { Icon: Network, x: '75%', y: '70%', delay: 2, size: 44 },
  { Icon: Container, x: '15%', y: '75%', delay: 1.5, size: 36 },
  { Icon: Cloud, x: '50%', y: '10%', delay: 0.5, size: 32 },
  { Icon: Server, x: '90%', y: '50%', delay: 2.5, size: 28 },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      {/* Animated background */}
      <div className="absolute inset-0 mesh-gradient" aria-hidden="true" />
      <div
        className="absolute inset-0 animate-gradient opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(34,211,238,0.1) 0%, rgba(59,130,246,0.05) 25%, rgba(139,92,246,0.1) 50%, rgba(34,211,238,0.05) 75%, rgba(59,130,246,0.1) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, x, y, delay, size }, i) => (
        <motion.div
          key={i}
          className="absolute text-cyan-500/20"
          style={{ left: x, top: y }}
          animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, delay, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <Icon size={size} strokeWidth={1} />
        </motion.div>
      ))}

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* Text content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm text-cyan-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              Available for opportunities · {personalInfo.location}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {personalInfo.name.split(' ')[0]}{' '}
              <span className="gradient-text">{personalInfo.name.split(' ').slice(1).join(' ')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-2 text-lg font-semibold text-cyan-400 sm:text-xl"
            >
              {personalInfo.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mb-6 font-mono text-sm text-slate-500 sm:text-base"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl"
            >
              {heroContent.headline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mb-10 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base"
            >
              {heroContent.subheading}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <button type="button" onClick={() => scrollTo('#projects')} className="btn-primary">
                View Projects
              </button>
              <a href={personalInfo.resumePath} download className="btn-secondary">
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
              <button type="button" onClick={() => scrollTo('#contact')} className="btn-secondary">
                Contact Me
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mb-12 flex items-center gap-4"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-cyan-400"
                aria-label="GitHub profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-cyan-400"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-cyan-400"
                aria-label="Send email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid w-full max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3 lg:max-w-none lg:grid-cols-3 xl:grid-cols-5"
            >
              {stats.map((stat, i) => (
                <div key={i} className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold text-white sm:text-3xl">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                    />
                  </div>
                  <div className="mt-1 text-xs text-slate-400 sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="relative mx-auto flex shrink-0 justify-center lg:mx-0"
          >
            <div className="relative">
              {/* Animated gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-60 blur-sm"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-navy-900/80 p-1.5 shadow-2xl shadow-cyan-500/10 backdrop-blur-sm">
                <img
                  src={personalInfo.photoPath}
                  alt={personalInfo.photoAlt}
                  width={320}
                  height={400}
                  className="h-72 w-60 rounded-2xl object-cover object-top sm:h-80 sm:w-72 lg:h-96 lg:w-80"
                />
              </div>
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-3 -right-3 rounded-xl border border-cyan-500/30 bg-navy-950/90 px-4 py-2 shadow-lg backdrop-blur-md"
              >
                <p className="text-xs font-medium text-cyan-400">{personalInfo.title}</p>
                <p className="text-[10px] text-slate-500">{personalInfo.location}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => scrollTo('#about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition-colors hover:text-cyan-400"
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
