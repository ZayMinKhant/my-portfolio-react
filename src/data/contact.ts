export interface ContactInfo {
  email: string;
  location: string;
  github: string;
  linkedin: string;
}

export const contactInfo: ContactInfo = {
  email: "zayminkhant.dev@email.com",
  location: "Bangkok, Thailand",
  github: "https://github.com/zayminkhant",
  linkedin: "https://www.linkedin.com/in/zay-min-khant/",
};

export const contactFormConfig = {
  emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  resetDelay: 2000,
};
