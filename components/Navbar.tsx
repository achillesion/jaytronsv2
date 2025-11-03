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
import { usePathname, useRouter } from "next/navigation";
import { Calendar } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { PopupModal } from "react-calendly";

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
      href: "/services",
      badge: "03",
      dropdownItems: [
        { label: "React", href: "/services#react-development", icon: <FaReact className="text-white" /> },
        { label: "WordPress", href: "/services#wordpress-development", icon: <FaWordpress className="text-white" /> },
        { label: "UI UX", href: "/services#ui-ux-design", icon: <FaFigma className="text-white" /> },
        { label: "React Native", href: "/services#react-native-development", icon: <FaReact className="text-white" /> },
        { label: "Ecommerce Store", href: "/services#ecommerce-development", icon: <MdOutlineShoppingCart className="text-white" /> },
      ],
    },
  ],
  ctaText = "Schedule a meeting",
  calendlyLink = "https://calendly.com/achillesion/new-meeting",
  className = "",
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openCalendly, setOpenCalendly] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = async (href: string) => {
    // If href is an absolute route (starts with /), navigate normally
    if (href.startsWith("/")) {
      setIsMobileMenuOpen(false);
      await router.push(href);
      return;
    }

    // Otherwise treat it as an in-page section id
    if (pathname === "/" || pathname === "") {
      smoothScrollTo(href);
      setIsMobileMenuOpen(false);
      return;
    }

    // Not on homepage: navigate to homepage with hash then scroll after navigation
    await router.push(`/#${href}`);
    // Small delay to allow DOM to mount, then smooth scroll
    setTimeout(() => smoothScrollTo(href), 50);
    setIsMobileMenuOpen(false);
  };

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
          <h1 className="text-gray-700 dark:text-white font-bold text-lg transition-all duration-300 hover:scale-105 cursor-pointer">
            {brandName}
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center font-regular gap-10 text-sm">
          {navItems.map((item) =>
            item.dropdownItems ? (
              <div key={item.href} className="relative">
                {/* Services item: navigate to /services (page) */}
                <Link
                  href={item.href}
                  className="transition-all duration-300 hover:scale-105 flex items-center cursor-pointer text-gray-700 dark:text-white"
                >
                  <span>{item.label}</span>
                </Link>
              </div>
            ) : (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="transition-all duration-300 text-gray-700 dark:text-white cursor-pointer"
              >
                {item.label}
              </button>
            )
          )}
        </div>
        {/* Desktop CTA + Theme */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setOpenCalendly(true)}
            className="flex items-center justify-center gap-2 bg-[#378066] text-white rounded-lg py-2 px-4 text-sm transition-all duration-300 hover:bg-[#2d6b55]"
          >
            <Calendar className="w-4 h-4" />
            {ctaText}
          </button>

          <PopupModal
            url={calendlyLink}
            open={openCalendly}
            onModalClose={() => setOpenCalendly(false)}
            rootElement={document.body}
            pageSettings={{
              hideLandingPageDetails: true,
              backgroundColor: "ffffff",
              textColor: "000000",
              primaryColor: "378066",
            }}
          />
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            className="text-gray-700 dark:text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
  className={` border rounded-lg mx-auto  md:hidden fixed top-[72px] left-0 w-full border-t border-gray-300 dark:border-gray-700
    bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden z-40
    ${isMobileMenuOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"}
  `}
>
  <div
    className={`p-5 transition-transform duration-500 ${
      isMobileMenuOpen ? "translate-y-0" : "-translate-y-5"
    }`}
  >
    <div className="flex flex-col border w-full h-full  rounded rounded-lg mx-auto px-5 py-5 bg-black space-y-5">
      {navItems.map((item, index) => (
        <button
          key={index}
          onClick={() => handleNavClick(item.href)}
          className="text-gray-800 dark:text-gray-100 text-lg font-medium hover:text-emerald-600 dark:hover:text-yellow-300 transition-colors duration-300 text-left"
        >
          {item.label}
        </button>
      ))}

      {/* Theme Toggle in Mobile Menu */}

      {/* Mobile CTA with PopupModal */}
      <button
        onClick={() => setOpenCalendly(true)}
        className="flex items-center justify-center gap-2 bg-emerald-600 dark:bg-yellow-200 text-white dark:text-black rounded-lg py-3 font-semibold hover:bg-emerald-700 dark:hover:bg-yellow-300 transition-all"
      >
        <Calendar className="w-4 h-4" />
        {ctaText}
      </button>

      <div className="py-2 border-t border-gray-200 dark:border-gray-700">
        <ThemeToggle />
      </div>
      <PopupModal
        url={calendlyLink}
        open={openCalendly}
        onModalClose={() => setOpenCalendly(false)}
        rootElement={document.body}
        pageSettings={{
          hideLandingPageDetails: true,
          backgroundColor: "ffffff",
          textColor: "000000",
          primaryColor: "378066",
        }}
      />
    </div>
  </div>
</div>

    </div>
  );
}
