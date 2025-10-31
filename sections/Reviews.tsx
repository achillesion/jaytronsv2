"use client"
import ReviewCard from '@/components/ReviewCard'
import { DATA } from '@/data/resumee'
import React, { useEffect, useRef, useState } from 'react'
interface SectionProps {
  id?: string;
}
const Reviews = ({id}:SectionProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (carouselRef.current && !isPaused) {
        carouselRef.current.scrollLeft += 1;
        
        // Reset to beginning when reaching the end
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    }, 20);

    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  return (
    <div  id={id} className='m-auto flex items-center flex-col justify-start relative isolate min-h-screen mt-40'>
        <div className='flex flex-col items-center text-center'>
            <h1 className='text-[48px] font-semibold'>What Clients Say</h1>
            <p className='text-[16px] text-gray-400 max-w-[400px] mb-10'>Don't just take my word for it. Here's what my clients have to say about working with me.</p>
        </div>
        <div className="w-full max-w-[90vw] mx-auto overflow-hidden">
          <div 
            ref={carouselRef}
            className='flex overflow-x-auto w-full pb-8 gap-6 no-scrollbar'
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none', 
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch'
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
              {DATA.reviews.map((review) => (
                  <div key={review.id} className="flex-shrink-0">
                    <ReviewCard 
                        name={review.name}
                        avatar={review.avatar}
                        description={review.description}
                        platform={review.platform}
                        rating={review.rating}
                    />
                  </div>
              ))}
              {/* Duplicate the first few cards to create a seamless loop effect */}
              {DATA.reviews.slice(0, 3).map((review) => (
                  <div key={`duplicate-${review.id}`} className="flex-shrink-0">
                    <ReviewCard 
                        name={review.name}
                        avatar={review.avatar}
                        description={review.description}
                        platform={review.platform}
                        rating={review.rating}
                    />
                  </div>
              ))}
          </div>
        </div>
        
        <style jsx global>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
    </div>
  )
}

export default Reviews