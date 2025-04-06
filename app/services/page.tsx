// pages/services.jsx
'use client';
import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Banner from '@/components/Banner';

export default function Services() {
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

  return (
    <>
      <Head>
        <title>Our Services - Zephyrix Tech</title>
        <meta name="description" content="Comprehensive solutions for your digital transformation journey" />
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

        .service-icon {
          background: linear-gradient(to right, var(--primary-teal), var(--accent-green));
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .features-list {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
        }

        .features-list li {
          margin-bottom: 0.5rem;
          position: relative;
        }

        .features-list li::before {
          content: "•";
          color: var(--primary-teal);
          font-weight: bold;
          position: absolute;
          left: -1rem;
        }

        .step-number {
          background: linear-gradient(to right, var(--primary-teal), var(--accent-green));
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.25rem;
          margin-bottom: 1rem;
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

        <Banner title="Our Services" description="Comprehensive solutions for your digital transformation journey" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Services Section */}
          <section className="section my-20 opacity-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Software Development Card */}
              <div className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M12 3L1 9L12 15L23 9L12 3Z"/>
                    <path d="M1 9V14L12 20L23 14V9"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Software Development</h3>
                <p className="text-gray-700">Tailored software solutions designed to meet your specific business needs.</p>
                <ul className="features-list text-gray-600">
                  <li>Requirements analysis and planning</li>
                  <li>Agile development methodology</li>
                  <li>Quality assurance testing</li>
                  <li>Ongoing maintenance and support</li>
                </ul>
                <Link href="/contact" className="inline-block py-2 px-6 bg-[var(--primary-teal)] text-white rounded-md hover:bg-[var(--accent-green)] transition-colors duration-300">
                  Learn More
                </Link>
              </div>

              {/* Digital Transformation Card */}
              <div className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16V12L15 9"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Digital Transformation</h3>
                <p className="text-gray-700">Strategic consulting and implementation of digital solutions to modernize your business.</p>
                <ul className="features-list text-gray-600">
                  <li>Digital strategy development</li>
                  <li>Process automation</li>
                  <li>Cloud migration services</li>
                  <li>Digital workflow optimization</li>
                </ul>
                <Link href="/contact" className="inline-block py-2 px-6 bg-[var(--primary-teal)] text-white rounded-md hover:bg-[var(--accent-green)] transition-colors duration-300">
                  Learn More
                </Link>
              </div>

              {/* Cloud Solutions Card */}
              <div className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M8 10L16 10M8 14L16 14"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Cloud Solutions</h3>
                <p className="text-gray-700">Comprehensive cloud services for enhanced scalability and performance.</p>
                <ul className="features-list text-gray-600">
                  <li>Cloud architecture design</li>
                  <li>Migration planning and execution</li>
                  <li>Cloud security implementation</li>
                  <li>24/7 monitoring and support</li>
                </ul>
                <Link href="/contact" className="inline-block py-2 px-6 bg-[var(--primary-teal)] text-white rounded-md hover:bg-[var(--accent-green)] transition-colors duration-300">
                  Learn More
                </Link>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="section my-20 opacity-0">
            <h2 className="text-3xl font-bold mb-10 text-[var(--primary-teal)] text-center">Our Process</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-xl shadow-lg text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="mx-auto step-number">1</div>
                <h3 className="text-xl font-bold mb-3">Discovery</h3>
                <p className="text-gray-600">We analyze your requirements and create a detailed project roadmap.</p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-8 rounded-xl shadow-lg text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="mx-auto step-number">2</div>
                <h3 className="text-xl font-bold mb-3">Development</h3>
                <p className="text-gray-600">Our team builds your solution using cutting-edge technologies.</p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-8 rounded-xl shadow-lg text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="mx-auto step-number">3</div>
                <h3 className="text-xl font-bold mb-3">Deployment</h3>
                <p className="text-gray-600">We ensure smooth implementation and provide comprehensive training.</p>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-8 rounded-xl shadow-lg text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="mx-auto step-number">4</div>
                <h3 className="text-xl font-bold mb-3">Support</h3>
                <p className="text-gray-600">Ongoing maintenance and support to ensure optimal performance.</p>
              </div>
            </div>
          </section>
          
          {/* Call to Action Section */}
          <section className="section my-20 opacity-0">
            <div className="bg-gradient-to-r from-[var(--primary-teal)] to-[var(--accent-green)] rounded-xl p-10 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">Partner with us to leverage the latest technologies and drive your business forward in the digital age.</p>
              <Link href="/contact" className="inline-block py-3 px-8 bg-white text-[var(--primary-teal)] font-bold rounded-md hover:bg-gray-100 transition-colors duration-300">
                Contact Us Today
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}