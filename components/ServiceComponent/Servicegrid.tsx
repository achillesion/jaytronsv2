"use client";
import React from "react";
import ServiceCard from "./ServiceCard";
import { servicesData } from "./Servicedata";
const ServicesGrid = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {servicesData.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  );
};

export default ServicesGrid;
