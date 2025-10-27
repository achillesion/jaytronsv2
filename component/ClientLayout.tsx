"use client"
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <>
        <div className="fixed top-3 left-1/2 -translate-x-1/2 p-4 z-50 w-[1070px]">
          <div className="flex w-full justify-between items-center">
            <div className="flex items-center gap-10">
              <h1 className="text-foreground">JAYTRONS</h1>
            </div>
            <div className="hidden md:flex items-center font-regular gap-10 text-sm">
              <button className="text-foreground">Home</button>
              <button className="text-foreground">Portfolio</button>
              <button className="text-foreground">Services</button>
            </div>
            <div className="hidden md:flex items-center justify-center gap-2 bg-[#378066] dark:bg-yellow-200 text-white dark:text-black rounded-lg p-2 w-[127px]">
              <span className="text-sm font-semibold">Let's Talk</span>
            </div>
            <div className="w-16 h-8 flex items-center rounded-full bg-[#378066] dark:bg-yellow-200 p-1">
              <div className="w-6 h-6 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-yellow-500 dark:bg-black"></div>
              </div>
            </div>
          </div>
        </div>
        {children}
      </>
    )
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
