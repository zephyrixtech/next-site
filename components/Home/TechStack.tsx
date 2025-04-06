import React from 'react';
import { motion } from 'framer-motion';
import techStackData, { ITechStack } from '@/app/data/techstack.data';

// Tech Stack Card Component
const TechStackCard = ({ stack }: { stack: ITechStack }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: { 
      y: -10,
      boxShadow: "0 15px 40px var(--shadow-color)",
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="bg-white p-8 rounded-xl shadow-[0_8px_24px_var(--shadow-color)] border border-[var(--light-teal)] group"
    >
      <div className="w-16 h-16 bg-[rgba(38,166,154,0.1)] rounded-xl flex items-center justify-center mx-auto mb-6 transition-all duration-400 group-hover:bg-[var(--primary-teal)] group-hover:scale-110">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="var(--primary-teal)" 
          strokeWidth="2"
          className="transition-colors duration-400 group-hover:stroke-white"
        >
          <path d={stack.iconPath} />
        </svg>
      </div>
      
      <h3 className="text-xl font-semibold text-[var(--black)] mb-6 text-center transition-colors duration-300 group-hover:text-[var(--primary-teal)]">
        {stack.title}
      </h3>
      
      <div className="flex flex-col gap-4">
        {stack.technologies.map((tech, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 text-[var(--gray)] transition-all duration-300 group-hover:text-[var(--primary-teal)] hover:translate-x-2"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="var(--primary-teal)" 
              strokeWidth="2"
              className="flex-shrink-0"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">{tech}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// Main TechStack Component
const TechStack = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="py-24 bg-[var(--light-gray)] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="h-1 w-24 bg-[var(--primary-teal)] mx-auto mb-4 rounded-full"></div>
          <h2 className="text-4xl font-bold text-[var(--black)]">
            Our <span className="text-[var(--primary-teal)]">Technology</span>
            <span className="block mt-1 text-2xl font-medium text-[var(--gray)]">
              Stack
            </span>
          </h2>
          <p className="text-[var(--gray)] mt-3 max-w-2xl mx-auto">
            Cutting-edge technologies we use to build powerful solutions
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {techStackData.map((stack, index) => (
            <TechStackCard key={index} stack={stack} />
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default TechStack;