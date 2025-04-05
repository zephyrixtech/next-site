import React from 'react'

const Hero = () => {
  return (
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
  )
}

export default Hero
