// pages/about.jsx
'use client';
import {  useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import teamMembers from '../data/team.data';
import Banner from '@/components/Banner';
import mission from '../../public/logo/mission.avif';

export default function About() {
  useEffect(() => {
    // Add a small delay to ensure all sections are in the DOM
    setTimeout(() => {
      document.querySelectorAll('.section').forEach(section => {
        section.classList.add('animate-fadeInUp');
      });
    }, 100);
    
    // Optional: Add scroll animations for sections that aren't initially visible
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

  return (
    <>
      <Head>
        <title>About Us - Zephyrix Tech</title>
        <meta name="description" content="Learn about Zephyrix Tech - Pioneering Digital Transformation Since 2025" />
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

        .perspective-1000 {
          perspective: 1000px;
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

        <Banner title="About Us" description="Pioneering Digital Transformation Since 2025" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission Section */}
          <section className="section flex flex-col md:flex-row gap-10 items-center my-20 opacity-0">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-[var(--primary-teal)]">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                We are dedicated to transforming businesses through innovative software solutions. Our mission is to empower organizations with cutting-edge technology that drives growth, efficiency, and success in the digital age.
              </p>
              <p className="text-gray-700">
                With over a decade of experience, we&apos;ve helped hundreds of businesses across multiple industries modernize their operations and achieve their digital transformation goals.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md h-64 bg-gray-200 rounded-lg overflow-hidden">
                <Image 
                  src={mission}
                  alt="Mission illustration" 
                  layout="fill" 
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="section my-20 opacity-0">
            <h2 className="text-3xl font-bold mb-10 text-[var(--primary-teal)] text-center">Our Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "500+", text: "Clients Worldwide" },
                { number: "15+", text: "Years Experience" },
                { number: "98%", text: "Client Satisfaction" },
                { number: "24/7", text: "Support Available" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[var(--primary-teal)] mb-3">{stat.number}</div>
                  <p className="text-gray-600">{stat.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Values Section */}
          <section className="section my-20 opacity-0">
            <h2 className="text-3xl font-bold mb-10 text-[var(--primary-teal)] text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Innovation", desc: "Constantly pushing boundaries to create cutting-edge solutions" },
                { title: "Excellence", desc: "Committed to delivering the highest quality in everything we do" },
                { title: "Integrity", desc: "Building trust through transparency and ethical practices" }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-lg text-center transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-[var(--primary-teal)] to-[var(--accent-green)] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {index === 0 ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      ) : index === 1 ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      )}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="section my-20 opacity-0">
            <h2 className="text-3xl font-bold mb-10 text-[var(--primary-teal)] text-center">Leadership Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="perspective-1000">
                  <div className="relative h-96 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 bg-white">
                    <div className="h-full">
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        layout="fill" 
                        objectFit="cover"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 transform translate-y-10 hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-white/80 mb-4">{member.role}</p>
                      <div className="flex gap-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                        <a href="#" className="p-2 bg-white/10 rounded-md hover:bg-white hover:text-[var(--primary-teal)] transition-colors duration-200">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-white">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                          </svg>
                        </a>
                        <a href="#" className="p-2 bg-white/10 rounded-md hover:bg-white hover:text-[var(--primary-teal)] transition-colors duration-200">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-white">
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                          </svg>
                        </a>
                      </div>
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