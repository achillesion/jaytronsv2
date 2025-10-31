"use client";
import React from "react";
import Link from "next/link";
import LaptopCarousal from "@/components/LaptopCarousal";

const Hero = () => {
  return (
    <section className="bg-background text-foreground transition-colors duration-300 relative w-full min-h-screen flex flex-col justify-between items-center overflow-hidden">
      {/* Content Wrapper */}
      <div className="z-10 text-center px-4 w-full flex flex-col justify-center items-center flex-1 py-16 sm:py-24 md:py-32">
        
        {/* Availability Badge */}
        <div className="inline-block mb-6 sm:mb-10 py-1 px-4 rounded-full text-muted-foreground text-sm border border-border animate-fade-in">
          Available for New Opportunities
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-[80px] font-regular mb-4 animate-slide-up relative z-10 leading-tight w-full break-words">
          <span className="text-foreground">Full-Stack </span>
          <span className="animated-gradient-text">Developer</span>
          <br />
          <span className="text-foreground">& </span>
          <span className="animated-gradient-text-2">Content Creator</span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-[18px] text-muted-foreground animate-fade-in mt-5 max-w-[90%] sm:max-w-lg leading-relaxed mx-auto">
          I build performant web & mobile apps and create developer
          <br className="hidden sm:block" />
          content—practical tutorials, articles, and open-source.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row mt-10 gap-4 justify-center animate-slide-up w-full sm:w-auto">
          <Link
            href="https://wa.me/923215236350"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#378066] text-white rounded-lg py-2 px-4 transition-all duration-300 hover:bg-[#2d6b55] w-full sm:w-[180px] text-sm"
          >
            View My Services
          </Link>

          <Link
            href="https://wa.me/923215236350"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-2 border-[#378066] text-[#378066] rounded-lg py-2 px-4 transition-all duration-300 hover:bg-[#378066] hover:text-white w-full sm:w-[180px] text-sm"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Laptop Carousel Section */}
      <div className="w-full px-4 pb-10 sm:pb-16">
        <LaptopCarousal />
      </div>
    </section>
  );
};

export default Hero;
