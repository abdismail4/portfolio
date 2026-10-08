import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "center",
}: {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "center" | "start";
}) {
  return (
    <div
      className={cn(
        "mb-12 max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-start",
      )}
    >
      {eyebrow ? (
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{heading}</h2>
      {subheading ? (
        <p className="mt-4 text-lg leading-relaxed text-foreground/70">{subheading}</p>
      ) : null}
    </div>
  );
}
