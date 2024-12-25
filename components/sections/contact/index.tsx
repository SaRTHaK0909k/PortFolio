"use client";

import { Card } from "@/components/ui/card";
import { ContactForm } from "./contact-form";
import { SocialLinks } from "./social-links";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <Card className="p-8">
          <div className="grid md:grid-cols-2 gap-12">
            <ContactForm />
            <SocialLinks />
          </div>
        </Card>
      </div>
    </section>
  );
}