"use client";

import { useLanguage } from "@/providers/language-provider";
import type { Project } from "@/types/project";
import { IconHeroVisual } from "./icon-hero-visual";
import { TechBadge } from "./tech-badge";
import { ProjectLinks } from "./project-links";

export function CompactProjectCard({ project }: { project: Project }) {
  const { locale } = useLanguage();

  return (
    <article className="flex items-start gap-4 rounded-2xl border border-border-color bg-surface p-5">
      <IconHeroVisual
        icon={project.icon}
        iconGlyph={project.iconGlyph}
        alt={project.name[locale]}
        accentColor={project.accentColor}
        accentColorSecondary={project.accentColorSecondary}
        size="sm"
      />

      <div className="flex-1">
        <h3 className="text-base font-bold text-foreground">{project.name[locale]}</h3>
        <p className="mt-0.5 text-sm text-foreground/60">{project.tagline[locale]}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>

        <div className="mt-3">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}
