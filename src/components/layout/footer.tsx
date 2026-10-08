"use client";

import { Mail } from "lucide-react";
import { useLanguage } from "@/providers/language-provider";
import { siteConfig } from "@/config/site-config";
import { Container } from "@/components/ui/container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";

export function Footer() {
  const { locale, dict } = useLanguage();
  const year = new Date().getFullYear();

  const socials = [
    { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
    { href: siteConfig.socials.github, icon: GithubIcon, label: "GitHub" },
    { href: siteConfig.socials.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  ];

  return (
    <footer className="border-t border-border-color">
      <Container className="flex flex-col items-center gap-4 py-10 text-center sm:flex-row sm:justify-between sm:text-start">
        <p className="text-sm text-foreground/60">
          © {year} {siteConfig.name[locale]} — {dict.footer.rights}
        </p>

        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border-color text-foreground/60 transition-colors hover:bg-surface hover:text-foreground"
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="text-xs text-foreground/40">{dict.footer.builtWith}</p>
      </Container>
    </footer>
  );
}
