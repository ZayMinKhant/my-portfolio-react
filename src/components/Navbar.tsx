import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  scrollToSection: (sectionId: string) => void;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode, scrollToSection, activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  const isActive = (item: string): boolean => {
    return activeSection === item.toLowerCase();
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md border-b ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            ZMK
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(item)
                    ? darkMode
                      ? 'text-white bg-gray-800'
                      : 'text-gray-900 bg-gray-100'
                    : darkMode
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
                }`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors duration-200 ${
                darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 mr-2 rounded-full transition-colors duration-200 ${
                darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full ${isMobileMenuOpen ? 'block' : 'hidden'} ${
          darkMode ? 'bg-gray-900/95' : 'bg-white/95'
        } backdrop-blur-md shadow-lg border-b ${
          darkMode ? 'border-gray-700/50' : 'border-gray-200/50'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                scrollToSection(item.toLowerCase());
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                isActive(item)
                  ? darkMode
                    ? 'text-white bg-gray-800'
                    : 'text-gray-900 bg-gray-100'
                  : darkMode
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 