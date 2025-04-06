import React from 'react';
import { motion } from 'framer-motion';
import approachData, { IApproach } from '@/app/data/approach.data';

// Approach Card Component
const ApproachCard = ({ approach }: { approach: IApproach }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: { 
      y: -10,
      boxShadow: "0 15px 40px var(--shadow-color)",
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="bg-white p-8 rounded-xl shadow-[0_8px_24px_var(--shadow-color)] relative overflow-hidden border border-[var(--light-teal)] group"
    >
      <div 
        className="w-16 h-16 bg-[rgba(38,166,154,0.1)] rounded-xl flex items-center justify-center mb-6 transition-all duration-400 group-hover:bg-[var(--primary-teal)] group-hover:scale-110"
      >
        <span className="text-2xl font-bold text-[var(--primary-teal)] transition-colors duration-400 group-hover:text-white">
          {approach.step}
        </span>
      </div>
      
      <h3 className="text-xl font-semibold text-[var(--black)] mb-3 transition-colors duration-300 group-hover:text-[var(--primary-teal)]">
        {approach.title}
      </h3>
      
      <p className="text-[var(--gray)] text-sm leading-relaxed min-h-[96px]">
        {approach.description}
      </p>
      
      <div className="mt-6">
        <div className="w-full h-0.5 bg-[rgba(38,166,154,0.1)] relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-[var(--primary-teal)]"
            initial={{ x: "-100%" }}
            whileHover={{ 
              x: 0,
              transition: { duration: 0.4, ease: "easeInOut" }
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

// Main Approach Component
const Approach = () => {
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
            Our <span className="text-[var(--primary-teal)]">Approach</span>
            <span className="block mt-1 text-2xl font-medium text-[var(--gray)]">
              to Design & Development
            </span>
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {approachData.map((approach, index) => (
            <ApproachCard key={index} approach={approach} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;