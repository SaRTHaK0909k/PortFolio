"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Reusable tiny components
function TechBadges({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <Badge key={t} variant="outline" className="rounded-full">
          {t}
        </Badge>
      ))}
    </div>
  );
}

function Bullet({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <li className="leading-relaxed">
      {title ? <span className="font-medium text-foreground">{title}: </span> : null}
      <span className="text-muted-foreground">{children}</span>
    </li>
  );
}

export function Experience() {
  const experiences = [
    {
      role: "SDE Intern – Accounting Business Unit (DCC Team)",
      company: "Flipkart",
      location: "Bangalore (Onsite)",
      period: "May 2025 – July 2025",
      stack: [
        "Nagios",
        "Zenduty",
        "GCP",
        "Azkaban",
        "Metabase",
        "Medallion",
        "Python",
        "Shell Scripting",
      ],
      bullets: [
        {
          title: "Cluster Monitoring",
          body:
            "Set up memory‑based alerts for Azkaban and Illuminati clusters. Configured Nagios + Zenduty to send warning (70%) and critical (80%) email alerts to on‑call engineers.",
        },
        {
          title: "Memory Optimization",
          body:
            "Applied log rotation to reduce memory usage across both clusters, improving job performance.",
        },
        {
          title: "Job Failure Alerting",
          body:
            "Added GCP alert for accounting-dcc-fstream-job-* failures to notify on-call via email.",
        },
        {
          title: "Auto‑Recovery Pipeline",
          body:
            "Automated recovery for failed jobs using checkpointing and seekback, enabling restoration of previous 3 hours of data.",
        },
        {
          title: "On‑Call Operations",
          body:
            "Resolved deployment issues in DB facts, fixed parameter errors in FDP test jobs, and managed access for Month‑End Closure UI (MEC).",
        },
        {
          title: "Reconciliation & Validation",
          body:
            "Onboarded Gamma, FKI, and EKL facts in Bolt Recon; validated data using Metabase and the Medallion Framework.",
        },
        {
          title: "Internal Tooling",
          body:
            "Onboarded 2 new databases into Flipkart’s internal diagnostic tool Detective Pikachu.",
        },
        {
          title: "Ledger Enhancement",
          body:
            "Added Buyer Fee to General Ledger (GL); tested using FDP test jobs and promoted changes to production.",
        },
      ],
    },
    {
      role: "Software Development Intern",
      company: "Goarts",
      location: "New York (Remote)",
      period: "March 2024 – May 2024",
      stack: ["Astro.js", "Supabase", "Microsoft Azure", "Docker", "Node.js", "React.js", "Custom APIs"],
      bullets: [
        {
          body:
            "Developed a real‑time comment system using WebSockets, enabling users to post and fetch comments linked to specific music items.",
        },
        {
          body:
            "Reduced page load times by ~50% through optimized code and efficient resource handling.",
        },
        {
          body:
            "Improved user retention by ~20% via comment history storage and integrated real‑time user tracking to enhance engagement.",
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/50">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold">Experience</h2>

        {experiences.map((job) => (
          <Card key={`${job.company}-${job.period}`} className="p-6">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-xl">{job.role}</h3>
                  <p className="text-muted-foreground">
                    {job.company}, {job.location}
                  </p>
                </div>
                <Badge className="self-start sm:self-auto">{job.period}</Badge>
              </div>

              <ul className="list-disc list-inside space-y-2">
                {job.bullets.map((b, i) => (
                  <Bullet key={i} title={(b as any).title}>{(b as any).body}</Bullet>
                ))}
              </ul>

              <TechBadges items={job.stack} />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
