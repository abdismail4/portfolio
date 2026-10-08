import type { ComponentType, SVGProps } from "react";

export type ProjectTier = "flagship" | "standard" | "compact";

export interface LocalizedText {
  ar: string;
  en: string;
}

export interface ProjectLink {
  label: LocalizedText;
  url: string;
  kind: "repo" | "docs" | "live";
}

export interface ProjectImage {
  src: string;
  alt: LocalizedText;
  kind: "screenshot" | "illustration" | "icon";
}

export interface ProjectHalf {
  role: "frontend" | "backend";
  tagline: LocalizedText;
  stack: string[];
}

export interface Project {
  id: string;
  tier: ProjectTier;
  name: LocalizedText;
  badge: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  features: LocalizedText[];
  stack: string[];
  icon: string;
  /** Rendered instead of `icon` when there's no real logo/screenshot asset to show. */
  iconGlyph?: ComponentType<SVGProps<SVGSVGElement>>;
  accentColor: string;
  accentColorSecondary?: string;
  images: ProjectImage[];
  halves?: ProjectHalf[];
  links: ProjectLink[];
  note?: LocalizedText;
}
