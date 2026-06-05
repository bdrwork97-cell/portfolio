import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import { experiences, sectionContent } from '../data/portfolio';
import { useInView } from '../hooks/useScroll';
import { TimelineGapInfra } from './ExperienceCloudBackground';
import { ExperienceSectionBackdrop } from './ExperienceGap3DDecor';
import { ExperienceTenureMascot } from './ExperienceTenureMascot';
import TiltCard from './TiltCard';
import SectionHeader from './SectionHeader';
import SectionBackgroundCartoons from './SectionBackgroundCartoons';

export default function Experience() {
  const { ref, isInView } = useInView();

  return (
    <section id="experience" className="holo-section">
      <div className="holo-section-overlay" aria-hidden="true" />
      <SectionBackgroundCartoons theme="experience" />
      <ExperienceSectionBackdrop />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={<span className="gradient-text-dark">{sectionContent.experience.heading}</span>}
          subtitle={sectionContent.experience.title}
        />

        <div className="relative">
          <motion.div
            className="absolute left-4 top-0 hidden h-full w-px origin-top bg-gradient-to-b from-cyan-400/50 via-cyan-400/25 to-transparent md:left-1/2 md:block md:-translate-x-px"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
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
                  transition={{ duration: 0.65, delay: index * 0.12 }}
                  className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="absolute left-4 top-8 hidden md:left-1/2 md:block md:-translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.12 + 0.25 }}
                      className="relative"
                    >
                      <div className="h-4 w-4 rounded-full border-2 border-azure-400 bg-white" />
                      <motion.div
                        className="absolute inset-0 rounded-full bg-cyan-400/30 shadow-[0_0_12px_rgba(80,230,255,0.4)]"
                        animate={{ opacity: [0.3, 0.75, 0.3], scale: [1, 1.35, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    </motion.div>
                  </div>

                  <div className={`relative z-10 md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                    <TiltCard tilt={7} depth={10} className="relative ml-10 p-6 md:ml-0">
                      <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                        <div className="flex min-w-0 items-start gap-3">
                          <ExperienceTenureMascot tenure={exp.tenure} />
                          <div className="min-w-0">
                            <h3 className="text-lg font-bold text-ms-text">{exp.role}</h3>
                            <div className="mt-1 flex items-center gap-2 text-azure-600/80">
                              <Briefcase className="h-4 w-4 shrink-0" aria-hidden="true" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                          </div>
                        </div>
                        <span
                          className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${
                            exp.tenure === 'current'
                              ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
                              : exp.tenure === 'recent'
                                ? 'border-azure-300/50 bg-azure-100/80 text-cyan-300'
                                : 'border-azure-200/40 bg-azure-50/60 text-ms-text-secondary'
                          }`}
                        >
                          {exp.dates}
                        </span>
                      </div>

                      <div className="mb-3 flex items-center gap-1 text-sm text-ms-text-secondary">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        {exp.location}
                      </div>

                      <p className="mb-4 text-sm leading-relaxed text-ms-text-secondary">{exp.description}</p>

                      <ul className="space-y-2">
                        {exp.bullets.map((bullet, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.3, delay: index * 0.12 + i * 0.03 }}
                            className="flex items-start gap-2 text-sm text-ms-text-secondary"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                            {bullet}
                          </motion.li>
                        ))}
                      </ul>
                    </TiltCard>
                  </div>

                  <div
                    className="relative hidden min-h-[400px] overflow-hidden md:block md:w-1/2"
                    aria-hidden="true"
                  >
                    <TimelineGapInfra
                      index={index}
                      isEven={isEven}
                      isInView={isInView}
                      company={exp.company}
                      tenure={exp.tenure}
                    />
                  </div>

                  <div className="relative mt-6 min-h-[240px] overflow-hidden md:hidden" aria-hidden="true">
                    <TimelineGapInfra
                      index={index}
                      isEven={isEven}
                      isInView={isInView}
                      company={exp.company}
                      tenure={exp.tenure}
                      compact
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
