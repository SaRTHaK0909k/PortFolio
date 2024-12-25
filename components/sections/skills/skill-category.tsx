"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

export function SkillCategory({ title, skills, icon }: SkillCategoryProps) {
  return (
    <Card className="p-6 space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-primary/10">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge 
            key={skill} 
            variant="secondary"
            className="px-3 py-1 text-sm"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </Card>
  );
}