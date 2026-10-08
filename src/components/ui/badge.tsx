import { cn } from "@/lib/utils";

export function Badge({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border-color bg-surface px-3 py-1 text-xs font-medium text-foreground/80",
        className,
      )}
    >
      {children}
    </span>
  );
}
