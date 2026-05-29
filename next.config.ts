import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. تفعيل التصدير الثابت لإنتاج صفحات HTML متوافقة مع جيت هاب
  output: "export",  

  // 2. ضبط المسارات لتتطابق مع اسم مستودعك الجديد بدقة لمنع خطأ 404
  basePath: "/techfix", 
  assetPrefix: "/techfix/", 

  // 3. تعطيل تحسين الصور ليعمل الموقع بدون خادم Node.js خلفي
  images: {
    unoptimized: true, 
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
  },
  
  compress: true,
};

export default nextConfig;
