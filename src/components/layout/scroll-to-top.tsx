"use client";

import { useSyncExternalStore } from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/providers/language-provider";
import { cn } from "@/lib/utils";

const SHOW_THRESHOLD = 480;

function subscribe(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

function getSnapshot() {
  return window.scrollY > SHOW_THRESHOLD;
}

function getServerSnapshot() {
  return false;
}

export function ScrollToTop() {
  const visible = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const { locale } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={locale === "ar" ? "العودة إلى الأعلى" : "Back to top"}
      className={cn(
        "fixed bottom-6 end-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-border-color bg-surface text-foreground/70 shadow-lg backdrop-blur transition-all duration-300 hover:bg-accent hover:text-white",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
