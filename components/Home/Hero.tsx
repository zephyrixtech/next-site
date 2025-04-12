import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import illustartion from '../../public/logo/illustration.png';

const Hero = () => {
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

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: { 
      scale: 1.05,
      y: -4,
      boxShadow: "0 8px 20px rgba(38, 166, 154, 0.3)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const circleVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-screen bg-[var(--white)] overflow-hidden flex items-center py-16 px-6">
      <div className="container mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto"
        >
          {/* Hero Text */}
          <motion.div 
            variants={textVariants}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[var(--black)]">
              Great <span className="text-[var(--primary-teal)]">Software</span> is<br />
              Built by Great <span className="text-[var(--primary-teal)]">Teams</span>
            </h1>
            <p className="mt-6 text-[var(--gray)] text-lg max-w-md mx-auto lg:mx-0">
              Our expertise ensures your project is executed with precision and innovation at every step.
            </p>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              className="mt-8 bg-[var(--primary-teal)] text-white px-8 py-3 rounded-lg font-medium shadow-md"
            >
              Let&apos;s Get Started!
            </motion.button>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            variants={imageVariants}
            className="w-full lg:w-1/2 relative z-10"
          >
            <Image 
              src={illustartion} 
              alt="Developer illustration" 
              width={600}
              height={600}
              className="max-w-full h-auto mx-auto"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-32 bg-[var(--primary-teal)] rounded-t-full opacity-20"
      />
      <motion.div
        className="absolute top-0 right-0 w-48 h-48 bg-[var(--light-teal)] rounded-full opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default Hero;