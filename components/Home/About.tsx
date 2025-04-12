import React from 'react'
import about from '../../public/logo/startup.jpeg';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="bg-[var(--light-gray)] py-24">
      <div className="container mx-auto px-6">
        {/* Decorative element */}
        <div className="h-1 w-24 bg-[var(--primary-teal)] mx-auto mb-4 rounded-full"></div>
        
        <h2 className="text-4xl font-bold mb-12 text-center text-[var(--black)] relative">
          About <span className="text-[var(--primary-teal)]">Zephyrix Tech</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Content section */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="p-6 rounded-lg border-l-4 border-[var(--primary-teal)] bg-white shadow-md">
              <p className="text-lg leading-relaxed text-[var(--gray)]">
                At <span className="font-semibold text-[var(--primary-teal)]">Zephyrix Tech</span>, we&apos;re passionate about building innovative products that make a difference. As a product-based company, we&apos;re dedicated to creating cutting-edge solutions that solve real-world problems. But that&apos;s not all - we&apos;re also committed to empowering the next generation of tech leaders through our MERN stack training programs.
              </p>
            </div>
            
            <div className="space-y-8">
              {/* Mission Section */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--primary-teal)] flex items-center justify-center text-white">
                    <i className="fa fa-flag"></i>
                  </div>
                  <h3 className="text-2xl font-bold ml-4 text-[var(--black)]">Our Mission</h3>
                </div>
                <p className="text-[var(--gray)] leading-relaxed pl-14">
                  Our mission is to harness the power of technology to drive positive change in the world. We believe that by combining innovative thinking with technical expertise, we can create solutions that make a real difference in people&apos;s lives.
                </p>
              </div>
              
              {/* Values Section */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--accent-green)] flex items-center justify-center text-white">
                    <i className="fa fa-heart"></i>
                  </div>
                  <h3 className="text-2xl font-bold ml-4 text-[var(--black)]">Our Values</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-14">
                  <div className="flex items-center p-3 rounded-lg bg-[var(--light-teal)] bg-opacity-30">
                    <div className="w-8 h-8 rounded-full bg-[var(--primary-teal)] flex items-center justify-center text-white">
                      <i className="fa fa-lightbulb"></i>
                    </div>
                    <span className="ml-3 font-medium text-[var(--black)]">Innovation</span>
                  </div>
                  
                  <div className="flex items-center p-3 rounded-lg bg-[var(--light-teal)] bg-opacity-30">
                    <div className="w-8 h-8 rounded-full bg-[var(--primary-teal)] flex items-center justify-center text-white">
                      <i className="fa fa-users"></i>
                    </div>
                    <span className="ml-3 font-medium text-[var(--black)]">Collaboration</span>
                  </div>
                  
                  <div className="flex items-center p-3 rounded-lg bg-[var(--light-teal)] bg-opacity-30">
                    <div className="w-8 h-8 rounded-full bg-[var(--primary-teal)] flex items-center justify-center text-white">
                      <i className="fa fa-graduation-cap"></i>
                    </div>
                    <span className="ml-3 font-medium text-[var(--black)]">Empowerment</span>
                  </div>
                  
                  <div className="flex items-center p-3 rounded-lg bg-[var(--light-teal)] bg-opacity-30">
                    <div className="w-8 h-8 rounded-full bg-[var(--primary-teal)] flex items-center justify-center text-white">
                      <i className="fa fa-lock"></i>
                    </div>
                    <span className="ml-3 font-medium text-[var(--black)]">Integrity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image section */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="relative">
              {/* Decorative background element */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-[var(--primary-teal)] rounded-lg"></div>
              
              <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
                <Image 
                  src={about} 
                  alt="About Zephyrix Tech" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                  width={600}
                  height={450}
                />
              </div>
              
              {/* Stats or highlight */}
              <div className="absolute -bottom-8 -right-4 bg-white p-4 rounded-lg shadow-lg border-l-4 border-[var(--accent-green)] z-20">
                <p className="font-bold text-[var(--accent-green)]">Innovating Since 2022</p>
                <p className="text-sm text-[var(--gray)]">Trusted by industry leaders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About