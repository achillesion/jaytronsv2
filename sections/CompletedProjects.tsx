import React from "react";

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "50+", label: "Happy Clients" },
  { value: "98%", label: "Success Rate" },
  { value: "100+", label: "Projects Completed" },
];

const CompletedProjects = () => {
  return (
    <section className="max-w-7xl mx-auto  flex flex-col items-center justify-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-20 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="text-[65px] font-regular text-foreground">{stat.value}</h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompletedProjects;
