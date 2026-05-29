import type { Metadata } from "next";
import { seoConfig } from "../lib/seo-config";
import "./globals.css";

export const metadata: Metadata = {
  title: seoConfig.title,
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  authors: [{ name: seoConfig.author }],
  openGraph: {
    title: seoConfig.title,
    description: seoConfig.description,
    url: seoConfig.url,
    siteName: "Tech Fix",
    images: [
      {
        url: seoConfig.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased bg-slate-900 text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
