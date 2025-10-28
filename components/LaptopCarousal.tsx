"use client"
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { FaArrowRight } from 'react-icons/fa'

const LaptopCarousal = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Sample images - replace with your actual images
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      alt: "Project 1",
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with advanced features",
      technologies: "React, Node.js, MongoDB",
      link: "https://example.com/ecommerce-platform"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      alt: "Project 2",
      title: "Dashboard Design",
      description: "Analytics dashboard with real-time data visualization",
      technologies: "Vue.js, D3.js, Express",
      link: "https://example.com/dashboard-design"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      alt: "Project 3",
      title: "Analytics Interface",
      description: "Comprehensive analytics platform for business insights",
      technologies: "Angular, Python, PostgreSQL",
      link: "https://example.com/analytics-interface"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      alt: "Project 4",
      title: "Mobile App Design",
      description: "Cross-platform mobile application with native performance",
      technologies: "React Native, Firebase, Redux",
      link: "https://example.com/mobile-app-design"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      alt: "Project 5",
      title: "Portfolio Website",
      description: "Personal portfolio showcasing creative work and skills",
      technologies: "Next.js, Tailwind CSS, Framer Motion",
      link: "https://example.com/portfolio-website"
    }
  ]

  // Auto-slide functionality with pause on hover
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    const timer = isPaused ? null : setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 5000) // Increased to 5 seconds to better see the sliding

    return () => {
      if (timer) clearInterval(timer);
    }
  }, [images.length, isPaused])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="w-full max-w-6xl mx-auto ">
      {/* Laptop Frame */}
      <div 
        className="relative mx-auto" 
        style={{ width: '900px', height: '600px' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Laptop Base */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-8  rounded-b-lg shadow-lg"></div>
        
        {/* Laptop Screen */}
        <div className="relative w-full h-full bg-transparent border rounded-lg shadow-2xl overflow-hidden">
          {/* Screen Bezel */}
          <div className="absolute inset-2 bg-black rounded-md overflow-hidden">
            {/* Screen Content */}
            <div className="relative w-full h-full bg-gray-100 dark:bg-gray-900 ">
              {/* Navigation Arrows */}
              {/* <button
                onClick={prevSlide}
                className=" absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button> */}

              {/* Image Container */}
              <div className="relative w-full h-full overflow-hidden">
                <div 
                  className="laptop-carousel-slider h-full"
                  style={{ 
                    transform: `translateX(-${currentSlide * (100 / images.length)}%)`,
                    width: `${images.length * 100}%`
                  }}
                >
                  {images.map((image, index) => (
                    <div 
                      key={image.id} 
                      className="laptop-carousel-slide relative"
                      style={{ 
                        width: `${100 / images.length}%`
                      }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    <div className="absolute inset-0 left-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>
                      <div className="project-overlay ">
                        <h3 className="text-2xl font-bold mb-2 text-left text-on-hover">{image.title}</h3>
                        <p className="text-sm opacity-90 mb-2 text-left text-on-hover">{image.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3 text-on-hover">
                          {image.technologies.split(', ').map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-2 py-1 project-tech-tag rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      
                      </div>

                      {/* Hover Button */}
                      <div className="hover-button-overlay  flex items-center justify-center opacity-0 bg-black/20">
                      
                        <a
                          href={image.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#378066] dark:bg-yellow-200 text-white dark:text-black px-3 py-1 rounded-md font-semibold hover:bg-[#2d6b55] dark:hover:bg-yellow-300
                           transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-sm"
                        >
                          
                          View Project
                          <FaArrowRight className='w-3 h-3 rotate-320'/>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Laptop Hinge */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
      </div>

      {/* Project Counter */}
     
    </div>
  )
}

export default LaptopCarousal