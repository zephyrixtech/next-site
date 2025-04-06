'use client';
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description }: {icon: React.ReactNode, title: string, description: string}) => (
  <div className="service-card min-w-[280px] md:min-w-[320px] p-6 bg-white rounded-xl shadow-lg text-center mx-3 my-4">
    <div className="service-icon bg-[rgba(38,166,154,0.1)] w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
      {icon}
    </div>
    <h4 className="text-xl font-semibold text-[var(--black)] mb-2">{title}</h4>
    <p className="text-[var(--gray)] text-sm mb-3">{description}</p>
    <a href="#" className="learn-more inline-block pb-1 text-[var(--gray)] hover:text-[var(--primary-teal)] transition-colors duration-300 border-b border-gray-300">
      Learn More
    </a>
  </div>
);

const InfiniteMovingCards = () => {
  const [duplicatedServices, setDuplicatedServices] = useState<any[]>([]);
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  // Services data
  const services = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#26A69A" strokeWidth="2" className="w-8 h-8">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>,
      title: "Web Designing & Development",
      description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#26A69A" strokeWidth="2" className="w-8 h-8">
              <path d="M12 2a10 10 0 0110 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"/>
              <path d="M12 6v6l4 2"/>
            </svg>,
      title: "E-commerce Designing & Development",
      description: "Build a robust online store to showcase your products and reach customers globally with ease."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#26A69A" strokeWidth="2" className="w-8 h-8">
              <path d="M9 5l-6 6 6 6m6-12l6 6-6 6"/>
            </svg>,
      title: "Mobile Application Development",
      description: "Transform your business idea into a powerful mobile app that reaches your customers anywhere."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#26A69A" strokeWidth="2" className="w-8 h-8">
              <path d="M12 2v20M6 10l6-6 6 6M6 14l6 6 6-6"/>
            </svg>,
      title: "Software Development",
      description: "Custom software solutions tailored to streamline your business processes and improve efficiency."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#26A69A" strokeWidth="2" className="w-8 h-8">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>,
      title: "Digital Marketing",
      description: "Boost your online presence with our expert digital marketing strategies and tools."
    }
  ];

  // Duplicate services to create the illusion of infinite scrolling
  useEffect(() => {
    // Duplicate the array multiple times to ensure smooth looping
    setDuplicatedServices([...services, ...services, ...services]);
  }, []);

  // Measure the carousel width for animation
  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth + 40);
    }
  }, [duplicatedServices]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth + 40);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="services" className="services-section py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="h-1 w-24 bg-[var(--primary-teal)] mx-auto mb-4 rounded-full"></div>
          <h2 className="text-4xl font-bold mb-4 text-[var(--black)]">
            Services <span className="text-[var(--primary-teal)]">We Offer</span>
          </h2>
          <p className="text-[var(--gray)] max-w-2xl mx-auto">
            Explore our range of professional services designed to help your business thrive in the digital landscape.
          </p>
        </div>

        {/* Infinite carousel */}
        <div className="relative overflow-hidden py-4">
          {/* Gradient overlay on the left */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[var(--light-gray)] to-transparent z-10"></div>
          
          {/* Carousel container */}
          <motion.div 
            ref={carousel} 
            className="cursor-grab overflow-hidden"
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="flex"
              // Infinite animation
              animate={{ x: [-width/3, 0] }}
              transition={{ 
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear"
              }}
              whileTap={{ cursor: "grabbing" }}
            >
              {duplicatedServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </motion.div>
          </motion.div>
          
          {/* Gradient overlay on the right */}
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[var(--light-gray)] to-transparent z-10"></div>
        </div>

        {/* Call to action button */}
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-[var(--primary-teal)] hover:bg-[var(--hover-teal)] text-white rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default InfiniteMovingCards;