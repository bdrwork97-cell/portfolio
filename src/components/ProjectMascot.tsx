import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import Mascot3DWrapper from './Mascot3DWrapper';

export type ProjectMascotId =
  | 'CloudCog'
  | 'Boxes'
  | 'Layers'
  | 'Workflow'
  | 'LineChart'
  | 'ShieldCheck';

function MascotWrapper({
  children,
  large = false,
  bounce = 3,
}: {
  children: ReactNode;
  large?: boolean;
  bounce?: number;
}) {
  return (
    <Mascot3DWrapper
      className={large ? 'h-[140px] w-[130px]' : 'h-[88px] w-[82px]'}
      bounce={bounce}
      depth={large ? 20 : 14}
      variant="card"
    >
      {children}
    </Mascot3DWrapper>
  );
}

function TerraformBeaver({ large }: { large?: boolean }) {
  const vb = large ? '0 0 130 140' : '0 0 82 96';
  return (
    <MascotWrapper large={large} bounce={large ? 5 : 3}>
      <svg viewBox={vb} className="h-full w-full drop-shadow-md">
        <ellipse cx={large ? 65 : 41} cy={large ? 132 : 90} rx={large ? 28 : 20} ry="4" fill="#000" opacity="0.06" />
        <ellipse cx={large ? 65 : 41} cy={large ? 88 : 62} rx={large ? 26 : 18} ry={large ? 20 : 14} fill="#b45309" />
        <circle cx={large ? 65 : 41} cy={large ? 52 : 38} r={large ? 24 : 17} fill="#92400e" />
        <rect x={large ? 48 : 30} y={large ? 36 : 26} width={large ? 34 : 22} height={large ? 10 : 7} rx="3" fill="#ff9900" />
        <text x={large ? 52 : 33} y={large ? 44 : 31} fontSize={large ? 7 : 5} fontWeight="bold" fill="white">AWS</text>
        <circle cx={large ? 58 : 36} cy={large ? 50 : 36} r={large ? 4 : 3} fill="white" />
        <circle cx={large ? 72 : 46} cy={large ? 50 : 36} r={large ? 4 : 3} fill="white" />
        <circle cx={large ? 58 : 36} cy={large ? 50 : 36} r={large ? 2 : 1.5} fill="#1e293b" />
        <circle cx={large ? 72 : 46} cy={large ? 50 : 36} r={large ? 2 : 1.5} fill="#1e293b" />
        <rect x={large ? 52 : 33} y={large ? 44 : 32} width={large ? 26 : 16} height={large ? 7 : 5} rx="2" fill="#475569" opacity="0.8" />
        <ellipse cx={large ? 52 : 33} cy={large ? 58 : 42} rx={large ? 5 : 3} ry={large ? 4 : 3} fill="#fcd34d" />
        <ellipse cx={large ? 78 : 49} cy={large ? 58 : 42} rx={large ? 5 : 3} ry={large ? 4 : 3} fill="#fcd34d" />
        <rect x={large ? 88 : 54} y={large ? 70 : 48} width={large ? 22 : 14} height={large ? 16 : 10} rx="2" fill="#7c3aed" opacity="0.85" />
        <text x={large ? 91 : 56} y={large ? 80 : 55} fontSize={large ? 6 : 4} fill="white">TF</text>
        <motion.g animate={{ y: [0, -2, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
          <rect x={large ? 12 : 8} y={large ? 72 : 50} width={large ? 14 : 9} height={large ? 10 : 7} rx="1" fill="#8447bc" />
          <rect x={large ? 16 : 10} y={large ? 68 : 46} width={large ? 14 : 9} height={large ? 10 : 7} rx="1" fill="#9f67d9" />
        </motion.g>
      </svg>
    </MascotWrapper>
  );
}

function KubernetesOctopus() {
  return (
    <MascotWrapper bounce={4}>
      <svg viewBox="0 0 82 96" className="h-full w-full drop-shadow-md">
        <ellipse cx="41" cy="90" rx="20" ry="4" fill="#000" opacity="0.06" />
        <circle cx="41" cy="36" r="18" fill="#326ce5" />
        <circle cx="41" cy="36" r="10" fill="white" opacity="0.9" />
        <path d="M35 32 L41 26 L47 32 L45 38 L37 38 Z" fill="#326ce5" />
        <circle cx="36" cy="35" r="2.5" fill="#1e293b" />
        <circle cx="46" cy="35" r="2.5" fill="#1e293b" />
        <path d="M38 42 Q41 45 44 42" stroke="#1e40af" strokeWidth="1.2" fill="none" />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const angle = (i / 8) * Math.PI * 2;
          const x1 = 41 + Math.cos(angle) * 14;
          const y1 = 48 + Math.sin(angle) * 10;
          const x2 = 41 + Math.cos(angle) * 28;
          const y2 = 72 + Math.sin(angle) * 8;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#326ce5"
              strokeWidth="3"
              strokeLinecap="round"
            />
          );
        })}
        <rect x="52" y="18" width="16" height="14" rx="2" fill="#94a3b8" stroke="#64748b" strokeWidth="1" />
        <rect x="54" y="20" width="12" height="8" rx="1" fill="#e2e8f0" />
        <text x="56" y="14" fontSize="5" fill="#326ce5" fontWeight="bold">EKS</text>
      </svg>
    </MascotWrapper>
  );
}

function AzureFox() {
  return (
    <MascotWrapper>
      <svg viewBox="0 0 82 96" className="h-full w-full drop-shadow-md">
        <ellipse cx="41" cy="90" rx="20" ry="4" fill="#000" opacity="0.06" />
        <path d="M18 38 L12 20 L28 32 Z" fill="#0078d4" />
        <path d="M64 38 L70 20 L54 32 Z" fill="#0078d4" />
        <circle cx="41" cy="40" r="17" fill="#fb923c" />
        <path d="M32 48 L41 56 L50 48" fill="white" />
        <circle cx="34" cy="38" r="3" fill="#1e293b" />
        <circle cx="48" cy="38" r="3" fill="#1e293b" />
        <ellipse cx="41" cy="66" rx="14" ry="11" fill="#fb923c" />
        <rect x="14" y="58" width="12" height="10" rx="1" fill="#0078d4" opacity="0.7" />
        <rect x="28" y="54" width="12" height="10" rx="1" fill="#50e6ff" opacity="0.7" />
        <rect x="42" y="50" width="12" height="10" rx="1" fill="#0078d4" opacity="0.7" />
        <rect x="56" y="54" width="12" height="10" rx="1" fill="#50e6ff" opacity="0.7" />
        <text x="48" y="16" fontSize="5" fontWeight="bold" fill="#0078d4">AKS</text>
        <motion.g animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <rect x="58" y="62" width="14" height="12" rx="2" fill="white" stroke="#0078d4" strokeWidth="1" />
        </motion.g>
      </svg>
    </MascotWrapper>
  );
}

function PipelineDog() {
  return (
    <MascotWrapper bounce={5}>
      <svg viewBox="0 0 82 96" className="h-full w-full drop-shadow-md">
        <ellipse cx="41" cy="90" rx="20" ry="4" fill="#000" opacity="0.06" />
        <ellipse cx="41" cy="66" rx="14" ry="11" fill="#d97706" />
        <ellipse cx="22" cy="36" rx="7" ry="12" fill="#b45309" transform="rotate(-20 22 36)" />
        <ellipse cx="60" cy="36" rx="7" ry="12" fill="#b45309" transform="rotate(20 60 36)" />
        <circle cx="41" cy="38" r="16" fill="#fbbf24" />
        <circle cx="35" cy="36" r="3" fill="#1e293b" />
        <circle cx="47" cy="36" r="3" fill="#1e293b" />
        <path d="M36 44 Q41 50 46 44" fill="#fb7185" />
        <line x1="8" y1="72" x2="74" y2="72" stroke="#0078d4" strokeWidth="2" strokeDasharray="4 3" />
        <motion.circle
          r="4"
          fill="#0078d4"
          cy={72}
          animate={{ cx: [12, 70, 12] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
        />
        <text x="10" y="84" fontSize="5" fill="#605e5c">CI/CD</text>
        <rect x="54" y="48" width="14" height="10" rx="1" fill="#64748b" />
        <rect x="56" y="50" width="10" height="6" rx="0.5" fill="#22c55e" />
      </svg>
    </MascotWrapper>
  );
}

function MonitoringOwl() {
  return (
    <MascotWrapper>
      <svg viewBox="0 0 82 96" className="h-full w-full drop-shadow-md">
        <ellipse cx="41" cy="90" rx="20" ry="4" fill="#000" opacity="0.06" />
        <path d="M20 30 Q41 14 62 30 L60 38 Q41 30 22 38 Z" fill="#78716c" />
        <circle cx="41" cy="44" r="17" fill="#a8a29e" />
        <circle cx="32" cy="42" r="7" fill="#fef9c3" />
        <circle cx="50" cy="42" r="7" fill="#fef9c3" />
        <circle cx="32" cy="42" r="3" fill="#1e293b" />
        <circle cx="50" cy="42" r="3" fill="#1e293b" />
        <path d="M38 52 L41 56 L44 52 Z" fill="#f59e0b" />
        <ellipse cx="41" cy="66" rx="13" ry="10" fill="#a8a29e" />
        <rect x="48" y="58" width="22" height="16" rx="2" fill="white" stroke="#0078d4" strokeWidth="1" />
        <polyline points="52,70 56,64 60,68 64,60" fill="none" stroke="#0078d4" strokeWidth="1.5" />
        <motion.circle
          r="2"
          fill="#22c55e"
          animate={{ cx: [52, 64], cy: [70, 60], opacity: [1, 0.8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
        <text x="50" y="56" fontSize="4" fill="#605e5c">metrics</text>
      </svg>
    </MascotWrapper>
  );
}

function SecurityBulldog() {
  return (
    <MascotWrapper bounce={2}>
      <svg viewBox="0 0 82 96" className="h-full w-full drop-shadow-md">
        <ellipse cx="41" cy="90" rx="20" ry="4" fill="#000" opacity="0.06" />
        <ellipse cx="41" cy="68" rx="16" ry="12" fill="#78716c" />
        <circle cx="41" cy="38" r="18" fill="#9ca3af" />
        <path d="M26 32 Q41 22 56 32" fill="#4b5563" />
        <circle cx="34" cy="36" r="4" fill="white" />
        <circle cx="48" cy="36" r="4" fill="white" />
        <circle cx="34" cy="36" r="2" fill="#1e293b" />
        <circle cx="48" cy="36" r="2" fill="#1e293b" />
        <ellipse cx="41" cy="48" rx="8" ry="6" fill="#d1d5db" />
        <circle cx="41" cy="47" r="3" fill="#1e293b" />
        <motion.g
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ transformOrigin: '58px 55px' }}
        >
          <path d="M52 48 L68 42 L66 58 L54 62 Z" fill="#0078d4" stroke="#005a9e" strokeWidth="1" />
          <path d="M60 46 L64 50 L60 54 Z" fill="white" opacity="0.8" />
        </motion.g>
        <rect x="10" y="52" width="12" height="14" rx="2" fill="#22c55e" opacity="0.8" />
        <text x="12" y="62" fontSize="5" fill="white" fontWeight="bold">OK</text>
      </svg>
    </MascotWrapper>
  );
}

const mascotMap: Record<ProjectMascotId, (props: { large?: boolean }) => ReactNode> = {
  CloudCog: TerraformBeaver,
  Boxes: KubernetesOctopus,
  Layers: AzureFox,
  Workflow: PipelineDog,
  LineChart: MonitoringOwl,
  ShieldCheck: SecurityBulldog,
};

const mascotLabels: Record<ProjectMascotId, string> = {
  CloudCog: 'Terraform + AWS',
  Boxes: 'Kubernetes EKS',
  Layers: 'Azure AKS',
  Workflow: 'CI/CD Pipeline',
  LineChart: 'Monitoring',
  ShieldCheck: 'Security Ops',
};

export function ProjectMascot({ icon, large = false }: { icon: ProjectMascotId; large?: boolean }) {
  const Mascot = mascotMap[icon] ?? TerraformBeaver;
  return (
    <div className="flex flex-col items-center gap-1">
      <Mascot large={large} />
      <span className="rounded-full bg-ms-gray px-2 py-0.5 text-[8px] font-semibold text-ms-text-secondary">
        {mascotLabels[icon]}
      </span>
    </div>
  );
}
