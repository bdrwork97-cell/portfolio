import { useReducedMotion } from 'framer-motion';
import Mascot3DWrapper from './Mascot3DWrapper';

export type BackgroundCartoonTheme =
  | 'about'
  | 'skills'
  | 'experience'
  | 'projects'
  | 'certifications'
  | 'resume'
  | 'contact'
  | 'hero';

function MiniCloudEagle() {
  return (
    <svg width="64" height="56" viewBox="0 0 64 56" fill="none">
      <ellipse cx="32" cy="44" rx="12" ry="8" fill="#92400e" opacity="0.9" />
      <circle cx="32" cy="28" r="11" fill="#d97706" />
      <circle cx="28" cy="26" r="2" fill="#1e293b" />
      <circle cx="36" cy="26" r="2" fill="#1e293b" />
      <ellipse cx="14" cy="16" rx="8" ry="5" fill="#ff9900" opacity="0.7" />
      <ellipse cx="50" cy="14" rx="8" ry="5" fill="#0078d4" opacity="0.6" />
    </svg>
  );
}

function MiniOctopus() {
  return (
    <svg width="56" height="60" viewBox="0 0 56 60" fill="none">
      <circle cx="28" cy="22" r="12" fill="#326ce5" opacity="0.9" />
      <circle cx="28" cy="22" r="6" fill="white" opacity="0.85" />
      {[0, 1, 2, 3].map((i) => {
        const a = (i / 4) * Math.PI + 0.5;
        return (
          <line
            key={i}
            x1={28 + Math.cos(a) * 10}
            y1={30 + Math.sin(a) * 8}
            x2={28 + Math.cos(a) * 20}
            y2={48 + Math.sin(a) * 6}
            stroke="#326ce5"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.8"
          />
        );
      })}
    </svg>
  );
}

function MiniBeaver() {
  return (
    <svg width="52" height="56" viewBox="0 0 52 56" fill="none">
      <ellipse cx="26" cy="40" rx="12" ry="9" fill="#b45309" />
      <circle cx="26" cy="24" r="11" fill="#92400e" />
      <rect x="18" y="18" width="16" height="5" rx="2" fill="#475569" opacity="0.8" />
      <rect x="34" y="32" width="10" height="8" rx="1" fill="#7c3aed" opacity="0.85" />
    </svg>
  );
}

function MiniOwl() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <circle cx="26" cy="26" r="14" fill="#a8a29e" />
      <circle cx="20" cy="24" r="5" fill="#fef9c3" />
      <circle cx="32" cy="24" r="5" fill="#fef9c3" />
      <circle cx="20" cy="24" r="2" fill="#1e293b" />
      <circle cx="32" cy="24" r="2" fill="#1e293b" />
    </svg>
  );
}

function MiniDog() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <ellipse cx="26" cy="36" rx="11" ry="8" fill="#d97706" />
      <circle cx="26" cy="22" r="11" fill="#fbbf24" />
      <circle cx="22" cy="20" r="2" fill="#1e293b" />
      <circle cx="30" cy="20" r="2" fill="#1e293b" />
      <path d="M22 26 Q26 30 30 26" fill="#fb7185" />
    </svg>
  );
}

function MiniCat() {
  return (
    <svg width="48" height="52" viewBox="0 0 48 52" fill="none">
      <path d="M14 18 L10 8 L18 14 Z" fill="#f59e0b" />
      <path d="M34 18 L38 8 L30 14 Z" fill="#f59e0b" />
      <circle cx="24" cy="24" r="12" fill="#fde68a" />
      <rect x="18" y="20" width="12" height="4" rx="2" fill="#0078d4" opacity="0.8" />
      <circle cx="20" cy="23" r="1.5" fill="#1e293b" />
      <circle cx="28" cy="23" r="1.5" fill="#1e293b" />
    </svg>
  );
}

function MiniBulldog() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <circle cx="26" cy="24" r="13" fill="#9ca3af" />
      <circle cx="21" cy="22" r="3" fill="white" />
      <circle cx="31" cy="22" r="3" fill="white" />
      <path d="M34 28 L44 24 L42 36 L36 38 Z" fill="#0078d4" opacity="0.85" />
    </svg>
  );
}

function MiniEnvelope() {
  return (
    <svg width="56" height="44" viewBox="0 0 56 44" fill="none">
      <rect x="6" y="10" width="44" height="28" rx="3" fill="white" stroke="#ea4335" strokeWidth="1.5" opacity="0.9" />
      <path d="M6 10 L28 26 L50 10" stroke="#4285f4" strokeWidth="1.5" opacity="0.8" />
      <circle cx="44" cy="8" r="6" fill="#fcd34d" />
    </svg>
  );
}

const themePlacements: Record<
  BackgroundCartoonTheme,
  { mascot: 'eagle' | 'octopus' | 'beaver' | 'owl' | 'dog' | 'cat' | 'bulldog' | 'envelope'; className: string; delay: number }[]
> = {
  hero: [
    { mascot: 'eagle', className: 'left-[8%] top-[20%] hidden lg:block opacity-[0.12]', delay: 0 },
    { mascot: 'octopus', className: 'right-[10%] top-[30%] hidden xl:block opacity-[0.1]', delay: 0.5 },
  ],
  about: [
    { mascot: 'eagle', className: 'left-[5%] bottom-[15%] hidden md:block opacity-[0.2]', delay: 0 },
    { mascot: 'beaver', className: 'right-[6%] top-[18%] hidden md:block opacity-[0.18]', delay: 0.3 },
    { mascot: 'octopus', className: 'left-[8%] top-[12%] hidden lg:block opacity-[0.16]', delay: 0.6 },
  ],
  skills: [
    { mascot: 'octopus', className: 'left-[4%] top-[22%] hidden md:block opacity-[0.13]', delay: 0 },
    { mascot: 'beaver', className: 'right-[5%] bottom-[20%] hidden lg:block opacity-[0.12]', delay: 0.4 },
    { mascot: 'owl', className: 'right-[8%] top-[12%] hidden xl:block opacity-[0.1]', delay: 0.8 },
  ],
  experience: [
    { mascot: 'bulldog', className: 'left-[6%] top-[25%] hidden md:block opacity-[0.2]', delay: 0.2 },
    { mascot: 'dog', className: 'right-[5%] bottom-[18%] hidden lg:block opacity-[0.22]', delay: 0.5 },
    { mascot: 'octopus', className: 'right-[8%] top-[12%] hidden xl:block opacity-[0.18]', delay: 0.9 },
  ],
  projects: [
    { mascot: 'beaver', className: 'left-[5%] top-[15%] hidden md:block opacity-[0.14]', delay: 0 },
    { mascot: 'octopus', className: 'right-[6%] bottom-[22%] hidden lg:block opacity-[0.12]', delay: 0.6 },
    { mascot: 'owl', className: 'left-[8%] bottom-[12%] hidden xl:block opacity-[0.1]', delay: 1 },
  ],
  certifications: [
    { mascot: 'cat', className: 'left-[5%] top-[20%] hidden md:block opacity-[0.13]', delay: 0 },
    { mascot: 'dog', className: 'right-[6%] top-[18%] hidden md:block opacity-[0.12]', delay: 0.4 },
    { mascot: 'owl', className: 'right-[8%] bottom-[15%] hidden lg:block opacity-[0.1]', delay: 0.7 },
  ],
  resume: [
    { mascot: 'dog', className: 'left-[6%] top-[22%] hidden md:block opacity-[0.13]', delay: 0 },
    { mascot: 'owl', className: 'right-[5%] bottom-[20%] hidden md:block opacity-[0.12]', delay: 0.5 },
  ],
  contact: [
    { mascot: 'envelope', className: 'left-[5%] bottom-[18%] hidden md:block opacity-[0.12]', delay: 0 },
    { mascot: 'dog', className: 'right-[6%] top-[20%] hidden md:block opacity-[0.13]', delay: 0.3 },
  ],
};

const mascotComponents = {
  eagle: MiniCloudEagle,
  octopus: MiniOctopus,
  beaver: MiniBeaver,
  owl: MiniOwl,
  dog: MiniDog,
  cat: MiniCat,
  bulldog: MiniBulldog,
  envelope: MiniEnvelope,
};

export default function SectionBackgroundCartoons({ theme }: { theme: BackgroundCartoonTheme }) {
  const reduced = useReducedMotion() ?? false;
  if (reduced) return null;

  const placements = themePlacements[theme];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {placements.map(({ mascot, className, delay }, i) => {
        const Mascot = mascotComponents[mascot];
        return (
          <div key={`${theme}-${mascot}-${i}`} className={`absolute ${className}`}>
            <Mascot3DWrapper variant="background" bounce={10} depth={12} duration={7 + i} delay={delay} showShadow={false}>
              <Mascot />
            </Mascot3DWrapper>
          </div>
        );
      })}
    </div>
  );
}
