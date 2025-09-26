import React from "react";
import { GraduationCap, Languages, Trophy, MapPin } from "lucide-react";
import WorkExperienceSection from "./WorkExperienceSection/WorkExperienceSection";
import type { SectionProps } from "../types";
import SkillMarquee from "./SkillMarquee";
import { personalInfo, workHistory, skills } from "../data";

const AboutSection: React.FC<SectionProps> = ({ darkMode, isVisible }) => {
  return (
    <section
      id="about"
      className="w-full py-20 bg-background-page transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="flex flex-col gap-12">
            {/* Profile Info */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-text-secondary text-base mb-6">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>{personalInfo.location}</span>
              </div>

              <div className="text-text-secondary leading-relaxed text-lg mb-8 text-center max-w-3xl">
                {personalInfo.summary}
              </div>

              {/* Stats Cards */}
              <div className="flex gap-4 sm:gap-6 mb-8 justify-center">
                <div className="text-center p-3 sm:p-4 rounded-2xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 shadow-xl hover:scale-105 transition-all duration-300 min-w-0 flex-1 max-w-[140px]">
                  <div className="text-xl sm:text-2xl font-bold text-text-default">
                    5+
                  </div>
                  <div className="text-xs text-text-secondary">Years Exp</div>
                </div>
                <div className="text-center p-3 sm:p-4 rounded-2xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 shadow-xl hover:scale-105 transition-all duration-300 min-w-0 flex-1 max-w-[140px]">
                  <div className="text-xl sm:text-2xl font-bold text-text-default">
                    20+
                  </div>
                  <div className="text-xs text-text-secondary">
                    Technologies
                  </div>
                </div>
              </div>

              {/* Info Cards */}
              <div className="flex flex-col gap-4 w-full max-w-2xl">
                <div className="flex items-start gap-3 p-3 sm:p-4 rounded-2xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <Languages className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-text-default mb-1">
                      Languages
                    </div>
                    <div className="text-xs text-text-secondary">
                      {personalInfo.languages}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 sm:p-4 rounded-2xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-text-default mb-1">
                      Achievement
                    </div>
                    <div className="text-xs text-text-secondary">
                      {personalInfo.recognition}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 sm:p-4 rounded-2xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-text-default mb-1">
                      Education
                    </div>
                    <div className="text-xs text-text-secondary">
                      <div>{personalInfo.education.highSchool}</div>
                      <div>{personalInfo.education.diploma}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience & Skills */}
            <div className="flex flex-col gap-12 max-w-[calc(100vw-12px)]  sm:max-w-[calc(100vw-64px)]">
              <WorkExperienceSection workHistory={workHistory} />
              {/* Skills */}
              <div>
                <h3 className="text-2xl font-bold text-text-default mb-6 text-center">
                  Technical Skills
                </h3>
                <SkillMarquee skills={skills} darkMode={darkMode} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
