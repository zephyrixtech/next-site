// components/ProjectCard.jsx
import React from 'react';
import Image from 'next/image';
import { IProject } from '@/app/data/project.data';

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        <Image 
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transform hover:scale-105 transition-transform duration-500"
        />
        {project.badge && (
          <div className={`absolute top-4 right-4 ${project.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse`}>
            {project.badge}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[var(--black)] mb-3">{project.title}</h3>
        <p className="text-[var(--gray)] leading-relaxed mb-4">
          {project.description}
        </p>
        
        <div className="space-y-2 mb-6">
          {project.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <i className="fas fa-check-circle text-[var(--primary-teal)]"></i>
              <span className="text-[var(--gray)]">{feature}</span>
            </div>
          ))}
        </div>

        <button className="w-full bg-[var(--primary-teal)] text-white py-2 rounded-lg font-medium hover:bg-[var(--hover-teal)] transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;