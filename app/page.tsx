import About from "@/sections/Aboutme";
import CompletedProjects from "@/sections/CompletedProjects";
import Expertise from "@/sections/Expertise";
import Hackathon from "@/sections/hackathon";
import Hero from "@/sections/Hero";
import Reviews from "@/sections/Reviews";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero id="hero" />
      <About id="about" />
      <Expertise id="portfolio" />
      <Hackathon id="work" />
      <Reviews id="reviews" />
    </div>
  );
}
