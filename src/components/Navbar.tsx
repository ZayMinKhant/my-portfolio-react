import React, { useState } from "react";
import { Menu, X, Linkedin } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  scrollToSection: (sectionId: string) => void;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const { scrollToSection, activeSection } = props;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = ["Home", "About", "Projects", "Contact"];

  const isActive = (item: string): boolean => {
    return activeSection === item.toLowerCase();
  };

  return (
    <nav
      className={`fixed top-6 left-1/2 z-[100] -translate-x-1/2 transition-all duration-500 w-[95vw] max-w-3xl rounded-2xl shadow-xl border backdrop-blur-lg bg-white/30 dark:bg-gray-900/40 border-white/20 dark:border-gray-700/30 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"} animate-navbar-fade`}
      style={{
        boxShadow: "0 8px 32px 0 rgba(31,38,135,0.15)",
        border: "1.5px solid rgba(255,255,255,0.18)",
        backdropFilter: "blur(16px) saturate(180%)",
      }}
    >
      <div className="flex justify-between items-center h-16 px-6">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent tracking-wider select-none">
          ZMK
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`relative px-4 py-2 rounded-full font-medium transition-all duration-200 focus:outline-none cursor-pointer
                ${
                  isActive(item)
                    ? "bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg text-text-default shadow-lg"
                    : "text-gray-700 dark:text-gray-200 hover:bg-white/40 dark:hover:bg-gray-800/40"
                }
              `}
            >
              {item}
            </button>
          ))}
          <a
            href="https://www.linkedin.com/in/zayminkhant/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 p-2 rounded-full transition-all duration-200 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg shadow-lg hover:scale-110 hover:bg-white/80 dark:hover:bg-gray-800/80 text-text-default cursor-pointer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        {/* Mobile Navigation Button */}
        <div className="flex md:hidden items-center space-x-2">
          <a
            href="https://www.linkedin.com/in/zayminkhant/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 mr-2 rounded-full transition-all duration-200 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg shadow-lg hover:scale-110 hover:bg-white/80 dark:hover:bg-gray-800/80 text-text-default cursor-pointer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:scale-110 transition-transform bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg shadow-lg cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full left-0 top-16 rounded-b-2xl shadow-xl border-t border-white/20 dark:border-gray-700/30 bg-white/80 dark:bg-gray-900/90 backdrop-blur-lg transition-all duration-300 ${isMobileMenuOpen ? "block" : "hidden"}`}
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                scrollToSection(item.toLowerCase());
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded-full font-medium transition-all duration-200 focus:outline-none cursor-pointer
                ${
                  isActive(item)
                    ? "bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg text-text-default shadow-lg"
                    : "text-gray-700 dark:text-gray-200 hover:bg-white/40 dark:hover:bg-gray-800/40"
                }
              `}
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
// Add animation keyframes for fade-in
// In your global CSS (e.g., App.css or index.css):
// @keyframes navbar-fade { from { opacity: 0; transform: translateY(-16px); } to { opacity: 1; transform: translateY(0); } }
// .animate-navbar-fade { animation: navbar-fade 0.8s cubic-bezier(0.4,0,0.2,1) 0.1s both; }
