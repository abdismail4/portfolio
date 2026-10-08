"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useLanguage } from "@/providers/language-provider";
import { siteConfig } from "@/config/site-config";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { locale, dict } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(60%_60%_at_50%_0%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent)]"
      />

      <Container className="grid items-center gap-14 md:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-start"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            {dict.hero.greeting}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {siteConfig.name[locale]}
          </h1>
          <p className="mt-3 text-xl font-semibold text-foreground/80 sm:text-2xl">
            {siteConfig.role[locale]}
          </p>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground/70 md:mx-0">
            {dict.hero.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <Button href="#portfolio">{dict.hero.ctaPortfolio}</Button>
            <Button href="#contact" variant="secondary">
              {dict.hero.ctaContact}
            </Button>
            <Button href={siteConfig.cv[locale]} variant="secondary" download>
              <Download className="h-4 w-4" />
              {dict.hero.ctaResume}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto"
        >
          <div className="relative mx-auto aspect-square w-56 overflow-hidden rounded-[2.5rem] border border-border-color bg-surface shadow-xl sm:w-72">
            <Image
              src={siteConfig.profileImage}
              alt={siteConfig.name[locale]}
              fill
              sizes="(min-width: 640px) 18rem, 14rem"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
