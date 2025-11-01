"use client";
import React from "react";
import { useParams } from "next/navigation";
// import { servicesData } from "@/data/servicesData";
// import ServiceHeader from "@/components/ServiceHeader";
// import ServiceDescription from "@/components/ServiceDescription";
// import ServiceTags from "@/components/ServiceTags";
// import ServiceFAQs from "@/components/ServiceFAQs";
// import ServiceCTA from "@/components/ServiceCTA";
import {  servicesData } from "@/components/ServiceComponent/Servicedata";
import ServiceHeader from "@/components/ServiceSlugcomponent/Slugheader";
import ServiceDescription from "@/components/ServiceSlugcomponent/SlugDescription";
import ServiceTags from "@/components/ServiceSlugcomponent/ServiceTags";
import ServiceFAQs from "@/components/ServiceSlugcomponent/ServiceFaqs";
import ServiceCTA from "@/components/ServiceSlugcomponent/ServiceCta";
const ServiceDetailPage = () => {
  const params = useParams();
  const slug = params.slug;

  const service = servicesData.find(
    (s) => s.title.replace(/\s+/g, "-").toLowerCase() === slug
  );

  if (!service) return <div className="text-center py-20">Service not found</div>;

  return (
    <main className="min-h-screen px-6 md:px-12 py-16 bg-background text-foreground">
      <ServiceHeader
        title={service.title}
        category={service.category}
        rating={service.rating}
        reviews={service.reviews}
        price={service.price}
        imageUrl={service.imageUrl}
      />
      <ServiceDescription details={service.description} />
      <ServiceTags tags={service.tags} />
      <ServiceFAQs faqs={service.faqs} />
      <ServiceCTA />
    </main>
  );
};

export default ServiceDetailPage;
