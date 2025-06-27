import React, { useState } from 'react';
import { ExternalLink, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import type { SectionProps, Project } from '../types';

type ProjectTitle = 'GenAI Insights Portal' | 'Collaborative AI Platform' | 'Bookshelf Platform' | 'Ameo Saga';

// Import project images
const projectImages: Record<ProjectTitle, string[]> = {
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

const projects: Project[] = [
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = projectImages[project.title as ProjectTitle] || [];

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/30 backdrop-blur-lg bg-white/30 dark:bg-gray-900/40 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:border-blue-400/40 hover:bg-white/50 dark:hover:bg-gray-900/60 animate-project-fade`}
      style={{
        boxShadow: '0 8px 32px 0 rgba(31,38,135,0.12)',
        border: '1.5px solid rgba(255,255,255,0.18)',
        backdropFilter: 'blur(16px) saturate(180%)',
      }}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none`} />

      {/* Project screenshot */}
      <div className="relative h-48 overflow-hidden rounded-t-3xl">
        <img
          src={images[currentImageIndex]}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-500"
        />
        {images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={prevImage}
              className="p-2 mx-2 bg-black/40 rounded-full hover:bg-black/70 transition-colors shadow-md"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={nextImage}
              className="p-2 mx-2 bg-black/40 rounded-full hover:bg-black/70 transition-colors shadow-md"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        )}
        <div className="absolute bottom-2 right-2 bg-black/60 px-2 py-1 rounded text-xs text-white shadow">
          {currentImageIndex + 1}/{images.length}
        </div>
      </div>

      {/* Content */}
      <div className="relative p-7">
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-xl font-bold truncate mr-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent`}>{project.title}</h3>
          <ExternalLink className={`flex-shrink-0 w-6 h-6 text-blue-400 group-hover:text-purple-500 transition-colors duration-200`} />
        </div>

        <p className={`text-base mb-6 line-clamp-2 text-text-secondary`}>{project.description}</p>

        <div className="mb-6">
          <h4 className="text-xs font-semibold mb-2 tracking-widest text-blue-400">KEY FEATURES</h4>
          <ul className="space-y-2">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                <Zap className="w-4 h-4 flex-shrink-0 mt-0.5 text-blue-400" />
                <span className="line-clamp-2">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-sm hover:scale-105 transition-transform duration-200"
            >
              {tech}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
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

// Add animation keyframes for fade-in
// In your global CSS (e.g., App.css or index.css):
// @keyframes project-fade { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }
// .animate-project-fade { animation: project-fade 1s cubic-bezier(0.4,0,0.2,1) 0.1s both; }