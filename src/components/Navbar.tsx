import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolio';
import { useScrollPosition } from '../hooks/useScroll';

const ALL_SECTIONS = ['home', 'about', 'skills', 'experience', 'projects', 'learning', 'resume', 'contact'];

function NavLink({
  href,
  label,
  isActive,
  onHero,
  onClick,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onHero: boolean;
  onClick: (e: React.MouseEvent) => void;
}) {
  const navText = onHero
    ? 'text-white/70 hover:text-cyan-200'
    : 'text-ms-text-secondary hover:text-azure-600';
  const navActive = onHero ? 'text-cyan-200' : 'text-azure-600';

  return (
    <a
      href={href}
      onClick={onClick}
      className={`group relative px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
        isActive ? `${navActive} font-semibold` : navText
      }`}
    >
      {label}
      <span
        className={`absolute bottom-0 left-3 right-3 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-400/80 to-azure-400/60 shadow-[0_0_8px_rgba(80,230,255,0.4)] transition-transform duration-300 group-hover:scale-x-100 ${
          isActive ? 'scale-x-100' : ''
        }`}
        aria-hidden="true"
      />
    </a>
  );
}

export default function Navbar() {
  const scrollY = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const isScrolled = scrollY > 50;
  const onHero = activeSection === 'home' && scrollY < 500;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    ALL_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const headerBg = isScrolled || !onHero ? 'nav-glass' : 'nav-glass-hero';

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${headerBg}`}
    >
      {(isScrolled || !onHero) && <div className="nav-glow-line" aria-hidden="true" />}

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className={`text-base font-semibold tracking-tight sm:text-lg ${onHero ? 'text-white' : 'text-ms-text'}`}
        >
          {personalInfo.firstName}
        </motion.a>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                href={link.href}
                label={link.label}
                isActive={activeSection === link.href.replace('#', '')}
                onHero={onHero}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              />
            </li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#contact');
          }}
          whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(80, 230, 255, 0.2)' }}
          whileTap={{ scale: 0.97 }}
          className="btn-primary hidden !py-2 xl:inline-flex"
        >
          Contact Me
        </motion.a>

        <button
          type="button"
          className={`rounded-fluent p-2 xl:hidden ${onHero ? 'text-white/80 hover:bg-white/10' : 'text-ms-text hover:bg-azure-50'}`}
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
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="border-t border-azure-200/40 bg-white/95 backdrop-blur-xl xl:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`block rounded-fluent px-4 py-3 text-base font-medium ${
                      activeSection === link.href.replace('#', '')
                        ? 'bg-azure-50 text-azure-700'
                        : 'text-ms-text-secondary hover:bg-azure-50/60'
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-3">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="btn-primary block text-center"
                >
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
