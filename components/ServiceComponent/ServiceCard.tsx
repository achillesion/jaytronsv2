"use client";
import React from "react";

interface ServiceCardProps {
  title: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  tags: string[];
  price: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  category,
  rating,
  reviews,
  description,
  tags,
  price,
  imageUrl,
}) => {
  return (
    <div className="border rounded-2xl bg-card text-card-foreground overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="text-sm text-muted-foreground">{category}</div>
        <h3 className="text-lg font-semibold mt-2">{title}</h3>
        <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
          ⭐ {rating} <span className="text-muted-foreground">({reviews})</span>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((t) => (
            <span
              key={t}
              className="text-xs border border-muted px-2 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Starting at <span className="font-semibold text-foreground">{price}</span>
          </div>
          <a
            href={`/services/${title.replace(/\s+/g, "-").toLowerCase()}`}
            className="text-sm font-medium text-primary hover:underline"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
