import { motion, useReducedMotion } from 'framer-motion';
import {
  Cloud,
  Server,
  Database,
  Network,
  ShieldCheck,
  Workflow,
  Container,
  HardDrive,
  type LucideIcon,
} from 'lucide-react';

type Variant = 'dark' | 'light';
type Intensity = 'hero' | 'section';

interface AzureMotionBackgroundProps {
  variant?: Variant;
  intensity?: Intensity;
}

interface Node {
  x: number;
  y: number;
}

interface FloatingIcon {
  Icon: LucideIcon;
  x: string;
  y: string;
  delay: number;
  size: number;
  drift?: number;
}

interface DriftingCloudConfig {
  top: string;
  scale: number;
  duration: number;
  delay: number;
  direction: 'ltr' | 'rtl';
}

const networkNodes: Node[] = [
  { x: 8, y: 22 },
  { x: 22, y: 38 },
  { x: 38, y: 18 },
  { x: 55, y: 32 },
  { x: 72, y: 16 },
  { x: 88, y: 28 },
  { x: 18, y: 62 },
  { x: 42, y: 72 },
  { x: 65, y: 58 },
  { x: 82, y: 68 },
  { x: 50, y: 48 },
];

const connections: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [1, 6],
  [6, 7],
  [7, 10],
  [3, 10],
  [10, 8],
  [8, 9],
  [4, 9],
  [2, 10],
  [5, 9],
];

const serverAnchors = [
  { x: '8%', y: '22%', delay: 0 },
  { x: '38%', y: '18%', delay: 0.4 },
  { x: '72%', y: '16%', delay: 0.8 },
  { x: '18%', y: '62%', delay: 1.2 },
  { x: '65%', y: '58%', delay: 1.6 },
  { x: '82%', y: '68%', delay: 2 },
];

const darkFloatingIcons: FloatingIcon[] = [
  { Icon: Cloud, x: '6%', y: '12%', delay: 0, size: 34, drift: 18 },
  { Icon: Server, x: '88%', y: '10%', delay: 0.9, size: 30, drift: 14 },
  { Icon: Database, x: '92%', y: '54%', delay: 1.5, size: 26, drift: 12 },
  { Icon: Network, x: '76%', y: '74%', delay: 2.1, size: 28, drift: 16 },
  { Icon: Container, x: '12%', y: '68%', delay: 1.3, size: 24, drift: 10 },
  { Icon: Workflow, x: '50%', y: '8%', delay: 0.6, size: 26, drift: 14 },
  { Icon: HardDrive, x: '30%', y: '82%', delay: 1.8, size: 22, drift: 11 },
  { Icon: ShieldCheck, x: '58%', y: '86%', delay: 2.4, size: 22, drift: 9 },
];

const lightFloatingIcons: FloatingIcon[] = [
  { Icon: Cloud, x: '8%', y: '10%', delay: 0, size: 28, drift: 14 },
  { Icon: Server, x: '86%', y: '16%', delay: 1, size: 26, drift: 12 },
  { Icon: Database, x: '90%', y: '62%', delay: 1.6, size: 22, drift: 10 },
  { Icon: Network, x: '74%', y: '80%', delay: 2.2, size: 24, drift: 13 },
  { Icon: Container, x: '14%', y: '76%', delay: 0.7, size: 20, drift: 9 },
  { Icon: Workflow, x: '46%', y: '6%', delay: 1.2, size: 22, drift: 11 },
  { Icon: HardDrive, x: '28%', y: '84%', delay: 1.9, size: 18, drift: 8 },
];

const heroClouds: DriftingCloudConfig[] = [
  { top: '8%', scale: 1.1, duration: 48, delay: 0, direction: 'ltr' },
  { top: '22%', scale: 0.85, duration: 62, delay: 8, direction: 'rtl' },
  { top: '48%', scale: 1.25, duration: 55, delay: 4, direction: 'ltr' },
  { top: '68%', scale: 0.9, duration: 70, delay: 14, direction: 'rtl' },
  { top: '82%', scale: 1.05, duration: 58, delay: 20, direction: 'ltr' },
];

const sectionClouds: DriftingCloudConfig[] = [
  { top: '12%', scale: 0.75, duration: 55, delay: 0, direction: 'ltr' },
  { top: '55%', scale: 0.65, duration: 65, delay: 10, direction: 'rtl' },
  { top: '78%', scale: 0.7, duration: 60, delay: 18, direction: 'ltr' },
];

function DriftingCloud({
  config,
  color,
  reduced,
}: {
  config: DriftingCloudConfig;
  color: string;
  reduced: boolean;
}) {
  const travel =
    config.direction === 'ltr'
      ? { from: '-22vw', to: '122vw' }
      : { from: '105vw', to: '-35vw' };

  return (
    <motion.div
      className="absolute left-0"
      style={{ top: config.top, color, scale: config.scale }}
      initial={{ x: travel.from }}
      animate={reduced ? { x: travel.from } : { x: travel.to }}
      transition={{
        duration: config.duration,
        delay: config.delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <svg width="140" height="72" viewBox="0 0 140 72" fill="currentColor" aria-hidden="true">
        <ellipse cx="42" cy="42" rx="34" ry="20" opacity="0.55" />
        <ellipse cx="72" cy="34" rx="30" ry="22" opacity="0.45" />
        <ellipse cx="98" cy="44" rx="26" ry="18" opacity="0.5" />
        <ellipse cx="58" cy="48" rx="22" ry="14" opacity="0.35" />
      </svg>
    </motion.div>
  );
}

function ConnectionParticle({
  from,
  to,
  delay,
  reduced,
  strokeColor,
  particleColor,
  duration = 4.5,
}: {
  from: Node;
  to: Node;
  delay: number;
  reduced: boolean;
  strokeColor: string;
  particleColor: string;
  duration?: number;
}) {
  return (
    <>
      <line
        x1={`${from.x}%`}
        y1={`${from.y}%`}
        x2={`${to.x}%`}
        y2={`${to.y}%`}
        stroke={strokeColor}
        strokeWidth="1"
        strokeOpacity="0.35"
        strokeDasharray="4 6"
      />
      {!reduced && (
        <>
          <motion.circle
            r="2.5"
            fill={particleColor}
            initial={{ cx: `${from.x}%`, cy: `${from.y}%`, opacity: 0 }}
            animate={{
              cx: [`${from.x}%`, `${to.x}%`],
              cy: [`${from.y}%`, `${to.y}%`],
              opacity: [0, 0.85, 0.85, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: 'linear',
              times: [0, 0.05, 0.95, 1],
            }}
          />
          <motion.circle
            r="1.5"
            fill={particleColor}
            initial={{ cx: `${to.x}%`, cy: `${to.y}%`, opacity: 0 }}
            animate={{
              cx: [`${to.x}%`, `${from.x}%`],
              cy: [`${to.y}%`, `${from.y}%`],
              opacity: [0, 0.5, 0.5, 0],
            }}
            transition={{
              duration: duration + 1.5,
              delay: delay + duration * 0.4,
              repeat: Infinity,
              ease: 'linear',
              times: [0, 0.05, 0.95, 1],
            }}
          />
        </>
      )}
    </>
  );
}

function ServerNode({
  x,
  y,
  delay,
  reduced,
  isDark,
}: {
  x: string;
  y: string;
  delay: number;
  reduced: boolean;
  isDark: boolean;
}) {
  const ringColor = isDark ? 'rgba(80, 230, 255, 0.25)' : 'rgba(0, 120, 212, 0.2)';
  const iconClass = isDark ? 'text-azure-300/25' : 'text-azure-500/18';

  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      animate={
        reduced
          ? {}
          : {
              y: [0, -6, 0],
              opacity: [0.35, 0.65, 0.35],
            }
      }
      transition={{
        duration: 5 + delay,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {!reduced && (
        <motion.div
          className="absolute -inset-3 rounded-full border"
          style={{ borderColor: ringColor }}
          animate={{ scale: [1, 1.35, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 3, delay, repeat: Infinity, ease: 'easeOut' }}
        />
      )}
      <Server className={iconClass} size={20} strokeWidth={1.25} aria-hidden="true" />
    </motion.div>
  );
}

export default function AzureMotionBackground({
  variant = 'dark',
  intensity = 'hero',
}: AzureMotionBackgroundProps) {
  const reduced = useReducedMotion() ?? false;
  const isDark = variant === 'dark';
  const isHero = intensity === 'hero';
  const icons = (isDark ? darkFloatingIcons : lightFloatingIcons).slice(0, isHero ? undefined : 5);
  const clouds = isHero ? heroClouds : sectionClouds;

  const iconClass = isDark ? 'text-azure-300/18' : 'text-azure-500/14';
  const cloudColor = isDark ? 'rgba(255, 255, 255, 0.14)' : 'rgba(0, 120, 212, 0.1)';
  const nodeFill = isDark ? 'rgba(80, 230, 255, 0.4)' : 'rgba(0, 120, 212, 0.35)';
  const lineColor = isDark ? 'rgba(80, 230, 255, 0.22)' : 'rgba(0, 120, 212, 0.18)';
  const particleColor = isDark ? '#50e6ff' : '#0078d4';
  const blobA = isDark ? 'from-azure-400/10 to-azure-600/5' : 'from-azure-400/8 to-azure-500/5';
  const blobB = isDark ? 'from-azure-300/8 to-transparent' : 'from-azure-300/6 to-transparent';
  const opacity = isHero ? 1 : 0.85;

  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      style={{ opacity }}
      aria-hidden="true"
    >
      <motion.div
        className={`absolute -left-24 -top-24 h-96 w-96 rounded-full bg-gradient-to-br ${blobA} blur-3xl`}
        animate={reduced ? {} : { x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={`absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tl ${blobB} blur-3xl`}
        animate={reduced ? {} : { x: [0, -24, 0], y: [0, -16, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={`absolute left-1/3 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gradient-to-r ${blobA} blur-3xl`}
        animate={reduced ? {} : { x: [0, 40, -20, 0], opacity: [0.4, 0.7, 0.5, 0.4] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />

      {clouds.map((cloud, i) => (
        <DriftingCloud key={i} config={cloud} color={cloudColor} reduced={reduced} />
      ))}

      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        {connections.map(([fromIdx, toIdx], i) => (
          <ConnectionParticle
            key={`${fromIdx}-${toIdx}`}
            from={networkNodes[fromIdx]}
            to={networkNodes[toIdx]}
            delay={i * 0.55}
            reduced={reduced}
            strokeColor={lineColor}
            particleColor={particleColor}
            duration={3.5 + (i % 3) * 0.8}
          />
        ))}
        {networkNodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="3"
            fill={nodeFill}
            animate={
              reduced
                ? {}
                : {
                    r: [3, 4.5, 3],
                    opacity: [0.35, 0.75, 0.35],
                  }
            }
            transition={{
              duration: 3,
              delay: i * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>

      {serverAnchors.slice(0, isHero ? undefined : 4).map((anchor, i) => (
        <ServerNode
          key={i}
          x={anchor.x}
          y={anchor.y}
          delay={anchor.delay}
          reduced={reduced}
          isDark={isDark}
        />
      ))}

      {icons.map(({ Icon, x, y, delay, size, drift = 12 }, i) => (
        <motion.div
          key={i}
          className={`absolute ${iconClass}`}
          style={{ left: x, top: y }}
          animate={
            reduced
              ? {}
              : {
                  x: [0, drift, -drift * 0.6, 0],
                  y: [0, -12, -6, 0],
                  opacity: [0.12, 0.28, 0.18, 0.12],
                  rotate: [0, 4, -3, 0],
                }
          }
          transition={{
            duration: 10 + i * 0.6,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Icon size={size} strokeWidth={1} />
        </motion.div>
      ))}
    </div>
  );
}
