"use client";

import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaReact, FaWordpress, FaFigma, FaMobile, FaBars, FaTimes, FaArrowLeft } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState, useEffect, useRef } from "react";

import { Calendar } from "lucide-react";

// Smooth scroll function
const smoothScrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};


export default function Navbar({
  brandName = "JAYTRONS",
  navItems = [
    { label: "Home", href: "hero" },
    { label: "Portfolio", href: "portfolio", badge: "02" },
    {
      label: "Services",
      href: "/services",
      badge: "03",
      dropdownItems: [
        { label: "React", href: "react-development", icon: <FaReact className="text-white" /> },
        { label: "WordPress", href: "wordpress-development", icon: <FaWordpress className="text-white" /> },
        { label: "UI UX", href: "ui-ux-design", icon: <FaFigma className="text-white" /> },
        { label: "React Native", href: "react-native-development", icon: <FaReact className="text-white" /> },
        { label: "Ecommerce Store", href: "ecommerce-development", icon: <MdOutlineShoppingCart className="text-white" /> }
      ]
    },

  ],
  ctaText = "Let's Talk",
  ctaHref = "/Whatsapp",
  className = ""
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <div className="relative ">
      <nav ref={dropdownRef} className={`fixed top-3 left-1/2 -translate-x-1/2 p-4 md:p-4 z-50 transition-all duration-200 ease-in-out ${isScrolled
          ? 'w-[870px] border border-gray-500 rounded-lg backdrop-blur-lg bg-black/20'
          : 'w-[1070px] border-0 rounded-none backdrop-blur-none bg-transparent'
        } ${className}`}>
        <div className="flex w-full justify-between items-center x-auto">
          <div className="flex items-center gap-10">
            <h1 className="transition-all duration-300 hover:scale-105 cursor-pointer text-white">{brandName}</h1>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center font-regular gap-10 text-sm">
            {navItems.map((item) => (
              item.dropdownItems ? (
                <div key={item.href} className="relative">

                  <Link
                    href={item.href}
                    className="relative transition-all duration-300 hover:scale-105 flex items-center cursor-pointer font-reguler text-white"
                  >
                    <span>{item.label}</span>
                  </Link>
                </div>
              ) : (
                <button
                  key={item.href}
                  onClick={() => {
                    smoothScrollTo(item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="relative transition-all duration-300  flex items-center text-white  font-reguler  cursor-pointer"
                >
                  <span>{item.label}</span>
                </button>
              )
            ))}
          </div>
          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center  justify-center gap-2 bg-[#066BDE] rounded-lg p-2 transition-all duration-300 hover:scale-105 cursor-pointer group w-[127px]">
            <Calendar className="w-4 h-4" />
            <a
              href="https://wa.me/923215236350"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-white font-semibold gap-2"
            >
              {ctaText}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 "
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed top-[72px] left-0 w-full bg-black/90 backdrop-blur-lg border-t
             border-gray-700 transition-all duration-300 ease-in-out overflow-hidden z-40 ${isMobileMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
            }`}
        >
          <div
            className={`p-5 transition-transform duration-500 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-5'
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
                  className="text-white text-lg font-medium hover:text-[#13AA02] transition-colors duration-300 text-left"
                >
                  {item.label}
                </button>
              ))}

              {/* CTA Button */}
              <a
                href="https://wa.me/923215236350"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#066BDE] rounded-lg py-3 text-white font-semibold hover:bg-[#005FCC] transition-all"
              >
                <Calendar className="w-4 h-4" />
                {ctaText}
              </a>
            </div>
          </div>
        </div>


      </nav>

    </div>

  );
}