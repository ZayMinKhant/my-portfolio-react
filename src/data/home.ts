export interface HomeContent {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  ctaButtons: {
    primary: {
      text: string;
      action: string;
    };
    secondary: {
      text: string;
      action: string;
    };
  };
}

export const homeContent: HomeContent = {
  name: "Zay Min Khant",
  title: "Crafting intelligent and elegant solutions",
  subtitle: "Full Stack Developer with 5+ years of experience building scalable web applications, AI-powered platforms, and modern user experiences.",
  description: "Full Stack Developer with 5+ years of experience building scalable web applications, AI-powered platforms, and modern user experiences.",
  ctaButtons: {
    primary: {
      text: "View My Work",
      action: "projects",
    },
    secondary: {
      text: "Get In Touch",
      action: "contact",
    },
  },
};
