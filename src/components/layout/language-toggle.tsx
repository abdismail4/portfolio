"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/providers/language-provider";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();
  const nextLocale = locale === "ar" ? "en" : "ar";

  return (
    <button
      type="button"
      onClick={() => setLocale(nextLocale)}
      aria-label={locale === "ar" ? "Switch to English" : "التبديل إلى العربية"}
      className="flex h-9 items-center gap-1.5 rounded-full border border-border-color px-3 text-sm font-medium text-foreground/70 transition-colors hover:bg-surface hover:text-foreground"
    >
      <Languages className="h-4 w-4" />
      {locale === "ar" ? "EN" : "عربي"}
    </button>
  );
}
