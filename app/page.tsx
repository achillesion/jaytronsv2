import About from "@/sections/Aboutme";
import CompletedProjects from "@/sections/CompletedProjects";
import Expertise from "@/sections/Expertise";
import Hackathon from "@/sections/hackathon";
import Hero from "@/sections/Hero";
import Reviews from "@/sections/Reviews";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
     <div className=" ">
      <Hero />
      <CompletedProjects />
      <About />
      <Expertise />
      <Hackathon />
      <Reviews />
     </div>
    </div>
  );
}
