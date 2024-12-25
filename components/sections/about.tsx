"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Pre-final year student at Indian Institute of Information Technology
              Lucknow
            </p>
            <p className="text-lg text-muted-foreground">
              CGPA - 8.5 
            </p>
            <div className="space-y-2">
              
            </div>
          </div>
          <Card className="p-6 space-y-4">
            <h3 className="font-semibold">Latest Achievement</h3>
            <p>🏆 National Level - Smart India Hackathon 2024</p>
            <p className="text-sm text-muted-foreground">
              Developed WebWhisper, an AI-powered chatbot for the Department of Justice India
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}