"use client";
import React, { createContext, useContext, useLayoutEffect, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // ✅ Initialize theme before paint (prevents flash)
  useLayoutEffect(() => {
    try {
      const savedTheme = localStorage.getItem("theme") as Theme;
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      const initialTheme =
        savedTheme || (prefersDark ? "dark" : "light");

      setTheme(initialTheme);
      document.documentElement.classList.toggle("dark", initialTheme === "dark");
    } catch {
      // fallback if localStorage not available
      document.documentElement.classList.remove("dark");
    }

    setMounted(true);
  }, []);

  // ✅ Apply transitions only after mount
  useEffect(() => {
    if (!mounted) return;

    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);

    // Apply transition only after the first render to avoid flash
    const root = document.documentElement;
    root.style.transition = "background-color 0.4s, color 0.4s";

  }, [theme, mounted]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
