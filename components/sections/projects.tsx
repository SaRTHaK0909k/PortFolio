"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-xl">GuardianEase</h3>
              <Button variant="ghost" size="icon">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-muted-foreground">
            Built an AI-powered accessibility tool enabling 2.68 crore disabled Indians to navigate the web using
natural language, bypassing barriers from 97.4% of non-WCAG-compliant websites. Developed an AI-driven HTML
interaction pipeline and integrated Whisper, ElevenLabs, and Google AI for seamless voice-driven web operations.
            </p>
            <div className="flex flex-wrap gap-2">
                {["Next.js", "Google Gemini 2.0", "Node.js", "Selenium", "TypeScript", "Prisma", "Transformers.js", "Kinde"].map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
                ))}
            </div>
          </Card>
          <Card className="p-6 space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-xl">WalmartKit</h3>
              <Button variant="ghost" size="icon">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-muted-foreground">
              Developed an innovative software solution that enhances the Walmart shopping experience by generating precise lists of intermediate goods for any finished product in single prompt. This solution streamlines the shopping process, increases customer convenience, and improves overall satisfaction by providing users with tailored recommendations based on their shopping habits.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React Native", "Node.js", "TypeScript", "Gemini API", "Express.js", "Neon", "Redux"].map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
