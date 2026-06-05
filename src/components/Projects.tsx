import { motion } from 'framer-motion';
import {
  CloudCog,
  Boxes,
  Layers,
  Workflow,
  LineChart,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { projects, sectionContent } from '../data/portfolio';
import { useInView } from '../hooks/useScroll';
import TiltCard from './TiltCard';
import { ProjectMascot, type ProjectMascotId } from './ProjectMascot';
import SectionHeader from './SectionHeader';

const iconMap: Record<string, LucideIcon> = {
  CloudCog,
  Boxes,
  Layers,
  Workflow,
  LineChart,
  ShieldCheck,
};

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
}) {
  const Icon = iconMap[project.icon] || CloudCog;
  const mascotId = project.icon as ProjectMascotId;

  return (
    <TiltCard
      initial={{ opacity: 0, y: 44 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      tilt={9}
      lift={-8}
      className="gradient-border project-card group relative flex h-full flex-col overflow-hidden p-6"
    >
      <div
        className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-4 sm:flex-row">
        <div className="shrink-0">
          <ProjectMascot icon={mascotId} />
        </div>

        <div className="min-w-0 flex flex-1 flex-col">
          <div className="mb-3 flex items-center gap-2">
            <motion.div
              className="motion-card-icon inline-flex rounded-lg border border-azure-200/50 bg-azure-50/80 p-2"
              whileHover={{ scale: 1.08 }}
            >
              <motion.div animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 3.5, repeat: Infinity }}>
                <Icon className="h-5 w-5 text-cyan-400" aria-hidden="true" />
              </motion.div>
            </motion.div>
          </div>

          <span className="mb-2 inline-block font-mono text-xs text-azure-600/70">{project.category}</span>
          <h3 className="mb-3 text-lg font-bold text-ms-text transition-colors group-hover:text-azure-600">
            {project.title}
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-ms-text-secondary">{project.description}</p>

          <ul className="mb-4 space-y-1.5">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2 text-xs text-ms-text-secondary sm:text-sm">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-1.5 border-t border-azure-200/50 pt-4">
            {project.techStack.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ y: -2, scale: 1.03 }}
                className="rounded-md border border-azure-200/50 bg-azure-50/60 px-2 py-0.5 font-mono text-[10px] text-ms-text-secondary group-hover:border-azure-200/60 sm:text-xs"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </TiltCard>
  );
}

export default function Projects() {
  const { ref, isInView } = useInView();

  return (
    <section id="projects" className="holo-section">
      <div className="holo-section-overlay" aria-hidden="true" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={<span className="gradient-text-dark">{sectionContent.projects.heading}</span>}
          subtitle={sectionContent.projects.subtitle}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
