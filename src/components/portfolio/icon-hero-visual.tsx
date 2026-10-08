import Image from "next/image";
import type { ComponentType, SVGProps } from "react";

const containerSizes = {
  lg: "h-40 w-40",
  md: "h-28 w-28",
  sm: "h-20 w-20",
} as const;

const iconSizes = {
  lg: 96,
  md: 64,
  sm: 44,
} as const;

const glyphSizes = {
  lg: "h-14 w-14",
  md: "h-10 w-10",
  sm: "h-7 w-7",
} as const;

export function IconHeroVisual({
  icon,
  iconGlyph: IconGlyph,
  alt,
  accentColor,
  accentColorSecondary,
  size = "lg",
}: {
  icon: string;
  iconGlyph?: ComponentType<SVGProps<SVGSVGElement>>;
  alt: string;
  accentColor: string;
  accentColorSecondary?: string;
  size?: keyof typeof containerSizes;
}) {
  return (
    <div
      className={`mx-auto flex shrink-0 items-center justify-center rounded-3xl ${containerSizes[size]}`}
      style={{
        background: `linear-gradient(135deg, ${accentColor}29, ${(accentColorSecondary ?? accentColor)}0f)`,
      }}
    >
      {IconGlyph ? (
        <IconGlyph className={glyphSizes[size]} style={{ color: accentColor }} strokeWidth={1.75} />
      ) : (
        <Image
          src={icon}
          alt={alt}
          width={iconSizes[size]}
          height={iconSizes[size]}
          className="rounded-2xl object-contain drop-shadow-md"
        />
      )}
    </div>
  );
}
