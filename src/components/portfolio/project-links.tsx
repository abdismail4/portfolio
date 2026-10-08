"use client";

import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/providers/language-provider";
import type { Project } from "@/types/project";

export function ProjectLinks({ project }: { project: Project }) {
  const { locale, dict } = useLanguage();
  const repoLinks = project.links.filter((link) => link.kind === "repo");

  if (repoLinks.length === 0) {
    return <span className="text-sm italic text-foreground/45">{dict.portfolio.noRepoNote}</span>;
  }

  return (
    <div className="flex flex-wrap items-center gap-4">
      {repoLinks.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
        >
          {link.label[locale]}
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      ))}
    </div>
  );
}
