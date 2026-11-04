import { useState, useEffect, useCallback } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Journey from './components/Journey';
import AWS from './components/AWS';
import ChallengeDoc from './components/ChallengeDoc';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DeepOS from './components/DeepOS';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  const openTerminal = useCallback(() => setTerminalOpen(true), []);
  const closeTerminal = useCallback(() => setTerminalOpen(false), []);

  // Global Ctrl+K handler
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      {/* Background grid */}
      <div className="grid-bg" aria-hidden="true" />

      {/* Navigation */}
      <Navigation onOpenTerminal={openTerminal} />

      {/* Main content */}
      <main>
        <Hero onOpenTerminal={openTerminal} />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Journey />
        <AWS />
        <ChallengeDoc />
        <Contact />
      </main>

      <Footer onOpenTerminal={openTerminal} />

      {/* DEEP.OS Terminal */}
      <DeepOS isOpen={terminalOpen} onClose={closeTerminal} />
    </>
  );
}

