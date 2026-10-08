import { Tent } from "lucide-react";
import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "al-noor",
    tier: "flagship",
    name: { ar: "النور", en: "Al-Noor" },
    badge: {
      ar: "مشروع متكامل · Flutter + Node.js",
      en: "Full-Stack · Flutter + Node.js",
    },
    tagline: {
      ar: "نظام إدارة حلقات تحفيظ القرآن الكريم",
      en: "Quran Memorization Center Management System",
    },
    description: {
      ar: "نظام متكامل لإدارة مراكز تحفيظ القرآن الكريم، يجمع بين تطبيق موبايل بـ Flutter وخادم API موثّق بـ Node.js. يغطي الهيكل الجغرافي للمركز، الحلقات، الحضور اليومي، التقييمات، والتواصل اللحظي بين المعلمين والطلاب.",
      en: "A complete management system for Quran memorization centers, pairing a Flutter mobile app with a documented Node.js API server. Covers the center's geographic structure, classes, daily attendance, evaluations, and real-time communication between teachers and students.",
    },
    features: [
      {
        ar: "إدارة هرمية جغرافية: مدن، مناطق، حلقات، ومعلمون",
        en: "Hierarchical geo structure: cities, regions, classes, and teachers",
      },
      {
        ar: "تتبع يومي للحفظ والحضور لكل طالب",
        en: "Daily memorization & attendance tracking per student",
      },
      {
        ar: "محادثة وإشعارات لحظية عبر Socket.IO",
        en: "Real-time chat and notifications via Socket.IO",
      },
      {
        ar: "لوحات إحصائيات وتقارير تفصيلية",
        en: "Statistics dashboards and detailed reports",
      },
      {
        ar: "خمسة أدوار صلاحيات: مدير عام، مشرف مدينة، مشرف منطقة، معلم، طالب",
        en: "Five permission roles: super admin, city supervisor, region supervisor, teacher, student",
      },
    ],
    stack: [
      "Flutter",
      "GetX",
      "Dio",
      "Hive",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Swagger",
    ],
    icon: "/images/projects/al-noor/icon.png",
    accentColor: "#2F5233",
    accentColorSecondary: "#C9A227",
    images: [
      {
        src: "/images/projects/al-noor/icon.png",
        alt: { ar: "أيقونة تطبيق النور", en: "Al-Noor app icon" },
        kind: "icon",
      },
    ],
    halves: [
      {
        role: "frontend",
        tagline: {
          ar: "تطبيق Flutter لإدارة حلقات تحفيظ القرآن — حضور، تقييمات، وتقارير لحظية",
          en: "Flutter app for managing Quran memorization circles — attendance, evaluations, and live reports",
        },
        stack: ["Flutter", "GetX", "Dio", "Hive", "Socket.IO Client", "fl_chart"],
      },
      {
        role: "backend",
        tagline: {
          ar: "REST API موثّق بالكامل عبر Swagger، بخمسة مستويات صلاحيات ومحادثة لحظية",
          en: "Fully Swagger-documented REST API with five permission roles and real-time chat",
        },
        stack: [
          "Node.js",
          "Express",
          "MongoDB",
          "Mongoose",
          "Socket.IO",
          "JWT",
          "Cloudinary",
          "Swagger",
        ],
      },
    ],
    links: [
      {
        label: { ar: "عرض الكود (الخادم)", en: "View Code (Backend)" },
        url: "https://github.com/ismailabdbarhoum-spec/CENTER",
        kind: "repo",
      },
    ],
    note: {
      ar: "الخادم منشور فعلياً على Railway",
      en: "Backend is live-deployed on Railway",
    },
  },
  {
    id: "massar",
    tier: "flagship",
    name: { ar: "مسار", en: "Massar" },
    badge: {
      ar: "مشروع متكامل · Flutter + Node.js",
      en: "Full-Stack · Flutter + Node.js",
    },
    tagline: {
      ar: "منصة تعليمية احترافية متكاملة",
      en: "A Professional End-to-End Educational Platform",
    },
    description: {
      ar: "منصة تعليمية (LMS) تجمع بين تطبيق Flutter وخادم Node.js متقدم، تدعم تسجيل الدورات، بث الفيديو، الدردشة اللحظية، الدفع الإلكتروني، ولوحات تحكم مخصصة للطلاب والمعلمين والإدارة.",
      en: "An LMS pairing a Flutter app with an advanced Node.js server — supporting course enrollment, video streaming, live chat, payments, and role-based dashboards for students, teachers, and admins.",
    },
    features: [
      {
        ar: "تسجيل والتحاق بالدورات مع تتبع التقدم",
        en: "Course enrollment with progress tracking",
      },
      {
        ar: "بث فيديو تعليمي عبر HLS وشبكة توصيل محتوى",
        en: "Educational video streaming via HLS and a CDN",
      },
      {
        ar: "دردشة لحظية بين الطلاب والمعلمين",
        en: "Real-time chat between students and teachers",
      },
      {
        ar: "جدولة أسبوعية ذكية بالاستعانة بالذكاء الاصطناعي",
        en: "AI-assisted weekly schedule generation",
      },
      {
        ar: "نظام دفع إلكتروني وإشعارات فورية",
        en: "Payment system and push notifications",
      },
    ],
    stack: [
      "Flutter",
      "flutter_bloc",
      "GetX",
      "Node.js",
      "Express 5",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "OpenAI API",
    ],
    icon: "/images/projects/massar/icon.png",
    accentColor: "#4F46E5",
    images: [
      {
        src: "/images/projects/massar/icon.png",
        alt: { ar: "أيقونة تطبيق مسار", en: "Massar app icon" },
        kind: "icon",
      },
      {
        src: "/images/projects/massar/illustration-admin.png",
        alt: { ar: "رسم توضيحي — لوحة المدير", en: "Illustration — admin dashboard" },
        kind: "illustration",
      },
      {
        src: "/images/projects/massar/illustration-student.png",
        alt: { ar: "رسم توضيحي — واجهة الطالب", en: "Illustration — student view" },
        kind: "illustration",
      },
      {
        src: "/images/projects/massar/illustration-teacher.png",
        alt: { ar: "رسم توضيحي — واجهة المعلم", en: "Illustration — teacher view" },
        kind: "illustration",
      },
    ],
    halves: [
      {
        role: "frontend",
        tagline: {
          ar: "تطبيق Flutter بأدوار متعددة: طالب، معلم، مدير",
          en: "Multi-role Flutter app: student, teacher, admin",
        },
        stack: [
          "Flutter",
          "flutter_bloc",
          "GetX",
          "Dio",
          "video_player",
          "Socket.IO Client",
          "Firebase Messaging",
        ],
      },
      {
        role: "backend",
        tagline: {
          ar: "خادم Express 5 مع بث فيديو HLS وذكاء اصطناعي لجدولة الحصص",
          en: "Express 5 server with HLS video streaming and AI-powered scheduling",
        },
        stack: [
          "Node.js",
          "Express 5",
          "MongoDB",
          "Redis",
          "Socket.IO",
          "OpenAI API",
          "Bunny CDN",
          "JWT",
        ],
      },
    ],
    links: [],
    note: {
      ar: "مشروع كامل وجاهز للنشر",
      en: "Fully built and deploy-ready",
    },
  },
  {
    id: "task",
    tier: "flagship",
    name: { ar: "نظام متابعة الأداء", en: "Performance Tracker" },
    badge: {
      ar: "مشروع متكامل · Node.js + JavaScript",
      en: "Full-Stack · Node.js + JavaScript",
    },
    tagline: {
      ar: "نظام مؤسسي لتتبع المهام وقياس أداء الأقسام",
      en: "Institutional Task Tracking & Department Performance System",
    },
    description: {
      ar: "نظام ويب لمتابعة المهام المؤسسية بمعزل عن مهام كل قسم، بحيث يمكن قياس نسبة الإنجاز والتأخر لكل قسم بشكل مستقل. يعمل بدورة شهرية: قوالب مهام تتكرر تلقائياً، تُسند للأقسام، تُتابع حالتها، ثم تُغلق وتُؤرشف مع نسخ احتياطي تلقائي.",
      en: "A web system for tracking institutional tasks separately from each department's own assignments, so completion rate and lateness can be measured per department. Runs on a monthly cycle: recurring task templates are generated, assigned to departments, tracked, then closed and archived with automatic backups.",
    },
    features: [
      {
        ar: "قوالب مهام متكررة تُنشأ تلقائياً كل شهر",
        en: "Recurring task templates auto-generated monthly",
      },
      {
        ar: "إغلاق وأرشفة الشهر مع نسخ احتياطي تلقائي",
        en: "Automated month-close, archiving, and backups",
      },
      {
        ar: "تقارير أداء للأقسام قابلة للتصدير كـ CSV",
        en: "Department performance reports, exportable as CSV",
      },
      {
        ar: "سجل تدقيق (Audit Log) وإشعارات داخل التطبيق",
        en: "Audit log and in-app notifications",
      },
      {
        ar: "اختبارات آلية حقيقية على منطق الحالة والأداء",
        en: "Real automated tests covering status & performance logic",
      },
    ],
    stack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Vanilla JavaScript",
      "Multer",
    ],
    icon: "/images/projects/task/icon.png",
    accentColor: "#14532D",
    accentColorSecondary: "#B8860B",
    images: [
      {
        src: "/images/projects/task/icon.png",
        alt: { ar: "شعار نظام متابعة الأداء", en: "Performance Tracker logo" },
        kind: "icon",
      },
    ],
    halves: [
      {
        role: "frontend",
        tagline: {
          ar: "واجهة HTML/CSS/JS خالصة، عربية بالكامل (RTL)، بدون أي إطار عمل",
          en: "Pure HTML/CSS/JS interface, fully Arabic (RTL), no framework",
        },
        stack: ["HTML5", "CSS3", "Tailwind CSS", "Vanilla JavaScript"],
      },
      {
        role: "backend",
        tagline: {
          ar: "خادم Express بجلسات آمنة، رفع مرفقات، واختبارات آلية",
          en: "Express server with secure sessions, attachment uploads, and automated tests",
        },
        stack: ["Node.js", "Express", "MongoDB", "Mongoose", "express-session", "Multer"],
      },
    ],
    links: [],
    note: {
      ar: "أُعيد بناؤه من تطبيق سطح مكتب (Electron) إلى تطبيق ويب",
      en: "Rebuilt from a desktop (Electron) app into a web app",
    },
  },
  {
    id: "mizan",
    tier: "standard",
    name: { ar: "ميزان", en: "Mizan" },
    badge: {
      ar: "تطبيق موبايل · يعمل دون إنترنت",
      en: "Mobile App · Fully Offline",
    },
    tagline: {
      ar: "إدارة المبيعات والديون والتحويلات — محلي بالكامل",
      en: "Sales, Debt & Transfer Management — Fully Offline",
    },
    description: {
      ar: "تطبيق Flutter لإدارة أعمال محل تجاري: مبيعات، ديون العملاء، وتحويلات مالية — يعمل بالكامل دون اتصال بالإنترنت عبر قاعدة بيانات محلية. مستخدم فعلياً في عمل يومي حقيقي.",
      en: "A Flutter business-management app for sales, customer debt, and money transfers — fully offline via a local database. Actively used in real day-to-day business operations.",
    },
    features: [
      {
        ar: "سجل ديون تفصيلي بكشوف حساب وتاريخ دفعات",
        en: "Detailed debt ledger with statements and payment history",
      },
      {
        ar: "تصدير الفواتير وكشوف الحساب كملفات PDF",
        en: "Export invoices and statements as PDF",
      },
      {
        ar: "نسخ احتياطي واستعادة كاملة للبيانات",
        en: "Full data backup and restore",
      },
      {
        ar: "لوحة مالية يومية وتقارير",
        en: "Daily financial dashboard and reports",
      },
      {
        ar: "تغطية اختبارات: 65 اختباراً ناجحاً",
        en: "Test coverage: 65 passing tests",
      },
    ],
    stack: ["Flutter", "Bloc / Cubit", "Hive", "get_it", "rxdart", "PDF Export"],
    icon: "/images/projects/mizan/icon.png",
    accentColor: "#9F1239",
    images: [
      {
        src: "/images/projects/mizan/icon.png",
        alt: { ar: "أيقونة تطبيق ميزان", en: "Mizan app icon" },
        kind: "icon",
      },
    ],
    links: [],
    note: {
      ar: "قيد الاستخدام الفعلي يومياً",
      en: "In real daily production use",
    },
  },
  {
    id: "supermart",
    tier: "standard",
    name: { ar: "سوبر مارت", en: "SuperMart Pro" },
    badge: {
      ar: "تطبيق موبايل · نقاط بيع",
      en: "Mobile App · POS",
    },
    tagline: {
      ar: "نظام نقاط بيع عربي متكامل",
      en: "A Complete Arabic Point-of-Sale System",
    },
    description: {
      ar: "نظام نقاط بيع (POS) بالعربية لإدارة المخزون، الفواتير، الموظفين، والموردين — مبني بـ Flutter مع دعم لقارئ الباركود وتقارير مالية تفاعلية.",
      en: "An Arabic POS system for inventory, invoicing, employees, and suppliers — built with Flutter, with barcode scanning and interactive financial reports.",
    },
    features: [
      { ar: "مسح باركود وQR للمنتجات", en: "Barcode & QR product scanning" },
      {
        ar: "إدارة المخزون والموردين والمشتريات",
        en: "Inventory, supplier, and purchasing management",
      },
      {
        ar: "تسجيل حضور وانصراف الموظفين",
        en: "Employee clock-in/clock-out tracking",
      },
      {
        ar: "تقارير مبيعات تفاعلية بالرسوم البيانية",
        en: "Interactive sales reports with charts",
      },
    ],
    stack: ["Flutter", "Riverpod", "go_router", "Hive", "mobile_scanner", "fl_chart"],
    icon: "/images/projects/supermart/icon.png",
    accentColor: "#1B7A45",
    images: [
      {
        src: "/images/projects/supermart/icon.png",
        alt: { ar: "أيقونة تطبيق سوبر مارت", en: "SuperMart app icon" },
        kind: "icon",
      },
    ],
    links: [],
  },
  {
    id: "camp",
    tier: "standard",
    name: { ar: "نظام إدارة المخيمات", en: "Camp Management System" },
    badge: {
      ar: "تطبيق ويب متكامل · Next.js",
      en: "Full-Stack Web App · Next.js",
    },
    tagline: {
      ar: "نظام رقمي لتسجيل العائلات النازحة وتتبع توزيع المساعدات",
      en: "Digital System for Registering Displaced Families & Tracking Aid",
    },
    description: {
      ar: "نظام ويب داخلي لموظفي مراكز الإغاثة، لتسجيل العائلات والأفراد النازحين حسب الفئات، وتوثيق توزيع أنواع المساعدات المختلفة، بصلاحيات منفصلة للمدير والموظف.",
      en: "An internal web system for relief-center staff to register displaced families and individuals by category, and record distribution of different aid types, with separate manager/employee permissions.",
    },
    features: [
      {
        ar: "تسجيل العائلات والأفراد مع تصنيفهم بفئات",
        en: "Family & individual registration with categorization",
      },
      {
        ar: "تتبع وتوثيق توزيع أنواع المساعدات المختلفة",
        en: "Tracking and logging distribution of different aid types",
      },
      {
        ar: "مصادقة آمنة عبر JWT مع تحقق من الصلاحيات على الخادم",
        en: "Secure JWT auth with server-side authorization checks",
      },
      {
        ar: "Server Actions مع تحقق من صحة البيانات عبر Zod",
        en: "Server Actions validated end-to-end with Zod",
      },
    ],
    stack: ["Next.js 16", "TypeScript", "Prisma", "SQLite", "Tailwind CSS", "Zod", "JWT"],
    icon: "",
    iconGlyph: Tent,
    accentColor: "#B45309",
    images: [],
    links: [],
    note: {
      ar: "نموذج أولي (MVP) قابل للتوسع",
      en: "MVP prototype, built to extend",
    },
  },
  {
    id: "hisn-al-muslim",
    tier: "compact",
    name: { ar: "حصن المسلم", en: "Hisn Al-Muslim" },
    badge: {
      ar: "تطبيق موبايل شخصي",
      en: "Personal Mobile App",
    },
    tagline: {
      ar: "تطبيق الأذكار والأدعية اليومية",
      en: "Daily Azkar & Duas App",
    },
    description: {
      ar: "نسخة رقمية من كتاب حصن المسلم، مع أوقات الصلاة، تذكيرات، وبحث سريع في الأذكار والأدعية.",
      en: "A digital version of the Hisn Al-Muslim book, with prayer times, reminders, and quick search across azkar and duas.",
    },
    features: [
      {
        ar: "حساب أوقات الصلاة حسب الموقع الجغرافي",
        en: "Location-based prayer time calculation",
      },
      {
        ar: "عدّاد أذكار وتذكيرات مجدولة",
        en: "Zikr counter with scheduled reminders",
      },
      {
        ar: "أسماء الله الحسنى والبحث في الأدعية",
        en: "The 99 Names of Allah and dua search",
      },
    ],
    stack: ["Flutter", "Riverpod", "Hive", "geolocator", "adhan"],
    icon: "/images/projects/hisn-al-muslim/icon.png",
    accentColor: "#1E88E5",
    images: [
      {
        src: "/images/projects/hisn-al-muslim/icon.png",
        alt: { ar: "أيقونة تطبيق حصن المسلم", en: "Hisn Al-Muslim app icon" },
        kind: "icon",
      },
    ],
    links: [],
  },
  {
    id: "hamza",
    tier: "compact",
    name: { ar: "مصاريفي", en: "Masareef" },
    badge: {
      ar: "تطبيق موبايل شخصي",
      en: "Personal Mobile App",
    },
    tagline: {
      ar: "تتبع المصاريف والدخل الشخصي",
      en: "Personal Expense & Income Tracker",
    },
    description: {
      ar: "تطبيق Flutter لتتبع المصاريف اليومية والدخل، مع تصنيفات مخصصة، إرفاق صور الفواتير، وتقارير قابلة للتصدير كـ PDF وCSV.",
      en: "A Flutter app for tracking daily expenses and income, with custom categories, receipt photo attachments, and PDF/CSV-exportable reports.",
    },
    features: [
      {
        ar: "تصنيفات دخل ومصاريف قابلة للتخصيص",
        en: "Customizable income/expense categories",
      },
      { ar: "إرفاق صور الفواتير للمعاملات", en: "Receipt photo attachments per transaction" },
      { ar: "تقارير PDF وتصدير بيانات CSV", en: "PDF reports and CSV data export" },
    ],
    stack: ["Flutter", "Provider", "sqflite", "PDF Export", "CSV Export"],
    icon: "/images/projects/hamza/icon.png",
    accentColor: "#0F766E",
    images: [
      {
        src: "/images/projects/hamza/icon.png",
        alt: { ar: "أيقونة تطبيق مصاريفي", en: "Masareef app icon" },
        kind: "icon",
      },
    ],
    links: [],
  },
  {
    id: "obiade",
    tier: "compact",
    name: { ar: "محل الغانم موبايل", en: "Ghanem Mobile" },
    badge: {
      ar: "موقع تعريفي · مشروع عميل",
      en: "Landing Page · Client Project",
    },
    tagline: {
      ar: "صفحة هبوط تسويقية لمحل خدمات موبايل حقيقي",
      en: "Marketing Landing Page for a Real Mobile-Services Shop",
    },
    description: {
      ar: "صفحة هبوط تسويقية مبنية بـ HTML/CSS/JS خالص لمحل خدمات هواتف حقيقي، تعرض الخدمات مع أزرار تواصل مباشرة عبر واتساب وبيانات SEO منظمة.",
      en: "A pure HTML/CSS/JS marketing landing page for a real phone-services shop, showcasing services with direct WhatsApp contact buttons and structured SEO data.",
    },
    features: [
      { ar: "تصميم متجاوب بدون أي مكتبات خارجية", en: "Fully responsive, zero external libraries" },
      { ar: "أزرار واتساب مباشرة لكل خدمة", en: "Direct WhatsApp deep-links per service" },
      { ar: "بيانات Schema.org لتحسين الظهور بمحركات البحث", en: "Schema.org structured data for SEO" },
      { ar: "رسوم متحركة عند التمرير وعدادات متحركة", en: "Scroll-reveal animations & animated counters" },
    ],
    stack: ["HTML5", "CSS3", "Vanilla JavaScript", "Schema.org", "Open Graph"],
    icon: "/images/projects/obiade/icon.jpeg",
    accentColor: "#0D9488",
    images: [
      {
        src: "/images/projects/obiade/icon.jpeg",
        alt: { ar: "شعار محل الغانم موبايل", en: "Ghanem Mobile logo" },
        kind: "icon",
      },
    ],
    links: [
      {
        label: { ar: "عرض الكود", en: "View Code" },
        url: "https://github.com/ismailabdbarhoum-spec/odaydaa",
        kind: "repo",
      },
    ],
    note: {
      ar: "مشروع تصميم لعميل حقيقي",
      en: "Freelance client project",
    },
  },
];
