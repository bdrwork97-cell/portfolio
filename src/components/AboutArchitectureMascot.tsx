import { type ReactElement } from 'react';

export type ArchMascotId = 'cloud' | 'server' | 'database' | 'shield' | 'pipeline';

const mascotSize = 'h-12 w-12 sm:h-14 sm:w-14';

function CloudBuddySvg() {
  return (
    <svg viewBox="0 0 56 56" className={`${mascotSize}`}>
      <ellipse cx="28" cy="38" rx="16" ry="10" fill="#0078d4" opacity="0.85" />
      <ellipse cx="18" cy="32" rx="10" ry="8" fill="#50e6ff" opacity="0.9" />
      <ellipse cx="38" cy="30" rx="12" ry="9" fill="#3aa0f3" opacity="0.9" />
      <circle cx="22" cy="28" r="2" fill="#1e293b" />
      <circle cx="34" cy="28" r="2" fill="#1e293b" />
      <path d="M24 34 Q28 37 32 34" stroke="#004578" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M8 20 L14 20 M42 18 L48 18" stroke="#50e6ff" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

function ServerBotSvg() {
  return (
    <svg viewBox="0 0 56 56" className={`${mascotSize}`}>
      <rect x="14" y="10" width="28" height="36" rx="4" fill="#475569" />
      <rect x="16" y="14" width="24" height="8" rx="2" fill="#0078d4" opacity="0.85" />
      <rect x="16" y="26" width="24" height="8" rx="2" fill="#005a9e" opacity="0.75" />
      <rect x="16" y="38" width="24" height="6" rx="2" fill="#50e6ff" opacity="0.6" />
      <circle cx="22" cy="18" r="1.5" fill="#50e6ff" />
      <circle cx="26" cy="18" r="1.5" fill="#50e6ff" />
      <circle cx="30" cy="18" r="1.5" fill="#50e6ff" />
      <rect x="20" y="28" width="16" height="3" rx="1" fill="#50e6ff" opacity="0.8" />
      <rect x="24" y="4" width="8" height="6" rx="2" fill="#64748b" />
      <circle cx="28" cy="7" r="2" fill="#50e6ff" opacity="0.8" />
    </svg>
  );
}

function DatabaseOwlSvg() {
  return (
    <svg viewBox="0 0 56 56" className={`${mascotSize}`}>
      <ellipse cx="28" cy="44" rx="14" ry="8" fill="#a8a29e" />
      <circle cx="28" cy="28" r="14" fill="#d6d3d1" />
      <circle cx="22" cy="26" r="5" fill="#fef9c3" />
      <circle cx="34" cy="26" r="5" fill="#fef9c3" />
      <circle cx="22" cy="26" r="2" fill="#1e293b" />
      <circle cx="34" cy="26" r="2" fill="#1e293b" />
      <ellipse cx="28" cy="38" rx="10" ry="4" fill="#0078d4" opacity="0.8" />
      <line x1="20" y1="38" x2="36" y2="38" stroke="#50e6ff" strokeWidth="1.5" opacity="0.8" />
    </svg>
  );
}

function ShieldBulldogSvg() {
  return (
    <svg viewBox="0 0 56 56" className={`${mascotSize}`}>
      <path d="M28 8 L42 14 L42 28 C42 38 28 48 28 48 C28 48 14 38 14 28 L14 14 Z" fill="#0078d4" opacity="0.25" stroke="#0078d4" strokeWidth="1.5" />
      <circle cx="28" cy="26" r="12" fill="#9ca3af" />
      <circle cx="23" cy="24" r="2.5" fill="white" />
      <circle cx="33" cy="24" r="2.5" fill="white" />
      <circle cx="23" cy="24" r="1" fill="#1e293b" />
      <circle cx="33" cy="24" r="1" fill="#1e293b" />
      <path d="M28 14 L28 34 M20 24 L36 24" stroke="#50e6ff" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

function PipelineOctopusSvg() {
  return (
    <svg viewBox="0 0 56 56" className={`${mascotSize}`}>
      <circle cx="28" cy="22" r="12" fill="#326ce5" />
      <circle cx="28" cy="22" r="6" fill="white" opacity="0.9" />
      <circle cx="25" cy="21" r="1.5" fill="#1e293b" />
      <circle cx="31" cy="21" r="1.5" fill="#1e293b" />
      {[0, 1, 2, 3].map((i) => {
        const a = (i / 4) * Math.PI + 0.4;
        return (
          <line
            key={i}
            x1={28 + Math.cos(a) * 10}
            y1={28 + Math.sin(a) * 8}
            x2={28 + Math.cos(a) * 22}
            y2={44 + Math.sin(a) * 4}
            stroke="#326ce5"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.85"
          />
        );
      })}
      <circle cx="44" cy="18" r="4" fill="#50e6ff" opacity="0.9" />
      <circle cx="12" cy="20" r="3" fill="#0078d4" opacity="0.9" />
    </svg>
  );
}

const staticMascotMap: Record<ArchMascotId, () => ReactElement> = {
  cloud: CloudBuddySvg,
  server: ServerBotSvg,
  database: DatabaseOwlSvg,
  shield: ShieldBulldogSvg,
  pipeline: PipelineOctopusSvg,
};

export function StaticArchitectureMascot({ id }: { id: ArchMascotId }) {
  const Mascot = staticMascotMap[id];
  return <Mascot />;
}
