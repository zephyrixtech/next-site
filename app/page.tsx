'use client';
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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


      {/* Overlay Menu */}
      <div className={`overlay-menu fixed top-0 left-[-100%] w-full h-screen bg-[linear-gradient(135deg,rgba(0,0,0,0.95),rgba(25,0,35,0.95))] flex flex-col justify-center items-center z-40 transition-all duration-[600ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] backdrop-blur-md ${isMenuOpen ? 'left-0' : ''}`}>
        <div className="overlay-menu-content relative w-4/5 max-w-2xl text-center transform translate-y-5 opacity-0 transition-all duration-500 ease-in-out delay-200">
          <div
            className="overlay-menu-close absolute top-[-60px] right-0 cursor-pointer p-2.5 transition-transform duration-300 hover:rotate-90"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </div>
          <ul className="overlay-menu-links flex flex-col gap-5 p-0 m-0">
            <li className="overflow-hidden transform translate-y-5 opacity-0 transition-all duration-400">
              <a href="#home" className="overlay-menu-item text-white text-2xl font-semibold block p-2.5 relative transition-all duration-300 hover:text-primary-teal hover:translate-y-[-12px] hover:text-shadow-[0_10px_20px_rgba(38,166,154,0.3)]" onClick={() => setIsMenuOpen(false)}>Home</a>
            </li>
            <li className="overflow-hidden transform translate-y-5 opacity-0 transition-all duration-400">
              <a href="#about" className="overlay-menu-item text-white text-2xl font-semibold block p-2.5 relative transition-all duration-300 hover:text-primary-teal hover:translate-y-[-12px] hover:text-shadow-[0_10px_20px_rgba(38,166,154,0.3)]" onClick={() => setIsMenuOpen(false)}>About</a>
            </li>
            <li className="overflow-hidden transform translate-y-5 opacity-0 transition-all duration-400">
              <a href="#services" className="overlay-menu-item text-white text-2xl font-semibold block p-2.5 relative transition-all duration-300 hover:text-primary-teal hover:translate-y-[-12px] hover:text-shadow-[0_10px_20px_rgba(38,166,154,0.3)]" onClick={() => setIsMenuOpen(false)}>Services</a>
            </li>
            <li className="overflow-hidden transform translate-y-5 opacity-0 transition-all duration-400">
              <a href="#products" className="overlay-menu-item text-white text-2xl font-semibold block p-2.5 relative transition-all duration-300 hover:text-primary-teal hover:translate-y-[-12px] hover:text-shadow-[0_10px_20px_rgba(38,166,154,0.3)]" onClick={() => setIsMenuOpen(false)}>Products</a>
            </li>
            <li className="overflow-hidden transform translate-y-5 opacity-0 transition-all duration-400">
              <a href="#team" className="overlay-menu-item text-white text-2xl font-semibold block p-2.5 relative transition-all duration-300 hover:text-primary-teal hover:translate-y-[-12px] hover:text-shadow-[0_10px_20px_rgba(38,166,154,0.3)]" onClick={() => setIsMenuOpen(false)}>Team</a>
            </li>
            <li className="overflow-hidden transform translate-y-5 opacity-0 transition-all duration-400">
              <a href="#contact" className="overlay-menu-item text-white text-2xl font-semibold block p-2.5 relative transition-all duration-300 hover:text-primary-teal hover:translate-y-[-12px] hover:text-shadow-[0_10px_20px_rgba(38,166,154,0.3)]" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero flex justify-around items-center p-12 relative overflow-hidden bg-white min-h-screen">
        <div className="hero-text max-w-[50%]">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Great <span className="text-primary-teal">software</span> is <br /> <strong>built by great <span className="text-primary-teal">teams</span></strong>
          </h1>
          <p className="mt-4 text-gray-600">Our expertise ensures that your project is executed with precision and innovation at every step.</p>
          <button className="cta-btn bg-primary-teal text-white px-5 py-2.5 rounded mt-5 hover:bg-hover-teal transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg">
            Let's get started!
          </button>
        </div>
        <div className="hero-image">
          <img src="/assets/illustration.png" alt="Developer illustration" className="max-w-full h-auto" />
        </div>
        <div className="bottom-circle absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 w-36 h-24 bg-primary-teal rounded-t-full"></div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section bg-[#F5F5F5] py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl font-bold mb-5 text-center">About Zephyrix Tech</h2>
          <div className="row flex flex-col md:flex-row items-center gap-8">
            <div className="col-md-6">
              <p className="section-description text-lg text-gray-600 mb-6">
                At Zephyrix Tech, we're passionate about building innovative products that make a difference. As a product-based company, we're dedicated to creating cutting-edge solutions that solve real-world problems. But that's not all - we're also committed to empowering the next generation of tech leaders through our MERN stack training programs.
              </p>
              <h3 className="subsection-title text-2xl font-bold mb-3">Our Mission</h3>
              <p className="subsection-description text-gray-600 mb-6">
                Our mission is to harness the power of technology to drive positive change in the world. We believe that by combining innovative thinking with technical expertise, we can create solutions that make a real difference in people's lives.
              </p>
              <h3 className="subsection-title text-2xl font-bold mb-3">Our Values</h3>
              <ul className="value-list text-gray-600">
                <li className="mb-2 flex items-center"><i className="fa fa-lightbulb text-primary-teal mr-2"></i>Innovation</li>
                <li className="mb-2 flex items-center"><i className="fa fa-users text-primary-teal mr-2"></i>Collaboration</li>
                <li className="mb-2 flex items-center"><i className="fa fa-graduation-cap text-primary-teal mr-2"></i>Empowerment</li>
                <li className="mb-2 flex items-center"><i className="fa fa-lock text-primary-teal mr-2"></i>Integrity</li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src="/assets/startup.jpeg" alt="About Image" className="about-image w-full h-auto rounded-lg object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section py-20 bg-light-teal">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-8">Services we offer</h2>
          <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="service-card p-6 bg-white rounded-xl shadow-lg hover:translate-y-[-5px] transition-transform duration-300 text-center">
              <div className="service-icon bg-[rgba(38,166,154,0.1)] w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#26A69A" strokeWidth="2" className="w-7 h-7">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-black mb-2">Web Designing & Development</h4>
              <p className="text-gray-600 text-sm mb-3">A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
              <a href="#" className="learn-more text-gray-400 hover:text-primary-teal transition-colors duration-300 border-b border-gray-300">Learn More</a>
            </div>
            <div className="service-card p-6 bg-white rounded-xl shadow-lg hover:translate-y-[-5px] transition-transform duration-300 text-center">
              <div className="service-icon bg-[rgba(38,166,154,0.1)] w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#26A69A" strokeWidth="2" className="w-7 h-7">
                  <path d="M12 2a10 10 0 0110 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-black mb-2">E-commerce Designing & Development</h4>
              <p className="text-gray-600 text-sm mb-3">Build a robust online store to showcase your products and reach customers globally with ease.</p>
              <a href="#" className="learn-more text-gray-400 hover:text-primary-teal transition-colors duration-300 border-b border-gray-300">Learn More</a>
            </div>
            <div className="service-card p-6 bg-white rounded-xl shadow-lg hover:translate-y-[-5px] transition-transform duration-300 text-center">
              <div className="service-icon bg-[rgba(38,166,154,0.1)] w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#26A69A" strokeWidth="2" className="w-7 h-7">
                  <path d="M9 5l-6 6 6 6m6-12l6 6-6 6"/>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-black mb-2">Mobile Application Development</h4>
              <p className="text-gray-600 text-sm mb-3">Transform your business idea into a powerful mobile app that reaches your customers anywhere.</p>
              <a href="#" className="learn-more text-gray-400 hover:text-primary-teal transition-colors duration-300 border-b border-gray-300">Learn More</a>
            </div>
            <div className="service-card p-6 bg-white rounded-xl shadow-lg hover:translate-y-[-5px] transition-transform duration-300 text-center">
              <div className="service-icon bg-[rgba(38,166,154,0.1)] w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#26A69A" strokeWidth="2" className="w-7 h-7">
                  <path d="M12 2v20M6 10l6-6 6 6M6 14l6 6 6-6"/>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-black mb-2">Software Development</h4>
              <p className="text-gray-600 text-sm mb-3">Custom software solutions tailored to streamline your business processes and improve efficiency.</p>
              <a href="#" className="learn-more text-gray-400 hover:text-primary-teal transition-colors duration-300 border-b border-gray-300">Learn More</a>
            </div>
            <div className="service-card p-6 bg-white rounded-xl shadow-lg hover:translate-y-[-5px] transition-transform duration-300 text-center">
              <div className="service-icon bg-[rgba(38,166,154,0.1)] w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#26A69A" strokeWidth="2" className="w-7 h-7">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-black mb-2">Digital Marketing</h4>
              <p className="text-gray-600 text-sm mb-3">Boost your online presence with our expert digital marketing strategies and tools.</p>
              <a href="#" className="learn-more text-gray-400 hover:text-primary-teal transition-colors duration-300 border-b border-gray-300">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section py-20 bg-gradient-to-b from-white to-light-teal relative z-40 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="products-header text-center mb-14">
            <h2 className="section-title text-3xl font-bold">Our Products</h2>
            <p className="section-subtitle text-gray-600 mt-3">Expert MERN Stack Development & Training Solutions</p>
          </div>
          <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            <div className="product-card bg-white rounded-xl overflow-hidden shadow-[0_10px_30px_var(--shadow-color)] transition-all duration-300 hover:translate-y-[-10px] hover:shadow-[0_15px_40px_var(--shadow-color)] relative z-40 fade-in-section">
              <div className="product-image relative overflow-hidden aspect-video">
                <div className="product-badge absolute top-5 right-5 bg-primary-teal text-white px-3 py-1 rounded-full text-sm font-medium z-10 animate-pulse">Featured</div>
                <img src="/assets/mern-development.jpg" alt="ERP System" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                <div className="product-overlay absolute top-0 left-0 w-full h-full bg-transparent-black flex justify-center items-center opacity-0 transition-opacity duration-300">
                  <button className="preview-btn bg-white text-primary-teal px-5 py-2 rounded-full font-medium transform translate-y-5 transition-all duration-300 hover:translate-y-0">View Details</button>
                </div>
              </div>
              <div className="product-content p-6">
                <h3 className="text-xl font-semibold text-black mb-3">ERP System</h3>
                <p className="text-gray-600 text-sm mb-4">Comprehensive Enterprise Resource Planning solution for streamlined business operations, inventory management, and resource optimization.</p>
                <div className="product-features flex flex-col gap-2 mb-5">
                  <span className="text-gray-700 flex items-center gap-2"><i className="fas fa-check-circle text-primary-teal"></i>Resource Management</span>
                  <span className="text-gray-700 flex items-center gap-2"><i className="fas fa-check-circle text-primary-teal"></i>Inventory Control</span>
                  <span className="text-gray-700 flex items-center gap-2"><i className="fas fa-check-circle text-primary-teal"></i>Business Analytics</span>
                </div>
                <div className="product-footer flex justify-between items-center">
                  <button className="product-btn border-2 border-primary-teal text-primary-teal px-4 py-2 rounded-full font-medium transition-all duration-300 hover:bg-primary-teal hover:text-white hover:translate-y-[-2px]">Learn More</button>
                </div>
              </div>
            </div>
            <div className="product-card bg-white rounded-xl overflow-hidden shadow-[0_10px_30px_var(--shadow-color)] transition-all duration-300 hover:translate-y-[-10px] hover:shadow-[0_15px_40px_var(--shadow-color)] relative z-40 fade-in-section">
              <div className="product-image relative overflow-hidden aspect-video">
                <div className="product-badge new absolute top-5 right-5 bg-accent-green text-white px-3 py-1 rounded-full text-sm font-medium z-10 animate-pulse">New</div>
                <img src="/assets/flickBooker.png" alt="Movie Ticket Booking" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                <div className="product-overlay absolute top-0 left-0 w-full h-full bg-transparent-black flex justify-center items-center opacity-0 transition-opacity duration-300">
                  <button className="preview-btn bg-white text-primary-teal px-5 py-2 rounded-full font-medium transform translate-y-5 transition-all duration-300 hover:translate-y-0">View Details</button>
                </div>
              </div>
              <div className="product-content p-6">
                <h3 className="text-xl font-semibold text-black mb-3">Movie Ticket Booking</h3>
                <p className="text-gray-600 text-sm mb-4">Advanced movie ticket booking platform with real-time seat selection, multiple theater support, and secure payment integration.</p>
                <div className="product-features flex flex-col gap-2 mb-5">
                  <span className="text-gray-700 flex items-center gap-2"><i className="fas fa-check-circle text-primary-teal"></i>Seat Selection</span>
                  <span className="text-gray-700 flex items-center gap-2"><i className="fas fa-check-circle text-primary-teal"></i>Multiple Theaters</span>
                  <span className="text-gray-700 flex items-center gap-2"><i className="fas fa-check-circle text-primary-teal"></i>Secure Payments</span>
                </div>
                <div className="product-footer flex justify-between items-center">
                  <button className="product-btn border-2 border-primary-teal text-primary-teal px-4 py-2 rounded-full font-medium transition-all duration-300 hover:bg-primary-teal hover:text-white hover:translate-y-[-2px]">Learn More</button>
                </div>
              </div>
            </div>
            <div className="product-card bg-white rounded-xl overflow-hidden shadow-[0_10px_30px_var(--shadow-color)] transition-all duration-300 hover:translate-y-[-10px] hover:shadow-[0_15px_40px_var(--shadow-color)] relative z-40 fade-in-section">
              <div className="product-image relative overflow-hidden aspect-video">
                <img src="/assets/consulting.jpg" alt="Ecommerce Application" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                <div className="product-overlay absolute top-0 left-0 w-full h-full bg-transparent-black flex justify-center items-center opacity-0 transition-opacity duration-300">
                  <button className="preview-btn bg-white text-primary-teal px-5 py-2 rounded-full font-medium transform translate-y-5 transition-all duration-300 hover:translate-y-0">View Details</button>
                </div>
              </div>
              <div className="product-content p-6">
                <h3 className="text-xl font-semibold text-black mb-3">Ecommerce Application</h3>
                <p className="text-gray-600 text-sm mb-4">Feature-rich ecommerce platform with product management, shopping cart, secure checkout, and order tracking capabilities.</p>
                <div className="product-features flex flex-col gap-2 mb-5">
                  <span className="text-gray-700 flex items-center gap-2"><i className="fas fa-check-circle text-primary-teal"></i>Product Management</span>
                  <span className="text-gray-700 flex items-center gap-2"><i className="fas fa-check-circle text-primary-teal"></i>Secure Checkout</span>
                  <span className="text-gray-700 flex items-center gap-2"><i className="fas fa-check-circle text-primary-teal"></i>Order Tracking</span>
                </div>
                <div className="product-footer flex justify-between items-center">
                  <button className="product-btn border-2 border-primary-teal text-primary-teal px-4 py-2 rounded-full font-medium transition-all duration-300 hover:bg-primary-teal hover:text-white hover:translate-y-[-2px]">Learn More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="view-more-container mt-14 p-10 bg-gradient-to-br from-light-teal to-transparent-white rounded-xl relative overflow-hidden animate-[gradientBG_20s_linear_infinite]">
            <div className="view-more-content text-center z-10">
              <h3 className="text-2xl font-semibold text-black mb-6">Looking for more products?</h3>
              <a href="/products.html">
                <button className="view-more-btn bg-primary-teal text-white px-7 py-3.5 rounded-xl font-medium flex items-center gap-3 hover:bg-hover-teal transition-all duration-300 hover:translate-y-[-3px] shadow-[0_4px_15px_rgba(38,166,154,0.2)] hover:shadow-[0_6px_20px_rgba(38,166,154,0.3)]">
                  View All Products
                  <i className="fas fa-arrow-right"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team-section bg-[#F5F5F5] py-20 relative z-40">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl font-bold text-center mb-10">Meet Our Team</h2>
          <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="team-member relative z-40">
              <div className="member-card bg-white p-5 rounded-xl shadow-[0_0_10px_var(--shadow-color)]">
                <img src="/assets/fasil.jpeg" alt="Team member" className="member-img w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <div className="member-details text-center">
                  <h3 className="text-lg font-semibold">Fasil M</h3>
                  <p className="text-gray-600">MD - Co-Founder</p>
                  <div className="social-icons flex justify-center gap-2 mt-2">
                    <a href="https://www.linkedin.com/in/fasil-m/" className="social-icon w-10 h-10 bg-transparent-white rounded-full flex items-center justify-center hover:bg-primary-teal transition-all duration-300 hover:transform hover:scale-110 hover:rotate-5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                    </a>
                    <a href="mailto:fasilm5171@gmail.com" className="social-icon w-10 h-10 bg-transparent-white rounded-full flex items-center justify-center hover:bg-primary-teal transition-all duration-300 hover:transform hover:scale-110 hover:rotate-5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-member relative z-40">
              <div className="member-card bg-white p-5 rounded-xl shadow-[0_0_10px_var(--shadow-color)]">
                <img src="/assets/henna.jpg" alt="Team member" className="member-img w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <div className="member-details text-center">
                  <h3 className="text-lg font-semibold">Henna Maria</h3>
                  <p className="text-gray-600">CTO - Co-Founder</p>
                  <div className="social-icons flex justify-center gap-2 mt-2">
                    <a href="#" className="social-icon w-10 h-10 bg-transparent-white rounded-full flex items-center justify-center hover:bg-primary-teal transition-all duration-300 hover:transform hover:scale-110 hover:rotate-5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                    </a>
                    <a href="#" className="social-icon w-10 h-10 bg-transparent-white rounded-full flex items-center justify-center hover:bg-primary-teal transition-all duration-300 hover:transform hover:scale-110 hover:rotate-5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-member relative z-40">
              <div className="member-card bg-white p-5 rounded-xl shadow-[0_0_10px_var(--shadow-color)]">
                <img src="/assets/vijay.jpg" alt="Team member" className="member-img w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <div className="member-details text-center">
                  <h3 className="text-lg font-semibold">Vijay Krishna</h3>
                  <p className="text-gray-600">CMO</p>
                  <div className="social-icons flex justify-center gap-2 mt-2">
                    <a href="#" className="social-icon w-10 h-10 bg-transparent-white rounded-full flex items-center justify-center hover:bg-primary-teal transition-all duration-300 hover:transform hover:scale-110 hover:rotate-5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                    </a>
                    <a href="#" className="social-icon w-10 h-10 bg-transparent-white rounded-full flex items-center justify-center hover:bg-primary-teal transition-all duration-300 hover:transform hover:scale-110 hover:rotate-5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-member relative z-40">
              <div className="member-card bg-white p-5 rounded-xl shadow-[0_0_10px_var(--shadow-color)]">
                <img src="/assets/akash.jpeg" alt="Team member" className="member-img w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <div className="member-details text-center">
                  <h3 className="text-lg font-semibold">Akash A</h3>
                  <p className="text-gray-600">Digital Marketing Specialist</p>
                  <div className="social-icons flex justify-center gap-2 mt-2">
                    <a href="#" className="social-icon w-10 h-10 bg-transparent-white rounded-full flex items-center justify-center hover:bg-primary-teal transition-all duration-300 hover:transform hover:scale-110 hover:rotate-5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                    </a>
                    <a href="mailto:akashashokan812@gmail.com" className="social-icon w-10 h-10 bg-transparent-white rounded-full flex items-center justify-center hover:bg-primary-teal transition-all duration-300 hover:transform hover:scale-110 hover:rotate-5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-member relative z-40">
              <div className="member-card bg-white p-5 rounded-xl shadow-[0_0_10px_var(--shadow-color)]">
                <img src="/assets/pranav.jpg" alt="Team member" className="member-img w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <div className="member-details text-center">
                  <h3 className="text-lg font-semibold">Pranav Kumar</h3>
                  <p className="text-gray-600">UI/UX Designer</p>
                  <div className="social-icons flex justify-center gap-2 mt-2">
                    <a href="#" className="social-icon w-10 h-10 bg-transparent-white rounded-full flex items-center justify-center hover:bg-primary-teal transition-all duration-300 hover:transform hover:scale-110 hover:rotate-5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                    </a>
                    <a href="#" className="social-icon w-10 h-10 bg-transparent-white rounded-full flex items-center justify-center hover:bg-primary-teal transition-all duration-300 hover:transform hover:scale-110 hover:rotate-5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="case-studies py-20 bg-[#FAFAFA] relative z-40">
        <div className="container mx-auto px-4">
          <div className="case-studies-header text-center mb-14">
            <h2 className="text-3xl font-medium text-black mb-1">Our recent</h2>
            <h3 className="text-3xl font-medium text-primary-teal">Case studies</h3>
          </div>
          <div className="case-studies-grid flex flex-col gap-7 max-w-5xl mx-auto">
            <div className="case-study-card flex bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_var(--shadow-color)] transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_6px_30px_var(--shadow-color)] bg-[#F0FFF7] relative z-40 fade-in-section">
              <div className="case-study-images flex justify-center items-center p-7">
                <div className="device-mockups flex justify-center items-center">
                  <img src="/assets/Case-study__image (1).png" alt="Login Screen" className="device-img h-60 object-contain filter drop-shadow-[0_4px_12px_var(--shadow-color)] transition-all duration-300 hover:translate-y-[-5px] hover:drop-shadow-[0_8px_20px_var(--shadow-color)]" />
                </div>
              </div>
              <div className="case-study-content p-10 flex flex-col justify-center">
                <h4 className="text-xl font-medium text-black mb-3">Website Design for SCFC Canada</h4>
                <p className="text-gray-600 text-sm mb-5">Built with a clean, a simple website reflecting the core values of the organization. Simple to use, highly functional, and a breeze to navigate. We focused on creating an intuitive user experience that showcases their services effectively.</p>
              </div>
            </div>
          </div>
          <div className="view-more-link text-right mt-7 pr-5">
            <a href="#" className="text-primary-teal font-medium text-sm transition-all duration-300 hover:text-hover-teal hover:translate-x-2">Read more case studies →</a>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="approach-section py-20 bg-gradient-to-br from-white to-light-teal relative z-40 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="approach-header text-center mb-14">
            <h2 className="section-title text-3xl font-bold">
              Our design and
              <span className="title-emphasis block mt-1 text-black font-medium">development approach</span>
            </h2>
          </div>
          <div className="approach-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 relative z-10">
            <div className="approach-card bg-white p-10 rounded-xl shadow-[0_10px_30px_var(--shadow-color)] transition-all duration-400 hover:translate-y-[-10px] hover:shadow-[0_15px_40px_var(--shadow-color)] relative overflow-hidden fade-in-section">
              <div className="approach-icon w-15 h-15 bg-[rgba(38,166,154,0.1)] rounded-xl flex items-center justify-center mb-6 transition-all duration-400 hover:bg-primary-teal hover:rotate-10">
                <i className="fas fa-lightbulb text-2xl text-primary-teal transition-all duration-400 hover:text-white hover:scale-110"></i>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4 transition-all duration-300 hover:text-primary-teal">Discovery & Planning</h3>
              <p className="text-gray-600 text-sm mb-6">We start by understanding your vision, requirements, and business goals to create a comprehensive development strategy.</p>
              <div className="approach-steps flex items-center mt-auto">
                <span className="text-3xl font-bold text-light-teal transition-all duration-300 hover:text-hover-teal">01</span>
                <div className="step-line flex-1 h-0.5 bg-[rgba(38,166,154,0.1)] ml-3.5 relative overflow-hidden">
                  <div className="absolute top-0 left-[-100%] w-full h-full bg-primary-teal transition-transform duration-400 hover:transform translate-x-full"></div>
                </div>
              </div>
            </div>
            <div className="approach-card bg-white p-10 rounded-xl shadow-[0_10px_30px_var(--shadow-color)] transition-all duration-400 hover:translate-y-[-10px] hover:shadow-[0_15px_40px_var(--shadow-color)] relative overflow-hidden fade-in-section">
              <div className="approach-icon w-15 h-15 bg-[rgba(38,166,154,0.1)] rounded-xl flex items-center justify-center mb-6 transition-all duration-400 hover:bg-primary-teal hover:rotate-10">
                <i className="fas fa-pencil-ruler text-2xl text-primary-teal transition-all duration-400 hover:text-white hover:scale-110"></i>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4 transition-all duration-300 hover:text-primary-teal">Design & Prototyping</h3>
              <p className="text-gray-600 text-sm mb-6">Our designers create intuitive interfaces and engaging user experiences, with interactive prototypes for your feedback.</p>
              <div className="approach-steps flex items-center mt-auto">
                <span className="text-3xl font-bold text-light-teal transition-all duration-300 hover:text-hover-teal">02</span>
                <div className="step-line flex-1 h-0.5 bg-[rgba(38,166,154,0.1)] ml-3.5 relative overflow-hidden">
                  <div className="absolute top-0 left-[-100%] w-full h-full bg-primary-teal transition-transform duration-400 hover:transform translate-x-full"></div>
                </div>
              </div>
            </div>
            <div className="approach-card bg-white p-10 rounded-xl shadow-[0_10px_30px_var(--shadow-color)] transition-all duration-400 hover:translate-y-[-10px] hover:shadow-[0_15px_40px_var(--shadow-color)] relative overflow-hidden fade-in-section">
              <div className="approach-icon w-15 h-15 bg-[rgba(38,166,154,0.1)] rounded-xl flex items-center justify-center mb-6 transition-all duration-400 hover:bg-primary-teal hover:rotate-10">
                <i className="fas fa-code text-2xl text-primary-teal transition-all duration-400 hover:text-white hover:scale-110"></i>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4 transition-all duration-300 hover:text-primary-teal">Development & Testing</h3>
              <p className="text-gray-600 text-sm mb-6">We follow agile methodology, with regular testing and quality assurance throughout the development process.</p>
              <div className="approach-steps flex items-center mt-auto">
                <span className="text-3xl font-bold text-light-teal transition-all duration-300 hover:text-hover-teal">03</span>
                <div className="step-line flex-1 h-0.5 bg-[rgba(38,166,154,0.1)] ml-3.5 relative overflow-hidden">
                  <div className="absolute top-0 left-[-100%] w-full h-full bg-primary-teal transition-transform duration-400 hover:transform translate-x-full"></div>
                </div>
              </div>
            </div>
            <div className="approach-card bg-white p-10 rounded-xl shadow-[0_10px_30px_var(--shadow-color)] transition-all duration-400 hover:translate-y-[-10px] hover:shadow-[0_15px_40px_var(--shadow-color)] relative overflow-hidden fade-in-section">
              <div className="approach-icon w-15 h-15 bg-[rgba(38,166,154,0.1)] rounded-xl flex items-center justify-center mb-6 transition-all duration-400 hover:bg-primary-teal hover:rotate-10">
                <i className="fas fa-rocket text-2xl text-primary-teal transition-all duration-400 hover:text-white hover:scale-110"></i>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4 transition-all duration-300 hover:text-primary-teal">Deployment & Support</h3>
              <p className="text-gray-600 text-sm mb-6">After thorough testing, we deploy your solution and provide ongoing support and maintenance services.</p>
              <div className="approach-steps flex items-center mt-auto">
                <span className="text-3xl font-bold text-light-teal transition-all duration-300 hover:text-hover-teal">04</span>
                <div className="step-line flex-1 h-0.5 bg-[rgba(38,166,154,0.1)] ml-3.5 relative overflow-hidden">
                  <div className="absolute top-0 left-[-100%] w-full h-full bg-primary-teal transition-transform duration-400 hover:transform translate-x-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack-section py-20 bg-gradient-to-b from-white to-light-teal relative z-40 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="tech-stack-header text-center mb-14">
            <h2 className="section-title text-3xl font-bold">
              Our Technology <span className="title-emphasis block mt-1 text-black font-medium">Stack</span>
            </h2>
            <p className="tech-stack-subtitle text-gray-600 mt-3">Cutting-edge technologies we use to build powerful solutions</p>
          </div>
          <div className="tech-stack-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-7">
            <div className="tech-stack-card bg-white p-7 rounded-xl shadow-[0_10px_30px_var(--shadow-color)] transition-all duration-300 hover:translate-y-[-10px] hover:shadow-[0_15px_40px_var(--shadow-color)] relative fade-in-section">
              <div className="tech-stack-icon w-15 h-15 bg-[rgba(38,166,154,0.1)] rounded-xl flex items-center justify-center mx-auto mb-6 transition-all duration-400 hover:bg-primary-teal hover:rotate-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-5 text-center transition-all duration-300 hover:text-primary-teal">Frontend</h3>
              <div className="tech-stack-list flex flex-col gap-3.5">
                <div className="tech-item flex items-center gap-2.5 text-gray-600 transition-all duration-300 hover:translate-x-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>React.js</span>
                </div>
                <div className="tech-item flex items-center gap-2.5 text-gray-600 transition-all duration-300 hover:translate-x-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Next.js</span>
                </div>
                <div className="tech-item flex items-center gap-2.5 text-gray-600 transition-all duration-300 hover:translate-x-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>TypeScript</span>
                </div>
                <div className="tech-item flex items-center gap-2.5 text-gray-600 transition-all duration-300 hover:translate-x-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>React Native</span>
                </div>
                <div className="tech-item flex items-center gap-2.5 text-gray-600 transition-all duration-300 hover:translate-x-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Angular</span>
                </div>
              </div>
            </div>
            <div className="tech-stack-card bg-white p-7 rounded-xl shadow-[0_10px_30px_var(--shadow-color)] transition-all duration-300 hover:translate-y-[-10px] hover:shadow-[0_15px_40px_var(--shadow-color)] relative fade-in-section">
              <div className="tech-stack-icon w-15 h-15 bg-[rgba(38,166,154,0.1)] rounded-xl flex items-center justify-center mx-auto mb-6 transition-all duration-400 hover:bg-primary-teal hover:rotate-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-5 text-center transition-all duration-300 hover:text-primary-teal">Backend</h3>
              <div className="tech-stack-list flex flex-col gap-3.5">
                <div className="tech-item flex items-center gap-2.5 text-gray-600 transition-all duration-300 hover:translate-x-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Node.js</span>
                </div>
                <div className="tech-item flex items-center gap-2.5 text-gray-600 transition-all duration-300 hover:translate-x-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Express.js</span>
                </div>
                <div className="tech-item flex items-center gap-2.5 text-gray-600 transition-all duration-300 hover:translate-x-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Firebase</span>
                </div>
                <div className="tech-item flex items-center gap-2.5 text-gray-600 transition-all duration-300 hover:translate-x-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Python</span>
                </div>
                <div className="tech-item flex items-center gap-2.5 text-gray-600 transition-all duration-300 hover:translate-x-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Supabase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-us py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="row flex flex-col md:flex-row justify-around gap-8">
            <div className="col-md-6 col-lg-4">
              <h2 className="text-2xl mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-4">Have a question or want to learn more about our products and services?</p>
              <ul className="list-none p-0 m-0">
                <li className="mb-2 flex items-center"><i className="fa fa-envelope mr-2 text-primary-teal"></i><a href="mailto:zephyrixtech@gmail.com" className="text-blue-700">zephyrixtech@gmail.com</a></li>
                <li className="mb-2 flex items-center"><i className="fa fa-phone mr-2 text-primary-teal"></i><a href="tel:+917306165171" className="text-blue-700">+91 7306165171</a></li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 contact-second">
              <h2 className="text-2xl mb-4">Send Us a Message</h2>
              <form className="mt-5">
                <div className="form-group mb-4">
                  <label htmlFor="name" className="block mb-2">Name:</label>
                  <input type="text" id="name" className="form-control w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="email" className="block mb-2">Email:</label>
                  <input type="email" id="email" className="form-control w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="message" className="block mb-2">Message:</label>
                  <textarea id="message" className="form-control w-full p-2 border border-gray-300 rounded h-24"></textarea>
                </div>
                <button type="submit" className="bg-primary-teal text-white px-5 py-2 rounded hover:bg-hover-teal transition-colors duration-300">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

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