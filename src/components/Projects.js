import React from 'react';
import { Layers, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/data';

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-white rounded-3xl shadow-lg p-10 mb-12 transform transition-transform duration-500 hover:scale-[1.01]"
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-indigo-700">
        Featured Projects <Layers className="inline-block ml-2 text-indigo-500" size={32} />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-50 rounded-xl shadow-lg overflow-hidden flex flex-col transform hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-indigo-800 mb-3">{project.title}</h3>
              <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex justify-between space-x-4">
                {project.liveLink && project.liveLink !== '#' && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-200"
                  >
                    <ExternalLink className="mr-1 h-5 w-5" /> Live Demo
                  </a>
                )}
                {project.githubLink && project.githubLink !== '#' && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 hover:text-gray-800 font-semibold transition-colors duration-200"
                  >
                    <Github className="mr-1 h-5 w-5" /> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;