"use client"
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { FaArrowRight } from 'react-icons/fa'

const LaptopCarousal = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Sample images - replace with your actual images
  const images = [
    {
      id: 1,
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/8d0ec8195128753.66081f88aeb46.jpg",
      alt: "Project 1",
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with advanced features",
      technologies: "React, Node.js, MongoDB",
      link: "https://example.com/ecommerce-platform"
    },
    {
      id: 2,
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/be2fb9198116587.663bb5bf270db.jpg",
      alt: "Project 2",
      title: "Dashboard Design",
      description: "Analytics dashboard with real-time data visualization",
      technologies: "Vue.js, D3.js, Express",
      link: "https://example.com/dashboard-design"
    },
    {
      id: 3,
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/47e4f3101376559.5f1daa81bcff9.png",
      alt: "Project 3",
      title: "Analytics Interface",
      description: "Comprehensive analytics platform for business insights",
      technologies: "Angular, Python, PostgreSQL",
      link: "https://example.com/analytics-interface"
    },
    {
      id: 4,
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/fed65a104152447.5f5f24e0050c0.png",
      alt: "Project 4",
      title: "Mobile App Design",
      description: "Cross-platform mobile application with native performance",
      technologies: "React Native, Firebase, Redux",
      link: "https://example.com/mobile-app-design"
    },
    {
      id: 5,
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/5635f9180102375.6504ac013ce15.png",
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
        className="relative mx-auto main-carousel"
        style={{ width: '900px', height: '550px' }}
      >
        {/* Laptop Base */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-8  rounded-b-lg"></div>




        {/* Laptop Screen */}
        <div className="relative w-full h-full bg-transparent border-t border-r border-l rounded-lg  overflow-hidden">
          {/* Screen Bezel */}
          <div className="absolute inset-2 bg-black rounded-md overflow-hidden">
            {/* Screen Content */}
            <div className="relative  w-full h-full bg-gray-100 dark:bg-gray-900 ">
              {/* Navigation Arrows */}

              <button
                onClick={prevSlide}
                className="stop-button absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/30   rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>

              <button
                onClick={nextSlide}
                className="stop-button absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>


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
                      className="laptop-carousel-slide relative hover:scale-100 cursor-pointer"
                      style={{
                        width: `${100 / images.length}%`
                      }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 left-0 bg-linear-to-t from-[#0a0a0a] via-black/70 to-transparent">
                        <div className="project-overlay ">
                          <h3 className="text-2xl font-bold mb-2 text-left text-on-hover bg-black w-fit p-3">{image.title}</h3>
                          <p className="text-sm opacity-90 mb-2 text-left text-on-hover bg-black w-fit p-3">{image.description}</p>


                        </div>
                      </div>
                      {/* Hover Button */}
                      <div className="hover-button-overlay  flex flex-row items-center justify-center opacity-0 gap-4 ">

                        <a
                          href={image.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-yellow-200 text-white dark:text-black px-3 py-2 rounded-md font-semibold hover:bg-[#2d6b55] dark:hover:bg-yellow-300
                           transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-sm"
                        >

                          View Project
                          <FaArrowRight className='w-3 h-3 rotate-320' />
                        </a>

                        <button
                          onClick={() => setIsPaused(!isPaused)}
                          className="stop-button p-3 bg-black/40 rounded-full"
                          aria-label="Previous slide"
                        >

                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {isPaused ? <Play className="w-4 h-4 text-gray-700 dark:text-gray-300" /> : <Pause className="w-4 h-4 text-gray-700 dark:text-gray-300" />}
                          </span>
                        </button>


                      </div>
                      {/* Project Counter */}
                      <div className="absolute top-4 left-10 px-2 py-1 text-on-hover rounded-full  transform -translate-x-1/2 text-white bg-black/30 text-sm font-medium">
                        {currentSlide + 1} / {images.length}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>


      </div>


    </div>
  )
}

export default LaptopCarousal