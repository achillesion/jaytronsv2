"use client";
import React from "react";
import ServiceCard from "./ServiceCard";
import { servicesData } from "./Servicedata";
import { useServiceContext } from "./ServiceContext";

const ServicesGrid = () => {
  const { searchQuery, selectedCategory } = useServiceContext();

  const filteredServices = servicesData.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredServices.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  );
};

export default ServicesGrid;
