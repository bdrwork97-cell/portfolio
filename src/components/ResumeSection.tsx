import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';
import { personalInfo, sectionContent } from '../data/portfolio';
import TiltCard from './TiltCard';
import { DownloadResumeMascot, ViewResumeLensMascot } from './ResumeMascot';
import SectionReveal from './SectionReveal';

export default function ResumeSection() {
  const [downloadActive, setDownloadActive] = useState(false);
  const [viewActive, setViewActive] = useState(false);

  const handleDownloadClick = () => {
    setDownloadActive(true);
    window.setTimeout(() => setDownloadActive(false), 900);
  };

  return (
    <section id="resume" className="holo-section">
      <div className="holo-section-overlay" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <TiltCard className="gradient-border scanline mx-auto max-w-3xl overflow-hidden p-8 sm:p-10" tilt={9} depth={14}>
            <div className="mb-10 text-center">
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="motion-card-icon mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-azure-200/60 bg-azure-50/80 shadow-neon-azure"
              >
                <FileDown className="h-7 w-7 text-azure-600" aria-hidden="true" />
              </motion.div>

              <h2 className="mb-3 text-2xl font-bold text-ms-text md:text-3xl">
                {sectionContent.resume.title}
              </h2>
              <p className="mx-auto max-w-xl text-ms-text-secondary">{sectionContent.resume.description}</p>
            </div>

            <div className="flex items-end justify-center gap-10 sm:gap-16">
              <motion.a
                href={personalInfo.resumePath}
                download={personalInfo.resumeDownloadName}
                aria-label="Download resume PDF"
                onClick={handleDownloadClick}
                className="group flex flex-col items-center rounded-2xl p-3 transition-colors hover:bg-azure-50/80 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:ring-offset-2 focus:ring-offset-holo-bg"
                whileHover={{ scale: 1.05, y: -4, boxShadow: '0 0 24px rgba(80,230,255,0.15)' }}
                whileTap={{ scale: 0.96 }}
              >
                <DownloadResumeMascot active={downloadActive} />
              </motion.a>

              <motion.div
                className="hidden h-px w-10 self-center bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent sm:block"
                animate={{ opacity: [0.3, 0.8, 0.3], scaleX: [0.8, 1, 0.8] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                aria-hidden="true"
              />

              <motion.a
                href={personalInfo.resumeHtmlPath}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View resume in browser"
                onMouseEnter={() => setViewActive(true)}
                onMouseLeave={() => setViewActive(false)}
                onFocus={() => setViewActive(true)}
                onBlur={() => setViewActive(false)}
                className="group flex flex-col items-center rounded-2xl p-3 transition-colors hover:bg-azure-50/80 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:ring-offset-2 focus:ring-offset-holo-bg"
                whileHover={{ scale: 1.05, y: -4, boxShadow: '0 0 24px rgba(80,230,255,0.15)' }}
                whileTap={{ scale: 0.96 }}
              >
                <ViewResumeLensMascot active={viewActive} />
              </motion.a>
            </div>
          </TiltCard>
        </SectionReveal>
      </div>
    </section>
  );
}
