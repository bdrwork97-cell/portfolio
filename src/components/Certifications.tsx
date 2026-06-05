import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Cloud, CloudRain, Code2, Container, Shield, BookOpen, Eye, X, BarChart2 } from 'lucide-react';
import { certifications, sectionContent, type CertificationItem } from '../data/portfolio';
import { useInView } from '../hooks/useScroll';
import TiltCard from './TiltCard';
import SectionHeader from './SectionHeader';
import {
  CertifiedExpertMascot,
  LearningPetMascot,
  getLearningSnippet,
  getPetVariant,
} from './CertificationMascot';

const iconMap = { Cloud, CloudRain, Code2, Container, Shield, BarChart2 };

function CertificateModal({
  item,
  onClose,
}: {
  item: CertificationItem;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!item.certificateImage) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-azure-900/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.25 }}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-fluent-lg border border-[#edebe9] bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-modal-title"
      >
        <div className="flex items-center justify-between border-b border-[#edebe9] px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-azure-600">Certificate</p>
            <h3 id="certificate-modal-title" className="font-semibold text-ms-text">
              {item.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-fluent p-2 text-ms-text-secondary transition-colors hover:bg-ms-gray hover:text-ms-text"
            aria-label="Close certificate preview"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="max-h-[calc(90vh-4.5rem)] overflow-auto bg-ms-gray p-4 sm:p-6">
          <img
            src={item.certificateImage}
            alt={item.certificateAlt ?? `${item.title} certificate`}
            className="mx-auto w-full max-w-3xl rounded-fluent border border-[#edebe9] bg-white shadow-sm"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function CertificationCard({
  item,
  index,
  isInView,
  learningIndex,
  onViewCertificate,
}: {
  item: CertificationItem;
  index: number;
  isInView: boolean;
  learningIndex: number;
  onViewCertificate: (item: CertificationItem) => void;
}) {
  const Icon = iconMap[item.icon as keyof typeof iconMap] || BookOpen;
  const isCertified = Boolean(item.certificateImage);
  const isPowerBi = item.title.includes('Power BI');

  return (
    <TiltCard
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      tilt={8}
      depth={12}
      className={`gradient-border relative overflow-hidden p-5 ${
        isCertified ? 'border-azure-200/60' : 'border-violet-400/15'
      }`}
    >
      <div
        className={`pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full blur-2xl ${
          isCertified ? 'bg-azure-100/80' : 'bg-violet-400/10'
        }`}
        aria-hidden="true"
      />

      <div className="relative flex gap-4">
        <div className="flex flex-col items-center gap-1">
          {isCertified ? (
            <CertifiedExpertMascot cert={isPowerBi ? 'powerbi' : 'azure'} />
          ) : (
            <LearningPetMascot
              variant={getPetVariant(learningIndex)}
              snippet={getLearningSnippet(item.title)}
              learningIndex={learningIndex}
            />
          )}
          <motion.div
            className={`rounded-lg border p-2 ${
              isCertified ? 'border-azure-200/50 bg-azure-50/80' : 'border-violet-400/15 bg-violet-400/5'
            }`}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
          >
            <Icon
              className={`h-4 w-4 ${isCertified ? 'text-cyan-400' : 'text-violet-400'}`}
              aria-hidden="true"
            />
          </motion.div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold leading-snug text-ms-text sm:text-base">{item.title}</h3>
            <motion.span
              animate={{ opacity: [0.65, 1, 0.65] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              className={`mt-2 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                isCertified
                  ? 'border border-azure-200/60 bg-azure-100/80 text-cyan-300'
                  : 'border border-violet-400/20 bg-violet-400/10 text-violet-300'
              }`}
            >
              {isCertified ? (item.subtitle ?? 'Certified') : 'Learning · Hands-on'}
            </motion.span>
            {!isCertified && (
              <p className="mt-2 text-[10px] leading-relaxed text-ms-text-secondary">
                Building hands-on skills across cloud and DevOps platforms.
              </p>
            )}
            {isCertified && (
              <p className="mt-2 text-[10px] leading-relaxed text-ms-text-secondary">
                Verified credential — tap View to see the certificate.
              </p>
            )}
          </div>

          {isCertified && (
            <button
              type="button"
              onClick={() => onViewCertificate(item)}
              className="btn-secondary mt-4 w-fit !px-3 !py-1.5 text-xs"
              aria-label={`View ${item.title} certificate`}
            >
              <Eye className="h-3.5 w-3.5" aria-hidden="true" />
              View Certificate
            </button>
          )}
        </div>
      </div>
    </TiltCard>
  );
}

export default function Certifications() {
  const { ref, isInView } = useInView();
  const [activeCertificate, setActiveCertificate] = useState<CertificationItem | null>(null);

  let learningCounter = 0;

  return (
    <section id="learning" className="holo-section">
      <div className="holo-section-overlay" aria-hidden="true" />
      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={<span className="gradient-text-dark">{sectionContent.learning.heading}</span>}
          subtitle={sectionContent.learning.disclaimer}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.items.map((item, index) => {
            const learningIndex = item.certificateImage ? -1 : learningCounter++;
            return (
              <CertificationCard
                key={item.title}
                item={item}
                index={index}
                isInView={isInView}
                learningIndex={learningIndex < 0 ? 0 : learningIndex}
                onViewCertificate={setActiveCertificate}
              />
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeCertificate && (
          <CertificateModal item={activeCertificate} onClose={() => setActiveCertificate(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
