import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import Mascot3DWrapper from './Mascot3DWrapper';

export type SkillMascotId =
  | 'Cloud'
  | 'Code2'
  | 'Container'
  | 'GitBranch'
  | 'Activity'
  | 'Shield'
  | 'Network'
  | 'Terminal'
  | 'Database'
  | 'Server'
  | 'Wrench';

function MascotWrapper({ children, bounce = 3 }: { children: ReactNode; bounce?: number }) {
  return (
    <Mascot3DWrapper className="h-[76px] w-[72px]" bounce={bounce} variant="card">
      {children}
    </Mascot3DWrapper>
  );
}

function CloudEagle() {
  return (
    <MascotWrapper bounce={4}>
      <svg viewBox="0 0 72 76" className="h-full w-full drop-shadow-md">
        <ellipse cx="36" cy="72" rx="18" ry="3" fill="#000" opacity="0.06" />
        <motion.ellipse
          cx="14"
          cy="18"
          rx="10"
          ry="6"
          fill="#ff9900"
          opacity="0.75"
          animate={{ x: [0, 2, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.ellipse
          cx="58"
          cy="14"
          rx="11"
          ry="7"
          fill="#0078d4"
          opacity="0.7"
          animate={{ x: [0, -2, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        />
        <ellipse cx="36" cy="48" rx="14" ry="10" fill="#92400e" />
        <path d="M22 38 L14 28 L26 34 Z" fill="#b45309" />
        <path d="M50 38 L58 28 L46 34 Z" fill="#b45309" />
        <circle cx="36" cy="32" r="14" fill="#d97706" />
        <circle cx="31" cy="30" r="3" fill="#1e293b" />
        <circle cx="41" cy="30" r="3" fill="#1e293b" />
        <path d="M32 36 L36 40 L40 36" fill="#f59e0b" />
        <text x="8" y="24" fontSize="4" fill="#ff9900" fontWeight="bold">
          AWS
        </text>
        <text x="52" y="20" fontSize="4" fill="#0078d4" fontWeight="bold">
          Azure
        </text>
      </svg>
    </MascotWrapper>
  );
}

function IaCBeaver() {
  return (
    <MascotWrapper>
      <svg viewBox="0 0 72 76" className="h-full w-full drop-shadow-md">
        <ellipse cx="36" cy="72" rx="18" ry="3" fill="#000" opacity="0.06" />
        <ellipse cx="36" cy="52" rx="14" ry="10" fill="#b45309" />
        <circle cx="36" cy="34" r="14" fill="#92400e" />
        <circle cx="30" cy="32" r="2.5" fill="#1e293b" />
        <circle cx="42" cy="32" r="2.5" fill="#1e293b" />
        <rect x="28" y="28" width="16" height="5" rx="2" fill="#475569" opacity="0.8" />
        <motion.g animate={{ y: [0, -2, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
          <rect x="48" y="40" width="12" height="9" rx="1" fill="#7c3aed" />
          <rect x="52" y="36" width="12" height="9" rx="1" fill="#8447bc" />
        </motion.g>
        <text x="50" y="46" fontSize="4" fill="white">
          TF
        </text>
        <text x="8" y="64" fontSize="5" fill="#7c3aed" fontWeight="bold">
          IaC
        </text>
      </svg>
    </MascotWrapper>
  );
}

function ContainerOctopus() {
  return (
    <MascotWrapper bounce={4}>
      <svg viewBox="0 0 72 76" className="h-full w-full drop-shadow-md">
        <ellipse cx="36" cy="72" rx="18" ry="3" fill="#000" opacity="0.06" />
        <circle cx="36" cy="30" r="14" fill="#326ce5" />
        <circle cx="36" cy="30" r="8" fill="white" opacity="0.9" />
        <circle cx="31" cy="29" r="2" fill="#1e293b" />
        <circle cx="41" cy="29" r="2" fill="#1e293b" />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const angle = (i / 8) * Math.PI * 2;
          const x1 = 36 + Math.cos(angle) * 11;
          const y1 = 40 + Math.sin(angle) * 8;
          const x2 = 36 + Math.cos(angle) * 22;
          const y2 = 58 + Math.sin(angle) * 6;
          return (
            <motion.line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#326ce5"
              strokeWidth="2.5"
              strokeLinecap="round"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.2, delay: i * 0.1, repeat: Infinity }}
            />
          );
        })}
        <rect x="46" y="14" width="14" height="12" rx="2" fill="#2496ed" opacity="0.85" />
        <text x="48" y="10" fontSize="4" fill="#326ce5" fontWeight="bold">
          K8s
        </text>
      </svg>
    </MascotWrapper>
  );
}

function PipelineDog() {
  return (
    <MascotWrapper bounce={5}>
      <svg viewBox="0 0 72 76" className="h-full w-full drop-shadow-md">
        <ellipse cx="36" cy="72" rx="18" ry="3" fill="#000" opacity="0.06" />
        <ellipse cx="36" cy="54" rx="12" ry="9" fill="#d97706" />
        <circle cx="36" cy="32" r="13" fill="#fbbf24" />
        <circle cx="31" cy="30" r="2.5" fill="#1e293b" />
        <circle cx="41" cy="30" r="2.5" fill="#1e293b" />
        <path d="M32 36 Q36 40 40 36" fill="#fb7185" />
        <line x1="6" y1="60" x2="66" y2="60" stroke="#0078d4" strokeWidth="2" strokeDasharray="4 3" />
        <motion.circle
          r="3"
          fill="#0078d4"
          cy={60}
          animate={{ cx: [10, 62, 10] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
        />
        <text x="8" y="70" fontSize="4" fill="#605e5c">
          CI/CD
        </text>
      </svg>
    </MascotWrapper>
  );
}

function MonitoringOwl() {
  return (
    <MascotWrapper>
      <svg viewBox="0 0 72 76" className="h-full w-full drop-shadow-md">
        <ellipse cx="36" cy="72" rx="18" ry="3" fill="#000" opacity="0.06" />
        <path d="M18 26 Q36 12 54 26 L52 32 Q36 26 20 32 Z" fill="#78716c" />
        <circle cx="36" cy="38" r="14" fill="#a8a29e" />
        <circle cx="28" cy="36" r="6" fill="#fef9c3" />
        <circle cx="44" cy="36" r="6" fill="#fef9c3" />
        <circle cx="28" cy="36" r="2.5" fill="#1e293b" />
        <circle cx="44" cy="36" r="2.5" fill="#1e293b" />
        <path d="M33 44 L36 48 L39 44" fill="#f59e0b" />
        <ellipse cx="36" cy="54" rx="11" ry="8" fill="#a8a29e" />
        <rect x="42" y="48" width="18" height="14" rx="2" fill="white" stroke="#0078d4" strokeWidth="1" />
        <polyline points="46,58 50,52 54,56 58,48" fill="none" stroke="#0078d4" strokeWidth="1.5" />
        <motion.circle
          r="1.5"
          fill="#22c55e"
          animate={{ cx: [46, 58], cy: [58, 48], opacity: [1, 0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      </svg>
    </MascotWrapper>
  );
}

function SecurityBulldog() {
  return (
    <MascotWrapper bounce={2}>
      <svg viewBox="0 0 72 76" className="h-full w-full drop-shadow-md">
        <ellipse cx="36" cy="72" rx="18" ry="3" fill="#000" opacity="0.06" />
        <ellipse cx="36" cy="56" rx="13" ry="10" fill="#78716c" />
        <circle cx="36" cy="34" r="15" fill="#9ca3af" />
        <circle cx="30" cy="32" r="3.5" fill="white" />
        <circle cx="42" cy="32" r="3.5" fill="white" />
        <circle cx="30" cy="32" r="1.8" fill="#1e293b" />
        <circle cx="42" cy="32" r="1.8" fill="#1e293b" />
        <motion.g
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ transformOrigin: '50px 48px' }}
        >
          <path d="M44 40 L58 36 L56 50 L46 52 Z" fill="#0078d4" stroke="#005a9e" strokeWidth="1" />
        </motion.g>
        <rect x="8" y="44" width="10" height="12" rx="2" fill="#22c55e" opacity="0.85" />
        <text x="10" y="53" fontSize="4" fill="white" fontWeight="bold">
          OK
        </text>
      </svg>
    </MascotWrapper>
  );
}

function NetworkSpider() {
  return (
    <MascotWrapper bounce={3}>
      <svg viewBox="0 0 72 76" className="h-full w-full drop-shadow-md">
        <ellipse cx="36" cy="72" rx="18" ry="3" fill="#000" opacity="0.06" />
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
          const x2 = 36 + Math.cos(angle) * 26;
          const y2 = 38 + Math.sin(angle) * 22;
          return (
            <line key={i} x1="36" y1="38" x2={x2} y2={y2} stroke="#94a3b8" strokeWidth="1" opacity="0.6" />
          );
        })}
        <motion.circle
          cx="36"
          cy="38"
          r="4"
          fill="#0078d4"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        {[12, 24, 48, 60].map((cx, i) => (
          <motion.circle
            key={cx}
            cx={cx}
            cy={i % 2 === 0 ? 20 : 56}
            r="3"
            fill="#50e6ff"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
          />
        ))}
        <ellipse cx="36" cy="42" rx="8" ry="7" fill="#1e293b" />
        <circle cx="33" cy="40" r="2" fill="#ef4444" />
        <circle cx="39" cy="40" r="2" fill="#ef4444" />
        <line x1="28" y1="44" x2="20" y2="50" stroke="#1e293b" strokeWidth="2" />
        <line x1="44" y1="44" x2="52" y2="50" stroke="#1e293b" strokeWidth="2" />
        <line x1="30" y1="48" x2="22" y2="58" stroke="#1e293b" strokeWidth="2" />
        <line x1="42" y1="48" x2="50" y2="58" stroke="#1e293b" strokeWidth="2" />
        <text x="8" y="68" fontSize="4" fill="#605e5c">
          VPC/VNET
        </text>
      </svg>
    </MascotWrapper>
  );
}

function TerminalRaccoon() {
  return (
    <MascotWrapper>
      <svg viewBox="0 0 72 76" className="h-full w-full drop-shadow-md">
        <ellipse cx="36" cy="72" rx="18" ry="3" fill="#000" opacity="0.06" />
        <rect x="10" y="44" width="52" height="22" rx="3" fill="#1e293b" />
        <rect x="12" y="46" width="48" height="16" rx="2" fill="#0f172a" />
        <motion.text
          x="14"
          y="56"
          fontSize="5"
          fill="#22c55e"
          fontFamily="monospace"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          $ deploy
        </motion.text>
        <circle cx="36" cy="28" r="12" fill="#64748b" />
        <path d="M26 18 L22 8 L30 16 Z" fill="#475569" />
        <path d="M46 18 L50 8 L42 16 Z" fill="#475569" />
        <rect x="28" y="24" width="16" height="6" rx="3" fill="#1e293b" opacity="0.7" />
        <circle cx="32" cy="28" r="2" fill="#1e293b" />
        <circle cx="40" cy="28" r="2" fill="#1e293b" />
        <ellipse cx="36" cy="36" rx="10" ry="6" fill="#94a3b8" />
      </svg>
    </MascotWrapper>
  );
}

function DatabaseElephant() {
  return (
    <MascotWrapper bounce={3}>
      <svg viewBox="0 0 72 76" className="h-full w-full drop-shadow-md">
        <ellipse cx="36" cy="72" rx="18" ry="3" fill="#000" opacity="0.06" />
        <ellipse cx="36" cy="50" rx="14" ry="11" fill="#94a3b8" />
        <circle cx="36" cy="30" r="13" fill="#cbd5e1" />
        <path d="M22 28 Q18 20 14 32 Q18 38 24 34" fill="#94a3b8" />
        <circle cx="31" cy="28" r="2" fill="#1e293b" />
        <circle cx="41" cy="28" r="2" fill="#1e293b" />
        <motion.g animate={{ y: [0, -2, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <rect x="48" y="38" width="10" height="10" rx="1" fill="#0078d4" opacity="0.8" />
          <rect x="52" y="34" width="10" height="10" rx="1" fill="#50e6ff" opacity="0.8" />
        </motion.g>
        <text x="6" y="66" fontSize="4" fill="#605e5c">
          RDS/S3
        </text>
      </svg>
    </MascotWrapper>
  );
}

function ServerPenguin() {
  return (
    <MascotWrapper bounce={4}>
      <svg viewBox="0 0 72 76" className="h-full w-full drop-shadow-md">
        <ellipse cx="36" cy="72" rx="18" ry="3" fill="#000" opacity="0.06" />
        <rect x="44" y="16" width="18" height="48" rx="2" fill="#475569" />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x="46" y={20 + i * 10} width="14" height="6" rx="1" fill="#64748b" />
        ))}
        <motion.circle
          cx="53"
          cy="23"
          r="1.5"
          fill="#22c55e"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <ellipse cx="28" cy="54" rx="12" ry="10" fill="#1e293b" />
        <circle cx="28" cy="36" r="12" fill="#1e293b" />
        <ellipse cx="28" cy="40" rx="7" ry="9" fill="white" />
        <circle cx="25" cy="34" r="2" fill="#1e293b" />
        <circle cx="31" cy="34" r="2" fill="#1e293b" />
        <path d="M18 38 L12 42 L18 44 Z" fill="#f59e0b" />
        <text x="6" y="68" fontSize="4" fill="#605e5c">
          Linux
        </text>
      </svg>
    </MascotWrapper>
  );
}

function ToolsOtter() {
  return (
    <MascotWrapper>
      <svg viewBox="0 0 72 76" className="h-full w-full drop-shadow-md">
        <ellipse cx="36" cy="72" rx="18" ry="3" fill="#000" opacity="0.06" />
        <ellipse cx="36" cy="52" rx="13" ry="10" fill="#92400e" />
        <circle cx="36" cy="34" r="12" fill="#b45309" />
        <circle cx="31" cy="32" r="2" fill="#1e293b" />
        <circle cx="41" cy="32" r="2" fill="#1e293b" />
        <path d="M32 38 Q36 42 40 38" fill="#fb7185" />
        <motion.g
          animate={{ rotate: [-8, 8, -8] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ transformOrigin: '52px 44px' }}
        >
          <rect x="48" y="36" width="4" height="16" rx="1" fill="#64748b" />
          <path d="M44 36 L56 36 L52 32 Z" fill="#94a3b8" />
        </motion.g>
        <motion.circle
          cx="14"
          cy="44"
          r="5"
          fill="none"
          stroke="#0078d4"
          strokeWidth="1.5"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '14px 44px' }}
        />
        <text x="6" y="66" fontSize="4" fill="#605e5c">
          Git/Argo
        </text>
      </svg>
    </MascotWrapper>
  );
}

const mascotMap: Record<SkillMascotId, () => ReactNode> = {
  Cloud: CloudEagle,
  Code2: IaCBeaver,
  Container: ContainerOctopus,
  GitBranch: PipelineDog,
  Activity: MonitoringOwl,
  Shield: SecurityBulldog,
  Network: NetworkSpider,
  Terminal: TerminalRaccoon,
  Database: DatabaseElephant,
  Server: ServerPenguin,
  Wrench: ToolsOtter,
};

const mascotLabels: Record<SkillMascotId, string> = {
  Cloud: 'AWS + Azure',
  Code2: 'IaC Expert',
  Container: 'K8s & Docker',
  GitBranch: 'CI/CD',
  Activity: 'Observability',
  Shield: 'Security Ops',
  Network: 'VPC / VNET',
  Terminal: 'Scripting',
  Database: 'Data & Storage',
  Server: 'Linux & Windows',
  Wrench: 'DevOps Toolkit',
};

export function SkillMascot({ icon }: { icon: SkillMascotId }) {
  const Mascot = mascotMap[icon] ?? CloudEagle;
  return (
    <div className="flex flex-col items-center gap-1">
      <Mascot />
      <span className="max-w-[72px] truncate rounded-full bg-ms-gray px-1.5 py-0.5 text-center text-[7px] font-semibold text-ms-text-secondary">
        {mascotLabels[icon]}
      </span>
    </div>
  );
}
