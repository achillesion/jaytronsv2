import React from 'react'
import Link from 'next/link'
import LaptopCarousal from '@/components/LaptopCarousal'

const Hero = () => {
  return (
    <div className="bg-background text-foreground transition-colors duration-300 relative">
      <div className="z-10 text-center px-4 max-w-full m-auto  flex items-center flex-col justify-center relative isolate min-h-screen mt-40">
        <div className="inline-block mb-10 py-1 px-4 rounded-full  text-muted-foreground text-sm border border-border animate-fade-in">
          Available for New Opportunities
        </div>

        <h1 className="text-5xl md:text-[80px] font-regular mb-4 animate-slide-up relative z-10">
          <span className="text-foreground">Full-Stack </span>
          <span className="animated-gradient-text">Developer</span>
          <br />
          <span className="text-foreground">& </span>
          <span className="animated-gradient-text-2"> Content Creator</span>
        </h1>

        <p className="text-lg md:text-[18px] text-muted-foreground  animate-fade-in mt-5">
          I build performant web & mobile apps and create developer
          <br />content—practical tutorials, articles, and open-source.
        </p>

        <div className="flex flex-col mt-10 sm:flex-row gap-4 justify-center animate-slide-up">
          <div className="hidden md:flex items-center justify-center gap-2 bg-[#378066]  text-white 
             rounded-lg p-2 transition-all duration-300  cursor-pointer group hover:bg-[#2d6b55] w-[153px]">
            <Link
              href="https://wa.me/923215236350"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-regular gap-2"
            >
              View My Services
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center gap-2 border-2 border-[#378066]
             rounded-lg p-2 transition-all duration-300  cursor-pointer group  text-[#378066] w-[153px]">
            <Link
              href="https://wa.me/923215236350"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-regular gap-2"
            >
              Get in Touch
            </Link>
          </div>
        </div>
         {/* Laptop Carousel Section */}
      <div className='w-full max-w-7xl mx-auto px-4 py-16'>
        <LaptopCarousal />
      </div>

      </div>
   </div>
  )
}

export default Hero