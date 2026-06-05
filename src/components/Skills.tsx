import { motion } from 'framer-motion';
import {
  Cloud,
  Code2,
  Container,
  GitBranch,
  Activity,
  Shield,
  Network,
  Terminal,
  Database,
  Server,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { sectionContent, skillCategories } from '../data/portfolio';
import { useInView } from '../hooks/useScroll';
import TiltCard from './TiltCard';
import SectionHeader from './SectionHeader';
import { SkillMascot, type SkillMascotId } from './SkillMascot';
import SkillsConnectionNetwork from './SkillsConnectionNetwork';

const iconMap: Record<string, LucideIcon> = {
  Cloud,
  Code2,
  Container,
  GitBranch,
  Activity,
  Shield,
  Network,
  Terminal,
  Database,
  Server,
  Wrench,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const badgeVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 260, damping: 20 },
  },
};

export default function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="holo-section">
      <div className="holo-section-overlay" aria-hidden="true" />
      <motion.div
        className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-azure-50/80 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={<span className="gradient-text-dark">{sectionContent.skills.heading}</span>}
          subtitle={sectionContent.skills.title}
        />

        <SkillsConnectionNetwork count={skillCategories.length}>
          {(registerRef) => (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {skillCategories.map((category, catIndex) => {
                const Icon = iconMap[category.icon] || Cloud;
                const mascotId = category.icon as SkillMascotId;

                return (
                  <div key={category.title} ref={registerRef(catIndex)} className="h-full">
                    <TiltCard
                      initial={{ opacity: 0, y: 40 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.55, delay: catIndex * 0.07 }}
                      tilt={8}
                      depth={12}
                      className="gradient-border group relative h-full overflow-hidden p-5 sm:p-6"
                    >
                      <div
                        className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-azure-100/80 blur-2xl"
                        aria-hidden="true"
                      />

                      <div className="relative flex gap-3 sm:gap-4">
                        <div className="flex shrink-0 flex-col items-center gap-1.5">
                          <SkillMascot icon={mascotId} />
                          <motion.div
                            className="motion-card-icon rounded-lg border border-azure-200/50 bg-azure-50/80 p-2"
                            animate={{ scale: [1, 1.06, 1] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: catIndex * 0.15 }}
                          >
                            <Icon className="h-4 w-4 text-azure-600" aria-hidden="true" />
                          </motion.div>
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="mb-3 font-semibold leading-snug text-ms-text">{category.title}</h3>

                          <motion.div
                            className="flex flex-wrap gap-2"
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                          >
                            {category.skills.map((skill) => (
                              <motion.span
                                key={skill}
                                variants={badgeVariants}
                                whileHover={{ y: -2, boxShadow: '0 4px 14px rgba(80, 230, 255, 0.12)' }}
                                className="skill-badge"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </motion.div>
                        </div>
                      </div>
                    </TiltCard>
                  </div>
                );
              })}
            </div>
          )}
        </SkillsConnectionNetwork>
      </div>
    </section>
  );
}
