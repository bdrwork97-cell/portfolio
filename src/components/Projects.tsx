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
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group flex h-full flex-col rounded-fluent-lg border border-azure-200/50 bg-white/70 p-5 transition-shadow hover:border-azure-300/60 hover:shadow-md sm:p-6"
    >
      <div className="relative flex flex-col gap-4 sm:flex-row">
        <div className="shrink-0">
          <ProjectMascot icon={mascotId} />
        </div>

        <div className="min-w-0 flex flex-1 flex-col">
          <div className="mb-3 flex items-center gap-2">
            <div className="inline-flex rounded-lg border border-azure-200/50 bg-azure-50/80 p-2">
              <Icon className="h-5 w-5 text-cyan-400" aria-hidden="true" />
            </div>
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
              <span
                key={tech}
                className="rounded-md border border-azure-200/50 bg-azure-50/60 px-2 py-0.5 font-mono text-[10px] text-ms-text-secondary sm:text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
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

        <div className="gradient-border scanline holo-glass overflow-hidden rounded-fluent-lg p-5 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
