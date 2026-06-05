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
import ParallaxLayer from './ParallaxLayer';

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
  featured = false,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
  featured?: boolean;
}) {
  const Icon = iconMap[project.icon] || CloudCog;
  const mascotId = project.icon as ProjectMascotId;

  return (
    <TiltCard
      initial={{ opacity: 0, y: 44 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      tilt={featured ? 6 : 9}
      lift={-8}
      depth={featured ? 16 : 12}
      className={`gradient-border project-card group relative flex flex-col overflow-hidden ${
        featured ? 'lg:flex-row lg:items-stretch lg:gap-8 lg:p-10 p-8' : 'p-6'
      }`}
    >
      <div
        className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className={`relative flex gap-4 ${featured ? 'lg:flex-1 lg:gap-6' : 'flex-col sm:flex-row'}`}>
        <div className={`shrink-0 ${featured ? 'pt-1' : ''}`}>
          <ProjectMascot icon={mascotId} large={featured} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-3 flex items-center gap-2">
            <motion.div
              className="motion-card-icon inline-flex rounded-lg border border-azure-200/50 bg-azure-50/80 p-2"
              whileHover={{ scale: 1.08 }}
            >
              <motion.div animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 3.5, repeat: Infinity }}>
                <Icon className={`text-cyan-400 ${featured ? 'h-6 w-6' : 'h-5 w-5'}`} aria-hidden="true" />
              </motion.div>
            </motion.div>
            {featured && (
              <span className="rounded-full border border-azure-300/50 bg-azure-100/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-azure-700">
                Featured Project
              </span>
            )}
          </div>

          <span className="mb-2 inline-block font-mono text-xs text-azure-600/70">{project.category}</span>
          <h3
            className={`mb-3 font-bold text-ms-text transition-colors group-hover:text-azure-600 ${
              featured ? 'text-2xl md:text-3xl' : 'text-lg'
            }`}
          >
            {project.title}
          </h3>
          <p className={`mb-4 leading-relaxed text-ms-text-secondary ${featured ? 'text-base' : 'text-sm'}`}>
            {project.description}
          </p>

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

      {featured && (
        <div className="relative mt-6 flex flex-col items-center justify-center gap-3 lg:mt-0 lg:w-56 lg:shrink-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-2 rounded-full border border-dashed border-azure-200/50"
            aria-hidden="true"
          />
          <div className="relative grid grid-cols-2 gap-2 p-3">
            {project.techStack.slice(0, 4).map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1, y: [0, -3, 0] }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ delay: 0.3 + i * 0.1, y: { duration: 2.5, repeat: Infinity, delay: i * 0.2 } }}
                whileHover={{ y: -4, scale: 1.06 }}
                className="rounded-lg border border-azure-200/50 bg-azure-50/80 px-3 py-2 text-center text-[10px] font-semibold text-azure-700"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </TiltCard>
  );
}

export default function Projects() {
  const { ref, isInView } = useInView();
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="holo-section">
      <div className="holo-section-overlay" aria-hidden="true" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={<span className="gradient-text-dark">{sectionContent.projects.heading}</span>}
          subtitle={sectionContent.projects.subtitle}
        />

        <ParallaxLayer speed={0.2} className="mb-10">
          <ProjectCard project={featured} index={0} isInView={isInView} featured />
        </ParallaxLayer>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index + 1} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
