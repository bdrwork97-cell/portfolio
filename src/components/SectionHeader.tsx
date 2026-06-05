import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: string;
  dark?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  dark = false,
}: SectionHeaderProps) {
  return (
    <SectionReveal className="mb-12" style={{ perspective: 1200 }}>
      <motion.h2
        initial={{ opacity: 0, y: 20, rotateX: 8 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        style={{ transformStyle: 'preserve-3d' }}
        className={`mb-4 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl ${
          dark ? 'text-white' : 'text-ms-text'
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className={`max-w-2xl text-base leading-relaxed md:text-lg ${dark ? 'text-white/65' : 'text-ms-text-secondary'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </SectionReveal>
  );
}
