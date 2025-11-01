"use client";
import React from "react";

interface Props {
  tags: string[];
}

const ServiceTags: React.FC<Props> = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-xs border border-muted px-2 py-1 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default ServiceTags;
