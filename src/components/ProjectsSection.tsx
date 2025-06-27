import React from 'react';
import { ExternalLink, Zap } from 'lucide-react';
import type { SectionProps, Project } from '../types';

const projectImages = {
  'GenAI Insights Portal': [
    '/projects/genai-insights-1.png',
    '/projects/genai-insight-2.png',
    '/projects/gen-ai-insight-3.png'
  ],
  'Collaborative AI Platform': [
    '/projects/collaborative-ai-1.png',
    '/projects/collaborative-ai-2.png',
    '/projects/collaborative-ai-3.png',
    '/projects/collaborative-ai-4.png',
    '/projects/collaborative-ai-5.png',
    '/projects/collaborative-ai-6.png',
    '/projects/collaborative-ai--7.png'
  ],
  'Bookshelf Platform': [
    '/projects/book-shelf-1.png',
    '/projects/book-shelf-2.png'
  ],
  'Ameo Saga': [
    '/projects/ameo-saga-1.png',
    '/projects/ameo-saga-2.png',
    '/projects/ameo-saga-3.png',
    '/projects/ameo-saga-4.png',
    '/projects/ameo-saga-5.png',
    '/projects/ameo-saga-6.png',
    '/projects/ameo-saga-7.png',
    '/projects/ameo-saga-8.png'
  ]
};

const projects = [
  {
    title: 'GenAI Insights Portal',
    description: 'Generative AI-Powered Knowledge Assistant with real-time insights, vector search, and source citations.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'OpenAI API', 'FAISS', 'Docker'],
    color: 'from-blue-400 to-cyan-500',
    features: ['AI-generated answers with citations', 'Vector search integration', 'Query history management', 'Azure-ready deployment']
  },
  {
    title: 'Collaborative AI Platform',
    description: 'Multi-Model Assistant Platform for creating and comparing AI assistants across different models.',
    tech: ['React', 'TypeScript', 'FastAPI', 'Supabase', 'OpenAI', 'Anthropic'],
    color: 'from-purple-400 to-indigo-500',
    features: ['Custom AI assistants', 'Model comparison', 'Real-time chat', 'Admin dashboard']
  },
  {
    title: 'Bookshelf Platform',
    description: 'Full-Stack Book Discovery Platform with advanced filtering and responsive design.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    color: 'from-cyan-400 to-teal-500',
    features: ['Category browsing', 'Real-time search', 'Genre filtering', 'Mobile optimization']
  },
  {
    title: 'Ameo Saga',
    description: 'AI-Powered Amazon Keyword Optimization Platform for automated keyword research.',
    tech: ['Vue.js', 'FastAPI', 'WebSockets', 'OpenAI API', 'Amazon API'],
    color: 'from-indigo-400 to-blue-500',
    features: ['ASIN metadata retrieval', 'Multi-source keywords', 'Real-time monitoring', 'AI categorization']
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const images = projectImages[project.title as keyof typeof projectImages];
  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden shadow-xl border border-white/20 dark:border-gray-700/30 bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-blue-400/40 hover:bg-white/60 dark:hover:bg-gray-900/60 animate-project-fade">
      {/* Project image at the top, aspect ratio preserved, no overlay */}
      <div className="relative w-full aspect-[16/9] bg-black">
        <img src={images[0]} alt={project.title} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
      </div>
      {/* Card content below image */}
      <div className="flex-1 flex flex-col p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {project.title}
          </h3>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
            aria-label="Project external link"
          >
            <ExternalLink className="w-5 h-5 text-blue-500" />
          </a>
        </div>
        <p className="text-base mb-3 text-text-secondary line-clamp-2 group-hover:line-clamp-none transition-all duration-300">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-sm hover:scale-105 transition-transform duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.features.map((feature, i) => (
            <span
              key={i}
              className="flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-white/80 dark:bg-gray-800/80 text-blue-500 font-medium shadow hover:scale-105 transition-transform duration-200 animate-feature-chip"
            >
              <Zap className="w-3 h-3" /> {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC<SectionProps> = ({ isVisible }) => {
  return (
    <section id="projects" className="w-full py-20 bg-background-page transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

// Add animation keyframes for fade-in and feature chip pop
// In your global CSS (e.g., App.css or index.css):
// @keyframes project-fade { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }
// .animate-project-fade { animation: project-fade 1s cubic-bezier(0.4,0,0.2,1) 0.1s both; }
// @keyframes feature-chip-pop { 0% { transform: scale(0.8); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
// .animate-feature-chip { animation: feature-chip-pop 0.6s cubic-bezier(0.4,0,0.2,1) both; }