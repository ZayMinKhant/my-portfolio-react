import React from 'react';
import { ChevronDown } from 'lucide-react';
import type { SectionProps } from '../types';
import ThreeScene from './ThreeScene';
import ProfileCard from './ProfileCard';

interface HomeSectionProps extends SectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({ darkMode, isVisible, scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${
        darkMode 
          ? 'from-gray-900 via-gray-800/50 to-gray-900/50' 
          : 'from-gray-50 via-gray-100/50 to-gray-50/50'
      } transition-colors duration-500`}></div>
      
      {/* 3D Scene */}
      <ThreeScene darkMode={darkMode} />
      
      <div className="relative z-10 w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Zay Min Khant</span>
              </h1>
              <p className={`text-xl md:text-2xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Crafting intelligent and elegant solutions
              </p>
              <p className={`text-lg mb-12 max-w-2xl mx-auto lg:mx-0 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Full Stack Developer with 5+ years of experience building scalable web applications, 
                AI-powered platforms, and modern user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-full font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`px-8 py-3 border-2 rounded-full font-semibold transform hover:scale-105 transition-all duration-200 backdrop-blur-sm ${
                    darkMode 
                      ? 'border-gray-600 text-gray-300 hover:bg-gray-800/50' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-100/50'
                  }`}
                >
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Profile Card */}
            <div className="hidden lg:block lg:max-w-md xl:max-w-lg mx-auto">
              <ProfileCard
                name="Zay Min Khant"
                title="Full Stack Developer"
                handle="zayminkhant"
                status="Available for Projects"
                contactText="Contact Me"
                avatarUrl="/images/avatar.png"
                iconUrl="/images/code-icon.png"
                grainUrl="/images/code-icon.png"
                showUserInfo={true}
                enableTilt={true}
                darkMode={darkMode}
                onContactClick={() => scrollToSection('contact')}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className={`w-6 h-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
      </div>
    </section>
  );
};

export default HomeSection; 