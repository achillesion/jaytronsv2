"use client";
import SearchAndFilter from "@/components/ServiceComponent/ServiceFilter";
import ServicesGrid from "@/components/ServiceComponent/Servicegrid";
import ServicesHeader from "@/components/ServiceComponent/ServiceHeader";
import { ServiceProvider } from "@/components/ServiceComponent/ServiceContext";
import React from "react";

const ServicesPage = () => {
  return (
    <ServiceProvider>
      <main className="min-h-screen bg-background text-foreground px-6 md:px-12 py-16">
        <ServicesHeader />
        <SearchAndFilter />
        <ServicesGrid />
      </main>
    </ServiceProvider>
  );
};

export default ServicesPage;
