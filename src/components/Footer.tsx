import { Cloud, Heart } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-950/50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <Cloud className="h-5 w-5 text-cyan-400" aria-hidden="true" />
            <span className="font-semibold text-white">{personalInfo.name}</span>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-cyan-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-white/5 pt-8 text-center">
          <p className="flex items-center gap-1 text-sm text-slate-500">
            © {currentYear} {personalInfo.name}. Built with React, TypeScript, Tailwind CSS, and Framer Motion.
          </p>
          <p className="flex items-center gap-1 text-xs text-slate-600">
            Engineered for reliability <Heart className="h-3 w-3 text-red-400/60" aria-hidden="true" />
          </p>
        </div>
      </div>
    </footer>
  );
}
