import type { Project } from "../types";

export const projectImages = {
  "GenAI Insights Portal": [
    "/projects/genai-insights-1.png",
    "/projects/genai-insight-2.png",
    "/projects/gen-ai-insight-3.png",
  ],
  "Collaborative AI Platform": [
    "/projects/collaborative-ai-1.png",
    "/projects/collaborative-ai-2.png",
    "/projects/collaborative-ai-3.png",
    "/projects/collaborative-ai-4.png",
    "/projects/collaborative-ai-5.png",
    "/projects/collaborative-ai-6.png",
    "/projects/collaborative-ai--7.png",
  ],
  "Bookshelf Platform": [
    "/projects/book-shelf-1.png",
    "/projects/book-shelf-2.png",
  ],
  "Ameo Saga": [
    "/projects/ameo-saga-1.png",
    "/projects/ameo-saga-2.png",
    "/projects/ameo-saga-3.png",
    "/projects/ameo-saga-4.png",
    "/projects/ameo-saga-5.png",
    "/projects/ameo-saga-6.png",
    "/projects/ameo-saga-7.png",
    "/projects/ameo-saga-8.png",
  ],
  "Connect Portal": [
    "/projects/connect-portal-1.png",
    "/projects/connect-portal-2.png",
    "/projects/connect-portal-3.png",
    "/projects/connect-portal-4.png",
  ],
  "KHub": [
    "/projects/khub-1.png",
    "/projects/khub-2.png",
    "/projects/khub-3.png",
    "/projects/khub-4.png",
    "/projects/khub-5.png",
    "/projects/khub-6.png",
    "/projects/khub-7.png",
    "/projects/khub-8.png",
  ],
  "KHub Studio": [
    "/projects/khub-studio-1.png",
    "/projects/khub-studio-2.png",
    "/projects/khub-studio-3.png",
    "/projects/khub-studio-4.png",
    "/projects/khub-studio-5.png",
    "/projects/khub-studio-6.png",
    "/projects/khub-studio-7.png",
    "/projects/khub-studio-8.png",
  ],
};

export const projects: Project[] = [
  {
    title: "GenAI Insights Portal",
    description:
      "Generative AI-Powered Knowledge Assistant with real-time insights, vector search, and source citations.",
    tech: ["React", "Node.js", "PostgreSQL", "OpenAI API", "FAISS", "Docker"],
    color: "from-blue-400 to-cyan-500",
    features: [
      "AI-generated answers with citations",
      "Vector search integration",
      "Query history management",
      "Azure-ready deployment",
    ],
    role: "Full Stack Developer",
  },
  {
    title: "Collaborative AI Platform",
    description:
      "Multi-Model Assistant Platform for creating and comparing AI assistants across different models.",
    tech: ["React", "TypeScript", "FastAPI", "Supabase", "OpenAI", "Anthropic"],
    color: "from-purple-400 to-indigo-500",
    features: [
      "Custom AI assistants",
      "Model comparison",
      "Real-time chat",
      "Admin dashboard",
    ],
    role: "Frontend Developer",
  },
  {
    title: "Bookshelf Platform",
    description:
      "Full-Stack Book Discovery Platform with advanced filtering and responsive design.",
    tech: ["React", "FastAPI", "PostgreSQL", "Tailwind CSS", "Docker"],
    color: "from-cyan-400 to-teal-500",
    features: [
      "Category browsing",
      "Real-time search",
      "Genre filtering",
      "Mobile optimization",
    ],
    role: "Frontend Developer",
  },
  {
    title: "Ameo Saga",
    description:
      "AI-Powered Amazon Keyword Optimization Platform for automated keyword research.",
    tech: ["Vue.js", "FastAPI", "WebSockets", "OpenAI API", "Amazon API"],
    color: "from-indigo-400 to-blue-500",
    features: [
      "ASIN metadata retrieval",
      "Multi-source keywords",
      "Real-time monitoring",
      "AI categorization",
    ],
    role: "Full Stack Developer",
  },
  {
    title: "Connect Portal",
    description:
      "Comprehensive Human Resource Management System with integrated employee check-in/checkout functionality, designed to streamline organizational operations and enhance workplace efficiency.",
    tech: ["Angular 11", "Flutter", "Python", "DynamoDB"],
    color: "from-emerald-400 to-green-500",
    features: [
      "Employee posts and communication",
      "Check-in/checkout system",
      "Organization member management",
      "Leave request and approval workflow",
      "Admin dashboard and analytics",
      "Monthly reporting system",
    ],
    demoUrl: "https://www.connectportal.cloud/",
    role: "Full Stack Developer",
  },
  {
    title: "KHub",
    description:
      "Comprehensive online learning platform featuring dual interfaces for learners and instructors (Studio), designed to facilitate seamless educational experiences with integrated course management and interactive learning tools.",
    tech: ["Angular 13", "Flutter", "Python", "DynamoDB"],
    color: "from-orange-400 to-red-500",
    features: [
      "View and enroll in courses",
      "Payment integration system",
      "Interactive assignments",
      "Automated quizzes and assessments",
      "Discussion forums",
      "Instructor Studio dashboard",
      "Course creation tools",
      "Student progress tracking",
    ],
    role: "Full Stack Developer",
    demoUrl: "https://www.khub.cloud/",
  },
  {
    title: "KHub Studio",
    description:
      "Instructor-focused interface for KHub platform, providing comprehensive course management, student analytics, and content creation tools for educators.",
    tech: ["Angular 13", "Flutter", "Python", "DynamoDB"],
    color: "from-red-400 to-pink-500",
    features: [
      "Course creation and management",
      "Student enrollment tracking",
      "Assignment and quiz creation",
      "Analytics dashboard",
      "Content upload system",
      "Student communication tools",
    ],
    role: "Full Stack Developer",
    demoUrl: "https://studio.khub.cloud/",
  },
];
