"use client"

import React, { useEffect, useRef } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Icons } from "./icons"

interface JobCarouselProps {
  job: {
    company: string
    badges?: readonly string[]
    href?: string
    location: string
    title: string
    logoUrl: string
    start: string
    end: string
    description: string
    carouselImages?: string[]
    carouselTitles?: string[]
    carouselDescriptions?: string[]
  }
}

const JobCarousel = ({ job }: JobCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Default content
  const carouselImages = job.carouselImages || [
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
  ]

  const carouselTitles = job.carouselTitles || [
    "UI/UX Design",
    "Frontend Development",
    "Team Leadership"
  ]

  const carouselDescriptions = job.carouselDescriptions || [
    "Created wireframes and designed UI for 26+ modules with over 300 Figma screens",
    "Implemented responsive frontend using React and Next.js",
    "Managed and mentored design team for successful project delivery"
  ]

  // Auto scroll effect with pause on hover
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const speed = 0.5 // Adjust this for faster/slower scroll
    let animationId: number | null = null
    let isPaused = false

    const scroll = () => {
      if (!isPaused) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0
        } else {
          scrollContainer.scrollLeft += speed
        }
      }
      animationId = requestAnimationFrame(scroll)
    }

    // Start the animation
    animationId = requestAnimationFrame(scroll)

    // Add event listeners for mouse hover
    const handleMouseEnter = () => {
      isPaused = true
    }

    const handleMouseLeave = () => {
      isPaused = false
    }

    scrollContainer.addEventListener('mouseenter', handleMouseEnter)
    scrollContainer.addEventListener('mouseleave', handleMouseLeave)

    // Cleanup function
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter)
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Duplicate items for infinite looping illusion
  const doubledImages = [...carouselImages, ...carouselImages]
  const doubledTitles = [...carouselTitles, ...carouselTitles]
  const doubledDescriptions = [...carouselDescriptions, ...carouselDescriptions]

  return (
    <li className="relative ml-10 py-6">
      <div className="absolute -left-16 top-6 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border border-amber-300 size-14 m-auto shadow-md">
          <AvatarImage src={job.logoUrl} alt={job.company} className="object-contain bg-amber-400" />
          <AvatarFallback className="text-primary font-semibold bg-amber-400">
            {job.company[0]}
          </AvatarFallback>
        </Avatar>
      </div>

      <div className="flex flex-1 flex-col justify-start gap-3 p-5 rounded-lg border-l border-border/50 shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-foreground">{job.company}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{job.location}</span>
          </div>
        </div>

        {job.title && (
          <h4 className="text-base font-semibold text-foreground/90">{job.title}</h4>
        )}

        <time className="text-sm text-muted-foreground font-medium">
          {`${job.start} - ${job.end}`}
        </time>

        {/* Infinite Animated Carousel */}
        <div className="relative overflow-hidden w-full mt-4 mb-4">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-hidden whitespace-nowrap"
          >
            {doubledImages.map((image, index) => (
             <Link
             key={index}
             href={job.href || "#"}
             className="relative flex-shrink-0 w-72 rounded-xl overflow-hidden border border-border/40 hover:border-amber-400 transition-all duration-300"
             >
             <img
             src={image}
             alt={`${job.company} - ${doubledTitles[index]}`}
             className="w-full h-48 object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent hover:border-amber-400 "></div>
             <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
             <h5 className="font-bold">{doubledTitles[index]}</h5>
             <p className="text-xs opacity-80">{doubledDescriptions[index]}</p>
             </div>
             </Link>
            ))}
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {job.description}
        </p>

        {job.badges && job.badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {job.badges.map((badge, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-900/20 dark:text-amber-300 px-3 py-1 text-xs font-medium"
              >
                {badge}
              </Badge>
            ))}
          </div>
        )}

        {job.href && (
          <div className="flex flex-row flex-wrap items-start gap-2 mt-3">
            <Link href={job.href}>
              <Badge
                title="Company Website"
                className="flex gap-2 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-300 px-3 py-1"
              >
                <Icons.globe className="size-3" />
                Company Website
              </Badge>
            </Link>
          </div>
        )}
      </div>
    </li>
  )
}

export default JobCarousel
