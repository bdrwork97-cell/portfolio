import { motion } from 'framer-motion';
import Mascot3DWrapper from './Mascot3DWrapper';

export type SubjectMascotType =
  | 'default'
  | 'first'
  | 'connect'
  | 'schedule'
  | 'timeslot'
  | 'second'
  | 'final'
  | 'rejected';

const TIMESLOT_PATTERN =
  /time\s*slots?|timeslots?|your\s*availability|share\s*(your\s*)?(availability|slots)|when\s*are\s*you\s*(free|available)|available\s*times?|meeting\s*times?|pick\s*a\s*time|choose\s*a\s*time|send\s*(your\s*)?slots|what\s*times?\s*(work|are)/;

export function getSubjectContext(subject: string): { type: SubjectMascotType; message: string } {
  const s = subject.toLowerCase().replace(/['']/g, "'").trim();

  if (!s) {
    return { type: 'default', message: "Let's meet!" };
  }

  if (/reject|unfortunately|not\s*selected|regret\s*to\s*inform|not\s*moving\s*forward|other\s*candidates/.test(s)) {
    return {
      type: 'rejected',
      message: 'Not this time — maybe next.',
    };
  }

  if (/final\s*(round|interview|stage)|last\s*round|final\s*stage/.test(s)) {
    return {
      type: 'final',
      message: 'Final round — near the win!',
    };
  }

  if (/second\s*round|2nd\s*round|round\s*2|round\s*two|second\s*interview/.test(s)) {
    return {
      type: 'second',
      message: 'Round 2 — exciting!',
    };
  }

  if (/let'?s\s*connect|lets\s*connect/.test(s)) {
    return {
      type: 'connect',
      message: "Let's connect!",
    };
  }

  if (TIMESLOT_PATTERN.test(s)) {
    return {
      type: 'timeslot',
      message: 'Share your slots — I\'ll send mine!',
    };
  }

  if (/let'?s\s*schedule|lets\s*schedule|scheduling|schedule\s*(a\s*)?(call|meeting|interview)/.test(s)) {
    return {
      type: 'schedule',
      message: 'Thanks for scheduling!',
    };
  }

  if (
    /first\s*round|1st\s*round|round\s*1|round\s*one|selected\s*for.*interview|interview.*first|first\s*interview/.test(s)
  ) {
    return {
      type: 'first',
      message: 'First round — let\'s connect!',
    };
  }

  return {
    type: 'default',
    message: subject.trim().slice(0, 28) + (subject.trim().length > 28 ? '…' : ''),
  };
}

function HandshakeMascot() {
  return (
    <svg width="52" height="40" viewBox="0 0 52 40" className="shrink-0">
      <motion.path
        d="M8 24 Q14 12 20 24"
        stroke="#0078d4"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        animate={{ pathLength: [0.7, 1, 0.7] }}
        transition={{ duration: 1.4, repeat: Infinity }}
      />
      <motion.path
        d="M22 24 Q28 12 34 24"
        stroke="#7c3aed"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        animate={{ pathLength: [1, 0.7, 1] }}
        transition={{ duration: 1.4, repeat: Infinity }}
      />
      <rect x="31" y="6" width="14" height="10" rx="1.5" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" />
      <path d="M31 7 L38 12 L45 7" stroke="#f59e0b" strokeWidth="1" fill="none" />
    </svg>
  );
}

function ConnectMascot() {
  return (
    <svg width="52" height="40" viewBox="0 0 52 40" className="shrink-0">
      <circle cx="14" cy="20" r="8" fill="#fcd34d" />
      <circle cx="38" cy="20" r="8" fill="#93c5fd" />
      <motion.line
        x1="22"
        y1="20"
        x2="30"
        y2="20"
        stroke="#0078d4"
        strokeWidth="2.5"
        strokeDasharray="3 2"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />
      <motion.circle
        cx="26"
        cy="20"
        r="2"
        fill="#22c55e"
        animate={{ scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <text x="8" y="36" fontSize="5" fill="#0078d4" fontWeight="bold">
        Connect
      </text>
    </svg>
  );
}

function TimeslotMascot() {
  return (
    <svg width="44" height="32" viewBox="0 0 44 32" className="shrink-0">
      <rect x="6" y="4" width="24" height="22" rx="2" fill="white" stroke="#0078d4" strokeWidth="1.2" />
      <rect x="6" y="4" width="24" height="6" rx="2" fill="#0078d4" />
      {[0, 1, 2].map((i) => (
        <motion.rect
          key={i}
          x={10 + i * 7}
          y={14}
          width="5"
          height="4"
          rx="0.5"
          fill="#50e6ff"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.2, delay: i * 0.2, repeat: Infinity }}
        />
      ))}
      <motion.circle cx="34" cy="16" r="6" fill="none" stroke="#22c55e" strokeWidth="1.5" animate={{ scale: [0.9, 1.1, 0.9] }} transition={{ duration: 1.5, repeat: Infinity }} />
      <text x="31" y="18" fontSize="5" fill="#22c55e" fontWeight="bold">
        ⏰
      </text>
    </svg>
  );
}

function ScheduleMascot() {
  return (
    <svg width="52" height="40" viewBox="0 0 52 40" className="shrink-0">
      <rect x="10" y="8" width="28" height="24" rx="3" fill="white" stroke="#0078d4" strokeWidth="1.5" />
      <rect x="10" y="8" width="28" height="8" rx="3" fill="#0078d4" />
      <motion.circle
        cx="24"
        cy="24"
        r="4"
        fill="#22c55e"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />
      <motion.path
        d="M20 28 L24 32 L30 24"
        stroke="#22c55e"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        animate={{ pathLength: [0, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
      />
      <text x="14" y="14" fontSize="4" fill="white" fontWeight="bold">
        CAL
      </text>
    </svg>
  );
}

function SecondRoundMascot() {
  return (
    <svg width="52" height="40" viewBox="0 0 52 40" className="shrink-0">
      <motion.g animate={{ y: [0, -3, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
        <circle cx="26" cy="18" r="10" fill="#fcd34d" />
        <circle cx="22" cy="16" r="2" fill="#1e293b" />
        <circle cx="30" cy="16" r="2" fill="#1e293b" />
        <path d="M22 22 Q26 26 30 22" stroke="#fb7185" strokeWidth="1.5" fill="none" />
      </motion.g>
      <motion.g
        animate={{ rotate: [-8, 8, -8] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        style={{ transformOrigin: '10px 28px' }}
      >
        <ellipse cx="10" cy="28" rx="5" ry="3" fill="#fde68a" />
      </motion.g>
      <motion.g
        animate={{ rotate: [8, -8, 8] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        style={{ transformOrigin: '42px 28px' }}
      >
        <ellipse cx="42" cy="28" rx="5" ry="3" fill="#fde68a" />
      </motion.g>
      <rect x="18" y="32" width="16" height="6" rx="3" fill="#7c3aed" />
      <text x="21" y="37" fontSize="5" fill="white" fontWeight="bold">
        R2
      </text>
      <motion.text
        x="34"
        y="12"
        fontSize="8"
        fill="#f59e0b"
        animate={{ opacity: [0.5, 1, 0.5], y: [0, -2, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        ✨
      </motion.text>
    </svg>
  );
}

function RejectedMascot() {
  return (
    <svg width="40" height="32" viewBox="0 0 40 32" className="shrink-0">
      <circle cx="20" cy="14" r="9" fill="#cbd5e1" />
      <circle cx="17" cy="13" r="1.5" fill="#1e293b" />
      <circle cx="23" cy="13" r="1.5" fill="#1e293b" />
      <path d="M16 18 Q20 16 24 18" stroke="#64748b" strokeWidth="1.2" fill="none" />
      <motion.g
        animate={{ rotate: [-10, 10, -10] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ transformOrigin: '30px 22px' }}
      >
        <ellipse cx="30" cy="22" rx="5" ry="3" fill="#fde68a" />
      </motion.g>
      <motion.text x="6" y="30" fontSize="5" fill="#64748b" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
        next →
      </motion.text>
    </svg>
  );
}

function FinalRoundMascot() {
  return (
    <svg width="56" height="44" viewBox="0 0 56 44" className="shrink-0">
      <line x1="4" y1="38" x2="52" y2="38" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 3" />
      <rect x="46" y="28" width="6" height="10" fill="#ef4444" />
      <rect x="47" y="26" width="4" height="4" fill="#fef3c7" />
      <motion.g animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
        <circle cx="18" cy="28" r="8" fill="#fcd34d" />
        <circle cx="15" cy="26" r="1.8" fill="#1e293b" />
        <circle cx="21" cy="26" r="1.8" fill="#1e293b" />
        <path d="M14 30 Q18 34 22 30" stroke="#fb7185" strokeWidth="1.2" fill="none" />
        <ellipse cx="18" cy="36" rx="6" ry="4" fill="#0078d4" />
      </motion.g>
      <motion.g
        animate={{ y: [0, -2, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        style={{ transformOrigin: '38px 18px' }}
      >
        <path d="M34 24 L38 8 L42 24 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8" />
        <rect x="36" y="12" width="4" height="6" fill="#fde68a" />
        <ellipse cx="38" cy="26" rx="5" ry="2" fill="#b45309" />
      </motion.g>
      <motion.text
        x="6"
        y="14"
        fontSize="5"
        fill="#22c55e"
        fontWeight="bold"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      >
        Winning point!
      </motion.text>
      <motion.circle
        cx="44"
        cy="20"
        r="2"
        fill="#fbbf24"
        animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </svg>
  );
}

const mascotMap: Record<SubjectMascotType, () => JSX.Element> = {
  default: HandshakeMascot,
  first: ScheduleMascot,
  connect: ConnectMascot,
  schedule: ScheduleMascot,
  timeslot: TimeslotMascot,
  second: SecondRoundMascot,
  final: FinalRoundMascot,
  rejected: RejectedMascot,
};

const chipStyles: Record<SubjectMascotType, string> = {
  default: 'border-violet-200/60 bg-violet-50/50 text-violet-700',
  first: 'border-azure-200/60 bg-azure-50/50 text-azure-700',
  connect: 'border-sky-200/60 bg-sky-50/50 text-sky-700',
  schedule: 'border-emerald-200/60 bg-emerald-50/50 text-emerald-700',
  timeslot: 'border-teal-200/60 bg-teal-50/50 text-teal-700',
  second: 'border-amber-200/60 bg-amber-50/50 text-amber-800',
  final: 'border-yellow-200/60 bg-yellow-50/50 text-yellow-800',
  rejected: 'border-slate-200/60 bg-slate-50/50 text-slate-600',
};

export function ContactSubjectMascot({ subject }: { subject: string }) {
  const { type, message } = getSubjectContext(subject);
  const Mascot = mascotMap[type];

  return (
    <motion.div
      key={type}
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      className={`mt-2 inline-flex max-w-full items-center gap-2 rounded-full border px-2.5 py-1.5 ${chipStyles[type]}`}
      aria-live="polite"
    >
      <Mascot3DWrapper variant="compact" bounce={2} showShadow={false} className="scale-75 origin-center">
        <Mascot />
      </Mascot3DWrapper>
      <div className="min-w-0">
        <span className="block text-[9px] font-semibold uppercase tracking-wider opacity-60">Subject</span>
        <p className="truncate text-[11px] font-semibold leading-tight">{message}</p>
      </div>
    </motion.div>
  );
}
