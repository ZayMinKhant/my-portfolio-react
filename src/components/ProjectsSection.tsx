import React, { useState } from 'react';
import { ExternalLink, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import type { SectionProps, Project } from '../types';

type ProjectTitle = 'GenAI Insights Portal' | 'Collaborative AI Platform' | 'Bookshelf Platform' | 'Ameo Saga';

// Import project images
const projectImages: Record<ProjectTitle, string[]> = {
  'GenAI Insights Portal': [
    '/src/assets/projects/genai-insights-1.png',
    '/src/assets/projects/genai-insight-2.png',
    '/src/assets/projects/gen-ai-insight-3.png'
  ],
  'Collaborative AI Platform': [
    '/src/assets/projects/collaborative-ai-1.png',
    '/src/assets/projects/collaborative-ai-2.png',
    '/src/assets/projects/collaborative-ai-3.png',
    '/src/assets/projects/collaborative-ai-4.png',
    '/src/assets/projects/collaborative-ai-5.png',
    '/src/assets/projects/collaborative-ai-6.png',
    '/src/assets/projects/collaborative-ai--7.png'
  ],
  'Bookshelf Platform': [
    '/src/assets/projects/book-shelf-1.png',
    '/src/assets/projects/book-shelf-2.png'
  ],
  'Ameo Saga': [
    '/src/assets/projects/ameo-saga-1.png',
    '/src/assets/projects/ameo-saga-2.png',
    '/src/assets/projects/ameo-saga-3.png',
    '/src/assets/projects/ameo-saga-4.png',
    '/src/assets/projects/ameo-saga-5.png',
    '/src/assets/projects/ameo-saga-6.png',
    '/src/assets/projects/ameo-saga-7.png',
    '/src/assets/projects/ameo-saga-8.png'
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

const ProjectCard: React.FC<{ project: Project; darkMode: boolean }> = ({ project, darkMode }) => {
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
      className={`group relative overflow-hidden rounded-2xl ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      } shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300`}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />

      {/* Project screenshot */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover"
        />
        {images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={prevImage}
              className="p-2 mx-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={nextImage}
              className="p-2 mx-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        )}
        <div className="absolute bottom-2 right-2 bg-black/50 px-2 py-1 rounded text-xs text-white">
          {currentImageIndex + 1}/{images.length}
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-xl font-bold truncate mr-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {project.title}
          </h3>
          <ExternalLink className={`flex-shrink-0 w-6 h-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'} group-hover:text-blue-500 transition-colors duration-200`} />
        </div>

        <p className={`text-base mb-6 line-clamp-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {project.description}
        </p>

        <div className="mb-6">
          <h4 className={`text-sm font-semibold mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
            KEY FEATURES
          </h4>
          <ul className="space-y-2">
            {project.features.map((feature, i) => (
              <li key={i} className={`flex items-start gap-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Zap className="w-4 h-4 flex-shrink-0 mt-0.5 text-blue-500" />
                <span className="line-clamp-2">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC<SectionProps> = ({ darkMode, isVisible }) => {
  return (
    <section id="projects" className={`w-full py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className={`text-4xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} darkMode={darkMode} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 