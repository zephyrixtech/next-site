'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Banner from '@/components/Banner';
import projectsData from '../data/project.data';
import ProjectCard from '@/components/Home/ProjectCard';

export default function Products() {

  useEffect(() => {
    // Add a small delay to ensure all sections are in the DOM
    setTimeout(() => {
      document.querySelectorAll('.section').forEach(section => {
        section.classList.add('animate-fadeInUp');
      });
    }, 100);
    
    // Add scroll animations for sections that aren't initially visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.section:not(.animate-fadeInUp)').forEach(section => {
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  }, []);

  // Testimonial data
  const testimonials = [
    {
      quote: "Implementing the Zephyrix ERP solution has revolutionized our operations. Our efficiency has improved by 40% in just three months.",
      author: "Sarah Johnson",
      role: "CTO, GlobalTech Inc."
    },
    {
      quote: "The e-commerce platform provided by Zephyrix helped us scale our business from local to international markets. Exceptional support team!",
      author: "Michael Chen",
      role: "CEO, NexGen Retail"
    }
  ];

  return (
    <>
      <Head>
        <title>Our Enterprise Solutions - Zephyrix Tech</title>
        <meta name="description" content="Transforming businesses with cutting-edge software solutions" />
      </Head>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s forwards;
        }
      `}</style>

      <main className="min-h-screen">
        {/* Animated Background */}
        <div className="fixed w-full h-full top-0 left-0 -z-10 overflow-hidden bg-gradient-to-b from-white to-gray-100">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div 
              key={index}
              className="absolute rounded-full bg-[var(--transparent-white)] opacity-20 animate-float"
              style={{
                width: `${Math.random() * 100 + 100}px`,
                height: `${Math.random() * 100 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 4 + 8}s`
              }}
            />
          ))}
        </div>

        <Banner title="Our Enterprise Solutions" description="Transforming businesses with cutting-edge software solutions" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Products Grid */}
          <div className="section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0">
            {projectsData.map((product, index) => (
              <ProjectCard 
                key={index}
                project={product}
              />
            ))}
          </div>

          {/* Call to Action Section */}
          <section className="section my-20 opacity-0">
            <div className="bg-gradient-to-br from-[var(--primary-teal)] to-[var(--accent-green)] rounded-2xl p-10 text-center text-white shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Contact our team of experts today to discuss how our enterprise solutions can help you achieve your business goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" className="bg-white text-[var(--primary-teal)] hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-300">
                  Schedule a Demo
                </a>
                <a href="#" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
                  Contact Sales
                </a>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="section my-20 opacity-0">
            <h2 className="text-3xl font-bold mb-10 text-[var(--primary-teal)] text-center">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg relative">
                  <svg className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 w-12 h-12 text-[var(--light-teal)]" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 8v6c0 3.3-2.7 6-6 6H4v4h4c5.5 0 10-4.5 10-10V8h-8zm18 0v6c0 3.3-2.7 6-6 6h0v4h4c5.5 0 10-4.5 10-10V8h-8z"/>
                  </svg>
                  <p className="text-gray-700 mb-6 pt-4 italic">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-teal)] to-[var(--accent-green)] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.author.split(' ').map(name => name[0]).join('')}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-[var(--black)]">{testimonial.author}</h4>
                      <p className="text-sm text-[var(--gray)]">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

      </main>
    </>
  );
}