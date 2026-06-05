import {
  Cloud,
  Code2,
  Container,
  GitBranch,
  Shield,
  Terminal,
  type LucideIcon,
} from 'lucide-react';
import { sectionContent, skillCategories } from '../data/portfolio';
import { useInView } from '../hooks/useScroll';
import TiltCard from './TiltCard';
import SectionHeader from './SectionHeader';

const iconMap: Record<string, LucideIcon> = {
  Cloud,
  Code2,
  Container,
  GitBranch,
  Shield,
  Terminal,
};

export default function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="holo-section">
      <div className="holo-section-overlay" aria-hidden="true" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={<span className="gradient-text-dark">{sectionContent.skills.heading}</span>}
          subtitle={sectionContent.skills.title}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIndex) => {
            const Icon = iconMap[category.icon] || Cloud;

            return (
              <TiltCard
                key={category.title}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.06 }}
                tilt={8}
                className="gradient-border holo-glass group relative flex h-full flex-col p-5"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-lg border border-azure-200/50 bg-azure-50/80 p-2">
                    <Icon className="h-5 w-5 text-azure-600" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold leading-snug text-ms-text">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
