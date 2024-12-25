"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Code, Users, Award, Star, Brain, Target, Rocket } from "lucide-react";

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
  const competitiveAchievements = [
    {
      title: "Codeforces Pupil",
      icon: <Trophy className="h-7 w-7" />,
      stats: "Max Rating: 1307",
      description: "Achieved Pupil rank through consistent performance in competitive programming contests"
    },
    {
      title: "Codechef 3 Star",
      icon: <Star className="h-7 w-7" />,
      stats: "Global Rank 23 in Div 4",
      description: "Secured impressive rankings in multiple competitive programming contests"
    },
    {
      title: "Problem Solving",
      icon: <Brain className="h-7 w-7" />,
      stats: "750+ Problems",
      description: "Solved hundreds of problems across CodeForces, LeetCode, GeeksforGeeks, and more"
    }
  ];

  const professionalAchievements = [
    {
      title: "Smart India Hackathon 2024",
      icon: <Target className="h-7 w-7" />,
      description: "Developed WebWhisper, an AI chatbot for Department of Justice India"
    },
    {
      title: "Flipkart Grid 6.0",
      icon: <Rocket className="h-7 w-7" />,
      description: "Successfully qualified Level 1 of the prestigious nationwide competition"
    },
    {
      title: "Google Cloud Certified",
      icon: <Award className="h-7 w-7" />,
      description: "Achieved Google Cloud Practitioner certification demonstrating cloud expertise"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of milestones from competitive programming to professional certifications
          </p>
        </div>

        <div className="space-y-16">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Code className="h-6 w-6" />
              <h3 className="text-2xl font-semibold">Competitive Programming</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {competitiveAchievements.map((achievement) => (
                <AchievementCard key={achievement.title} {...achievement} />
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6" />
              <h3 className="text-2xl font-semibold">Professional</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {professionalAchievements.map((achievement) => (
                <AchievementCard key={achievement.title} {...achievement} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}