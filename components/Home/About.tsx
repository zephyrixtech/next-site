import React from 'react'

const About = () => {
  return (
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
  )
}

export default About
