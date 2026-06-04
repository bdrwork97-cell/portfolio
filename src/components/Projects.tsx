import { motion } from 'framer-motion';
import {
  CloudCog,
  Boxes,
  Layers,
  Workflow,
  LineChart,
  ShieldCheck,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';
import { projects } from '../data/portfolio';
import { useInView } from '../hooks/useScroll';

const iconMap: Record<string, LucideIcon> = {
  CloudCog,
  Boxes,
  Layers,
  Workflow,
  LineChart,
  ShieldCheck,
};

export default function Projects() {
  const { ref, isInView } = useInView();

  return (
    <section id="projects" className="relative bg-white py-24 sm:py-32">
      <div className="absolute inset-0 mesh-gradient opacity-30" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            Featured <span className="gradient-text-dark">Projects</span>
          </h2>
          <p className="section-subheading">
            Cloud infrastructure, automation, and DevOps initiatives from production environments.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = iconMap[project.icon] || CloudCog;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card-hover group relative flex flex-col overflow-hidden p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-azure-500/5 to-azure-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />

                <div className="relative">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="rounded-xl bg-gradient-to-br from-azure-500/20 to-azure-500/20 p-3 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6 text-azure-600" aria-hidden="true" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-ms-text-secondary transition-all duration-300 group-hover:text-azure-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </div>

                  <span className="mb-2 inline-block font-mono text-xs text-azure-600/80">
                    {project.category}
                  </span>

                  <h3 className="mb-3 text-lg font-bold text-ms-text transition-colors group-hover:text-azure-700">
                    {project.title}
                  </h3>

                  <p className="mb-4 text-sm leading-relaxed text-ms-text-secondary">{project.description}</p>

                  <ul className="mb-4 space-y-1.5">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-xs text-ms-text-secondary">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-azure-400" aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-1.5 border-t border-[#edebe9] pt-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-ms-gray px-2 py-0.5 font-mono text-[10px] text-ms-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
