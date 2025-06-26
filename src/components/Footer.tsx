import React from 'react';
import type { SectionProps } from '../types';

const Footer: React.FC<Pick<SectionProps, 'darkMode'>> = ({ darkMode }) => {
  return (
    <footer className={`w-full py-8 text-center ${darkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-50 text-gray-600'} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p>&copy; 2025 Zay Min Khant. Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer; 