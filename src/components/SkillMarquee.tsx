import React from "react";
import type { Skill } from "../types";

interface SkillMarqueeProps {
  skills: Skill[];
  darkMode: boolean;
}

const SkillMarquee: React.FC<SkillMarqueeProps> = ({ skills, darkMode }) => {
  // Split skills into two rows
  const half = Math.ceil(skills.length / 2);
  const row1 = skills.slice(0, half);
  const row2 = skills.slice(half);

  const fadeGradient = (side: "left" | "right") =>
    `linear-gradient(to ${side === "left" ? "right" : "left"}, ${
      darkMode ? "rgba(17,24,39,1)" : "rgba(249,250,251,1)"
    } 0%, transparent 100%)`;

  return (
    <div className="relative w-full max-w-7xl mx-auto py-4 sm:py-8">
      {/* Fade edges */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-full w-8 sm:w-20 z-10"
        style={{ background: fadeGradient("left") }}
      />
      <div
        className="pointer-events-none absolute top-0 right-0 h-full w-8 sm:w-20 z-10"
        style={{ background: fadeGradient("right") }}
      />

      {/* First Row - Left to Right */}
      <div className="overflow-hidden mb-4 sm:mb-6">
        <div className="flex animate-marquee gap-2 sm:gap-4">
          {[...row1, ...row1].map((skill, i) => (
            <div
              key={`${skill.name}-1-${i}`}
              className="flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={skill.iconPath}
                alt={skill.name}
                className="w-6 h-6 sm:w-8 sm:h-8 mb-1"
                loading="lazy"
              />
              <span className="text-xs text-text-default font-medium text-center px-1 truncate w-full leading-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="overflow-hidden">
        <div className="flex animate-marquee-reverse gap-2 sm:gap-4">
          {[...row2, ...row2].map((skill, i) => (
            <div
              key={`${skill.name}-2-${i}`}
              className="flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={skill.iconPath}
                alt={skill.name}
                className="w-6 h-6 sm:w-8 sm:h-8 mb-1"
                loading="lazy"
              />
              <span className="text-xs text-text-default font-medium text-center px-1 truncate w-full leading-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Simple CSS Animations */}
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
          animation: marquee-reverse 25s linear infinite;
        }
        
        @media (max-width: 640px) {
          .animate-marquee {
            animation: marquee 15s linear infinite;
          }
          
          .animate-marquee-reverse {
            animation: marquee-reverse 18s linear infinite;
          }
        }
        
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default SkillMarquee;
