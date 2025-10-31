import { techIcons } from '@/data/Icons'
import React from 'react'
interface SectionProps {
  id?: string;
}
const Expertise = ({ id }: SectionProps) => {
  return (
    <div  id={id} className='bg-forground w-full'>
      <div className='min-h-screen container mx-auto flex flex-col gap-20  mb-20'>
        <div className='w-full text-center font-medium mt-20'>
          <h1 className='text-[64px]'>Expertise Across</h1>
          <h1 className='text-[64px] animated-gradient-text-2'>Modern Technologies</h1>
          <h1 className='text-[64px]'>💻 & Frameworks</h1>
          <p className='text-lg md:text-[18px] text-muted-foreground  animate-fade-in mt-5 max-w-[400px] text-center m-auto'>Building scalable solutions with cutting-edge tools across web, mobile, AI, and cloud technologies</p>
        </div>

        <div className="relative w-full overflow-hidden  sm:mt-8 md:mt-10   max-w-7xl m-auto flex flex-col">
          {/* First row - scrolling left */}
          <div className="flex animate-scroll-left gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            {techIcons.map((IconComponent, index) => (
              <IconComponent key={`row1-${index}`} />
            ))}
            {techIcons.map((IconComponent, index) => (
              <IconComponent key={`row1-duplicate-${index}`} />
            ))}
          </div>

          {/* Second row - scrolling right */}
          <div className="flex animate-scroll-right gap-8 mt-20 mb-20 sm:gap-12 md:gap-16 lg:gap-20">
            {techIcons.map((IconComponent, index) => (
              <IconComponent key={`row2-${index}`} />
            ))}
            {techIcons.map((IconComponent, index) => (
              <IconComponent key={`row2-duplicate-${index}`} />
            ))}
          </div>

          {/* First row - scrolling left */}
          <div className="flex animate-scroll-left gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            {techIcons.map((IconComponent, index) => (
              <IconComponent key={`row1-${index}`} />
            ))}
            {techIcons.map((IconComponent, index) => (
              <IconComponent key={`row1-duplicate-${index}`} />
            ))}
          </div>

        </div>
      </div>
    </div>

  )
}

export default Expertise