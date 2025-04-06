'use client';
import Banner from '@/components/Banner';
import { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [bubbles, setBubbles] = useState<Array<{
    width: number;
    height: number;
    top: number;
    left: number;
    animationDelay: number;
    animationDuration: number;
  }>>([]);

  useEffect(() => {
    // Create random bubbles only on the client side
    setBubbles(
      Array.from({ length: 5 }, () => ({
        width: Math.random() * 100 + 100,
        height: Math.random() * 100 + 100,
        top: Math.random() * 100,
        left: Math.random() * 100,
        animationDelay: Math.random() * 5,
        animationDuration: Math.random() * 4 + 8
      }))
    );

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

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: 'Thank you! Your message has been sent successfully.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(null), 5000);
    }, 1500);
  };

  return (
    <>
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

        .section {
          opacity: 0;
        }
      `}</style>

      {/* Animated Background */}
      <div className="fixed w-full h-full top-0 left-0 -z-10 overflow-hidden bg-gradient-to-b from-white to-gray-100">
        {bubbles.map((bubble, index) => (
          <div 
            key={index}
            className="absolute rounded-full bg-[var(--transparent-white)] opacity-20 animate-float"
            style={{
              width: `${bubble.width}px`,
              height: `${bubble.height}px`,
              top: `${bubble.top}%`,
              left: `${bubble.left}%`,
              animationDelay: `${bubble.animationDelay}s`,
              animationDuration: `${bubble.animationDuration}s`
            }}
          />
        ))}
      </div>

      <section className="section mb-20">
          <Banner title="Get in Touch" description="We'd love to hear from you! Contact us for any inquiries or collaborations." />

        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-[var(--primary-teal)]">Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-teal)] focus:border-transparent transition duration-200"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-teal)] focus:border-transparent transition duration-200"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-teal)] focus:border-transparent transition duration-200"
                  />
                </div>
                
                <div className="mb-8">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-teal)] focus:border-transparent transition duration-200"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-lg font-medium text-white bg-gradient-to-r from-[var(--primary-teal)] to-[var(--accent-green)] hover:from-[var(--hover-teal)] hover:to-[var(--dark-teal)] transition-all duration-300 transform hover:-translate-y-1 shadow-md disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitMessage && (
                  <div className={`mt-6 p-4 rounded-lg ${submitMessage.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'} transition-all duration-300 animate-fadeInUp`}>
                    {submitMessage.text}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 gap-8">
              {[
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: "Our Location",
                  content: "123 Tech Street, Innovation City, TX 75001"
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Email Us",
                  content: "info@zephyrixtech.com",
                  isLink: true,
                  href: "mailto:info@zephyrixtech.com"
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: "Call Us",
                  content: "+1 (234) 567-890",
                  isLink: true,
                  href: "tel:+1234567890"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-r from-[var(--primary-teal)] to-[var(--accent-green)] flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">{item.title}</h3>
                  {item.isLink ? (
                    <p className="text-gray-600 text-center">
                      <a 
                        href={item.href} 
                        className="text-[var(--primary-teal)] hover:text-[var(--hover-teal)] transition-colors duration-200"
                      >
                        {item.content}
                      </a>
                    </p>
                  ) : (
                    <p className="text-gray-600 text-center">{item.content}</p>
                  )}
                </div>
              ))}

              {/* Social Links */}
              <div className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-bold mb-6 text-center">Connect With Us</h3>
                <div className="flex justify-center space-x-6">
                  {[
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                        </svg>
                      ),
                      name: "LinkedIn"
                    },
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                        </svg>
                      ),
                      name: "Twitter"
                    },
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                        </svg>
                      ),
                      name: "Facebook"
                    }
                  ].map((social, index) => (
                    <a 
                      key={index} 
                      href="#" 
                      aria-label={social.name}
                      className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gradient-to-r hover:from-[var(--primary-teal)] hover:to-[var(--accent-green)] hover:text-white transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;