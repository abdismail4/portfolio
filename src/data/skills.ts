import type { LocalizedText } from "@/types/project";

export interface SkillCategory {
  id: string;
  title: LocalizedText;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "mobile",
    title: { ar: "تطوير تطبيقات الموبايل", en: "Mobile Development" },
    skills: [
      "Flutter",
      "Dart",
      "GetX",
      "Bloc / Cubit",
      "Riverpod",
      "Hive",
      "Dio",
      "Socket.IO Client",
    ],
  },
  {
    id: "web",
    title: { ar: "تطوير الويب", en: "Web Development" },
    skills: [
      "Next.js",
      "TypeScript",
      "React",
      "Prisma",
      "Zod",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Vanilla JavaScript",
    ],
  },
  {
    id: "backend",
    title: { ar: "الباك إند وواجهات البرمجة", en: "Backend & APIs" },
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "SQLite",
      "Redis",
      "Socket.IO",
      "JWT Auth",
      "REST APIs",
      "Swagger / OpenAPI",
    ],
  },
  {
    id: "cloud",
    title: { ar: "السحابة والبنية التحتية", en: "Cloud & Infrastructure" },
    skills: [
      "Railway",
      "Docker",
      "Cloudinary",
      "Firebase",
      "Backblaze B2",
      "Bunny CDN",
    ],
  },
  {
    id: "tools",
    title: { ar: "الأدوات والممارسات", en: "Tools & Practices" },
    skills: [
      "Git",
      "Postman",
      "Winston Logging",
      "Joi Validation",
      "Layered Architecture",
      "Testing (Jest, Flutter Test)",
    ],
  },
];
