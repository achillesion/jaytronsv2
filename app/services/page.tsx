"use client";
import SearchAndFilter from "@/components/ServiceComponent/ServiceFilter";
import ServicesGrid from "@/components/ServiceComponent/Servicegrid";
import ServicesHeader from "@/components/ServiceComponent/ServiceHeader";
import React from "react";
// import ServicesHeader from "@/components/ServicesHeader";
// import SearchAndFilter from "@/components/SearchAndFilter";
// import ServicesGrid from "@/components/ServicesGrid";

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 md:px-12 py-16">
      <ServicesHeader />
      <SearchAndFilter />
      <ServicesGrid />
    </main>
  );
};

export default ServicesPage;
