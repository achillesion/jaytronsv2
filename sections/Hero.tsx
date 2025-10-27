import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-300">
      <div className="z-10 text-center px-4 max-w-full m-auto min-h-screen flex items-center flex-col justify-center">
        <div className="inline-block mb-2 py-1 px-4 rounded-full bg-gray-200 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 text-sm border border-gray-300 dark:border-gray-700">
          Available for New Opportunities
        </div>
        
        <h1 className="text-5xl md:text-7xl font-light mb-6">
          <span className="text-gray-800 dark:text-white">Full-Stack </span>
          <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-transparent bg-clip-text">Developer</span>
          <br />
          <span className="text-gray-800 dark:text-white">&</span>
          <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-transparent bg-clip-text"> Content Creator</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          I build performant web & mobile apps and create developer
          <br />content—practical tutorials, articles, and open-source.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services" className="px-4 py-1 bg-teal-600 dark:bg-yellow-400 text-white dark:text-black font-medium rounded-md hover:bg-teal-700 dark:hover:bg-yellow-500 transition-colors text-sm">
            View my Services
          </Link>
          <Link href="/contact" className="px-4 text-sm py-1 border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero