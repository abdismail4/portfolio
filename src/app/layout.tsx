import type { Metadata } from "next";
import { Tajawal, Inter } from "next/font/google";
import { siteConfig } from "@/config/site-config";
import { Providers } from "@/providers/providers";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-tajawal",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${siteConfig.name.ar} — ${siteConfig.role.ar}`,
  description:
    "معرض أعمال مهندس برمجيات متخصص في تطوير تطبيقات Flutter وأنظمة خلفية بـ Node.js.",
};

const LOCALE_INIT_SCRIPT = `try{var l=localStorage.getItem('locale');if(l==='en'){document.documentElement.lang='en';document.documentElement.dir='ltr';}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning className={`${tajawal.variable} ${inter.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: LOCALE_INIT_SCRIPT }} />
      </head>
      <body className="min-h-full antialiased" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
