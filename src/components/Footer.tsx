import { motion } from 'framer-motion';
import { Cloud, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import SectionReveal from './SectionReveal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-azure-200/50 bg-white/70 py-12 backdrop-blur-sm">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="text-cyan-400/40"
                aria-hidden="true"
              >
                <Cloud className="h-5 w-5" />
              </motion.div>
              <p className="text-center text-sm text-ms-text-secondary md:text-left">
                © {currentYear} {personalInfo.name}. Built with React, TypeScript, Tailwind CSS, and Framer Motion.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, color: '#50e6ff' }}
                whileTap={{ scale: 0.95 }}
                className="rounded-fluent border border-azure-200/50 p-2 text-ms-text-secondary transition-colors hover:border-azure-300 hover:text-azure-600"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.08, color: '#50e6ff' }}
                whileTap={{ scale: 0.95 }}
                className="rounded-fluent border border-azure-200/50 p-2 text-ms-text-secondary transition-colors hover:border-azure-300 hover:text-azure-600"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </footer>
  );
}
