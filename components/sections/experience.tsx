"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/50">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold">Experience</h2>
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-xl">Software Development Intern</h3>
                <p className="text-muted-foreground">Goarts, New York (Remote)</p>
              </div>
              <Badge>March 2024 - May 2024</Badge>
            </div>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                Developed a robust real-time comment system using WebSockets, which enabled users to engage in live discussions, enhancing user interaction and overall experience on the platform.
              </li>
              <br />
              <li>
                Successfully reduced page load times by 50% through the implementation of optimized code and efficient resource management, significantly improving user satisfaction and retention rates.
              </li>
              <br />
              <li>
                Contributed to a 20% increase in user retention by analyzing user feedback and iteratively improving features based on data-driven insights, fostering a more engaging user environment.
              </li>
              <br />
            </ul>
            <div className="flex flex-wrap gap-2">
              {["Astro.js", "Supabase", "Azure", "Docker", "Node.js", "React.js"].map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
