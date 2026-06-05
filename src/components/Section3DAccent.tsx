import { type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export type Section3DTheme = 'cloud' | 'server' | 'pipeline' | 'orbit';

function IsometricCube({ size = 48, color = '#0078d4' }: { size?: number; color?: string }) {
  const h = size * 0.35;
  return (
    <div className="relative" style={{ width: size, height: size, transformStyle: 'preserve-3d' }}>
      <div
        className="absolute rounded-sm opacity-90"
        style={{
          width: size,
          height: size,
          background: color,
          transform: `translateZ(${h}px)`,
        }}
      />
      <div
        className="absolute rounded-sm opacity-75"
        style={{
          width: size,
          height: size,
          background: color,
          filter: 'brightness(1.15)',
          transform: `rotateY(90deg) translateZ(${h}px)`,
        }}
      />
      <div
        className="absolute rounded-sm opacity-60"
        style={{
          width: size,
          height: size,
          background: color,
          filter: 'brightness(0.85)',
          transform: `rotateX(90deg) translateZ(${h}px)`,
        }}
      />
    </div>
  );
}

function CloudStack() {
  return (
    <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className="opacity-30">
      <motion.ellipse
        cx="40"
        cy="48"
        rx="32"
        ry="18"
        fill="#0078d4"
        animate={{ x: [0, 6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.ellipse
        cx="72"
        cy="40"
        rx="28"
        ry="16"
        fill="#50e6ff"
        animate={{ x: [0, -5, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.ellipse
        cx="58"
        cy="56"
        rx="24"
        ry="14"
        fill="#005a9e"
        opacity="0.6"
        animate={{ y: [0, 3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  );
}

function ServerStack() {
  return (
    <div className="flex flex-col gap-1.5 opacity-25">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="h-5 w-14 rounded-sm border border-azure-400/40 bg-gradient-to-r from-azure-500/30 to-azure-300/20"
          animate={{ x: [0, i % 2 === 0 ? 4 : -4, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
          style={{ transform: `translateZ(${i * 8}px)` }}
        />
      ))}
    </div>
  );
}

function PipelineNodes() {
  return (
    <svg width="100" height="60" viewBox="0 0 100 60" className="opacity-25">
      {[20, 50, 80].map((cx, i) => (
        <motion.circle
          key={cx}
          cx={cx}
          cy="30"
          r="8"
          fill="#0078d4"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
        />
      ))}
      <motion.line
        x1="28"
        y1="30"
        x2="42"
        y2="30"
        stroke="#50e6ff"
        strokeWidth="2"
        animate={{ pathLength: [0.3, 1, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      <motion.line
        x1="58"
        y1="30"
        x2="72"
        y2="30"
        stroke="#50e6ff"
        strokeWidth="2"
        animate={{ pathLength: [1, 0.3, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
    </svg>
  );
}

function OrbitRing() {
  return (
    <motion.div
      className="h-24 w-24 rounded-full border border-dashed border-azure-400/30"
      animate={{ rotate: 360, rotateX: [55, 65, 55] }}
      transition={{ rotate: { duration: 20, repeat: Infinity, ease: 'linear' }, rotateX: { duration: 6, repeat: Infinity } }}
      style={{ transformStyle: 'preserve-3d' }}
    />
  );
}

const themeConfig: Record<
  Section3DTheme,
  { primary: ReactNode; secondary?: ReactNode; cubeColor?: string }
> = {
  cloud: { primary: <CloudStack /> },
  server: { primary: <ServerStack />, cubeColor: '#0078d4' },
  pipeline: { primary: <PipelineNodes />, cubeColor: '#7c3aed' },
  orbit: { primary: <OrbitRing />, cubeColor: '#50e6ff' },
};

export default function Section3DAccent({ theme = 'cloud' }: { theme?: Section3DTheme }) {
  const reduced = useReducedMotion() ?? false;
  if (reduced) return null;

  const config = themeConfig[theme];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute right-[4%] top-[12%] hidden sm:block"
        style={{ perspective: 900, transformStyle: 'preserve-3d' }}
        animate={{ y: [0, -12, 0], rotateY: [0, 12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        {config.primary}
      </motion.div>

      {config.cubeColor && (
        <motion.div
          className="absolute bottom-[18%] left-[6%] hidden md:block"
          style={{ perspective: 900, transformStyle: 'preserve-3d' }}
          animate={{ rotateX: [12, 22, 12], rotateY: [0, 360] }}
          transition={{
            rotateY: { duration: 28, repeat: Infinity, ease: 'linear' },
            rotateX: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <IsometricCube size={44} color={config.cubeColor} />
        </motion.div>
      )}

      <motion.div
        className="absolute bottom-[25%] right-[8%] hidden lg:block"
        style={{ perspective: 800 }}
        animate={{ rotateZ: [0, 5, 0], y: [0, 8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="h-16 w-16 rounded-xl border border-azure-300/20 bg-gradient-to-br from-white/40 to-azure-100/20 shadow-lg backdrop-blur-sm" />
      </motion.div>
    </div>
  );
}
