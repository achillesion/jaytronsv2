"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

import { FaArrowRight } from "react-icons/fa";

const LaptopCarousal = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const images = [
    {
      id: 1,
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/8d0ec8195128753.66081f88aeb46.jpg",
      alt: "Project 1",
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with advanced features",
      technologies: "React, Node.js, MongoDB",
      link: "https://example.com/ecommerce-platform",
    },
    {
      id: 2,
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/be2fb9198116587.663bb5bf270db.jpg",
      alt: "Project 2",
      title: "Dashboard Design",
      description: "Analytics dashboard with real-time data visualization",
      technologies: "Vue.js, D3.js, Express",
      link: "https://example.com/dashboard-design",
    },
    {
      id: 3,
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/47e4f3101376559.5f1daa81bcff9.png",
      alt: "Project 3",
      title: "Analytics Interface",
      description: "Comprehensive analytics platform for business insights",
      technologies: "Angular, Python, PostgreSQL",
      link: "https://example.com/analytics-interface",
    },
    {
      id: 4,
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/fed65a104152447.5f5f24e0050c0.png",
      alt: "Project 4",
      title: "Mobile App Design",
      description: "Cross-platform mobile application with native performance",
      technologies: "React Native, Firebase, Redux",
      link: "https://example.com/mobile-app-design",
    },
    {
      id: 5,
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/5635f9180102375.6504ac013ce15.png",
      alt: "Project 5",
      title: "Portfolio Website",
      description: "Personal portfolio showcasing creative work and skills",
      technologies: "Next.js, Tailwind CSS, Framer Motion",
      link: "https://example.com/portfolio-website",
    },
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (!isPaused) {
      timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 5000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPaused, images.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
      {/* Carousel Container */}
      <div
        className="relative mx-auto rounded-xl overflow-hidden border border-border bg-transparent shadow-md"
        style={{ maxWidth: "1200px", height: "600px" }}
      >
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 rounded-full p-3 shadow-md hover:scale-110 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 rounded-full p-3 shadow-md hover:scale-110 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slides */}
        <div className="w-full h-full overflow-hidden relative">
          <div
            className="flex w-full h-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.77,0,0.175,1)]"
           style={{
    transform: `translateX(-${currentSlide * 100}%)`,
  }}
          >
            {images.map((image) => (
              <div key={image.id} className="relative flex-shrink-0 w-full h-full">

                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-4 sm:p-6">
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-2">
                    {image.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200 mb-4">
                    {image.description}
                  </p>

                  <div className="flex items-center gap-3">
                    <a
                      href={image.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-yellow-300 text-black px-3 py-2 rounded-md font-medium hover:bg-yellow-400 transition-all flex items-center gap-2 text-sm sm:text-base"
                    >
                      View Project
                      <FaArrowRight className="w-3 h-3" />
                    </a>

                    <button
                      onClick={() => setIsPaused(!isPaused)}
                      className="p-2 bg-black/40 rounded-full hover:bg-black/60 transition-all"
                    >
                      {isPaused ? (
                        <Play className="w-4 h-4 text-white" />
                      ) : (
                        <Pause className="w-4 h-4 text-white" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Slide Counter */}
                <div className="absolute top-3 right-3 bg-black/50 text-white text-xs sm:text-sm px-2 py-1 rounded-full">
                  {currentSlide + 1} / {images.length}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopCarousal;
