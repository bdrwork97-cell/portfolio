import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import Mascot3DWrapper from './Mascot3DWrapper';

function MascotShell({ children, bounce = 2 }: { children: ReactNode; bounce?: number }) {
  return (
    <Mascot3DWrapper bounce={bounce} variant="compact" showShadow={false}>
      {children}
    </Mascot3DWrapper>
  );
}

export function ContactNameMascot({ name }: { name: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-2 inline-flex max-w-full items-center gap-2 rounded-full border border-azure-200/60 bg-azure-50/50 px-2.5 py-1.5"
      aria-live="polite"
    >
      <MascotShell bounce={3}>
        <svg width="44" height="36" viewBox="0 0 44 36" className="shrink-0">
          <rect x="2" y="16" width="20" height="12" rx="2" fill="#0f172a" />
          <rect x="4" y="18" width="16" height="8" rx="1" fill="#1e293b" />
          <circle cx="30" cy="11" r="7" fill="#fde68a" />
          <circle cx="27" cy="10" r="1.5" fill="#1e293b" />
          <circle cx="33" cy="10" r="1.5" fill="#1e293b" />
          <path d="M27 14 Q30 16 33 14" stroke="#fb7185" strokeWidth="1" fill="none" />
          <rect x="24" y="18" width="11" height="9" rx="4" fill="#0078d4" />
          <motion.rect
            x="8"
            y="21"
            width="5"
            height="1.5"
            rx="0.7"
            fill="#22c55e"
            animate={{ opacity: [0.4, 1, 0.4], width: [4, 6, 4] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <motion.path
            d="M34 6 L36 3 L38 6"
            stroke="#ef4444"
            strokeWidth="1.2"
            fill="none"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
        </svg>
      </MascotShell>
      <div className="min-w-0">
        <span className="block text-[9px] font-semibold uppercase tracking-wider text-azure-600/70">Name</span>
        <p className="truncate text-[11px] font-semibold text-azure-700">
          Hi, {name.trim() || 'there'}! Nice to meet you.
        </p>
      </div>
    </motion.div>
  );
}

export function ContactDirectHeaderMascot() {
  return (
    <MascotShell bounce={4}>
      <svg width="56" height="48" viewBox="0 0 56 48" className="shrink-0">
        <circle cx="28" cy="18" r="12" fill="#fcd34d" />
        <circle cx="23" cy="16" r="2" fill="#1e293b" />
        <circle cx="33" cy="16" r="2" fill="#1e293b" />
        <path d="M22 22 Q28 28 34 22" stroke="#fb7185" strokeWidth="2" fill="none" />
        <motion.g
          animate={{ rotate: [-15, 15, -15] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          style={{ transformOrigin: '44px 32px' }}
        >
          <ellipse cx="44" cy="32" rx="7" ry="5" fill="#fde68a" />
        </motion.g>
        <motion.g
          animate={{ rotate: [15, -15, 15] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          style={{ transformOrigin: '12px 32px' }}
        >
          <ellipse cx="12" cy="32" rx="7" ry="5" fill="#fde68a" />
        </motion.g>
        <ellipse cx="28" cy="36" rx="10" ry="7" fill="#0078d4" />
        <motion.text x="18" y="8" fontSize="7" animate={{ y: [0, -2, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          👋
        </motion.text>
      </svg>
    </MascotShell>
  );
}

export function ContactEmailMascot() {
  return (
    <Mascot3DWrapper variant="compact" bounce={2} showShadow={false}>
      <svg width="36" height="28" viewBox="0 0 36 28" className="shrink-0" aria-hidden="true">
        <rect x="4" y="8" width="22" height="14" rx="2" fill="white" stroke="#0078d4" strokeWidth="1.2" />
        <path d="M4 8 L15 16 L26 8" stroke="#0078d4" strokeWidth="1.2" fill="none" />
        <circle cx="30" cy="10" r="5" fill="#fcd34d" />
        <circle cx="28" cy="9" r="1" fill="#1e293b" />
        <circle cx="32" cy="9" r="1" fill="#1e293b" />
      </svg>
    </Mascot3DWrapper>
  );
}

export function ContactPhoneMascot({ ringing = false }: { ringing?: boolean }) {
  return (
    <Mascot3DWrapper variant="compact" bounce={ringing ? 3 : 2} active={ringing} showShadow={false}>
      <svg width="36" height="28" viewBox="0 0 36 28" className="shrink-0" aria-hidden="true">
        <rect x="10" y="4" width="14" height="20" rx="3" fill="#1e293b" />
        <rect x="12" y="6" width="10" height="14" rx="1" fill="#0078d4" opacity="0.3" />
        <circle cx="17" cy="22" r="2" fill="#94a3b8" />
        {ringing && (
          <>
            <motion.path d="M6 8 Q2 14 6 20" stroke="#22c55e" strokeWidth="1.5" fill="none" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 0.6, repeat: Infinity }} />
            <motion.path d="M30 8 Q34 14 30 20" stroke="#22c55e" strokeWidth="1.5" fill="none" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 0.6, repeat: Infinity }} />
          </>
        )}
      </svg>
    </Mascot3DWrapper>
  );
}

export function ContactSmsMascot({ active = false }: { active?: boolean }) {
  return (
    <Mascot3DWrapper variant="compact" bounce={2} active={active} showShadow={false}>
      <svg width="36" height="28" viewBox="0 0 36 28" className="shrink-0" aria-hidden="true">
        <rect x="4" y="6" width="24" height="16" rx="3" fill="#0078d4" opacity="0.15" stroke="#0078d4" strokeWidth="1" />
        <motion.rect
          x="8"
          y="10"
          width="12"
          height="4"
          rx="2"
          fill="#0078d4"
          animate={active ? { opacity: [0.4, 1, 0.4] } : {}}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
        <motion.rect
          x="8"
          y="16"
          width="8"
          height="3"
          rx="1.5"
          fill="#94a3b8"
          animate={active ? { opacity: [0.3, 0.8, 0.3] } : {}}
          transition={{ duration: 0.8, delay: 0.2, repeat: Infinity }}
        />
        <circle cx="30" cy="8" r="5" fill="#fcd34d" />
        <circle cx="28" cy="7" r="1" fill="#1e293b" />
        <circle cx="32" cy="7" r="1" fill="#1e293b" />
      </svg>
    </Mascot3DWrapper>
  );
}

export function ContactLocationMascot() {
  return (
    <Mascot3DWrapper variant="compact" bounce={2} showShadow={false}>
      <svg width="36" height="32" viewBox="0 0 36 32" className="shrink-0" aria-hidden="true">
        <path
          d="M18 4 C12 4 8 10 8 16 C8 22 18 30 18 30 C18 30 28 22 28 16 C28 10 24 4 18 4 Z"
          fill="#0078d4"
          opacity="0.2"
          stroke="#0078d4"
          strokeWidth="1.2"
        />
        <circle cx="18" cy="15" r="4" fill="#0078d4" />
        <motion.circle cx="18" cy="15" r="2" fill="white" animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.5, repeat: Infinity }} />
      </svg>
    </Mascot3DWrapper>
  );
}

export function ContactGmailGuideMascot() {
  return (
    <MascotShell bounce={2}>
      <svg width="52" height="44" viewBox="0 0 52 44" className="shrink-0">
        <rect x="8" y="12" width="28" height="22" rx="2" fill="white" stroke="#ea4335" strokeWidth="1.5" />
        <path d="M8 12 L22 24 L36 12" stroke="#ea4335" strokeWidth="1.5" fill="none" />
        <path d="M8 34 L22 24 L36 34" stroke="#4285f4" strokeWidth="1" fill="none" opacity="0.6" />
        <circle cx="40" cy="10" r="8" fill="#fcd34d" />
        <circle cx="37" cy="9" r="1.5" fill="#1e293b" />
        <circle cx="43" cy="9" r="1.5" fill="#1e293b" />
        <motion.g animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <path d="M38 18 L44 18 L41 22 Z" fill="#22c55e" />
        </motion.g>
        <text x="10" y="8" fontSize="5" fill="#ea4335" fontWeight="bold">
          Gmail
        </text>
        <motion.text x="34" y="40" fontSize="6" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.2, repeat: Infinity }}>
          → Send
        </motion.text>
      </svg>
    </MascotShell>
  );
}

export function ContactSendMascot({ active = false }: { active?: boolean }) {
  return (
    <Mascot3DWrapper variant="compact" bounce={2} active={active} showShadow={false}>
      <svg width="40" height="32" viewBox="0 0 40 32" className="shrink-0">
        <motion.g animate={{ x: active ? [0, 8, 0] : 0 }} transition={{ duration: 1, repeat: Infinity }}>
          <path d="M4 16 L20 8 L36 16 L20 24 Z" fill="#0078d4" opacity="0.85" />
          <path d="M20 8 L36 16 L20 16 Z" fill="#005a9e" />
          <path d="M4 16 L20 16 L20 24 Z" fill="#50e6ff" opacity="0.5" />
        </motion.g>
        {active && (
          <motion.circle cx="34" cy="6" r="3" fill="#fbbf24" animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} />
        )}
      </svg>
    </Mascot3DWrapper>
  );
}
