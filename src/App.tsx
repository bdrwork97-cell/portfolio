import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import IntroLoader from './components/IntroLoader';
import ImmersiveScene from './components/ImmersiveScene';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ImmersiveScene />
      <AnimatePresence mode="wait">{showLoader && <IntroLoader />}</AnimatePresence>
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
