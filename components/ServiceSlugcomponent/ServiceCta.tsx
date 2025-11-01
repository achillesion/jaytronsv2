"use client";
import React from "react";

const ServiceCTA = () => {
  const calendlyLink = "https://calendly.com/akifbutt935/30min"; // <-- replace with your Calendly link

  return (
    <div className="mt-6">
      <a
        href={calendlyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-medium"
      >
        Book a Session
      </a>
    </div>
  );
};

export default ServiceCTA;
