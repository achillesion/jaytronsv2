"use client";
import React, { useState } from "react";

const categories = [
  "All Categories",
  "💻 Web Development",
  "📱 Mobile Development",
  "🎨 UI/UX Design",
  "💡 Tech Consulting",
  "🔧 Maintenance & Support",
];

const SearchAndFilter = () => {
  const [selected, setSelected] = useState("All Categories");

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
      <input
        type="text"
        placeholder="Search services..."
        className="w-full md:w-1/2 p-3 border rounded-xl bg-background text-foreground border-muted focus:outline-none"
      />
      <select
        className="w-full md:w-1/3 p-3 border rounded-xl bg-background text-foreground border-muted focus:outline-none"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {categories.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchAndFilter;
