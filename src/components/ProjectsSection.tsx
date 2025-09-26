import React from "react";
import { ExternalLink } from "lucide-react";
import { useImageGallery } from "../contexts/ImageGalleryContext";
import type { SectionProps, Project } from "../types";
import { projects, projectImages } from "../data";

const ProjectCard: React.FC<{ project: Project }> = React.memo(({ project }) => {
  const { openGallery } = useImageGallery();
  const images = projectImages[project.title as keyof typeof projectImages] || [];

  const handleImageClick = () => {
    if (images.length > 0) {
      openGallery(images, 0);
    }
  };

  return (
    <div className="group relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden cursor-pointer" onClick={handleImageClick}>
        {images.length > 0 ? (
          <img
            src={images[0]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center`}>
            <span className="text-white font-bold text-lg">{project.title}</span>
          </div>
        )}
        
        {/* Role Badge */}
        <div className="absolute top-3 left-3">
          <span className="text-xs font-semibold bg-black/70 text-white px-2 py-1 rounded-md backdrop-blur-sm">
            {project.role}
          </span>
        </div>

        {/* Image Count Badge */}
        {images.length > 0 && (
          <div className="absolute top-3 right-3">
            <span className="text-xs font-semibold bg-black/70 text-white px-2 py-1 rounded-md backdrop-blur-sm">
              {images.length} {images.length === 1 ? 'image' : 'images'}
            </span>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-semibold text-sm bg-black/50 px-3 py-1 rounded-full">
              Click to view more
            </span>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-text-default group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
            {project.title}
          </h3>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>

        <p className="text-text-secondary text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-white/60 dark:bg-gray-800/60 text-text-secondary px-2 py-1 rounded-md border border-white/40 dark:border-gray-700/40"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <div className="space-y-1">
          {project.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-xs text-text-secondary">
              <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${project.color}`} />
              <span>{feature}</span>
            </div>
          ))}
          {project.features.length > 3 && (
            <div className="text-xs text-text-secondary">
              +{project.features.length - 3} more features
            </div>
          )}
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