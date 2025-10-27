import About from "@/sections/Aboutme";
import CompletedProjects from "@/sections/CompletedProjects";
import Expertise from "@/sections/Expertise";
import Hero from "@/sections/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
     <div className=" ">
      <Hero />
      <CompletedProjects />
      <About />
      <Expertise />
     </div>
    </div>
  );
}
