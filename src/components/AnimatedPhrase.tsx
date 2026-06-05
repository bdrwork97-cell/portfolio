import { motion } from 'framer-motion';

interface AnimatedPhraseProps {
  words: string[];
  className?: string;
  baseDelay?: number;
  stagger?: number;
}

export default function AnimatedPhrase({
  words,
  className = '',
  baseDelay = 0,
  stagger = 0.22,
}: AnimatedPhraseProps) {
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={word}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: baseDelay + i * stagger, ease: 'easeOut' }}
          className="inline-block"
        >
          {word}
          {i < words.length - 1 ? (
            <span className="text-azure-300/80">.</span>
          ) : (
            <span className="text-azure-300/80">.</span>
          )}
          {i < words.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </span>
  );
}
