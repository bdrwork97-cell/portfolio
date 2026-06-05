import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { ExperienceTenure } from '../data/portfolio';
import Mascot3DWrapper from './Mascot3DWrapper';

function MascotShell({ children, bounce = 2 }: { children: ReactNode; bounce?: number }) {
  return (
    <Mascot3DWrapper className="h-[68px] w-[64px]" bounce={bounce} variant="card">
      {children}
    </Mascot3DWrapper>
  );
}

function CurrentlyWorkingMascot() {
  return (
    <MascotShell bounce={3}>
      <svg viewBox="0 0 64 68" className="h-full w-full drop-shadow-sm">
        <ellipse cx="32" cy="64" rx="16" ry="3" fill="#000" opacity="0.06" />
        <rect x="8" y="38" width="48" height="18" rx="3" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
        <rect x="10" y="40" width="44" height="12" rx="2" fill="#0f172a" />
        <motion.rect
          x="12"
          y="42"
          width="18"
          height="2"
          rx="1"
          fill="#22c55e"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
        <motion.rect
          x="12"
          y="46"
          width="12"
          height="2"
          rx="1"
          fill="#50e6ff"
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 1.4, delay: 0.2, repeat: Infinity }}
        />
        <circle cx="32" cy="24" r="11" fill="#fde68a" />
        <path d="M22 14 L18 6 L26 12 Z" fill="#0078d4" />
        <path d="M42 14 L46 6 L38 12 Z" fill="#0078d4" />
        <circle cx="28" cy="23" r="2" fill="#1e293b" />
        <circle cx="36" cy="23" r="2" fill="#1e293b" />
        <path d="M28 28 Q32 31 36 28" stroke="#fb7185" strokeWidth="1.2" fill="none" />
        <ellipse cx="32" cy="34" rx="9" ry="6" fill="#0078d4" opacity="0.85" />
        <motion.g
          animate={{ rotate: [-6, 6, -6] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          style={{ transformOrigin: '48px 30px' }}
        >
          <path d="M44 22 L52 18 L50 30 L44 28 Z" fill="#fbbf24" stroke="#f59e0b" strokeWidth="0.8" />
        </motion.g>
        <motion.circle
          cx="54"
          cy="12"
          r="5"
          fill="#22c55e"
          animate={{ scale: [1, 1.15, 1], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <circle cx="54" cy="12" r="2" fill="white" />
        <rect x="4" y="8" width="22" height="10" rx="5" fill="#22c55e" opacity="0.9" />
        <text x="7" y="15" fontSize="5" fill="white" fontWeight="bold">
          LIVE
        </text>
      </svg>
    </MascotShell>
  );
}

function PreviouslyWorkedMascot() {
  return (
    <MascotShell bounce={2}>
      <svg viewBox="0 0 64 68" className="h-full w-full drop-shadow-sm">
        <ellipse cx="32" cy="64" rx="16" ry="3" fill="#000" opacity="0.06" />
        <rect x="14" y="36" width="36" height="22" rx="3" fill="#64748b" stroke="#475569" strokeWidth="1" />
        <rect x="16" y="38" width="32" height="4" rx="1" fill="#94a3b8" />
        <path d="M18 44 L28 52 L46 38" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="20" r="10" fill="#cbd5e1" />
        <path d="M24 12 L22 6 L28 10 Z" fill="#475569" />
        <path d="M40 12 L42 6 L36 10 Z" fill="#475569" />
        <circle cx="29" cy="19" r="1.8" fill="#1e293b" />
        <circle cx="35" cy="19" r="1.8" fill="#1e293b" />
        <path d="M28 24 Q32 27 36 24" stroke="#64748b" strokeWidth="1" fill="none" />
        <motion.g
          animate={{ x: [0, 2, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          style={{ transformOrigin: '48px 48px' }}
        >
          <rect x="44" y="44" width="14" height="12" rx="2" fill="#b45309" stroke="#92400e" strokeWidth="0.8" />
          <rect x="46" y="46" width="10" height="2" rx="0.5" fill="#fcd34d" />
          <rect x="46" y="50" width="7" height="2" rx="0.5" fill="#fcd34d" opacity="0.7" />
        </motion.g>
        <rect x="4" y="8" width="30" height="10" rx="5" fill="#0078d4" opacity="0.85" />
        <text x="6" y="15" fontSize="4.5" fill="white" fontWeight="bold">
          Done ✓
        </text>
      </svg>
    </MascotShell>
  );
}

function LongAgoMascot() {
  return (
    <MascotShell bounce={1}>
      <svg viewBox="0 0 64 68" className="h-full w-full drop-shadow-sm">
        <ellipse cx="32" cy="64" rx="16" ry="3" fill="#000" opacity="0.06" />
        <rect x="10" y="14" width="44" height="40" rx="3" fill="#d6d3d1" stroke="#a8a29e" strokeWidth="1.5" />
        <rect x="12" y="16" width="40" height="34" rx="2" fill="#fef3c7" opacity="0.9" />
        <circle cx="32" cy="32" r="10" fill="#d4a574" opacity="0.85" />
        <circle cx="28" cy="30" r="1.5" fill="#78350f" />
        <circle cx="36" cy="30" r="1.5" fill="#78350f" />
        <path d="M27 35 Q32 38 37 35" stroke="#92400e" strokeWidth="1" fill="none" />
        <ellipse cx="32" cy="42" rx="7" ry="4" fill="#a8a29e" opacity="0.6" />
        <motion.g
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <circle cx="16" cy="22" r="1.5" fill="#a8a29e" />
          <circle cx="48" cy="26" r="1" fill="#a8a29e" />
          <circle cx="44" cy="44" r="1.2" fill="#a8a29e" />
        </motion.g>
        <rect x="46" y="48" width="12" height="14" rx="1" fill="#e7e5e4" stroke="#a8a29e" strokeWidth="0.8" />
        <motion.path
          d="M49 52 L52 58 L55 52"
          fill="#78716c"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <rect x="4" y="6" width="28" height="10" rx="5" fill="#78716c" opacity="0.85" />
        <text x="6" y="13" fontSize="4.5" fill="white" fontWeight="bold">
          Alumni
        </text>
      </svg>
    </MascotShell>
  );
}

const mascotMap: Record<ExperienceTenure, () => ReactNode> = {
  current: CurrentlyWorkingMascot,
  recent: PreviouslyWorkedMascot,
  past: LongAgoMascot,
};

const tenureLabels: Record<ExperienceTenure, string> = {
  current: 'Currently here',
  recent: 'Previously worked',
  past: 'Long ago',
};

const tenureBadgeStyles: Record<ExperienceTenure, string> = {
  current: 'bg-emerald-50 text-emerald-700 ring-emerald-200/60',
  recent: 'bg-azure-50 text-azure-700 ring-azure-200/60',
  past: 'bg-stone-100 text-stone-600 ring-stone-200/60',
};

export function ExperienceTenureMascot({ tenure }: { tenure: ExperienceTenure }) {
  const Mascot = mascotMap[tenure];
  return (
    <div className="flex flex-col items-center gap-1">
      <Mascot />
      <span
        className={`rounded-full px-1.5 py-0.5 text-center text-[7px] font-semibold ring-1 ${tenureBadgeStyles[tenure]}`}
      >
        {tenureLabels[tenure]}
      </span>
    </div>
  );
}
