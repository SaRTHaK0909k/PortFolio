"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Award, Star, Brain, Target, Rocket } from "lucide-react";
import React from "react";

interface AchievementCardProps {
  title: string;
  icon: React.ReactNode;
  stats?: string;
  description: string;
}

function AchievementCard({ title, icon, stats, description }: AchievementCardProps) {
  return (
    <Card className="p-8 group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
      <div className="flex items-start gap-6">
        <div className="p-4 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          {icon}
        </div>
        <div className="space-y-3 flex-1">
          <h3 className="font-semibold text-xl">{title}</h3>
          {stats && (
            <Badge variant="secondary" className="mb-2 text-base">
              {stats}
            </Badge>
          )}
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
}

export function Achievements() {
  const achievements = [
    // Hackathon Achievement
    {
      title: "Smart India Hackathon 2024",
      icon: <Target className="h-7 w-7" />,
      description: "Developed WebWhisper, an AI chatbot for the Department of Justice India.",
    },
    // Problem Solving Achievement
    {
      title: "Problem Solving",
      icon: <Brain className="h-7 w-7" />,
      stats: "1000+ Problems",
      description: "Solved hundreds of problems across LeetCode, Codeforces, GeeksforGeeks and more.",
    },
    // Mentor Achievement
    {
      title: "Mentor of Hackofiesta’24",
      icon: <Users className="h-7 w-7" />,
      description:
        "Mentored around 250 participants in the field of Web Development at Lucknow’s largest hackathon conducted by IIIT Lucknow.",
    },
    // E-CELL Leadership
    {
      title: "Developers Lead @ E-CELL IIIT Lucknow",
      icon: <Users className="h-7 w-7" />,
      description: "Led a team of 30 people in developing major web projects for E-CELL.",
    },
    // Competitive Achievements
    {
      title: "Expert @ Codeforces",
      icon: <Trophy className="h-7 w-7" />,
      stats: "Max Rating: 1620",
      description: "Reached Expert through consistent performance in rated contests and problem solving.",
    },
    {
      title: "4 Star @ CodeChef",
      icon: <Star className="h-7 w-7" />,
      stats: "Global Rank 23 in Div 4",
      description: "Secured impressive rankings in multiple competitive programming contests.",
    },
    // Certification Achievement
    {
      title: "Google Cloud Certified",
      icon: <Award className="h-7 w-7" />,
      description: "Achieved Google Cloud Practitioner certification demonstrating cloud expertise.",
    },
    // Flipkart GRID Achievement (updated text)
    {
      title: "Flipkart GRID 6.0",
      icon: <Rocket className="h-7 w-7" />,
      description:
        "Selected as one of the top 30 interns nationwide through Flipkart’s GRID hiring challenge, showcasing exceptional development, problem-solving, and DSA skills throughout GRID.",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of milestones from hackathons to competitive programming and professional certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.title} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
}
