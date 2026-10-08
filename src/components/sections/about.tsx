"use client";

import { useLanguage } from "@/providers/language-provider";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  const { dict } = useLanguage();

  return (
    <section id="about" className="scroll-mt-20 py-24">
      <Container>
        <SectionHeading heading={dict.about.heading} />

        <div className="mx-auto max-w-3xl space-y-5">
          {dict.about.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed text-foreground/75">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          {dict.about.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border-color bg-surface px-4 py-6 text-center"
            >
              <p className="text-3xl font-extrabold text-accent">{stat.value}</p>
              <p className="mt-2 text-sm text-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
