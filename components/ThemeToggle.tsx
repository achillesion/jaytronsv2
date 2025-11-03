"use client";
import React, { useState, useEffect } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = (e: React.MouseEvent<HTMLDivElement>) => {
    const circle = document.createElement("span");
    const diameter = Math.max(window.innerWidth, window.innerHeight) * 2;
    const rect = e.currentTarget.getBoundingClientRect();

    // Position at click
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - diameter / 2}px`;
    circle.style.top = `${e.clientY - rect.top - diameter / 2}px`;

    // Base class
    circle.classList.add("theme-ripple");

    // Color mode-based ripple
    circle.classList.add(theme === "light" ? "ripple-dark" : "ripple-light");

    document.body.appendChild(circle);

    setTimeout(() => {
      toggleTheme();
    }, 250);

    circle.addEventListener("animationend", () => {
      circle.remove();
    });
  };

  if (!mounted) return null;

  return (
    <div
      onClick={handleToggle}
      className="w-16 h-8 relative flex items-center rounded-full cursor-pointer p-1 transition-colors duration-300 overflow-hidden bg-gray-200 dark:bg-gray-700"
    >
      {/* Toggle knob */}
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 relative z-10 ${
          theme === "dark"
            ? "translate-x-8 bg-gray-800 scale-110"
            : "translate-x-0 bg-white scale-100"
        }`}
      >
        {theme === "dark" ? (
          <FaMoon className="text-white transition-transform duration-500" size={14} />
        ) : (
          <BsSunFill className="text-yellow-500 transition-transform duration-500" size={14} />
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
