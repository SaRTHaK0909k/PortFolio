"use client";

import { useState } from "react";
import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/navbar";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <Hero onScrollClick={scrollToSection} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}