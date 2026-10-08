import type { Dictionary } from "../types";

export const en = {
  meta: {
    description:
      "Portfolio of a software engineer specializing in Flutter mobile apps, Next.js web apps, and Node.js backend systems — built end-to-end, from idea to production.",
  },
  nav: {
    about: "About",
    skills: "Skills",
    portfolio: "Portfolio",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm",
    tagline:
      "I build Flutter mobile apps, Next.js web apps, and Node.js backend systems — from idea to production.",
    ctaPortfolio: "View My Work",
    ctaContact: "Get in Touch",
    ctaResume: "Download CV",
  },
  about: {
    heading: "About Me",
    paragraphs: [
      "I'm a software engineer working across both ends of the stack: Flutter mobile apps with different state-management approaches (GetX, Bloc, Riverpod), full-stack web apps with Next.js and TypeScript, and Node.js backend systems built with Express and MongoDB, with real-time features via Socket.IO and caching via Redis.",
      "I've built nine projects spanning different domains: a Quran-memorization center management system, an educational platform with video lectures and live chat, an institutional performance-tracking system, a displaced-family aid management system, a point-of-sale system, and offline-first business apps. Four of these are full-stack systems — a client paired with a documented API server — built from the ground up, plus a marketing landing page for a real client.",
      "I care about writing organized, maintainable code with clear layered architecture, documenting APIs with Swagger, and delivering an authentic Arabic RTL user experience in every app I build.",
    ],
    stats: [
      { value: "9", label: "Completed Projects" },
      { value: "4", label: "Full-Stack Systems" },
      { value: "15+", label: "Technologies & Frameworks" },
      { value: "100%", label: "Authentic Arabic RTL UX" },
    ],
  },
  skills: {
    heading: "Technical Skills",
    subheading: "Tools and technologies actually used in the projects below — nothing theoretical.",
  },
  portfolio: {
    heading: "Portfolio",
    subheading:
      "Real projects built end-to-end — mobile apps and backend systems built to a production standard.",
    viewCode: "View Code",
    featuresHeading: "Key Features",
    techHeading: "Tech Stack",
    noRepoNote: "Private project — code available on request",
    frontendLabel: "Frontend",
    backendLabel: "Backend",
  },
  contact: {
    heading: "Have an Opportunity in Mind?",
    subheading:
      "I'm open to full-time roles, remote or on-site. Feel free to reach out.",
    emailLabel: "Email",
    phoneLabel: "Phone / WhatsApp",
    locationLabel: "Location",
  },
  footer: {
    rights: "All rights reserved",
    builtWith: "Designed & built with Next.js and Tailwind CSS",
  },
  common: {
    toggleTheme: "Toggle theme",
  },
} satisfies Dictionary;
