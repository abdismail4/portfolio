"use client";

import { Check } from "lucide-react";
import { useLanguage } from "@/providers/language-provider";
import type { Project } from "@/types/project";
import { Badge } from "@/components/ui/badge";
import { IconHeroVisual } from "./icon-hero-visual";
import { TechBadge } from "./tech-badge";
import { ProjectLinks } from "./project-links";

export function StandardProjectCard({ project }: { project: Project }) {
  const { locale } = useLanguage();

  return (
    <article className="flex flex-col gap-5 rounded-2xl border border-border-color bg-surface p-6 sm:flex-row sm:items-start">
      <IconHeroVisual
        icon={project.icon}
        iconGlyph={project.iconGlyph}
        alt={project.name[locale]}
        accentColor={project.accentColor}
        accentColorSecondary={project.accentColorSecondary}
        size="md"
      />

      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2.5">
          <h3 className="text-xl font-bold text-foreground">{project.name[locale]}</h3>
          <Badge>{project.badge[locale]}</Badge>
        </div>
        <p className="mt-1 text-sm font-medium text-foreground/60">{project.tagline[locale]}</p>
        <p className="mt-3 text-sm leading-relaxed text-foreground/70">{project.description[locale]}</p>

        <ul className="mt-4 space-y-1.5">
          {project.features.slice(0, 3).map((feature) => (
            <li key={feature[locale]} className="flex items-start gap-2 text-sm text-foreground/70">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {feature[locale]}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <ProjectLinks project={project} />
          {project.note ? (
            <span className="text-xs text-foreground/45">· {project.note[locale]}</span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
