
import { About } from "@/components/sections/About";
import { EngineeringProcess } from "@/components/sections/EngineeringProcess";
import { Experience } from "@/components/sections/Experience";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { CurrentlyBuilding } from "@/components/sections/CurrentlyBuilding";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <EngineeringProcess />
      <Skills />
      <FeaturedProjects />
      <CurrentlyBuilding />
    </main>
  );
}
