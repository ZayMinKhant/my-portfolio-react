import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import type { WorkExperience } from '../../types';

interface WorkExperienceSectionProps {
  workHistory: WorkExperience[];
}

const WorkExperienceSection: React.FC<WorkExperienceSectionProps> = ({ workHistory }) => {
  const getJobTypeColor = (type: string) => {
    switch (type) {
      case 'current':
        return 'from-emerald-400 to-teal-500';
      case 'freelance':
        return 'from-purple-400 to-pink-500';
      default:
        return 'from-blue-400 to-indigo-500';
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Work Experience
      </h3>
      <div className="space-y-4">
        {workHistory.map((job, idx) => (
          <div 
            key={idx} 
            className="group p-4 rounded-xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 shadow-lg hover:scale-[1.01] transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getJobTypeColor(job.type)}`} />
                <div>
                  <h4 className="text-lg font-bold text-text-default group-hover:text-blue-400 transition-colors duration-300">
                    {job.title}
                  </h4>
                  <div className="flex items-center gap-2 text-text-secondary text-sm">
                    <Briefcase className="w-4 h-4" />
                    <span>{job.company}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-text-secondary text-xs bg-white/20 dark:bg-gray-800/20 px-2 py-1 rounded-full">
                <Calendar className="w-3 h-3" />
                <span>{job.duration}</span>
              </div>
            </div>
            
            {/* Key Responsibilities */}
            <div className="space-y-2">
              {job.description.slice(0, 2).map((desc, descIdx) => (
                <div key={descIdx} className="flex items-start gap-2 text-text-secondary text-sm">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${getJobTypeColor(job.type)} mt-2 flex-shrink-0`} />
                  <span>{desc}</span>
                </div>
              ))}
              {job.description.length > 2 && (
                <div className="text-xs text-text-secondary/70 italic pl-3">
                  +{job.description.length - 2} more responsibilities
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperienceSection;
