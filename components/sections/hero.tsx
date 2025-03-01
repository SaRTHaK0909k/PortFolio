"use client";

import { Github, Linkedin, Mail, ChevronDown,FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onScrollClick: (sectionId: string) => void;
}

export function Hero({ onScrollClick }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative p-6">
      <div className="max-w-4xl w-full text-center space-y-6">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Sarthak Ganure
        </h1>
        <p className="text-2xl text-muted-foreground">
          Software Developer | Open Source Enthusiast
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com/SaRTHaK0909k" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://www.linkedin.com/in/sarthak-ganure-144ba6256/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="mailto:sarthakganure123@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
        <div className="pt-4">
          <Button 
            variant="default"
            className="gap-2"
            asChild
          >
            <a href="https://drive.google.com/file/d/1p0pXPEbNI2Amp26eNAjZ_UXHiEhO1GSf/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FileText className="h-4 w-4" />
              View Resume
            </a>
          </Button>
        </div>
        <Button
          variant="ghost"
          className="animate-bounce mt-12"
          onClick={() => onScrollClick("about")}
        >
          <ChevronDown className="h-8 w-8" />
        </Button>
      </div>
    </section>
  );
}