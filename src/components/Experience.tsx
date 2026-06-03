import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import { experiences } from '../data/portfolio';
import { useInView } from '../hooks/useScroll';

export default function Experience() {
  const { ref, isInView } = useInView();

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subheading">
            Production cloud and DevOps experience across AWS and Azure environments.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-emerald-500/50 via-teal-500/30 to-violet-500/20 md:left-1/2 md:block md:-translate-x-px"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-8 hidden md:left-1/2 md:block md:-translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                      className="relative"
                    >
                      <div className="h-4 w-4 rounded-full border-2 border-emerald-400 bg-ink-950" />
                      <div className="absolute inset-0 animate-pulse-glow rounded-full bg-emerald-400/30" />
                    </motion.div>
                  </div>

                  <div className={`md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="glass-card-hover ml-10 p-6 md:ml-0">
                      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                          <div className="mt-1 flex items-center gap-2 text-emerald-400">
                            <Briefcase className="h-4 w-4" aria-hidden="true" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                          {exp.dates}
                        </span>
                      </div>

                      <div className="mb-3 flex items-center gap-1 text-sm text-slate-500">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        {exp.location}
                      </div>

                      <p className="mb-4 text-sm leading-relaxed text-slate-400">{exp.description}</p>

                      <ul className="space-y-2">
                        {exp.bullets.map((bullet, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 }}
                            className="flex items-start gap-2 text-sm text-slate-400"
                          >
                            <span
                              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400"
                              aria-hidden="true"
                            />
                            {bullet}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2" aria-hidden="true" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
