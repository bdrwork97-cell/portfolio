import { type ReactNode } from 'react';
import { motion, useReducedMotion, type Transition } from 'framer-motion';

export type Mascot3DVariant = 'card' | 'background' | 'compact';

interface Mascot3DWrapperProps {
  children: ReactNode;
  className?: string;
  bounce?: number;
  active?: boolean;
  depth?: number;
  variant?: Mascot3DVariant;
  duration?: number;
  delay?: number;
  showShadow?: boolean;
}

export default function Mascot3DWrapper({
  children,
  className = '',
  bounce = 3,
  active = false,
  depth = 14,
  variant = 'card',
  duration,
  delay = 0,
  showShadow = true,
}: Mascot3DWrapperProps) {
  const reduced = useReducedMotion() ?? false;

  const loopDuration = duration ?? (variant === 'background' ? 7 : variant === 'compact' ? 2.8 : 3.2);

  const idleTransition: Transition = active
    ? { duration: 0.7, ease: 'easeOut' }
    : { duration: loopDuration, delay, repeat: Infinity, ease: 'easeInOut' };

  const depthAmount =
    variant === 'background' ? depth * 0.45 : variant === 'compact' ? depth * 0.35 : depth * 0.55;

  const idleAnimate = reduced
    ? { y: [0, -bounce, 0] }
    : active
      ? {
          y: [0, -8, -4, -8, 0],
          scale: [1, 1.06, 1.04, 1.06, 1],
          rotateY: [0, 16, -12, 16, 0],
          rotateX: [0, -10, 6, -10, 0],
          z: [0, depthAmount, depthAmount * 0.5, depthAmount, 0],
        }
      : {
          y: [0, -bounce, 0],
          rotateX:
            variant === 'compact'
              ? [-5, 5, -5]
              : variant === 'background'
                ? [-8, 8, -8]
                : [-7, 7, -7],
          rotateY:
            variant === 'compact'
              ? [-10, 10, -10]
              : variant === 'background'
                ? [-12, 12, -12]
                : [-14, 14, -14],
          z: [0, depthAmount, 0],
        };

  const perspective = variant === 'background' ? 900 : variant === 'compact' ? 800 : 1100;

  return (
    <div
      className={`relative shrink-0 ${className}`}
      style={{ perspective: reduced ? undefined : perspective }}
      aria-hidden="true"
    >
      {showShadow && !reduced && variant !== 'compact' && (
        <motion.div
          className="pointer-events-none absolute bottom-0 left-1/2 h-2 w-[72%] -translate-x-1/2 rounded-full bg-slate-900/10 blur-sm"
          animate={{ scaleX: [0.8, 1.05, 0.8], opacity: [0.05, 0.14, 0.05] }}
          transition={{ duration: loopDuration, delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
      <motion.div className="relative [transform-style:preserve-3d]" animate={idleAnimate} transition={idleTransition}>
        {children}
      </motion.div>
    </div>
  );
}
