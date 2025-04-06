import projectsData from '@/app/data/project.data';
import React from 'react';
import ProjectCard from './ProjectCard';
import Link from 'next/link';

const Projects = () => {
    return (
      <section 
        id="projects" 
        className="py-24 bg-[var(--light-gray)] relative overflow-hidden"
      >
        <div className="container mx-auto px-6">
          {/* Decorative Header */}
          <div className="h-1 w-24 bg-[var(--primary-teal)] mx-auto mb-4 rounded-full"></div>
          <h2 className="text-4xl font-bold mb-12 text-center text-[var(--black)]">
            Our <span className="text-[var(--primary-teal)]">Projects</span>
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
  
          {/* View More Section */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-white w-full p-6 rounded-lg shadow-md border-l-4 border-[var(--accent-green)]">
              <h3 className="text-xl font-semibold text-[var(--black)] mb-4">
                Explore More Projects
              </h3>
              <Link href="/projects">
                <button className="bg-[var(--primary-teal)] text-white px-6 py-3 rounded-lg font-medium hover:bg-[var(--hover-teal)] transition-all duration-300 flex items-center gap-2 mx-auto">
                  View All Projects
                  <i className="fas fa-arrow-right"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;