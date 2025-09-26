export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  summary: string;
  education: {
    highSchool: string;
    diploma: string;
  };
  languages: string;
  recognition: string;
}

export const personalInfo: PersonalInfo = {
  name: "Zay Min Khant",
  title: "Full Stack Developer",
  location: "Bangkok, Thailand",
  summary:
    "5+ years of experience building full web applications from frontend to backend. Currently based in Bangkok, I work as a freelance full stack developer with AI-FANTRY, specializing in AI-driven web applications and creating scalable solutions using React, Vue, Python, and AWS infrastructure.",
  education: {
    highSchool: "Mogok High School Kyatpyin",
    diploma:
      "NCC Level 4 Diploma in Computer Science at Twinkle College, Yangon",
  },
  languages: "Burmese (native), English (B2), Japanese (N4)",
  recognition:
    "Second prize winner in the SE2020 Software Engineer Contest with team LAZYSOFT.",
};
