import { motion } from 'framer-motion';
import Mascot3DWrapper from './Mascot3DWrapper';

export type MessageMascotType =
  | 'default'
  | 'excited'
  | 'first'
  | 'second'
  | 'final'
  | 'connect'
  | 'schedule'
  | 'opportunity'
  | 'cloud'
  | 'thanks'
  | 'collaborate'
  | 'rejected'
  | 'timeslot';

const TIMESLOT_PATTERN =
  /time\s*slots?|timeslots?|your\s*availability|share\s*(your\s*)?(availability|slots)|when\s*are\s*you\s*(free|available)|available\s*times?|meeting\s*times?|pick\s*a\s*time|choose\s*a\s*time|send\s*(your\s*)?slots|what\s*times?\s*(work|are)|i\s*will\s*send\s*(my\s*)?(time\s*slots?|availability)/;

export function getMessageContext(message: string): { type: MessageMascotType; message: string } {
  const s = message.toLowerCase().replace(/['']/g, "'").trim();

  if (!s) {
    return {
      type: 'default',
      message: 'Excited to meet you and read your message! I look forward to hearing what you have to share.',
    };
  }

  if (/reject|unfortunately|not\s*selected|regret\s*to\s*inform|not\s*moving\s*forward|other\s*candidates|decline/.test(s)) {
    return {
      type: 'rejected',
      message:
        "Okay, not this time — maybe next time. Thank you for letting me know, and I'd love to stay in touch for future opportunities!",
    };
  }

  if (/final\s*(round|interview|stage)|made\s*it\s*to\s*(the\s*)?final|last\s*round/.test(s)) {
    return {
      type: 'final',
      message: "Wow, I made it to the final! I'm near the winning point — can't wait!",
    };
  }

  if (/second\s*round|2nd\s*round|round\s*2|another\s*round|next\s*round/.test(s)) {
    return {
      type: 'second',
      message: "Wow, that's exciting news! Thank you — let's meet for another round!",
    };
  }

  if (/first\s*round|1st\s*round|round\s*1|selected\s*for.*interview|initial\s*interview/.test(s)) {
    return {
      type: 'first',
      message: "Thank you for reaching out! Let's connect for the first round.",
    };
  }

  if (/let'?s\s*connect|would\s*love\s*to\s*connect|happy\s*to\s*connect/.test(s)) {
    return {
      type: 'connect',
      message: "Thank you! Let's connect — I'd love to hear more.",
    };
  }

  if (TIMESLOT_PATTERN.test(s)) {
    return {
      type: 'timeslot',
      message:
        'Please share your available time slots, or I can send my availability for you and your team to pick from. Looking forward to finding a time that works!',
    };
  }

  if (/let'?s\s*schedule|schedule\s*(a\s*)?(call|meeting|interview)|available\s*(on|for)|calendar/.test(s)) {
    return {
      type: 'schedule',
      message: 'Thank you for scheduling! Looking forward to our meeting.',
    };
  }

  if (/thank\s*you|thanks\s*(so\s*much|for)|appreciate/.test(s)) {
    return {
      type: 'thanks',
      message: "You're very welcome! Happy to connect and help however I can.",
    };
  }

  if (
    /cloud\s*engineer|devops|aws|azure|kubernetes|terraform|platform\s*engineer|sre|infrastructure|ci\/cd|eks|aks/.test(s)
  ) {
    return {
      type: 'cloud',
      message: 'Love the cloud & DevOps focus — excited to dive into the technical details!',
    };
  }

  if (
    /opportunit|position|role|opening|hiring|recruit|job\s*offer|full[\s-]?time|contract/.test(s)
  ) {
    return {
      type: 'opportunity',
      message: 'This opportunity sounds great — excited to learn more about the role!',
    };
  }

  if (/collaborat|project|team|partner|work\s*together|join\s*(your|the)\s*team/.test(s)) {
    return {
      type: 'collaborate',
      message: "I'd love to collaborate — let's build something great together!",
    };
  }

  if (/excited|looking\s*forward|can't\s*wait|thrilled|eager/.test(s)) {
    return {
      type: 'excited',
      message: "I'm excited too — can't wait to meet you!",
    };
  }

  return {
    type: 'default',
    message:
      "Thanks for your message — I've read what you shared and I'm excited to meet you and reply soon!",
  };
}

function RejectedMascot() {
  return (
    <svg width="52" height="44" viewBox="0 0 52 44" className="shrink-0">
      <circle cx="26" cy="18" r="11" fill="#cbd5e1" />
      <circle cx="22" cy="16" r="2" fill="#1e293b" />
      <circle cx="30" cy="16" r="2" fill="#1e293b" />
      <path d="M20 22 Q26 20 32 22" stroke="#64748b" strokeWidth="1.5" fill="none" />
      <motion.g
        animate={{ rotate: [-12, 12, -12] }}
        transition={{ duration: 1.4, repeat: Infinity }}
        style={{ transformOrigin: '38px 30px' }}
      >
        <ellipse cx="38" cy="30" rx="6" ry="4" fill="#fde68a" />
      </motion.g>
      <motion.g animate={{ y: [0, -2, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <rect x="8" y="32" width="20" height="10" rx="2" fill="white" stroke="#94a3b8" strokeWidth="1" />
        <rect x="11" y="35" width="10" height="1.5" rx="0.5" fill="#94a3b8" opacity="0.6" />
        <rect x="11" y="38" width="7" height="1.5" rx="0.5" fill="#94a3b8" opacity="0.4" />
      </motion.g>
      <motion.text x="32" y="42" fontSize="5" fill="#64748b" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }}>
        next time →
      </motion.text>
    </svg>
  );
}

function DefaultExcitedMascot() {
  return (
    <svg width="52" height="40" viewBox="0 0 52 40" className="shrink-0">
      <circle cx="16" cy="20" r="10" fill="#fcd34d" />
      <circle cx="36" cy="20" r="10" fill="#93c5fd" />
      <motion.path
        d="M12 22 Q14 25 16 22"
        stroke="#1e293b"
        strokeWidth="1.2"
        fill="none"
        animate={{ y: [0, -1, 0] }}
        transition={{ duration: 1.1, repeat: Infinity }}
      />
      <motion.path
        d="M32 22 Q34 25 36 22"
        stroke="#1e293b"
        strokeWidth="1.2"
        fill="none"
        animate={{ y: [0, -1, 0] }}
        transition={{ duration: 1.1, repeat: Infinity, delay: 0.1 }}
      />
      <motion.path
        d="M22 6 L24 3 L26 6"
        stroke="#ef4444"
        strokeWidth="1.5"
        fill="none"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />
    </svg>
  );
}

function ExcitedMascot() {
  return (
    <svg width="52" height="40" viewBox="0 0 52 40" className="shrink-0">
      <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 0.8, repeat: Infinity }}>
        <circle cx="26" cy="22" r="12" fill="#fcd34d" />
        <circle cx="21" cy="20" r="2.5" fill="#1e293b" />
        <circle cx="31" cy="20" r="2.5" fill="#1e293b" />
        <path d="M20 26 Q26 32 32 26" stroke="#fb7185" strokeWidth="2" fill="none" />
      </motion.g>
      {['✨', '🎉'].map((emoji, i) => (
        <motion.text
          key={emoji}
          x={i === 0 ? 6 : 38}
          y={12}
          fontSize="8"
          animate={{ opacity: [0.4, 1, 0.4], y: [0, -3, 0] }}
          transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
        >
          {emoji}
        </motion.text>
      ))}
    </svg>
  );
}

function FirstRoundMascot() {
  return (
    <svg width="52" height="40" viewBox="0 0 52 40" className="shrink-0">
      <rect x="12" y="10" width="28" height="22" rx="3" fill="white" stroke="#0078d4" strokeWidth="1.5" />
      <rect x="12" y="10" width="28" height="7" rx="3" fill="#0078d4" />
      <circle cx="26" cy="24" r="5" fill="#22c55e" />
      <text x="20" y="16" fontSize="4" fill="white" fontWeight="bold">
        R1
      </text>
      <motion.path
        d="M22 28 L26 32 L32 24"
        stroke="#22c55e"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        animate={{ pathLength: [0, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
      />
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
      <rect x="18" y="30" width="16" height="7" rx="3" fill="#7c3aed" />
      <text x="22" y="36" fontSize="5" fill="white" fontWeight="bold">
        R2
      </text>
      <motion.text x="36" y="14" fontSize="8" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1, repeat: Infinity }}>
        ✨
      </motion.text>
    </svg>
  );
}

function FinalRoundMascot() {
  return (
    <svg width="56" height="44" viewBox="0 0 56 44" className="shrink-0">
      <line x1="4" y1="38" x2="52" y2="38" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 3" />
      <rect x="46" y="28" width="6" height="10" fill="#ef4444" />
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
        <ellipse cx="38" cy="26" rx="5" ry="2" fill="#b45309" />
      </motion.g>
      <motion.text x="4" y="14" fontSize="5" fill="#22c55e" fontWeight="bold" animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.2, repeat: Infinity }}>
        Winning point!
      </motion.text>
    </svg>
  );
}

function ConnectMascot() {
  return (
    <svg width="52" height="40" viewBox="0 0 52 40" className="shrink-0">
      <circle cx="14" cy="20" r="8" fill="#fcd34d" />
      <circle cx="38" cy="20" r="8" fill="#93c5fd" />
      <motion.line x1="22" y1="20" x2="30" y2="20" stroke="#0078d4" strokeWidth="2.5" strokeDasharray="3 2" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.2, repeat: Infinity }} />
      <motion.circle cx="26" cy="20" r="2" fill="#22c55e" animate={{ scale: [0.8, 1.2, 0.8] }} transition={{ duration: 1, repeat: Infinity }} />
    </svg>
  );
}

function TimeslotMascot() {
  return (
    <svg width="52" height="44" viewBox="0 0 52 44" className="shrink-0">
      <rect x="8" y="6" width="28" height="26" rx="3" fill="white" stroke="#0078d4" strokeWidth="1.5" />
      <rect x="8" y="6" width="28" height="8" rx="3" fill="#0078d4" />
      {[0, 1, 2, 3].map((i) => (
        <motion.rect
          key={i}
          x={12 + (i % 2) * 10}
          y={18 + Math.floor(i / 2) * 7}
          width="8"
          height="5"
          rx="1"
          fill="#50e6ff"
          animate={{ opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 1.3, delay: i * 0.15, repeat: Infinity }}
        />
      ))}
      <motion.g animate={{ x: [0, 3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <rect x="36" y="14" width="12" height="16" rx="2" fill="#ecfdf5" stroke="#22c55e" strokeWidth="1" />
        <text x="38" y="24" fontSize="4" fill="#16a34a" fontWeight="bold">
          My
        </text>
        <text x="37" y="28" fontSize="4" fill="#16a34a">
          slots
        </text>
      </motion.g>
      <motion.text x="10" y="40" fontSize="5" fill="#0d9488" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}>
        ↔ share times
      </motion.text>
    </svg>
  );
}

function ScheduleMascot() {
  return (
    <svg width="52" height="40" viewBox="0 0 52 40" className="shrink-0">
      <rect x="10" y="8" width="28" height="24" rx="3" fill="white" stroke="#0078d4" strokeWidth="1.5" />
      <rect x="10" y="8" width="28" height="8" rx="3" fill="#0078d4" />
      <motion.circle cx="24" cy="24" r="4" fill="#22c55e" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
      <motion.path d="M20 28 L24 32 L30 24" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" animate={{ pathLength: [0, 1] }} transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }} />
    </svg>
  );
}

function OpportunityMascot() {
  return (
    <svg width="52" height="40" viewBox="0 0 52 40" className="shrink-0">
      <rect x="14" y="12" width="24" height="20" rx="2" fill="white" stroke="#0078d4" strokeWidth="1.5" />
      <rect x="18" y="18" width="16" height="2" rx="1" fill="#0078d4" opacity="0.6" />
      <rect x="18" y="23" width="12" height="2" rx="1" fill="#94a3b8" opacity="0.6" />
      <motion.g animate={{ y: [0, -2, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
        <circle cx="38" cy="10" r="7" fill="#fcd34d" />
        <circle cx="36" cy="9" r="1.5" fill="#1e293b" />
        <circle cx="40" cy="9" r="1.5" fill="#1e293b" />
        <path d="M35 12 Q38 14 41 12" stroke="#fb7185" strokeWidth="1" fill="none" />
      </motion.g>
      <text x="16" y="10" fontSize="4" fill="#0078d4" fontWeight="bold">
        Role
      </text>
    </svg>
  );
}

function CloudMascot() {
  return (
    <svg width="52" height="40" viewBox="0 0 52 40" className="shrink-0">
      <motion.ellipse cx="20" cy="18" rx="12" ry="8" fill="#ff9900" opacity="0.7" animate={{ x: [0, 2, 0] }} transition={{ duration: 3, repeat: Infinity }} />
      <motion.ellipse cx="36" cy="16" rx="12" ry="8" fill="#0078d4" opacity="0.7" animate={{ x: [0, -2, 0] }} transition={{ duration: 3.5, repeat: Infinity }} />
      <rect x="16" y="24" width="20" height="12" rx="2" fill="#475569" />
      <motion.circle cx="22" cy="30" r="1.5" fill="#22c55e" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} />
      <motion.circle cx="30" cy="30" r="1.5" fill="#22c55e" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
      <text x="14" y="36" fontSize="4" fill="#0078d4" fontWeight="bold">
        Cloud
      </text>
    </svg>
  );
}

function ThanksMascot() {
  return (
    <svg width="52" height="40" viewBox="0 0 52 40" className="shrink-0">
      <motion.g animate={{ rotate: [-8, 8, -8] }} transition={{ duration: 1.2, repeat: Infinity }} style={{ transformOrigin: '14px 28px' }}>
        <ellipse cx="14" cy="28" rx="6" ry="4" fill="#fde68a" />
      </motion.g>
      <motion.g animate={{ rotate: [8, -8, 8] }} transition={{ duration: 1.2, repeat: Infinity }} style={{ transformOrigin: '38px 28px' }}>
        <ellipse cx="38" cy="28" rx="6" ry="4" fill="#fde68a" />
      </motion.g>
      <circle cx="26" cy="18" r="10" fill="#fcd34d" />
      <path d="M20 18 Q26 24 32 18" stroke="#fb7185" strokeWidth="2" fill="none" />
      <motion.text x="20" y="8" fontSize="7" animate={{ y: [0, -2, 0] }} transition={{ duration: 1, repeat: Infinity }}>
        🙏
      </motion.text>
    </svg>
  );
}

function CollaborateMascot() {
  return (
    <svg width="52" height="40" viewBox="0 0 52 40" className="shrink-0">
      <circle cx="14" cy="22" r="8" fill="#93c5fd" />
      <circle cx="38" cy="22" r="8" fill="#fcd34d" />
      <motion.rect x="20" y="16" width="12" height="12" rx="2" fill="#7c3aed" opacity="0.8" animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 2, repeat: Infinity }} style={{ transformOrigin: '26px 22px' }} />
      <text x="22" y="25" fontSize="5" fill="white" fontWeight="bold">
        +
      </text>
      <motion.path d="M10 32 Q26 38 42 32" stroke="#0078d4" strokeWidth="1.5" fill="none" animate={{ pathLength: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
    </svg>
  );
}

const mascotMap: Record<MessageMascotType, () => JSX.Element> = {
  default: DefaultExcitedMascot,
  excited: ExcitedMascot,
  first: FirstRoundMascot,
  second: SecondRoundMascot,
  final: FinalRoundMascot,
  connect: ConnectMascot,
  schedule: ScheduleMascot,
  timeslot: TimeslotMascot,
  opportunity: OpportunityMascot,
  cloud: CloudMascot,
  thanks: ThanksMascot,
  collaborate: CollaborateMascot,
  rejected: RejectedMascot,
};

const bubbleStyles: Record<MessageMascotType, string> = {
  default: 'border-emerald-200/50 bg-emerald-50/30',
  excited: 'border-rose-200/50 bg-rose-50/30',
  first: 'border-azure-200/50 bg-azure-50/30',
  second: 'border-amber-200/50 bg-amber-50/30',
  final: 'border-yellow-200/60 bg-yellow-50/40',
  connect: 'border-sky-200/50 bg-sky-50/30',
  schedule: 'border-emerald-200/50 bg-emerald-50/30',
  timeslot: 'border-teal-200/50 bg-teal-50/30',
  opportunity: 'border-violet-200/50 bg-violet-50/30',
  cloud: 'border-azure-200/50 bg-azure-50/30',
  thanks: 'border-pink-200/50 bg-pink-50/30',
  collaborate: 'border-indigo-200/50 bg-indigo-50/30',
  rejected: 'border-slate-200/50 bg-slate-50/40',
};

const textStyles: Record<MessageMascotType, string> = {
  default: 'text-emerald-800',
  excited: 'text-rose-800',
  first: 'text-azure-800',
  second: 'text-amber-900',
  final: 'text-yellow-900',
  connect: 'text-sky-800',
  schedule: 'text-emerald-800',
  timeslot: 'text-teal-800',
  opportunity: 'text-violet-800',
  cloud: 'text-azure-800',
  thanks: 'text-pink-800',
  collaborate: 'text-indigo-800',
  rejected: 'text-slate-700',
};

export function ContactMessageMascot({ message }: { message: string }) {
  const { type, message: reply } = getMessageContext(message);
  const Mascot = mascotMap[type];

  return (
    <motion.div
      key={type}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`mt-3 rounded-2xl border p-4 shadow-sm ${bubbleStyles[type]}`}
      aria-live="polite"
    >
      <div className="mb-2 flex items-center gap-2 border-b border-black/5 pb-2">
        <Mascot3DWrapper variant="compact" bounce={2} showShadow={false}>
          <Mascot />
        </Mascot3DWrapper>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-ms-text-secondary">Message preview</span>
          <div className="mt-0.5 flex gap-1">
            <span className="h-1 w-6 rounded-full bg-azure-400/40" />
            <span className="h-1 w-4 rounded-full bg-azure-400/25" />
            <span className="h-1 w-8 rounded-full bg-azure-400/15" />
          </div>
        </div>
      </div>
      <p className={`text-sm leading-relaxed ${textStyles[type]}`}>{reply}</p>
      {message.trim().length > 0 && (
        <p className="mt-2 border-t border-black/5 pt-2 text-[10px] italic text-ms-text-secondary">
          Reading: &ldquo;{message.trim().slice(0, 80)}
          {message.trim().length > 80 ? '…' : ''}&rdquo;
        </p>
      )}
    </motion.div>
  );
}
