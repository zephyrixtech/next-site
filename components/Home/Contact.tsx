import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      backgroundColor: "var(--hover-teal)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="py-24 bg-[var(--light-gray)]">
      <div className="container mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row justify-between gap-12 max-w-5xl mx-auto"
        >
          {/* Get in Touch Section */}
          <motion.div 
            variants={itemVariants}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl font-bold text-[var(--black)] mb-6">
              Get in <span className="text-[var(--primary-teal)]">Touch</span>
            </h2>
            <p className="text-[var(--gray)] mb-6 leading-relaxed">
              Have a question or want to learn more about our products and services?
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <i className="fa fa-envelope text-[var(--primary-teal)] text-lg"></i>
                <a 
                  href="mailto:zephyrixtech@gmail.com" 
                  className="text-[var(--primary-teal)] hover:text-[var(--hover-teal)] transition-colors duration-300"
                >
                  zephyrixtech@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa fa-phone text-[var(--primary-teal)] text-lg"></i>
                <a 
                  href="tel:+917306165171" 
                  className="text-[var(--primary-teal)] hover:text-[var(--hover-teal)] transition-colors duration-300"
                >
                  +91 7306165171
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div 
            variants={itemVariants}
            className="w-full md:w-1/2 bg-white p-8 rounded-xl shadow-[0_8px_24px_var(--shadow-color)] border border-[var(--light-teal)]"
          >
            <h2 className="text-3xl font-bold text-[var(--black)] mb-6">
              Send Us a <span className="text-[var(--primary-teal)]">Message</span>
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[var(--black)] mb-2 font-medium">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 border border-[var(--light-teal)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-teal)] transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[var(--black)] mb-2 font-medium">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 border border-[var(--light-teal)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-teal)] transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[var(--black)] mb-2 font-medium">
                  Message
                </label>
                <textarea 
                  id="message" 
                  className="w-full p-3 border border-[var(--light-teal)] rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--primary-teal)] transition-all duration-300"
                  placeholder="Your message here..."
                />
              </div>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                type="submit"
                className="w-full bg-[var(--primary-teal)] text-white px-6 py-3 rounded-lg font-medium shadow-md"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;