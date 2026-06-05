import { motion, useReducedMotion } from 'framer-motion';
import type { ExperienceWorkVisual } from '../data/experienceVisuals';
import Mascot3DWrapper from './Mascot3DWrapper';

function IsometricCube({ size = 40, color = '#0078d4' }: { size?: number; color?: string }) {
  const h = size * 0.35;
  return (
    <div className="relative" style={{ width: size, height: size, transformStyle: 'preserve-3d' }}>
      <div
        className="absolute rounded-sm opacity-90"
        style={{ width: size, height: size, background: color, transform: `translateZ(${h}px)` }}
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

function TerraformBlockMascot() {
  return (
    <svg viewBox="0 0 52 52" className="h-full w-full">
      <rect x="10" y="14" width="32" height="24" rx="3" fill="#7c3aed" opacity="0.9" />
      <text x="16" y="30" fontSize="8" fill="white" fontWeight="bold">
        TF
      </text>
      <rect x="14" y="8" width="8" height="6" rx="1" fill="#50e6ff" />
      <rect x="30" y="8" width="8" height="6" rx="1" fill="#50e6ff" opacity="0.7" />
      <path d="M18 8 L18 14 M34 8 L34 14" stroke="#50e6ff" strokeWidth="1" />
    </svg>
  );
}

function AksOctopusMascot() {
  return (
    <svg viewBox="0 0 52 52" className="h-full w-full">
      <circle cx="26" cy="20" r="10" fill="#326ce5" />
      <circle cx="26" cy="20" r="5" fill="white" opacity="0.9" />
      {[0, 1, 2, 3].map((i) => {
        const a = (i / 4) * Math.PI + 0.5;
        return (
          <line
            key={i}
            x1={26 + Math.cos(a) * 9}
            y1={26 + Math.sin(a) * 7}
            x2={26 + Math.cos(a) * 20}
            y2={40 + Math.sin(a) * 3}
            stroke="#326ce5"
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      })}
      <text x="20" y="22" fontSize="5" fill="#326ce5" fontWeight="bold">
        K8s
      </text>
    </svg>
  );
}

function JenkinsDogMascot() {
  return (
    <svg viewBox="0 0 52 52" className="h-full w-full">
      <ellipse cx="26" cy="36" rx="11" ry="8" fill="#d97706" />
      <circle cx="26" cy="22" r="11" fill="#fbbf24" />
      <rect x="32" y="28" width="14" height="10" rx="2" fill="#335061" />
      <text x="34" y="35" fontSize="5" fill="white" fontWeight="bold">
        CI
      </text>
    </svg>
  );
}

export function ExperienceGap3DDecor({
  index,
  isEven,
  compact = false,
  visual,
}: {
  index: number;
  isEven: boolean;
  compact?: boolean;
  visual: ExperienceWorkVisual;
}) {
  const reduced = useReducedMotion() ?? false;
  const platformColor = visual.platform === 'aws' ? '#ff9900' : '#0078d4';
  const accentColor = visual.platform === 'aws' ? '#fbbf24' : '#50e6ff';
  const Mascot =
    index === 0 ? TerraformBlockMascot : index === 1 ? JenkinsDogMascot : AksOctopusMascot;

  return (
    <div className={`pointer-events-none absolute inset-0 ${compact ? 'opacity-90' : ''}`} aria-hidden="true">
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,120,212,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,120,212,0.05) 1px, transparent 1px)',
          backgroundSize: compact ? '20px 20px' : '28px 28px',
          transform: 'perspective(600px) rotateX(58deg)',
          transformOrigin: 'center bottom',
        }}
      />

      <motion.div
        className={`absolute ${isEven ? 'left-[6%] top-[8%]' : 'right-[6%] top-[10%]'}`}
        style={{ perspective: 900, transformStyle: 'preserve-3d' }}
        animate={reduced ? {} : { y: [0, -14, 0], rotateY: isEven ? [0, 18, 0] : [0, -18, 0], rotateX: [8, 16, 8] }}
        transition={{ duration: 7 + index, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
      >
        <motion.div animate={reduced ? {} : { rotateY: [0, 360] }} transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}>
          <IsometricCube size={compact ? 32 : 44} color={platformColor} />
        </motion.div>
      </motion.div>

      <motion.div
        className={`absolute ${isEven ? 'right-[8%] bottom-[18%]' : 'left-[8%] bottom-[16%]'}`}
        style={{ perspective: 900, transformStyle: 'preserve-3d' }}
        animate={reduced ? {} : { y: [0, 12, 0], rotateY: isEven ? [0, -14, 0] : [0, 14, 0], rotateX: [12, 22, 12] }}
        transition={{ duration: 8 + index, repeat: Infinity, ease: 'easeInOut', delay: index * 0.45 }}
      >
        <IsometricCube size={compact ? 28 : 36} color={accentColor} />
      </motion.div>

      {!compact && (
        <>
          <motion.div
            className="absolute left-[10%] bottom-[26%]"
            animate={reduced ? {} : { y: [0, -10, 0], rotateZ: [-4, 4, -4] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Mascot3DWrapper className="h-14 w-14" variant="compact" bounce={3} delay={index * 0.2} showShadow={false}>
              <Mascot />
            </Mascot3DWrapper>
          </motion.div>

          <motion.div
            className="absolute right-[8%] top-[20%] flex flex-col gap-1.5"
            animate={reduced ? {} : { x: [0, isEven ? 8 : -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            {visual.metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                className="rounded-md border border-azure-200/50 bg-white/85 px-2 py-0.5 shadow-sm backdrop-blur-sm"
                style={{ transform: `translateZ(${i * 8}px)`, transformStyle: 'preserve-3d' }}
                animate={reduced ? {} : { y: [0, -4, 0] }}
                transition={{ duration: 2.5, delay: i * 0.25 + index * 0.1, repeat: Infinity }}
              >
                <p className="font-mono text-[8px] font-bold text-azure-800">{metric.value}</p>
                <p className="text-[6px] text-ms-text-secondary">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}

      {visual.tools.slice(0, 3).map((tool, i) => {
        const positions = [
          { x: '16%', y: '52%' },
          { x: '74%', y: '58%' },
          { x: '78%', y: '34%' },
        ];
        const pos = positions[i];
        return (
          <motion.div
            key={tool}
            className="absolute rounded-lg border border-azure-200/40 bg-white/75 px-2 py-1 font-mono text-[7px] font-bold text-azure-700 shadow-sm backdrop-blur-sm"
            style={{ left: pos.x, top: pos.y, transformStyle: 'preserve-3d' }}
            animate={
              reduced
                ? {}
                : {
                    y: [0, -8, 0],
                    rotateY: [0, 10, -10, 0],
                  }
            }
            transition={{ duration: 4 + i, delay: i * 0.3 + index * 0.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            {tool}
          </motion.div>
        );
      })}

      {!reduced &&
        visual.infraLinks.slice(0, 3).map((_, stream) => (
          <motion.div
            key={stream}
            className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"
            style={{
              left: `${22 + stream * 24}%`,
              top: '5%',
              height: compact ? '40%' : '55%',
            }}
            animate={{ opacity: [0.2, 0.7, 0.2], scaleY: [0.85, 1, 0.85] }}
            transition={{ duration: 2.5, delay: stream * 0.5 + index * 0.15, repeat: Infinity }}
          />
        ))}
    </div>
  );
}

export function ExperienceSectionBackdrop() {
  const reduced = useReducedMotion() ?? false;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute left-[4%] top-[15%] hidden lg:block"
        style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
        animate={reduced ? {} : { rotateY: [0, 20, 0], y: [0, -16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      >
        <IsometricCube size={52} color="#ff9900" />
      </motion.div>

      <motion.div
        className="absolute right-[5%] top-[35%] hidden lg:block"
        style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
        animate={reduced ? {} : { rotateX: [10, 22, 10], rotateZ: [0, 8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex gap-2" style={{ transformStyle: 'preserve-3d' }}>
          {['Terraform', 'EKS/AKS', 'Jenkins'].map((label, i) => (
            <motion.div
              key={label}
              className="rounded-md border border-azure-200/50 bg-white/70 px-2.5 py-1 text-[9px] font-bold text-azure-700 shadow-sm backdrop-blur-sm"
              style={{ transform: `translateZ(${i * 14}px)` }}
              animate={reduced ? {} : { y: [0, -5, 0] }}
              transition={{ duration: 3, delay: i * 0.3, repeat: Infinity }}
            >
              {label}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[12%] left-[8%] hidden md:block"
        animate={reduced ? {} : { x: [0, 20, 0], y: [0, -8, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Mascot3DWrapper className="h-16 w-16 opacity-30" variant="background" bounce={8} duration={9} showShadow={false}>
          <TerraformBlockMascot />
        </Mascot3DWrapper>
      </motion.div>
    </div>
  );
}
