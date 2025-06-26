import React, { useState, useEffect } from 'react';
import { useDarkMode } from './useDarkMode';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import type { VisibilityState } from './types';

const Portfolio: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setActiveSection] = useState<string>('home');
  const [isVisible, setIsVisible] = useState<VisibilityState>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string): void => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      <div className={`absolute inset-0 transition-colors duration-500 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`} />
      <div className="relative w-full">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} scrollToSection={scrollToSection} />
        <HomeSection darkMode={darkMode} isVisible={isVisible.home} scrollToSection={scrollToSection} />
        <AboutSection darkMode={darkMode} isVisible={isVisible.about} />
        <ProjectsSection darkMode={darkMode} isVisible={isVisible.projects} />
        <ContactSection darkMode={darkMode} isVisible={isVisible.contact} />
        <Footer darkMode={darkMode} />
        </div>
    </div>
  );
};

export default Portfolio;