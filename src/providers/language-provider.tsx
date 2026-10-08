"use client";

import { createContext, useContext, useSyncExternalStore, type ReactNode } from "react";
import type { Dictionary, Locale } from "@/lib/i18n/types";
import { ar } from "@/lib/i18n/dictionaries/ar";
import { en } from "@/lib/i18n/dictionaries/en";

const dictionaries: Record<Locale, Dictionary> = { ar, en };

const STORAGE_KEY = "locale";

type Listener = () => void;
const listeners = new Set<Listener>();

function getSnapshot(): Locale {
  return window.localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "ar";
}

function getServerSnapshot(): Locale {
  return "ar";
}

function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function applyDocumentLocale(locale: Locale) {
  document.documentElement.lang = locale;
  document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
}

function setStoredLocale(locale: Locale) {
  window.localStorage.setItem(STORAGE_KEY, locale);
  applyDocumentLocale(locale);
  listeners.forEach((listener) => listener());
}

interface LanguageContextValue {
  locale: Locale;
  dict: Dictionary;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <LanguageContext.Provider value={{ locale, dict: dictionaries[locale], setLocale: setStoredLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
