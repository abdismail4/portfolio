export type Locale = "ar" | "en";

export interface Dictionary {
  meta: {
    description: string;
  };
  nav: {
    about: string;
    skills: string;
    portfolio: string;
    contact: string;
  };
  hero: {
    greeting: string;
    tagline: string;
    ctaPortfolio: string;
    ctaContact: string;
    ctaResume: string;
  };
  about: {
    heading: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
  };
  skills: {
    heading: string;
    subheading: string;
  };
  portfolio: {
    heading: string;
    subheading: string;
    viewCode: string;
    featuresHeading: string;
    techHeading: string;
    noRepoNote: string;
    frontendLabel: string;
    backendLabel: string;
  };
  contact: {
    heading: string;
    subheading: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
  common: {
    toggleTheme: string;
  };
}
