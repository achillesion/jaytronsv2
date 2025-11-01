"use client";

import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import {
  FaReact,
  FaWordpress,
  FaFigma,
  FaMobile,
  FaBars,
  FaTimes,
  FaArrowLeft,
} from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { Calendar } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

// Smooth scroll function
const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default function Navbar({
  brandName = "JAYTRONS",
  navItems = [
    { label: "Home", href: "hero" },
    { label: "Portfolio", href: "portfolio", badge: "02" },
    { label: "About", href: "about" },
    { label: "Reviews", href: "reviews" },
    { label: "Faqs", href: "faqs" },

    {
      label: "Services",
      href: "services",
      badge: "03",
      dropdownItems: [
        { label: "React", href: "#react-development", icon: <FaReact className="text-white" /> },
        { label: "WordPress", href: "#wordpress-development", icon: <FaWordpress className="text-white" /> },
        { label: "UI UX", href: "#ui-ux-design", icon: <FaFigma className="text-white" /> },
        { label: "React Native", href: "#react-native-development", icon: <FaReact className="text-white" /> },
        { label: "Ecommerce Store", href: "#ecommerce-development", icon: <MdOutlineShoppingCart className="text-white" /> },
      ],
    },
  ],
  ctaText = "Schedule a meeting",
  calendlyLink = "https://calendly.com/akifbutt935/30min", // ✅ Your Calendly link
  className = "",
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full">
      <nav
        ref={dropdownRef}
        className={`fixed top-3 left-1/2 -translate-x-1/2 p-4 z-50 flex justify-between items-center transition-all duration-200 ease-in-out w-full max-w-[1070px] rounded-lg ${
          isScrolled
            ? "border border-gray-500 backdrop-blur-lg bg-black/20"
            : "border-none bg-transparent"
        } ${className}`}
        style={{ isolation: "isolate" }}
      >
        {/* Brand */}
        <div className="flex items-center gap-3">
          <h1 className="text-foreground font-bold text-lg transition-all duration-300 hover:scale-105 cursor-pointer">
            {brandName}
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center font-regular gap-10 text-sm">
          {navItems.map((item) =>
            item.dropdownItems ? (
              <div key={item.href} className="relative">
                <Link
                  href={item.href}
                  className="transition-all duration-300 hover:scale-105 flex items-center cursor-pointer text-foreground"
                >
                  <span>{item.label}</span>
                </Link>
              </div>
            ) : (
              <button
                key={item.href}
                onClick={() => smoothScrollTo(item.href)}
                className="transition-all duration-300 text-foreground cursor-pointer"
              >
                {item.label}
              </button>
            )
          )}
        </div>

        {/* Desktop CTA + Theme */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#378066] text-white rounded-lg py-2 px-4 text-sm transition-all duration-300 hover:bg-[#2d6b55]"
          >
            <Calendar className="w-4 h-4" />
            {ctaText}
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Toggle + Theme */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            className="text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-[72px] left-0 w-full bg-background/90 backdrop-blur-lg border-t border-border transition-all duration-300 ease-in-out overflow-hidden z-40 ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div
          className={`p-5 transition-transform duration-500 ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-5"
          }`}
        >
          <div className="flex flex-col space-y-5">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  smoothScrollTo(item.href);
                  setIsMobileMenuOpen(false);
                }}
                className="text-foreground text-lg font-medium hover:text-primary transition-colors duration-300 text-left"
              >
                {item.label}
              </button>
            ))}

            {/* Mobile CTA (Calendly) */}
            <a
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#378066] dark:bg-yellow-200 text-white dark:text-black rounded-lg py-3 font-semibold hover:bg-[#2d6b55] dark:hover:bg-yellow-300 transition-all"
            >
              <Calendar className="w-4 h-4" />
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
