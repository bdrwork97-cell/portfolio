import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-azure-900 via-cyan-400 to-azure-300"
        style={{ scaleX }}
        aria-hidden="true"
      />
      <motion.div
        className="fixed left-0 right-0 top-0 z-[59] h-[2px] origin-left bg-cyan-400/30 blur-sm"
        style={{ scaleX }}
        aria-hidden="true"
      />
    </>
  );
}
