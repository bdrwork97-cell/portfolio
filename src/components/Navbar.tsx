import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolio';
import { useScrollPosition } from '../hooks/useScroll';

function AzureLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 96 96" fill="currentColor" aria-hidden="true">
      <path d="M33.34 11.07L11.04 57.48a2.34 2.34 0 001.97 3.52h35.03l-14.7-49.93z" />
      <path d="M61.69 11.07H25.66a2.34 2.34 0 00-2.19 1.55L11.04 57.48h45.67l5.98-46.41z" opacity="0.85" />
      <path d="M84.96 57.48L62.66 11.07l-5.98 46.41h28.28z" opacity="0.7" />
    </svg>
  );
}

export default function Navbar() {
  const scrollY = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const isScrolled = scrollY > 50;
  const onHero = activeSection === 'home' && scrollY < 400;

  useEffect(() => {
    const sections = navLinks.map((link) => link.href.replace('#', ''));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navText = onHero && !isScrolled ? 'text-white/85 hover:text-white' : 'text-ms-text-secondary hover:text-azure-600';
  const navActive = onHero && !isScrolled ? 'text-white font-semibold' : 'text-azure-600 font-semibold';
  const headerBg = isScrolled
    ? 'border-b border-[#edebe9] bg-white/95 shadow-sm backdrop-blur-md'
    : onHero
      ? 'bg-transparent'
      : 'bg-white/90 backdrop-blur-sm border-b border-[#edebe9]';

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className={`flex items-center gap-2.5 text-lg font-semibold ${onHero && !isScrolled ? 'text-white' : 'text-ms-text'}`}
        >
          <AzureLogo className={`h-7 w-7 ${onHero && !isScrolled ? 'text-azure-300' : 'text-azure-500'}`} />
          <span>
            {personalInfo.firstName}
            <span className={onHero && !isScrolled ? 'text-azure-200' : 'text-azure-600'}>
              .{personalInfo.lastName.split(' ')[0].toLowerCase()}
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`rounded-fluent px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === link.href.replace('#', '') ? navActive : navText
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#contact');
          }}
          className={`hidden rounded-fluent px-4 py-2 text-sm font-semibold transition-colors md:inline-flex ${
            onHero && !isScrolled
              ? 'bg-white text-azure-600 hover:bg-azure-50'
              : 'btn-primary !py-2'
          }`}
        >
          Contact Me
        </a>

        <button
          type="button"
          className={`rounded-fluent p-2 md:hidden ${onHero && !isScrolled ? 'text-white hover:bg-white/10' : 'text-ms-text hover:bg-ms-gray'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-[#edebe9] bg-white md:hidden"
          >
            <ul className="flex flex-col gap-0.5 px-4 py-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`block rounded-fluent px-4 py-3 text-sm font-medium ${
                      activeSection === link.href.replace('#', '')
                        ? 'bg-azure-50 text-azure-700'
                        : 'text-ms-text-secondary hover:bg-ms-gray'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }} className="btn-primary block text-center">
                  Contact Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
