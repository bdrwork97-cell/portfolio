import { useRef, useState, type MouseEvent, type ReactNode } from 'react';
import { motion, useReducedMotion, useSpring, type HTMLMotionProps } from 'framer-motion';

const springConfig = { stiffness: 220, damping: 28 };

export interface MotionCardProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  tilt?: number;
  showGlare?: boolean;
  lift?: number;
  depth?: number;
}

export default function MotionCard({
  children,
  className = '',
  tilt = 8,
  showGlare = true,
  lift = -6,
  depth = 0,
  onMouseMove,
  onMouseLeave,
  whileHover,
  style,
  ...props
}: MotionCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion() ?? false;
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);
  const [glare, setGlare] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    onMouseMove?.(event);
    if (reduced || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    rotateX.set((y - 0.5) * -tilt * 1.1);
    rotateY.set((x - 0.5) * tilt * 1.1);
    setGlare({ x: x * 100, y: y * 100 });
    setIsHovered(true);
  };

  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    onMouseLeave?.(event);
    rotateX.set(0);
    rotateY.set(0);
    setGlare({ x: 50, y: 50 });
    setIsHovered(false);
  };

  const hoverMotion =
    reduced || !lift
      ? whileHover
      : {
          y: lift,
          boxShadow: '0 22px 48px rgba(15, 23, 42, 0.09)',
          ...(typeof whileHover === 'object' && whileHover !== null && !Array.isArray(whileHover)
            ? whileHover
            : {}),
        };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={hoverMotion}
      transition={{ type: 'spring', stiffness: 220, damping: 28 }}
      style={{ ...style, perspective: reduced ? undefined : 1200 }}
      className={`group/motion relative ${className}`}
      {...props}
    >
      <motion.div
        style={{
          rotateX: reduced ? 0 : rotateX,
          rotateY: reduced ? 0 : rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="h-full"
      >
        {showGlare && !reduced && (
          <div
            className={`pointer-events-none absolute inset-0 z-10 rounded-[inherit] transition-opacity duration-700 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: 'translateZ(1px)',
              background: `radial-gradient(ellipse 90% 65% at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 40%, transparent 70%)`,
            }}
            aria-hidden="true"
          />
        )}
        <div className="relative">{children}</div>
      </motion.div>
    </motion.div>
  );
}
