"use client";

import { Check } from "lucide-react";
import { useLanguage } from "@/providers/language-provider";
import type { Project } from "@/types/project";
import { Badge } from "@/components/ui/badge";
import { IconHeroVisual } from "./icon-hero-visual";
import { TechBadge } from "./tech-badge";
import { ProjectLinks } from "./project-links";

export function FeaturedProjectCard({ project }: { project: Project }) {
  const { locale, dict } = useLanguage();

  return (
    <article className="rounded-3xl border border-border-color bg-surface p-6 sm:p-10">
      <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:items-start">
        <div className="flex flex-col items-center gap-4 text-center">
          <IconHeroVisual
            icon={project.icon}
            iconGlyph={project.iconGlyph}
            alt={project.name[locale]}
            accentColor={project.accentColor}
            accentColorSecondary={project.accentColorSecondary}
          />
          {project.note ? (
            <p className="text-xs font-medium text-foreground/50">{project.note[locale]}</p>
          ) : null}
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-bold text-foreground">{project.name[locale]}</h3>
            <Badge>{project.badge[locale]}</Badge>
          </div>
          <p className="mt-1 text-base font-medium text-foreground/60">{project.tagline[locale]}</p>
          <p className="mt-4 leading-relaxed text-foreground/75">{project.description[locale]}</p>

          {project.halves ? (
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.halves.map((half) => (
                <div key={half.role} className="rounded-xl border border-border-color bg-background p-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                    {half.role === "frontend" ? dict.portfolio.frontendLabel : dict.portfolio.backendLabel}
                  </span>
                  <p className="mt-1.5 text-sm text-foreground/70">{half.tagline[locale]}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {half.stack.map((tech) => (
                      <TechBadge key={tech}>{tech}</TechBadge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-6">
            <h4 className="text-sm font-semibold text-foreground">{dict.portfolio.featuresHeading}</h4>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature[locale]} className="flex items-start gap-2 text-sm text-foreground/70">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {feature[locale]}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <ProjectLinks project={project} />
          </div>
        </div>
      </div>
    </article>
  );
}
