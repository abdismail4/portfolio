"use client";

import { useLanguage } from "@/providers/language-provider";
import { skillCategories } from "@/data/skills";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const { locale, dict } = useLanguage();

  return (
    <section id="skills" className="scroll-mt-20 bg-surface/50 py-24">
      <Container>
        <SectionHeading heading={dict.skills.heading} subheading={dict.skills.subheading} />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl border border-border-color bg-background p-6"
            >
              <h3 className="mb-4 text-base font-semibold text-foreground">
                {category.title[locale]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
