import { MapPin } from 'lucide-react';
import { aboutContent, personalInfo, sectionContent } from '../data/portfolio';
import SectionHeader from './SectionHeader';
import CloudArchitectureDiagram from './CloudArchitectureDiagram';

export default function About() {
  return (
    <section id="about" className="holo-section">
      <div className="holo-section-overlay" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={<span className="gradient-text-dark">{sectionContent.about.heading}</span>}
          subtitle={sectionContent.about.title}
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="holo-glass relative rounded-fluent-lg lg:col-span-3 p-8 lg:p-10">
            <div className="space-y-6 text-base leading-relaxed text-ms-text-secondary">
              {aboutContent.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-ms-text-secondary">
              <MapPin className="h-4 w-4 shrink-0 text-azure-600" aria-hidden="true" />
              {personalInfo.locationBadge}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="gradient-border scanline holo-glass relative h-full overflow-hidden rounded-fluent-lg p-8">
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-azure-600/80">
                Cloud Architecture Flow
              </p>
              <CloudArchitectureDiagram />
              <p className="mt-8 text-sm leading-relaxed text-ms-text-secondary">
                From cloud provisioning to secure pipelines — I design infrastructure that automates delivery and keeps production reliable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
