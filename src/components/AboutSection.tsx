import React from "react";
import { GraduationCap, Languages, Trophy, MapPin } from "lucide-react";
import WorkExperienceSection from "./WorkExperienceSection/WorkExperienceSection";
import type { SectionProps, Skill } from "../types";
import SkillMarquee from "./SkillMarquee";

const AboutSection: React.FC<SectionProps> = ({ darkMode, isVisible }) => {
  const aboutData = {
    name: "Zay Min Khant",
    title: "Full Stack Developer",
    location: "Bangkok, Thailand",
    summary:
      "5+ years of experience building full web applications from frontend to backend. Currently based in Bangkok, I work as a freelance full stack developer with AI-FANTRY, specializing in AI-driven web applications and creating scalable solutions using React, Vue, Python, and AWS infrastructure.",

    workHistory: [
      {
        title: "Full Stack Developer",
        company: "AI-FANTRY (Freelance Contract)",
        duration: "July 2025 - Present",
        type: "current",
        description: [
          "Building and maintaining web applications using React/Vue frontend with Python backend systems.",
          "Integrating AI-driven tools and services with scalable PostgreSQL database solutions.",
          "Working with AWS infrastructure including Lambda, S3, API Gateway, and EC2 services.",
          "Developing RESTful APIs following best practices for AI consulting solutions.",
          "Optimizing applications for performance, security, and scalability in production environments.",
        ],
      },
      {
        title: "Frontend Developer",
        company: "Freelance",
        duration: "May 2024 - June 2025",
        type: "previous",
        description: [
          "Built and updated websites that work well on all devices using tools like React, Vue.js, or Angular.",
          "Turned design plans (wireframes and mockups) into working, easy-to-maintain code.",
          "Improved site performance through code splitting and lazy loading.",
          "Ensured cross-browser compatibility and adherence to WCAG accessibility standards.",
          "Used Redux or Context API for managing state in complex applications.",
        ],
      },
      {
        title: "Senior Back End Developer",
        company:
          "TASTYSOFT Software Outsourcing Co., Ltd (in partnership with Myanmar Information Technology Co., Ltd), Mogok",
        duration: "April 2022 - April 2024",
        type: "previous",
        description: [
          "Designed, developed, and maintained scalable backend systems using Node.js and Python.",
          "Improved API performance and reliability for a better user experience.",
          "Optimized PostgreSQL and MongoDB databases for speed and reliability.",
          "Collaborated with frontend and DevOps teams to deploy microservices on AWS, Azure, and GCP.",
          "Implemented CI/CD pipelines using Jenkins and GitHub Actions.",
        ],
      },
      {
        title: "Full Stack Developer",
        company:
          "TASTYSOFT Software Outsourcing Co., Ltd (in partnership with Myanmar Information Technology Co., Ltd), Mogok",
        duration: "Feb 2020 - April 2022",
        type: "previous",
        description: [
          "Developed and maintained both frontend and backend systems using React/Angular, Node.js/Flask.",
          "Built RESTful APIs for seamless integration between services.",
          "Managed databases for efficient data storage and retrieval.",
          "Deployed and scaled applications on cloud platforms like AWS and Azure.",
          "Followed Agile methodologies and used Git for version control.",
        ],
      },
    ],

    education: {
      highSchool: "Mogok High School Kyatpyin",
      diploma:
        "NCC Level 4 Diploma in Computer Science at Twinkle College, Yangon",
    },

    languages: "Burmese (native), English (B2), Japanese (N4)",

    recognition:
      "Second prize winner in the SE2020 Software Engineer Contest with team LAZYSOFT.",
  };

  // Enhanced skills with categories
  const skills: Skill[] = [
    {
      name: "React",
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      level: 95,
    },
    {
      name: "Vue.js",
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
      level: 80,
    },
    {
      name: "Angular",
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
      level: 75,
    },
    {
      name: "Redux",
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
      level: 88,
    },
    {
      name: "JavaScript",
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      level: 92,
    },
    {
      name: "TypeScript",
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      level: 90,
    },
    {
      name: "Python",
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      level: 85,
    },
    {
      name: "HTML/CSS",
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      level: 95,
    },
    {
      name: "Node.js",
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      level: 90,
    },
    {
      name: "PostgreSQL",
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      level: 88,
    },
    {
      name: "MongoDB",
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      level: 80,
    },
    {
      name: "MySQL",
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      level: 85,
    },
    {
      name: "DynamoDB",
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      level: 70,
    },
    {
      name: "AWS",
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      level: 82,
    },
    {
      name: "Azure",
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
      level: 70,
    },
    {
      name: "GCP",
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
      level: 65,
    },
    {
      name: "Digital Ocean",
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg",
      level: 75,
    },
    {
      name: "GitHub Actions",
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      level: 70,
    },
    {
      name: "Git",
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      level: 90,
    },
    {
      name: "Flutter",
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
      level: 60,
    },
    {
      name: "RESTful APIs",
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
      level: 90,
    },
    {
      name: "Microservices",
      iconPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      level: 80,
    },
  ];

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
                <span>{aboutData.location}</span>
              </div>

              <div className="text-text-secondary leading-relaxed text-lg mb-8 text-center max-w-3xl">
                {aboutData.summary}
              </div>

              {/* Stats Cards */}
              <div className="flex gap-6 mb-8">
                <div className="text-center p-4 rounded-2xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="text-2xl font-bold text-text-default">
                    5+
                  </div>
                  <div className="text-xs text-text-secondary">Years Exp</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="text-2xl font-bold text-text-default">
                    20+
                  </div>
                  <div className="text-xs text-text-secondary">
                    Technologies
                  </div>
                </div>
              </div>

              {/* Info Cards */}
              <div className="flex flex-col gap-4 w-full max-w-2xl">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <Languages className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-text-default mb-1">
                      Languages
                    </div>
                    <div className="text-xs text-text-secondary">
                      {aboutData.languages}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <Trophy className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-text-default mb-1">
                      Achievement
                    </div>
                    <div className="text-xs text-text-secondary">
                      {aboutData.recognition}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <GraduationCap className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-text-default mb-1">
                      Education
                    </div>
                    <div className="text-xs text-text-secondary">
                      <div>{aboutData.education.highSchool}</div>
                      <div>{aboutData.education.diploma}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience & Skills */}
            <div className="flex flex-col gap-12">
              <WorkExperienceSection workHistory={aboutData.workHistory} />
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
