"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/providers/language-provider";
import { siteConfig } from "@/config/site-config";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";

export function Contact() {
  const { locale, dict } = useLanguage();

  const infoItems = [
    { icon: Mail, label: dict.contact.emailLabel, value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: Phone, label: dict.contact.phoneLabel, value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
    { icon: MapPin, label: dict.contact.locationLabel, value: siteConfig.location[locale], href: undefined },
  ];

  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <Container>
        <SectionHeading heading={dict.contact.heading} subheading={dict.contact.subheading} />

        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
          {infoItems.map((item) => {
            const content = (
              <div className="flex h-full flex-col items-center gap-2 rounded-2xl border border-border-color bg-surface p-6 text-center transition-colors hover:bg-surface/70">
                <item.icon className="h-5 w-5 text-accent" />
                <span className="text-xs font-medium uppercase tracking-wide text-foreground/50">
                  {item.label}
                </span>
                <span className="text-sm font-semibold text-foreground" dir="ltr">
                  {item.value}
                </span>
              </div>
            );
            return item.href ? (
              <a key={item.label} href={item.href}>
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href={`mailto:${siteConfig.email}`}>
            <Mail className="h-4 w-4" />
            {dict.contact.emailLabel}
          </Button>
          <Button href={siteConfig.socials.github} variant="secondary" target="_blank" rel="noreferrer">
            <GithubIcon className="h-4 w-4" />
            GitHub
          </Button>
          <Button href={siteConfig.socials.linkedin} variant="secondary" target="_blank" rel="noreferrer">
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </Button>
        </div>
      </Container>
    </section>
  );
}
