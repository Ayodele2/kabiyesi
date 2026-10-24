import { About } from "@/components/sections/About";
import { EngineeringProcess } from "@/components/sections/EngineeringProcess";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <EngineeringProcess />
    </main>
  );
}