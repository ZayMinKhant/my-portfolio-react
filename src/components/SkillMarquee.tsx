import React from 'react';
import type { Skill } from '../types';

interface SkillMarqueeProps {
  skills: Skill[];
  darkMode: boolean;
}

const fadeGradient = (darkMode: boolean, side: 'left' | 'right') =>
  `linear-gradient(to ${side === 'left' ? 'right' : 'left'}, ${darkMode ? 'rgba(17,24,39,1)' : 'rgba(255,255,255,1)'} 0%, transparent 100%)`;

const SkillMarquee: React.FC<SkillMarqueeProps> = ({ skills, darkMode }) => {
  // Split skills for two rows
  const half = Math.ceil(skills.length / 2);
  const row1 = skills.slice(0, half);
  const row2 = skills.slice(half);

  return (
    <div className="relative w-full max-w-7xl mx-auto py-8">
      {/* Fade edges */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-16 z-10" style={{background: fadeGradient(darkMode, 'left'), opacity: 0.8}} />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-16 z-10" style={{background: fadeGradient(darkMode, 'right'), opacity: 0.8}} />
      
      {/* Marquee Rows */}
      <div className="overflow-hidden">
        <div className="flex flex-nowrap animate-marquee whitespace-nowrap gap-4">
          {row1.concat(row1).map((skill, i) => (
            <div
              key={skill.name + '-row1-' + i}
              className="flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 group"
              style={{ minWidth: 80 }}
            >
              <div className="relative">
                <img src={skill.iconPath} alt={skill.name} className="w-10 h-10 mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-xs text-text-default text-center font-medium truncate w-full px-2 group-hover:text-blue-400 transition-colors duration-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="overflow-hidden mt-4">
        <div className="flex flex-nowrap animate-marquee-reverse whitespace-nowrap gap-4">
          {row2.concat(row2).map((skill, i) => (
            <div
              key={skill.name + '-row2-' + i}
              className="flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 group"
              style={{ minWidth: 80 }}
            >
              <div className="relative">
                <img src={skill.iconPath} alt={skill.name} className="w-10 h-10 mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-xs text-text-default text-center font-medium truncate w-full px-2 group-hover:text-blue-400 transition-colors duration-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Marquee Animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 20s linear infinite;
        }
        .animate-marquee:hover, .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default SkillMarquee;
