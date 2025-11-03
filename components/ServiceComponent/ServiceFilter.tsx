"use client";
import React from "react";
import { useServiceContext } from "./ServiceContext";

const categories = [
  "All Categories",
  "💻 Web Development",
  "📱 Mobile Development",
  "🎨 UI/UX Design",
  "💡 Tech Consulting",
  "🔧 Maintenance & Support",
];

const SearchAndFilter = () => {
  const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } = useServiceContext();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
      <input
        type="text"
        placeholder="Search services..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full md:w-1/2 p-3 border rounded-xl bg-background text-foreground border-muted focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <select
        className="w-full md:w-1/3 p-3 border rounded-xl bg-background text-foreground border-muted focus:outline-none focus:ring-2 focus:ring-primary"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchAndFilter;
