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
              Security framework for school pick-ups using facial recognition and license plate scanning
            </p>
            <div className="flex flex-wrap gap-2">
              {["React.js", "YoloV8", "FastAPI", "OpenCV"].map((tech) => (
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
              Enhanced shopping experience generating precise lists of intermediate goods
            </p>
            <div className="flex flex-wrap gap-2">
              {["React Native", "Node.js", "TypeScript", "Gemini API"].map((tech) => (
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