"use client";

import { useLanguage } from "@/providers/language-provider";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeaturedProjectCard } from "@/components/portfolio/featured-project-card";
import { StandardProjectCard } from "@/components/portfolio/standard-project-card";
import { CompactProjectCard } from "@/components/portfolio/compact-project-card";

export function Portfolio() {
  const { dict } = useLanguage();

  const flagship = projects.filter((p) => p.tier === "flagship");
  const standard = projects.filter((p) => p.tier === "standard");
  const compact = projects.filter((p) => p.tier === "compact");

  return (
    <section id="portfolio" className="scroll-mt-20 py-24">
      <Container>
        <SectionHeading heading={dict.portfolio.heading} subheading={dict.portfolio.subheading} />

        <div className="space-y-6">
          {flagship.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {standard.map((project) => (
            <StandardProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {compact.map((project) => (
            <CompactProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
