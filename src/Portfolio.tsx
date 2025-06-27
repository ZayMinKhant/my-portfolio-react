import React, { useState, useEffect } from 'react';
import { useDarkMode } from './useDarkMode';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ClickSpark from './components/ClickSpark';
import type { VisibilityState } from './types';

const Portfolio: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [activeSection, setActiveSection] = useState<string>('home');
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
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // 4rem or h-16
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <ClickSpark
      sparkColor="var(--color-accent)"
      sparkSize={6}
      sparkRadius={30}
      sparkCount={10}
      duration={500}
      extraScale={1.2}
    >
      <div className="min-h-screen w-full overflow-hidden relative">
        <div className="absolute inset-0 transition-colors duration-500 bg-background-page" />
        <div className="relative w-full">
          <Navbar 
            darkMode={darkMode} 
            toggleDarkMode={toggleDarkMode} 
            scrollToSection={scrollToSection} 
            activeSection={activeSection}
          />
          <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
            <HomeSection darkMode={darkMode} isVisible={isVisible.home} scrollToSection={scrollToSection} />
            <AboutSection darkMode={darkMode} isVisible={isVisible.about} />
            <ProjectsSection darkMode={darkMode} isVisible={isVisible.projects} />
            <ContactSection darkMode={darkMode} isVisible={isVisible.contact} />
            <Footer darkMode={darkMode} />
          </div>
        </div>
                    </div>
    </ClickSpark>
  );
};

export default Portfolio;