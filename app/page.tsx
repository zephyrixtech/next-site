'use client';
import React, {  useEffect } from 'react';
import TeamCard from '@/components/Home/TeamCard';
import teamMembers from './data/team.data';
import About from '@/components/Home/About';
import InfiniteMovingCards from '@/components/Home/Services';
import Projects from '@/components/Home/Project';
import Approach from '@/components/Home/Approach';
import TechStack from '@/components/Home/TechStack';
import ContactUs from '@/components/Home/Contact';
import Hero from '@/components/Home/Hero';

const Home = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll animation for fade-in sections
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.fade-in-section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
          section.classList.add('is-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative overflow-x-hidden w-full bg-light-gray">

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <InfiniteMovingCards />

      {/* Products Section */}
      <Projects />

      {/* Team Section */}
      <section id="team" className="team-section bg-[#F5F5F5] py-20 relative z-40">
        <div className="container mx-auto px-4">  
          <div className="text-center mb-12">
          <div className="h-1 w-24 bg-[var(--primary-teal)] mx-auto mb-4 rounded-full"></div>
          <h2 className="text-4xl font-bold text-[var(--black)]">Meet
            Our <span className="text-[var(--primary-teal)]">Team</span>
          </h2>
        </div>
          <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.length > 0 && teamMembers.map((member, index) => (
              <TeamCard member={member} key={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <Approach />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Contact Section */}
      <ContactUs />

      {/* CSS Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideIn {
            from { transform: translateX(-100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes scaleIn {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-20px); }
            60% { transform: translateY(-10px); }
          }
          @keyframes pulse {
            0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(38, 166, 154, 0.4); }
            70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(38, 166, 154, 0); }
            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(38, 166, 154, 0); }
          }
          @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes shine {
            0% { background-position: -100% 50%; }
            100% { background-position: 200% 50%; }
          }
          @keyframes ripple {
            0% { box-shadow: 0 0 0 0 rgba(38, 166, 154, 0.3), 0 0 0 1px rgba(38, 166, 154, 0.3), 0 0 0 3px rgba(38, 166, 154, 0.3); }
            100% { box-shadow: 0 0 0 1px rgba(38, 166, 154, 0.3), 0 0 0 3px rgba(38, 166, 154, 0.3), 0 0 0 5px rgba(38, 166, 154, 0); }
          }
          @keyframes badgePulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          @keyframes shimmerProduct {
            0% { transform: translateX(-100%) rotate(30deg); }
            100% { transform: translateX(100%) rotate(30deg); }
          }
          .fade-in-section {
            opacity: 0;
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          .fade-in-section.is-visible {
            opacity: 1;
            transform: none;
          }
        `}
      </style>
    </main>
  );
};

export default Home;