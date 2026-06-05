import { motion, useReducedMotion } from 'framer-motion';
import {
  getExperienceVisual,
  tenureLabel,
  type ExperienceWorkVisual,
  type WorkPlatform,
} from '../data/experienceVisuals';
import type { ExperienceTenure } from '../data/portfolio';
import { ExperienceGap3DDecor } from './ExperienceGap3DDecor';

function platformStyles(platform: WorkPlatform) {
  return platform === 'aws'
    ? {
        badge: 'bg-orange-50 text-orange-700 border-orange-200/60',
        accent: 'text-orange-600',
        glow: 'from-orange-200/40',
        dot: 'bg-orange-500',
        grad: 'from-orange-400 via-amber-400 to-orange-500',
      }
    : {
        badge: 'bg-azure-50 text-azure-700 border-azure-200/60',
        accent: 'text-azure-600',
        glow: 'from-azure-200/40',
        dot: 'bg-azure-500',
        grad: 'from-azure-400 via-cyan-400 to-azure-500',
      };
}

function MiniInfraMap({
  visual,
  reduced,
  compact,
  mapId,
}: {
  visual: ExperienceWorkVisual;
  reduced: boolean;
  compact: boolean;
  mapId: number;
}) {
  const nodeMap = Object.fromEntries(visual.infraNodes.map((n) => [n.id, n]));

  return (
    <svg
      className={`absolute inset-0 w-full opacity-70 ${compact ? 'h-full' : 'h-full'}`}
      viewBox="0 0 100 80"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`work-flow-${mapId}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0078d4" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#50e6ff" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      {visual.infraLinks.map(([from, to], i) => {
        const a = nodeMap[from];
        const b = nodeMap[to];
        if (!a || !b) return null;
        return (
          <g key={`${from}-${to}`}>
            <line
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={`url(#work-flow-${mapId})`}
              strokeWidth="0.8"
              strokeDasharray="2 2"
            />
            {!reduced && (
              <motion.circle
                r="1.4"
                fill="#50e6ff"
                animate={{
                  cx: [a.x, b.x],
                  cy: [a.y, b.y],
                  opacity: [0, 1, 0],
                }}
                transition={{ duration: 2.2, delay: i * 0.35, repeat: Infinity, ease: 'linear' }}
              />
            )}
          </g>
        );
      })}
      {visual.infraNodes.map((node, i) => (
        <g key={node.id}>
          <motion.rect
            x={node.x - 8}
            y={node.y - 5}
            width="16"
            height="10"
            rx="2"
            fill="white"
            stroke="#0078d4"
            strokeWidth="0.5"
            opacity="0.92"
            animate={reduced ? {} : { y: [node.y - 5, node.y - 6, node.y - 5] }}
            transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
          />
          <text x={node.x} y={node.y + 1} textAnchor="middle" fontSize="3.2" fill="#004578" fontWeight="bold">
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function WorkInfraPanel({
  visual,
  company,
  tenure,
  reduced,
  compact,
  mapId,
}: {
  visual: ExperienceWorkVisual;
  company: string;
  tenure: ExperienceTenure;
  reduced: boolean;
  compact: boolean;
  mapId: number;
}) {
  const styles = platformStyles(visual.platform);

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-[#edebe9] bg-white/95 shadow-lg backdrop-blur-sm ${
        compact ? 'p-3' : 'p-4'
      }`}
    >
      <div className={`pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br ${styles.glow} to-transparent blur-2xl`} />

      <div className="relative mb-2 flex flex-wrap items-center gap-1.5">
        <span className={`rounded-full border px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider ${styles.badge}`}>
          {visual.platform === 'aws' ? 'AWS' : 'Azure'}
        </span>
        <span className="max-w-[120px] truncate rounded-full bg-ms-gray px-2 py-0.5 text-[8px] font-bold text-ms-text">
          {company}
        </span>
        {tenure === 'current' && !reduced && (
          <motion.span
            className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[7px] font-bold text-emerald-700"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            LIVE
          </motion.span>
        )}
      </div>

      <p className={`relative mb-2 font-semibold text-ms-text ${compact ? 'text-[10px]' : 'text-xs'}`}>{visual.headline}</p>

      <div className="relative mb-3 rounded-lg border border-violet-100 bg-violet-50/50 px-2 py-1.5">
        <div className="flex flex-wrap items-center gap-1 font-mono text-[7px] text-violet-800">
          <span className="rounded bg-violet-100 px-1 py-0.5">{visual.pipeline.branch}</span>
          <span className="text-ms-text-secondary">→</span>
          <span className="truncate">{visual.pipeline.ciTool}</span>
          <span className="text-ms-text-secondary">→</span>
          <span className="truncate text-azure-700">{visual.pipeline.deployTarget}</span>
        </div>
        <p className="mt-1 text-[7px] font-medium text-emerald-700">{visual.pipeline.status}</p>
      </div>

      <div className={`relative mb-3 grid grid-cols-4 gap-1 ${compact ? 'gap-0.5' : ''}`}>
        {visual.flowSteps.map((step, i) => (
          <motion.div
            key={step.label}
            className="rounded-md border border-azure-200/50 bg-azure-50/70 px-1 py-1.5 text-center"
            animate={reduced ? {} : { y: [0, -3, 0] }}
            transition={{ duration: 2.8, delay: i * 0.25, repeat: Infinity }}
          >
            <p className={`font-bold text-azure-800 ${compact ? 'text-[6px]' : 'text-[7px]'}`}>{step.label}</p>
            <p className={`text-ms-text-secondary ${compact ? 'text-[5px]' : 'text-[6px]'}`}>{step.sub}</p>
          </motion.div>
        ))}
      </div>

      <div className={`relative ${compact ? 'h-16' : 'h-20'} mb-3`}>
        <MiniInfraMap visual={visual} reduced={reduced} compact={compact} mapId={mapId} />
      </div>

      <div className="relative mb-3 flex flex-wrap gap-1">
        {visual.tools.map((tool, i) => (
          <motion.span
            key={tool}
            className="rounded-md border border-azure-200/40 bg-white px-1.5 py-0.5 text-[7px] font-semibold text-azure-800"
            animate={reduced ? {} : { scale: [1, 1.04, 1] }}
            transition={{ duration: 2, delay: i * 0.15, repeat: Infinity }}
          >
            {tool}
          </motion.span>
        ))}
      </div>

      <div className="relative grid grid-cols-3 gap-1 border-t border-[#edebe9]/80 pt-2">
        {visual.metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            className="rounded-md bg-ms-gray/50 px-1 py-1 text-center"
            animate={reduced ? {} : { y: [0, -2, 0] }}
            transition={{ duration: 2.5, delay: i * 0.2, repeat: Infinity }}
          >
            <p className={`font-bold ${styles.accent} ${compact ? 'text-[9px]' : 'text-[10px]'}`}>{metric.value}</p>
            <p className={`text-ms-text-secondary ${compact ? 'text-[5px]' : 'text-[6px]'}`}>{metric.label}</p>
          </motion.div>
        ))}
      </div>

      <p className="relative mt-2 text-center text-[7px] font-medium uppercase tracking-wider text-ms-text-secondary/80">
        {tenureLabel(tenure)}
      </p>
    </div>
  );
}

function GapColumnBackdrop({
  visual,
  index,
  reduced,
}: {
  visual: ExperienceWorkVisual;
  index: number;
  reduced: boolean;
}) {
  const isAws = visual.platform === 'aws';

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className={`absolute h-48 w-48 rounded-full blur-2xl ${
          isAws ? 'left-0 top-0 bg-orange-200/40' : 'left-0 top-0 bg-azure-200/45'
        }`}
        animate={reduced ? {} : { x: [0, 12, 0], y: [0, -10, 0] }}
        transition={{ duration: 8 + index, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={`absolute bottom-0 right-0 h-40 w-40 rounded-full blur-2xl ${
          isAws ? 'bg-amber-200/30' : 'bg-violet-200/35'
        }`}
        animate={reduced ? {} : { x: [0, -8, 0], y: [0, 8, 0] }}
        transition={{ duration: 9 + index, repeat: Infinity, ease: 'easeInOut' }}
      />

      {visual.orbitTools.map((tool, i) => {
        const angle = (i / visual.orbitTools.length) * Math.PI * 2;
        const x = 50 + Math.cos(angle) * 38;
        const y = 50 + Math.sin(angle) * 32;
        return (
          <motion.div
            key={tool}
            className="absolute rounded-md border border-azure-200/40 bg-white/75 px-1.5 py-0.5 font-mono text-[7px] font-bold text-azure-700 shadow-sm backdrop-blur-sm"
            style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
            animate={reduced ? {} : { y: [0, -6, 0], opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 3 + i * 0.3, delay: i * 0.25, repeat: Infinity }}
          >
            {tool}
          </motion.div>
        );
      })}
    </div>
  );
}

export function TimelineGapInfra({
  index,
  isEven,
  isInView,
  compact = false,
  company,
  tenure,
}: {
  index: number;
  isEven: boolean;
  isInView: boolean;
  compact?: boolean;
  company: string;
  tenure: ExperienceTenure;
}) {
  const reduced = useReducedMotion() ?? false;
  const visual = getExperienceVisual(index);

  return (
    <motion.div
      className={`absolute inset-0 isolate flex items-center justify-center ${compact ? 'px-2' : 'px-4'}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 + 0.3 }}
      style={{ perspective: compact ? 800 : 1100, transformStyle: 'preserve-3d' }}
    >
      <GapColumnBackdrop visual={visual} index={index} reduced={reduced} />
      <ExperienceGap3DDecor index={index} isEven={isEven} compact={compact} visual={visual} />

      <motion.div
        className={`relative z-10 w-full ${compact ? 'max-w-[230px]' : 'max-w-[280px]'}`}
        animate={
          reduced || !isInView
            ? {}
            : {
                x: isEven ? [0, 8, -4, 0] : [0, -8, 4, 0],
                y: [0, -10, -3, 0],
                rotateY: isEven ? [0, 5, -3, 0] : [0, -5, 3, 0],
              }
        }
        transition={{ duration: 10 + index, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <WorkInfraPanel
          visual={visual}
          company={company}
          tenure={tenure}
          reduced={reduced}
          compact={compact}
          mapId={index}
        />
      </motion.div>
    </motion.div>
  );
}
