import { motion } from 'framer-motion';
import Mascot3DWrapper from './Mascot3DWrapper';

const learningSnippets: Record<string, string> = {
  'AWS Cloud & DevOps Learning Path': 'aws eks deploy...',
  'Terraform Infrastructure as Code': 'terraform plan -out...',
  'Kubernetes Administration': 'kubectl apply -f...',
  'Security & Compliance Practices': 'scanning IAM roles...',
};

type PetVariant = 'cat' | 'dog' | 'fox' | 'owl';

const petOrder: PetVariant[] = ['cat', 'dog', 'fox', 'owl'];

export function getLearningSnippet(title: string): string {
  return learningSnippets[title] ?? 'still learning...';
}

export function getPetVariant(learningIndex: number): PetVariant {
  return petOrder[learningIndex % petOrder.length];
}

function CertifiedAzureCat() {
  return (
    <Mascot3DWrapper className="h-[96px] w-[88px]" bounce={5} depth={16} variant="card">
      <svg viewBox="0 0 88 96" className="h-full w-full drop-shadow-md">
        <ellipse cx="44" cy="90" rx="24" ry="4" fill="#000" opacity="0.06" />
        <motion.g
          animate={{ rotate: [-4, 4, -4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '58px 78px' }}
        >
          <path d="M58 72 Q72 68 76 82 Q70 90 58 86 Z" fill="#fbbf24" />
        </motion.g>
        <ellipse cx="44" cy="68" rx="20" ry="16" fill="#fbbf24" />
        <path d="M22 38 L16 18 L32 32 Z" fill="#f59e0b" />
        <path d="M66 38 L72 18 L56 32 Z" fill="#f59e0b" />
        <circle cx="44" cy="40" r="20" fill="#fde68a" />
        <path d="M28 24 L44 14 L60 24 L58 30 Q44 22 30 30 Z" fill="#0078d4" />
        <rect x="36" y="12" width="16" height="5" rx="1" fill="#fbbf24" />
        <circle cx="36" cy="38" r="5" fill="white" stroke="#1e293b" strokeWidth="1" />
        <circle cx="52" cy="38" r="5" fill="white" stroke="#1e293b" strokeWidth="1" />
        <circle cx="36" cy="38" r="2" fill="#1e293b" />
        <circle cx="52" cy="38" r="2" fill="#1e293b" />
        <circle cx="38" cy="36" r="1" fill="white" />
        <circle cx="54" cy="36" r="1" fill="white" />
        <rect x="28" y="34" width="32" height="8" rx="4" fill="#334155" opacity="0.75" transform="rotate(-6 44 38)" />
        <path d="M34 48 Q44 56 54 46" fill="#f472b6" opacity="0.85" />
        <ellipse cx="44" cy="46" rx="3" ry="2" fill="#fb7185" />
        <circle cx="30" cy="44" r="3" fill="#fda4af" opacity="0.6" />
        <circle cx="58" cy="44" r="3" fill="#fda4af" opacity="0.6" />
        <line x1="26" y1="46" x2="16" y2="44" stroke="#b45309" strokeWidth="1.2" />
        <line x1="26" y1="50" x2="14" y2="50" stroke="#b45309" strokeWidth="1.2" />
        <line x1="62" y1="46" x2="72" y2="44" stroke="#b45309" strokeWidth="1.2" />
        <line x1="62" y1="50" x2="74" y2="50" stroke="#b45309" strokeWidth="1.2" />
        <rect x="62" y="52" width="16" height="20" rx="2" fill="white" stroke="#0078d4" strokeWidth="1.5" transform="rotate(12 70 62)" />
        <text x="65" y="64" fontSize="6" fontWeight="bold" fill="#0078d4" transform="rotate(12 70 62)">
          Azure
        </text>
        <text x="66" y="71" fontSize="5" fill="#605e5c" transform="rotate(12 70 62)">
          Certified!
        </text>
        <ellipse cx="12" cy="14" rx="6" ry="4" fill="#50e6ff" opacity="0.7" />
        <ellipse cx="16" cy="12" rx="5" ry="3.5" fill="#0078d4" opacity="0.5" />
      </svg>
    </Mascot3DWrapper>
  );
}

function CertifiedGoldenRetriever() {
  return (
    <Mascot3DWrapper className="h-[96px] w-[88px]" bounce={6} depth={16} variant="card">
      <svg viewBox="0 0 88 96" className="h-full w-full drop-shadow-md">
        <ellipse cx="44" cy="90" rx="24" ry="4" fill="#000" opacity="0.06" />
        <motion.path
          d="M14 58 Q8 72 18 80 Q24 74 20 62 Z"
          fill="#ca8a04"
          animate={{ rotate: [-8, 12, -8] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '18px 68px' }}
        />
        <ellipse cx="44" cy="70" rx="22" ry="17" fill="#fbbf24" />
        <ellipse cx="20" cy="34" rx="10" ry="18" fill="#d97706" transform="rotate(-22 20 34)" />
        <ellipse cx="68" cy="34" rx="10" ry="18" fill="#d97706" transform="rotate(22 68 34)" />
        <circle cx="44" cy="38" r="21" fill="#fcd34d" />
        <path d="M30 20 Q44 8 58 20 L56 26 Q44 18 32 26 Z" fill="#7c3aed" opacity="0.9" />
        <rect x="38" y="10" width="12" height="4" rx="1" fill="#fbbf24" />
        <ellipse cx="34" cy="36" rx="6" ry="7" fill="white" />
        <ellipse cx="54" cy="36" rx="6" ry="7" fill="white" />
        <circle cx="34" cy="36" r="2.5" fill="#1e293b" />
        <circle cx="54" cy="36" r="2.5" fill="#1e293b" />
        <circle cx="35" cy="34" r="1" fill="white" />
        <circle cx="55" cy="34" r="1" fill="white" />
        <rect x="26" y="32" width="30" height="9" rx="4" fill="#475569" opacity="0.8" transform="rotate(8 41 36)" />
        <ellipse cx="44" cy="50" rx="10" ry="8" fill="#fef9c3" />
        <ellipse cx="44" cy="52" rx="7" ry="5" fill="#f472b6" />
        <path d="M40 54 Q44 60 48 54" fill="#fb7185" />
        <circle cx="30" cy="46" r="3.5" fill="#fda4af" opacity="0.55" />
        <circle cx="58" cy="46" r="3.5" fill="#fda4af" opacity="0.55" />
        <rect x="58" y="48" width="18" height="22" rx="2" fill="white" stroke="#7c3aed" strokeWidth="1.5" transform="rotate(-10 67 59)" />
        <rect x="61" y="56" width="12" height="3" rx="1" fill="#7c3aed" opacity="0.5" transform="rotate(-10 67 59)" />
        <rect x="61" y="61" width="9" height="3" rx="1" fill="#0078d4" opacity="0.5" transform="rotate(-10 67 59)" />
        <rect x="61" y="66" width="11" height="3" rx="1" fill="#f59e0b" opacity="0.5" transform="rotate(-10 67 59)" />
        <text x="60" y="52" fontSize="5" fontWeight="bold" fill="#7c3aed" transform="rotate(-10 67 59)">
          Power BI
        </text>
        <path d="M68 14 L70 20 L76 20 L71 24 L73 30 L68 26 L63 30 L65 24 L60 20 L66 20 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="0.5" />
      </svg>
    </Mascot3DWrapper>
  );
}

export function CertifiedExpertMascot({ cert }: { cert: 'azure' | 'powerbi' }) {
  return cert === 'powerbi' ? <CertifiedGoldenRetriever /> : <CertifiedAzureCat />;
}

function LaptopTyping({ text }: { text: string }) {
  return (
    <div className="mt-1 max-w-[100px] rounded-md border border-[#edebe9] bg-ms-gray px-1.5 py-1">
      <div className="mb-0.5 flex gap-0.5">
        <div className="h-1 w-1 rounded-full bg-red-400/70" />
        <div className="h-1 w-1 rounded-full bg-amber-400/70" />
        <div className="h-1 w-1 rounded-full bg-green-400/70" />
      </div>
      <p className="truncate font-mono text-[7px] text-ms-text-secondary">
        {text}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="text-azure-600"
        >
          |
        </motion.span>
      </p>
    </div>
  );
}

function CatPet() {
  return (
    <g>
      <ellipse cx="36" cy="78" rx="18" ry="3" fill="#000" opacity="0.05" />
      <path d="M22 38 L18 24 L28 34 Z" fill="#f59e0b" />
      <path d="M50 38 L54 24 L44 34 Z" fill="#f59e0b" />
      <circle cx="36" cy="42" r="16" fill="#fbbf24" />
      <circle cx="30" cy="40" r="2" fill="#1e293b" />
      <circle cx="42" cy="40" r="2" fill="#1e293b" />
      <rect x="24" y="36" width="24" height="7" rx="3" fill="#334155" opacity="0.9" />
      <line x1="30" y1="39" x2="34" y2="39" stroke="white" strokeWidth="1.2" />
      <line x1="38" y1="39" x2="42" y2="39" stroke="white" strokeWidth="1.2" />
      <path d="M32 46 Q36 49 40 46" stroke="#b45309" strokeWidth="1.2" fill="none" />
      <line x1="24" y1="44" x2="18" y2="42" stroke="#b45309" strokeWidth="1" />
      <line x1="24" y1="46" x2="17" y2="46" stroke="#b45309" strokeWidth="1" />
      <line x1="48" y1="44" x2="54" y2="42" stroke="#b45309" strokeWidth="1" />
      <line x1="48" y1="46" x2="55" y2="46" stroke="#b45309" strokeWidth="1" />
      <ellipse cx="36" cy="62" rx="12" ry="10" fill="#fbbf24" />
      <rect x="20" y="66" width="32" height="4" rx="2" fill="#64748b" />
      <rect x="22" y="58" width="28" height="16" rx="2" fill="#94a3b8" />
      <rect x="24" y="60" width="24" height="10" rx="1" fill="#e2e8f0" />
    </g>
  );
}

function DogPet() {
  return (
    <g>
      <ellipse cx="36" cy="78" rx="18" ry="3" fill="#000" opacity="0.05" />
      <ellipse cx="22" cy="36" rx="7" ry="12" fill="#a16207" transform="rotate(-20 22 36)" />
      <ellipse cx="50" cy="36" rx="7" ry="12" fill="#a16207" transform="rotate(20 50 36)" />
      <circle cx="36" cy="42" r="16" fill="#d97706" />
      <circle cx="30" cy="40" r="2.2" fill="#1e293b" />
      <circle cx="42" cy="40" r="2.2" fill="#1e293b" />
      <rect x="24" y="36" width="24" height="7" rx="3" fill="#334155" opacity="0.9" />
      <ellipse cx="36" cy="48" rx="5" ry="4" fill="#fef3c7" />
      <circle cx="36" cy="47" r="2" fill="#1e293b" />
      <ellipse cx="36" cy="62" rx="13" ry="10" fill="#d97706" />
      <rect x="20" y="66" width="32" height="4" rx="2" fill="#64748b" />
      <rect x="22" y="58" width="28" height="16" rx="2" fill="#94a3b8" />
      <rect x="24" y="60" width="24" height="10" rx="1" fill="#e2e8f0" />
    </g>
  );
}

function FoxPet() {
  return (
    <g>
      <ellipse cx="36" cy="78" rx="18" ry="3" fill="#000" opacity="0.05" />
      <path d="M20 40 L14 22 L30 34 Z" fill="#ea580c" />
      <path d="M52 40 L58 22 L42 34 Z" fill="#ea580c" />
      <circle cx="36" cy="42" r="15" fill="#fb923c" />
      <path d="M30 48 L36 54 L42 48 Z" fill="white" />
      <circle cx="30" cy="40" r="2" fill="#1e293b" />
      <circle cx="42" cy="40" r="2" fill="#1e293b" />
      <rect x="24" y="36" width="24" height="7" rx="3" fill="#334155" opacity="0.9" />
      <ellipse cx="36" cy="62" rx="11" ry="9" fill="#fb923c" />
      <rect x="20" y="66" width="32" height="4" rx="2" fill="#64748b" />
      <rect x="22" y="58" width="28" height="16" rx="2" fill="#94a3b8" />
      <rect x="24" y="60" width="24" height="10" rx="1" fill="#e2e8f0" />
    </g>
  );
}

function OwlPet() {
  return (
    <g>
      <ellipse cx="36" cy="78" rx="18" ry="3" fill="#000" opacity="0.05" />
      <path d="M22 30 Q36 18 50 30 L48 38 Q36 32 24 38 Z" fill="#78716c" />
      <circle cx="36" cy="44" r="17" fill="#a8a29e" />
      <circle cx="30" cy="42" r="6" fill="#fef9c3" />
      <circle cx="42" cy="42" r="6" fill="#fef9c3" />
      <circle cx="30" cy="42" r="2.5" fill="#1e293b" />
      <circle cx="42" cy="42" r="2.5" fill="#1e293b" />
      <rect x="26" y="38" width="20" height="6" rx="3" fill="#334155" opacity="0.85" />
      <path d="M34 50 L36 54 L38 50 Z" fill="#f59e0b" />
      <ellipse cx="36" cy="62" rx="12" ry="9" fill="#a8a29e" />
      <rect x="20" y="66" width="32" height="4" rx="2" fill="#64748b" />
      <rect x="22" y="58" width="28" height="16" rx="2" fill="#94a3b8" />
      <rect x="24" y="60" width="24" height="10" rx="1" fill="#e2e8f0" />
    </g>
  );
}

const petComponents = { cat: CatPet, dog: DogPet, fox: FoxPet, owl: OwlPet };

export function LearningPetMascot({
  variant,
  snippet,
  learningIndex,
}: {
  variant: PetVariant;
  snippet: string;
  learningIndex: number;
}) {
  const Pet = petComponents[variant];

  return (
    <div className="flex shrink-0 flex-col items-center">
      <Mascot3DWrapper className="h-[88px] w-[72px]" bounce={3} depth={12} duration={4 + learningIndex * 0.3} variant="card">
        <svg viewBox="0 0 72 88" className="h-full w-full">
          <Pet />
          <motion.g
            animate={{ y: [0, -1, 0] }}
            transition={{ duration: 0.35, repeat: Infinity, repeatDelay: 0.5 + learningIndex * 0.2 }}
          >
            <rect x="46" y="68" width="6" height="5" rx="1" fill="#fcd9b6" />
            <rect x="52" y="66" width="5" height="4" rx="1" fill="#fcd9b6" transform="rotate(15 54 68)" />
          </motion.g>
        </svg>
      </Mascot3DWrapper>
      <LaptopTyping text={snippet} />
    </div>
  );
}
