import React from "react";
import { ExternalLink } from "lucide-react";
import { useImageGallery } from "../contexts/ImageGalleryContext";
import type { SectionProps, Project } from "../types";

const projectImages = {
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

const projects = [
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
    ],
    demoUrl: "https://www.khub.cloud/",
    role: "Full Stack Developer",
  },
  {
    title: "KHub Studio",
    description:
      "Advanced instructor dashboard and course management platform for KHub, providing comprehensive tools for educators to create, manage, and monitor their educational content with advanced analytics and student progress tracking.",
    tech: ["Angular 13", "Flutter", "Python (Lambda)", "DynamoDB"],
    color: "from-purple-400 to-indigo-500",
    features: [
      "Create and manage courses",
      "Assignment grading system",
      "Class management tools",
      "Comprehensive admin dashboard",
      "Learning path creation",
      "Student progress analytics",
    ],
    demoUrl: "https://studio.khub.cloud/",
    role: "Full Stack Developer (Backend focused)",
  },
];

const ProjectCard: React.FC<{ project: Project }> = React.memo(({ project }) => {
  const images = projectImages[project.title as keyof typeof projectImages];
  const { openGallery } = useImageGallery();

  const handleImageClick = React.useCallback(() => {
    openGallery(images, project.title);
  }, [images, project.title, openGallery]);

  return (
      <div className="group rounded-2xl overflow-hidden shadow-xl border border-white/20 dark:border-gray-700/30 bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg transition-all duration-300 hover:shadow-2xl hover:border-gray-300/40 dark:hover:border-gray-600/40 animate-project-fade" style={{ willChange: 'transform, opacity' }}>
        {/* Project image */}
        <div 
          className="relative w-full aspect-[16/9] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 cursor-pointer"
          onClick={handleImageClick}
        >
          <img
            src={images[0]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
          
          {/* Role badge */}
          <div className="absolute top-3 left-3">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${project.color} text-white shadow-lg`}>
              {project.role}
            </span>
          </div>

          {/* Demo link */}
          {project.demoUrl && project.demoUrl.trim() !== "" && (
            <div className="absolute top-3 right-3">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                aria-label="View live demo"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          )}

          {/* Image count indicator */}
          {images.length > 1 && (
            <div className="absolute bottom-3 right-3 px-2 py-1 rounded-full bg-black/60 text-white text-xs">
              +{images.length - 1} more
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-sm font-medium">Click to view gallery</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title and description */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-text-default mb-2 group-hover:text-blue-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-text-default border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-xs font-semibold text-text-default mb-2 uppercase tracking-wide">
              Key Features
            </h4>
            <div className="space-y-2">
              {project.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`} />
                  <span className="text-xs text-text-secondary">{feature}</span>
                </div>
              ))}
              {project.features.length > 3 && (
                <div className="text-xs text-text-secondary font-medium">
                  +{project.features.length - 3} more features
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

const ProjectsSection: React.FC<SectionProps> = React.memo(({ isVisible }) => {
  return (
    <section
      id="projects"
      className="w-full py-20 bg-background-page transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-text-default">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;

// Add animation keyframes for fade-in and feature chip pop
// In your global CSS (e.g., App.css or index.css):
// @keyframes project-fade { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }
// .animate-project-fade { animation: project-fade 1s cubic-bezier(0.4,0,0.2,1) 0.1s both; }
// @keyframes feature-chip-pop { 0% { transform: scale(0.8); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
// .animate-feature-chip { animation: feature-chip-pop 0.6s cubic-bezier(0.4,0,0.2,1) both; }
