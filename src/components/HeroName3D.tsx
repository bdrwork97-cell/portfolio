import { useRef, type CSSProperties } from 'react';
import { motion, useSpring, useReducedMotion, type MotionValue } from 'framer-motion';
import { personalInfo } from '../data/portfolio';

interface HeroName3DProps {
  className?: string;
}

interface TechNameBlockProps {
  text: string;
  variant: 'primary' | 'secondary';
  depthZ: number;
  floatDelay: number;
  rotateDuration: number;
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  reduced: boolean;
  showCursor?: boolean;
}

function TechNameBlock({
  text,
  variant,
  depthZ,
  floatDelay,
  rotateDuration,
  rotateX,
  rotateY,
  reduced,
  showCursor = false,
}: TechNameBlockProps) {
  const faceClass = variant === 'primary' ? 'hero-name-primary' : 'hero-name-secondary';
  const rotateDirection = variant === 'primary' ? [-2, 2, -2] : [2, -2, 2];

  return (
    <motion.span
      className="hero-name-tech-wrap relative inline-block"
      animate={reduced ? undefined : { y: [0, -4, 0], rotateY: rotateDirection }}
      transition={
        reduced
          ? undefined
          : {
              y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: floatDelay },
              rotateY: { duration: rotateDuration, repeat: Infinity, ease: 'easeInOut', delay: floatDelay + 0.15 },
            }
      }
    >
      <motion.span
        className="relative inline-block"
        style={
          reduced
            ? undefined
            : ({ rotateX, rotateY, transformStyle: 'preserve-3d', z: depthZ } as CSSProperties)
        }
      >
        <span className="hero-name-hud-corners" aria-hidden="true" />

        {!reduced && (
          <>
            <span className="hero-name-depth hero-name-depth-3" aria-hidden="true">
              {text}
            </span>
            <span className="hero-name-depth hero-name-depth-2" aria-hidden="true">
              {text}
            </span>
            <span className="hero-name-depth hero-name-depth-1" aria-hidden="true">
              {text}
            </span>
          </>
        )}

        <span className={`hero-name-face ${faceClass}`}>{text}</span>

        {!reduced && (
          <>
            <span className="hero-name-scanlines" aria-hidden="true" />
            <span className="hero-name-shimmer-beam" aria-hidden="true" />
          </>
        )}

        {variant === 'primary' && !reduced && (
          <motion.span
            className="hero-name-data-line pointer-events-none absolute -bottom-2 left-0 h-px w-full bg-gradient-to-r from-cyan-300/70 via-white/50 to-transparent"
            animate={{ scaleX: [0.35, 1, 0.35], opacity: [0.35, 0.85, 0.35] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          />
        )}

        {showCursor && !reduced && (
          <motion.span
            className="hero-name-cursor ml-0.5 inline-block font-mono text-cyan-200/90"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.55, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
            aria-hidden="true"
          >
            |
          </motion.span>
        )}
      </motion.span>
    </motion.span>
  );
}

export default function HeroName3D({ className = '' }: HeroName3DProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduced = useReducedMotion() ?? false;
  const rotateX = useSpring(0, { stiffness: 140, damping: 26 });
  const rotateY = useSpring(0, { stiffness: 140, damping: 26 });

  const handleMouseMove = (event: React.MouseEvent<HTMLHeadingElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(y * -4);
    rotateY.set(x * 5);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.h1
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40, rotateX: 18 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      className={`hero-name-tech perspective-container mb-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {!reduced && (
        <span className="hero-name-orbit pointer-events-none absolute -inset-x-6 -inset-y-4" aria-hidden="true" />
      )}

      <TechNameBlock
        text={personalInfo.firstName}
        variant="primary"
        depthZ={24}
        floatDelay={0}
        rotateDuration={6}
        rotateX={rotateX}
        rotateY={rotateY}
        reduced={reduced}
      />

      <span className="inline-block w-3 sm:w-4" aria-hidden="true" />

      <TechNameBlock
        text={personalInfo.lastName}
        variant="secondary"
        depthZ={16}
        floatDelay={0.2}
        rotateDuration={6.5}
        rotateX={rotateX}
        rotateY={rotateY}
        reduced={reduced}
        showCursor
      />
    </motion.h1>
  );
}
