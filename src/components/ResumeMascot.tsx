import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import Mascot3DWrapper from './Mascot3DWrapper';

function MascotFrame({
  children,
  bounce = 3,
  active = false,
}: {
  children: ReactNode;
  bounce?: number;
  active?: boolean;
}) {
  return (
    <Mascot3DWrapper className="mx-auto h-[100px] w-[96px]" bounce={bounce} active={active} depth={18} variant="card">
      {children}
    </Mascot3DWrapper>
  );
}

export function DownloadResumeMascot({ active = false }: { active?: boolean }) {
  return (
    <div className="group flex flex-col items-center gap-2">
      <MascotFrame active={active} bounce={4}>
        <svg viewBox="0 0 84 88" className="h-full w-full drop-shadow-md">
          <ellipse cx="42" cy="84" rx="20" ry="3" fill="#000" opacity="0.06" />
          <motion.path
            d="M12 54 Q6 68 16 76 Q22 70 18 58 Z"
            fill="#ca8a04"
            animate={active ? { rotate: [-12, 18, -12] } : { rotate: [-6, 10, -6] }}
            transition={{ duration: active ? 0.35 : 0.7, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '16px 64px' }}
          />
          <ellipse cx="42" cy="64" rx="18" ry="14" fill="#fbbf24" />
          <ellipse cx="18" cy="30" rx="9" ry="16" fill="#d97706" transform="rotate(-20 18 30)" />
          <ellipse cx="66" cy="30" rx="9" ry="16" fill="#d97706" transform="rotate(20 66 30)" />
          <circle cx="42" cy="34" r="18" fill="#fcd34d" />
          <ellipse cx="32" cy="32" rx="5" ry="6" fill="white" />
          <ellipse cx="52" cy="32" rx="5" ry="6" fill="white" />
          <circle cx="32" cy="32" r="2" fill="#1e293b" />
          <circle cx="52" cy="32" r="2" fill="#1e293b" />
          <path d="M36 42 Q42 48 48 42" fill="#fb7185" />
          <motion.g
            animate={active ? { y: [0, 4, 0], rotate: [0, 8, 0] } : { y: [0, 2, 0] }}
            transition={{ duration: active ? 0.5 : 1.2, repeat: Infinity }}
            style={{ transformOrigin: '58px 72px' }}
          >
            <ellipse cx="58" cy="72" rx="8" ry="6" fill="#fcd34d" />
            <path d="M52 76 L64 76 L62 82 L54 82 Z" fill="#fbbf24" />
          </motion.g>
          <motion.g
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            style={{ transformOrigin: '62px 48px' }}
          >
            <rect x="52" y="38" width="22" height="28" rx="2" fill="white" stroke="#0078d4" strokeWidth="1.5" />
            <rect x="56" y="44" width="14" height="2" rx="1" fill="#0078d4" opacity="0.6" />
            <rect x="56" y="49" width="10" height="2" rx="1" fill="#94a3b8" opacity="0.6" />
            <rect x="56" y="54" width="12" height="2" rx="1" fill="#94a3b8" opacity="0.6" />
            <text x="56" y="42" fontSize="5" fontWeight="bold" fill="#0078d4">
              PDF
            </text>
          </motion.g>
          {active && (
            <>
              <motion.circle
                cx="70"
                cy="20"
                r="3"
                fill="#fbbf24"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 0.6 }}
              />
              <motion.circle
                cx="14"
                cy="24"
                r="2.5"
                fill="#50e6ff"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 0.6, delay: 0.15 }}
              />
            </>
          )}
          <motion.path
            d="M38 78 L42 86 L46 78"
            fill="none"
            stroke="#0078d4"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{ opacity: [0.4, 1, 0.4], y: [0, 2, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
        </svg>
      </MascotFrame>
      <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[9px] font-semibold text-emerald-700 ring-1 ring-emerald-200/60 transition-colors group-hover:bg-emerald-100">
        Tap to download PDF
      </span>
    </div>
  );
}

export function ViewResumeLensMascot({ active = false }: { active?: boolean }) {
  return (
    <div className="group flex flex-col items-center gap-2">
      <MascotFrame active={active} bounce={2}>
        <svg viewBox="0 0 84 88" className="h-full w-full drop-shadow-md">
          <ellipse cx="42" cy="84" rx="20" ry="3" fill="#000" opacity="0.06" />
          <rect x="18" y="48" width="28" height="36" rx="2" fill="white" stroke="#cbd5e1" strokeWidth="1.2" />
          <rect x="22" y="54" width="20" height="2" rx="1" fill="#0078d4" opacity="0.5" />
          <rect x="22" y="60" width="16" height="2" rx="1" fill="#94a3b8" opacity="0.5" />
          <rect x="22" y="66" width="18" height="2" rx="1" fill="#94a3b8" opacity="0.5" />
          <rect x="22" y="72" width="14" height="2" rx="1" fill="#94a3b8" opacity="0.5" />
          <text x="22" y="52" fontSize="4" fontWeight="bold" fill="#0078d4">
            Resume
          </text>
          <path d="M20 26 Q42 12 64 26 L62 32 Q42 22 22 32 Z" fill="#78716c" />
          <circle cx="42" cy="36" r="14" fill="#a8a29e" />
          <circle cx="36" cy="34" r="5" fill="#fef9c3" />
          <circle cx="48" cy="34" r="5" fill="#fef9c3" />
          <circle cx="36" cy="34" r="2" fill="#1e293b" />
          <circle cx="48" cy="34" r="2" fill="#1e293b" />
          <path d="M38 42 L41 46 L44 42" fill="#f59e0b" />
          <ellipse cx="42" cy="50" rx="10" ry="7" fill="#a8a29e" />
          <motion.g
            animate={active ? { x: [-4, 6, -4] } : { x: [0, 3, 0] }}
            transition={{ duration: active ? 1.8 : 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '58px 52px' }}
          >
            <circle cx="58" cy="52" r="16" fill="white" fillOpacity="0.15" stroke="#0078d4" strokeWidth="2.5" />
            <circle cx="58" cy="52" r="13" fill="#e0f2fe" fillOpacity="0.35" stroke="#50e6ff" strokeWidth="1" />
            <motion.ellipse
              cx="54"
              cy="48"
              rx="4"
              ry="2.5"
              fill="white"
              opacity="0.7"
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <line x1="58" y1="68" x2="58" y2="78" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="52" y="56" width="12" height="8" rx="1" fill="#0078d4" opacity="0.25" />
            <rect x="54" y="58" width="8" height="2" rx="0.5" fill="#0078d4" />
            <rect x="54" y="62" width="6" height="1.5" rx="0.5" fill="#94a3b8" />
          </motion.g>
          <motion.circle
            cx="62"
            cy="46"
            r="2"
            fill="#50e6ff"
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
        </svg>
      </MascotFrame>
      <span className="rounded-full bg-azure-50 px-2.5 py-0.5 text-[9px] font-semibold text-azure-700 ring-1 ring-azure-200/60 transition-colors group-hover:bg-azure-100">
        Tap to view resume
      </span>
    </div>
  );
}
