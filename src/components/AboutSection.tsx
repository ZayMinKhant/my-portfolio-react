import React from 'react';
import { User, Award, Calendar, Code, Database, Cloud } from 'lucide-react';
import type { SectionProps, Skill } from '../types';

const skills: Skill[] = [
  { name: 'React', icon: <Code className="w-6 h-6" />, level: 95 },
  { name: 'Node.js', icon: <Database className="w-6 h-6" />, level: 90 },
  { name: 'Python', icon: <Code className="w-6 h-6" />, level: 85 },
  { name: 'PostgreSQL', icon: <Database className="w-6 h-6" />, level: 88 },
  { name: 'AWS', icon: <Cloud className="w-6 h-6" />, level: 82 },
  { name: 'TypeScript', icon: <Code className="w-6 h-6" />, level: 90 }
];

const AboutSection: React.FC<SectionProps> = ({ isVisible }) => {
  return (
    <section id="about" className="w-full py-20 bg-background-page transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-center mb-16 text-text-default">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="p-8 rounded-2xl bg-background-card transform hover:scale-105 transition-all duration-300">
                <User className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-text-default">
                  Full Stack Developer
                </h3>
                <p className="text-lg mb-6 text-text-secondary">
                  With 5+ years of experience, I specialize in building complete web applications 
                  from concept to deployment. My expertise spans frontend frameworks, backend systems, 
                  and cloud infrastructure.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                  <Award className="w-4 h-4" />
                  <span>Second Winner - SE2020 Software Engineer Contest</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>NCC Level 4 Diploma in Computer Science (2024)</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-8 text-text-default">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="text-blue-500 group-hover:scale-110 transition-transform duration-200">
                          {skill.icon}
                        </div>
                        <span className="font-semibold text-text-default">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-text-secondary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-border">
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;