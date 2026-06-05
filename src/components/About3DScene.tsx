import { motion } from 'framer-motion';

export function AboutFloatingLayers() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute left-[6%] top-[28%] hidden md:block"
        style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
        animate={{ rotateY: [0, 18, 0], rotateX: [8, 16, 8], y: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="relative h-20 w-28">
          <div className="absolute inset-0 rounded-lg border border-azure-300/30 bg-azure-500/10 shadow-lg backdrop-blur-sm" style={{ transform: 'translateZ(0px)' }} />
          <div className="absolute inset-0 rounded-lg border border-azure-300/25 bg-azure-400/10 shadow-md" style={{ transform: 'translateZ(16px) translateY(-8px)' }} />
          <div className="absolute inset-0 rounded-lg border border-azure-300/20 bg-azure-300/10" style={{ transform: 'translateZ(32px) translateY(-16px)' }} />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] right-[8%] hidden lg:block"
        style={{ perspective: 900 }}
        animate={{ rotateX: [10, 20, 10], rotateZ: [0, 6, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex gap-2" style={{ transformStyle: 'preserve-3d' }}>
          {['AWS', 'Azure', 'K8s'].map((label, i) => (
            <motion.div
              key={label}
              className="rounded-md border border-azure-200/40 bg-white/60 px-2 py-1 text-[9px] font-bold text-azure-700 shadow-sm backdrop-blur-sm"
              style={{ transform: `translateZ(${i * 12}px)` }}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2.5, delay: i * 0.2, repeat: Infinity }}
            >
              {label}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
