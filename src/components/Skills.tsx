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
import { skillCategories } from '../data/portfolio';
import { useInView } from '../hooks/useScroll';

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

export default function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 mesh-gradient opacity-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subheading">
            A comprehensive toolkit for building, deploying, and managing cloud infrastructure at scale.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIndex) => {
            const Icon = iconMap[category.icon] || Cloud;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.08 }}
                className="glass-card-hover group p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 p-2 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: catIndex * 0.08 + skillIndex * 0.03,
                      }}
                      className="skill-badge"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
