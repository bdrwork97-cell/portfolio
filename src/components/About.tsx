import { motion } from 'framer-motion';
import { MapPin, GraduationCap } from 'lucide-react';
import { aboutContent, education, personalInfo } from '../data/portfolio';
import { useInView } from '../hooks/useScroll';

export default function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subheading">
            Cloud infrastructure engineer focused on automation, reliability, and security.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card-hover lg:col-span-3 p-8"
          >
            <div className="space-y-4 text-slate-400 leading-relaxed">
              {aboutContent.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                {personalInfo.location}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6 lg:col-span-2"
          >
            <div className="glass-card-hover overflow-hidden p-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="relative shrink-0">
                  <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 opacity-50 blur-sm" aria-hidden="true" />
                  <img
                    src={personalInfo.photoPath}
                    alt={personalInfo.photoAlt}
                    width={80}
                    height={80}
                    className="relative h-20 w-20 rounded-full border-2 border-white/20 object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{personalInfo.name}</h3>
                  <p className="text-sm text-cyan-400">{personalInfo.title}</p>
                  <p className="text-xs text-slate-500">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="glass-card-hover p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-cyan-500/10 p-2">
                  <GraduationCap className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-white">Education</h3>
              </div>
              <p className="font-medium text-slate-300">{education.degree}</p>
              <p className="mt-1 text-sm text-slate-400">{education.school}</p>
              <p className="mt-1 text-sm text-cyan-400/80">{education.dates}</p>
            </div>

            <div className="glass-card-hover p-6">
              <h3 className="mb-4 font-semibold text-white">Core Focus Areas</h3>
              <ul className="space-y-3">
                {[
                  'Infrastructure as Code & Automation',
                  'Kubernetes & Container Orchestration',
                  'CI/CD Pipeline Engineering',
                  'Cloud Security & Compliance',
                  'Monitoring & Observability',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
