import React from 'react'

const Banner = ({title, description}: {title: string, description: string}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[var(--primary-teal)] to-[var(--accent-green)] text-white py-24 md:py-32 px-6 text-center">
    <div className="absolute top-[-50px] right-[-50px] w-48 h-48 md:w-64 md:h-64 bg-white opacity-10 rounded-full animate-float"></div>
    <div className="absolute bottom-[-30px] left-[-30px] w-36 h-36 md:w-48 md:h-48 bg-white opacity-10 rounded-full animate-float delay-1000"></div>
    
    <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
    <p className="text-xl opacity-90">{description}</p>
  </div>
  )
}

export default Banner
