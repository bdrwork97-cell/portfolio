import { motion, useScroll, useTransform, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
import { useRef } from 'react';

interface SectionRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  depth?: boolean;
}

export default function SectionReveal({
  children,
  className,
  delay = 0,
  depth = true,
  ...props
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], depth && !reduced ? [24, 0] : [0, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], depth && !reduced ? [0.96, 1] : [1, 1]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, ease: 'easeOut', delay }}
      style={depth && !reduced ? { y: parallaxY, scale } : undefined}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
