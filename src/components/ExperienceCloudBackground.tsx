import { motion, useReducedMotion } from 'framer-motion';
import {
  Cloud,
  Server,
  Database,
  Container,
  Workflow,
  GitBranch,
  GitCommit,
  GitMerge,
  Github,
  Sparkles,
  Bot,
} from 'lucide-react';

function DriftingCloudShape({ reduced, delay }: { reduced: boolean; delay: number }) {
  return (
    <motion.svg
      width="100"
      height="52"
      viewBox="0 0 100 52"
      fill="currentColor"
      className="text-azure-400/25"
      animate={reduced ? {} : { x: [0, 14, -8, 0], y: [0, -6, 4, 0] }}
      transition={{ duration: 10, delay, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      <ellipse cx="30" cy="30" rx="22" ry="14" opacity="0.7" />
      <ellipse cx="52" cy="24" rx="20" ry="15" opacity="0.55" />
      <ellipse cx="72" cy="32" rx="18" ry="12" opacity="0.6" />
    </motion.svg>
  );
}

function GapColumnBackdrop({ index, reduced }: { index: number; reduced: boolean }) {
  const nodes = [
    { x: 20, y: 25 },
    { x: 50, y: 15 },
    { x: 80, y: 30 },
    { x: 35, y: 70 },
    { x: 65, y: 80 },
  ];
  const links: [number, number][] = [
    [0, 1],
    [1, 2],
    [0, 3],
    [1, 4],
    [2, 4],
    [3, 4],
  ];

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className={`absolute h-40 w-40 rounded-full blur-2xl ${
          index % 2 === 0 ? 'left-0 top-0 bg-azure-200/35' : 'bottom-0 right-0 bg-orange-200/30'
        }`}
        animate={reduced ? {} : { x: [0, 12, 0], y: [0, -10, 0] }}
        transition={{ duration: 8 + index, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-4 top-1/3 h-28 w-28 rounded-full bg-violet-200/25 blur-2xl"
        animate={reduced ? {} : { x: [0, -8, 0], y: [0, 8, 0] }}
        transition={{ duration: 9 + index, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute left-2 top-[8%]">
        <DriftingCloudShape reduced={reduced} delay={index * 0.4} />
      </div>
      <div className="absolute bottom-[10%] right-2">
        <DriftingCloudShape reduced={reduced} delay={index * 0.4 + 1.5} />
      </div>

      <svg className="absolute inset-0 h-full w-full opacity-80" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`gap-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0078d4" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        {links.map(([a, b], i) => (
          <g key={i}>
            <line
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={nodes[b].x}
              y2={nodes[b].y}
              stroke={`url(#gap-grad-${index})`}
              strokeWidth="0.6"
              strokeDasharray="2 3"
              vectorEffect="non-scaling-stroke"
            />
            {!reduced && (
              <motion.circle
                r="1.2"
                fill="#0078d4"
                initial={{ cx: nodes[a].x, cy: nodes[a].y, opacity: 0 }}
                animate={{
                  cx: [nodes[a].x, nodes[b].x],
                  cy: [nodes[a].y, nodes[b].y],
                  opacity: [0, 0.85, 0],
                }}
                transition={{ duration: 2.5, delay: i * 0.4 + index * 0.2, repeat: Infinity, ease: 'linear' }}
              />
            )}
          </g>
        ))}
      </svg>

      {[
        { Icon: Cloud, x: '8%', y: '12%', color: 'text-azure-500/30' },
        { Icon: Server, x: '78%', y: '18%', color: 'text-azure-600/28' },
        { Icon: Github, x: '12%', y: '78%', color: 'text-ms-text/22' },
        { Icon: Sparkles, x: '82%', y: '72%', color: 'text-violet-500/28' },
      ].map(({ Icon, x, y, color }, i) => (
        <motion.div
          key={i}
          className={`absolute ${color}`}
          style={{ left: x, top: y }}
          animate={reduced ? {} : { y: [0, -8, 0], x: [0, i % 2 === 0 ? 6 : -6, 0] }}
          transition={{ duration: 6 + i, delay: index * 0.3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon size={22} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
}

export function TimelineGapInfra({
  index,
  isEven,
  isInView,
}: {
  index: number;
  isEven: boolean;
  isInView: boolean;
}) {
  const reduced = useReducedMotion() ?? false;
  const platform = index % 2 === 0 ? 'azure' : 'aws';
  const themes = [
    { git: 'main', ai: 'Copilot', action: 'build.yml' },
    { git: 'develop', ai: 'ML Agent', action: 'deploy.yml' },
    { git: 'feature', ai: 'AI Review', action: 'ci.yml' },
  ];
  const theme = themes[index % themes.length];

  return (
    <motion.div
      className="absolute inset-0 isolate flex items-center justify-center px-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 + 0.3 }}
    >
      <GapColumnBackdrop index={index} reduced={reduced} />

      <motion.div
        className="relative z-10 w-full max-w-[240px]"
        animate={
          reduced || !isInView
            ? {}
            : {
                x: isEven ? [0, 10, -6, 0] : [0, -10, 6, 0],
                y: [0, -12, -4, 0],
              }
        }
        transition={{ duration: 10 + index, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
      >
        <div className="relative rounded-xl border border-[#edebe9] bg-white/95 p-4 shadow-lg backdrop-blur-sm">
          <div className="mb-2 flex flex-wrap items-center gap-1.5">
            <div
              className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider ${
                platform === 'azure' ? 'bg-azure-50 text-azure-700' : 'bg-orange-50 text-orange-700'
              }`}
            >
              <Cloud className="h-3 w-3" />
              {platform === 'azure' ? 'Azure' : 'AWS'}
            </div>
            <div className="inline-flex items-center gap-1 rounded-full bg-ms-gray px-2 py-0.5 text-[8px] font-bold text-ms-text">
              <Github className="h-3 w-3" />
              Actions
            </div>
            <div className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-0.5 text-[8px] font-bold text-violet-700">
              <Sparkles className="h-3 w-3" />
              AI
            </div>
          </div>

          <div className="mb-3 flex items-center gap-1 rounded-lg border border-violet-100 bg-violet-50/50 px-2 py-1.5">
            <GitBranch className="h-3 w-3 shrink-0 text-violet-600" />
            <span className="font-mono text-[8px] text-violet-700">{theme.git}</span>
            <span className="text-[7px] text-ms-text-secondary">→</span>
            <GitCommit className="h-3 w-3 text-azure-500" />
            <span className="truncate font-mono text-[7px] text-ms-text-secondary">{theme.action}</span>
            {!reduced && (
              <motion.div
                className="ml-auto h-1.5 w-1.5 rounded-full bg-green-500"
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
              />
            )}
          </div>

          <div className="flex items-center justify-between gap-1.5">
            <motion.div
              className="flex flex-col items-center gap-1 rounded-lg border border-azure-200/60 bg-azure-50/80 px-2 py-2"
              animate={reduced ? {} : { y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
            >
              <Server className="h-5 w-5 text-azure-600" />
              <span className="text-[8px] font-semibold text-azure-700">Server</span>
            </motion.div>

            <div className="relative flex flex-1 flex-col items-center gap-0.5 px-0.5">
              <div className="h-px w-full bg-gradient-to-r from-violet-400 via-azure-400 to-orange-400" />
              {!reduced && (
                <>
                  <motion.div
                    className="absolute top-[35%] h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-violet-500"
                    animate={{ x: [-32, 32], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.4, ease: 'linear' }}
                  />
                  <motion.div
                    className="absolute top-[65%] h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-azure-500"
                    animate={{ x: [32, -32], opacity: [0, 0.8, 0.8, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.4 + 0.6, ease: 'linear' }}
                  />
                </>
              )}
              <div className="flex items-center gap-0.5">
                <Github className="h-3 w-3 text-ms-text/70" />
                <Workflow className="h-3 w-3 text-orange-500" />
              </div>
              <span className="text-[7px] font-medium text-ms-text-secondary">CI/CD</span>
            </div>

            <motion.div
              className="flex flex-col items-center gap-0.5 rounded-lg border border-violet-200/60 bg-violet-50/70 px-1.5 py-1.5"
              animate={reduced ? {} : { y: [0, -3, 0], scale: [1, 1.04, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.35 }}
            >
              <motion.div animate={reduced ? {} : { rotate: [0, 8, -8, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                <Sparkles className="h-4 w-4 text-violet-500" />
              </motion.div>
              <span className="text-[7px] font-semibold text-violet-700">{theme.ai}</span>
            </motion.div>

            <motion.div
              className={`flex flex-col items-center gap-1 rounded-lg border px-2 py-2 ${
                platform === 'azure'
                  ? 'border-azure-300/60 bg-gradient-to-br from-azure-50 to-white'
                  : 'border-orange-300/60 bg-gradient-to-br from-orange-50 to-white'
              }`}
              animate={reduced ? {} : { y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: index * 0.3 + 0.5 }}
            >
              <Cloud className={`h-5 w-5 ${platform === 'azure' ? 'text-azure-600' : 'text-orange-600'}`} />
              <span className={`text-[8px] font-semibold ${platform === 'azure' ? 'text-azure-700' : 'text-orange-700'}`}>
                Cloud
              </span>
            </motion.div>
          </div>

          <div className="mt-3 flex justify-center gap-2.5 border-t border-[#edebe9]/80 pt-2">
            {[Container, Database, GitMerge, Bot].map((Icon, i) => (
              <motion.div
                key={i}
                animate={reduced ? {} : { y: [0, -3, 0] }}
                transition={{ duration: 2.5, delay: i * 0.2 + index * 0.15, repeat: Infinity }}
              >
                <Icon className={`h-3.5 w-3.5 ${i === 3 ? 'text-violet-500/70' : 'text-azure-500/70'}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
