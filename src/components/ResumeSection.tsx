import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useInView } from '../hooks/useScroll';

export default function ResumeSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="resume" className="relative bg-white py-24 sm:py-32">
      <div className="absolute inset-0 mesh-gradient opacity-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card mx-auto max-w-2xl p-10 text-center"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-azure-500/20 to-azure-500/20">
            <FileDown className="h-8 w-8 text-azure-600" aria-hidden="true" />
          </div>

          <h2 className="mb-3 text-2xl font-bold text-ms-text md:text-3xl">
            Want the full resume?
          </h2>
          <p className="mb-8 text-ms-text-secondary">
            View or save my complete resume with detailed experience, skills, and education. Use &ldquo;Save as PDF&rdquo; on the resume page to download.
          </p>

          <a href={personalInfo.resumePath} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <FileDown className="h-4 w-4" aria-hidden="true" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
