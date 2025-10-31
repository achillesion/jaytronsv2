"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { FaBars, FaTimes } from "react-icons/fa";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <>
        <header className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1070px] px-4">
          <div className="flex justify-between items-center bg-background/70 backdrop-blur-md px-4 py-3 rounded-xl shadow-md">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <h1 className="text-foreground font-semibold text-lg tracking-wide">
                JAYTRONS
              </h1>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center font-medium gap-8 text-sm">
              <button className="text-foreground hover:text-primary transition-colors">
                Home
              </button>
              <button className="text-foreground hover:text-primary transition-colors">
                Portfolio
              </button>
              <button className="text-foreground hover:text-primary transition-colors">
                Services
              </button>
            </nav>

            {/* Let's Talk + Theme Toggle */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center justify-center gap-2 bg-[#378066] dark:bg-yellow-200 text-white dark:text-black rounded-lg px-4 py-2 cursor-pointer hover:opacity-90 transition">
                <span className="text-sm font-semibold">Let's Talk</span>
              </div>
              <div className="w-16 h-8 flex items-center rounded-full bg-[#378066] dark:bg-yellow-200 p-1 cursor-pointer">
                <div className="w-6 h-6 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 dark:bg-black"></div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-foreground text-2xl focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="absolute top-16 left-0 w-full bg-background/95 backdrop-blur-md rounded-xl shadow-lg py-4 flex flex-col items-center gap-4">
              <button className="text-foreground text-sm">Home</button>
              <button className="text-foreground text-sm">Portfolio</button>
              <button className="text-foreground text-sm">Services</button>
              <button className="bg-[#378066] dark:bg-yellow-200 text-white dark:text-black px-4 py-2 rounded-lg text-sm font-semibold">
                Let's Talk
              </button>
            </div>
          )}
        </header>

        {/* Page content with spacing below navbar */}
        <main className="pt-24">{children}</main>
      </>
    );
  }

  // When mounted: use actual Navbar component
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
    </>
  );
}
