"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function SocialLinks() {
  const socials = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/SaRTHaK0909k"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sarthak-ganure-144ba6256/"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      href: "mailto:sarthakganure123@gmail.com"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      href: "https://www.google.com/maps/place/Indian+Institute+of+Information+Technology,+Lucknow/@26.7983768,81.0214878,17z/data=!3m1!4b1!4m6!3m5!1s0x399be37eb0826741:0x34d9dd79cdeac7d8!8m2!3d26.7983768!4d81.0240627!16s%2Fm%2F0139yf7l?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
      text: "IIIT Lucknow, Uttar Pradesh, India"
    }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Connect With Me</h3>
      <div className="space-y-4">
        {socials.map((social) => (
          <div key={social.label} className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="shrink-0"
              asChild
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </a>
            </Button>
            <span className="text-muted-foreground">
              {social.text || social.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}