"use client";

import { Code2, BookOpen, Blocks, Cpu } from "lucide-react";
import { SkillCategory } from "./skill-category";

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="h-5 w-5" />,
      skills: ["C++", "Go", "C", "Java", "Python", "SQL", "JavaScript"]
    },
    {
      title: "Academic Courses",
      icon: <BookOpen className="h-5 w-5" />,
      skills: [
        "Data Structures & Algorithms",
        "OOPS",
        "Operating Systems",
        "DBMS",
        "Discrete Mathematics",
        "Compiler Design",
        "Statistics",
        "Probability",
        "Computer Networks"
      ]
    },
    {
      title: "Development",
      icon: <Blocks className="h-5 w-5" />,
      skills: [
        "Python",
        "Prisma ORM",
        "Selenium",
        "Vercel AI SDK",
        "Flask",
        "Firebase",
        "ReactJS",
        "NextJS",
        "Node.js",
        "Express.js",
        "Strapi",
        "Redux",
        "DaisyUI",
        "NetlifyCMS",
        "SanityCMS",
        "MongoDB",
        "Redis",
        "Git",
        "Github",
        "RapidAPI",
        "REST APIs",
        "Google APIs",
        "Cloudinary",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "Bootstrap",
        "Supabase",
        "Google Cloud"
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        "TensorFlow",
        "Neon",
        "PyTorch",
        "Keras",
        "Selenium",
        "Flask",
        "Tailwind",
        "React",
        "Excel",
        "Git",
        "Kubernetes"
      ]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and academic background
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}