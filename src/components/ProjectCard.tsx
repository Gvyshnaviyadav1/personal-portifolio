'use client';

import React, { useState } from 'react';
import { Project } from '../types';
import ProjectModal from './ProjectModal';
import { ExternalLink, Github, Info } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showModal, setShowModal] = useState(false);
  const { title, description, tags, image, category } = project;

  return (
    <>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between group">
        <div>
          {/* Cover Image */}
          <div className="relative h-48 overflow-hidden bg-slate-100">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-slate-900/80 text-white backdrop-blur-xs">
              {category}
            </span>
          </div>

          {/* Content */}
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              {title}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
              {description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {tags.map((tag, i) => (
                <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100 mt-2">
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
          >
            <Info className="w-4 h-4" />
            Architecture Details
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowModal(true)}
              className="p-2 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
              title="View Architecture"
            >
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {showModal && <ProjectModal project={project} onClose={() => setShowModal(false)} />}
    </>
  );
};

export default ProjectCard;
