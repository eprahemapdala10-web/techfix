"use client";

import React, { useState } from "react";
import { 
  Wrench, 
  Smartphone, 
  Monitor, 
  Laptop, 
  CheckCircle, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ArrowLeft 
} from "lucide-react";

export default function Home() {
  // حالات تفاعلية لحساب تكلفة الصيانة تقريبياً
  const [deviceType, setDeviceType] = useState<string>("phone");
  const [issueType, setIssueType] = useState<number>(150); // القيمة الافتراضية للشاشة
  const [successMessage, setSuccessMessage] = useState<boolean>(false);

  const calculateTotal = () => {
    let basePrice = 100; // تكلفة الكشف وفتح الجهاز ثابتة
    if (deviceType === "laptop") basePrice = 250;
    if (deviceType === "screen") basePrice = 200;
    return basePrice + issueType;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(true);
    setTimeout(() => setSuccessMessage(false), 5000);
  };

  return (
    <div className="min-h-screen font-sans bg-slate-900 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      
      {/* الهيدر / شريط التنقّل */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-amber-500 p-2 rounded-xl text-slate-950 shadow-lg shadow-amber-500/20">
              <Wrench className="w-5 h-5" />
            </div>
            <span className="text-xl font-black tracking-tight text-white">TECH<span className="text-amber-500">FIX</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
            <a href="#services" className="hover:text-amber-500 transition-colors">خدماتنا</a>
            <a href="#calculator" className="hover:text-amber-500 transition-colors">حاسبة الصيانة</a>
            <a href="#features" className="hover:text-amber-500 transition-colors">مميزاتنا</a>
            <a href="#contact" className="hover:text-amber-500 transition-colors">اتصل بنا</a>
          </nav>
          <a href="tel:0123456789" className="bg-slate-800 hover:bg-slate-700 text-white text-xs md:text-sm px-4 py-2 rounded-xl border border-slate-700 transition-all flex items-center gap-2">
            <Phone className="w-4 h-4 text-amber-500" />
            اتصل الآن
          </a>
        </div>
      </header>

      {/* البطل / Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            مركز الصيانة المعتمد الأول في مصر
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight max-w-4xl mx-auto">
            جهازك الإلكتروني معطل؟ <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">نعيده لك كالجديد تماماً!</span>
          </h1>
          <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            متخصصون في صيانة الهواتف، اللابتوب، والشاشات بأحدث الأجهزة والتقنيات المتطورة. قطع غيار أصلية 100% مع ضمان حقيقي معتمد.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#calculator" className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-2xl shadow-lg shadow-amber-500/20 transition-all text-center">
              احسب تكلفة صيانة جهازك
            </a>
            <a href="#services" className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-medium px-8 py-4 rounded-2xl transition-all text-center">
              عرض الخدمات المتاحة
            </a>
          </div>
        </div>
      </section>

      {/* أقسام الخدمات / Services */}
      <section id="services" className="py-20 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">ماذا يمكننا أن نصلح لك؟</h2>
          <p className="text-slate-400 max-w-md mx-auto">نغطي شريحة واسعة من الأجهزة الإلكترونية لنوفر لك صيانة متكاملة تحت سقف واحد.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-950/40 border border-slate-800 p-8 rounded-3xl hover:border-amber-500/30 transition-all group">
            <div className="bg-slate-900 p-4 rounded-2xl w-fit text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">صيانة الهواتف الذكية</h3>
            <p className="text-slate-400 text-sm leading-relaxed">تغيير شاشات بايركس أصلية، تغيير بطاريات، وإصلاح أعطال البوردة والـ IC لأجهزة الآيفون والسامسونج.</p>
          </div>
          <div className="bg-slate-950/40 border border-slate-800 p-8 rounded-3xl hover:border-amber-500/30 transition-all group">
            <div className="bg-slate-900 p-4 rounded-2xl w-fit text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
              <Laptop className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">أجهزة اللابتوب والكمبيوتر</h3>
            <p className="text-slate-400 text-sm leading-relaxed">حلول مشاكل البطء، تنظيف مراوح التبريد، زيادة الرامات وهاردات SSD، وتغيير شاشات اللابتوب التالفة.</p>
          </div>
          <div className="bg-slate-950/40 border border-slate-800 p-8 rounded-3xl hover:border-amber-500/30 transition-all group">
            <div className="bg-slate-900 p-4 rounded-2xl w-fit text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
              <Monitor className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">الشاشات والـ TV</h3>
            <p className="text-slate-400 text-sm leading-relaxed">إصلاح أعطال الباور، تغيير مساطر الليد (الإضاءة الخلفية)، ومعالجة خطوط الشاشة بأحدث أجهزة كبس الفلاتات.</p>
          </div>
        </div>
      </section>

      {/* الحاسبة التفاعلية / Interactive Pricing Calculator */}
      <section id="calculator" className="py-20 bg-slate-950/50 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">حاسبة الأسعار التقديرية التفاعلية</h2>
            <p className="text-slate-400">اختر نوع جهازك والعطل للحصول على تسعيرة فورية تقريبية لشغل اليد وقطع الغيار.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* خيارات المدخلات */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-3">1. اختر نوع الجهاز المُراد صيانته:</label>
                  <div className="grid grid-cols-3 gap-3">
                    <button 
                      onClick={() => { setDeviceType("phone"); setIssueType(150); }}
                      className={`p-4 rounded-2xl border text-center flex flex-col items-center gap-2 transition-all ${deviceType === "phone" ? "border-amber-500 bg-amber-500/10 text-amber-500 font-bold" : "border-slate-800 bg-slate-950 hover:border-slate-700 text-slate-400"}`}
                    >
                      <Smartphone className="w-5 h-5" />
                      <span className="text-xs">موبايل</span>
                    </button>
                    <button 
                      onClick={() => { setDeviceType("laptop"); setIssueType(300); }}
                      className={`p-4 rounded-2xl border text-center flex flex-col items-center gap-2 transition-all ${deviceType === "laptop" ? "border-amber-500 bg-amber-500/10 text-amber-500 font-bold" : "border-slate-800 bg-slate-950 hover:border-slate-700 text-slate-400"}`}
                    >
                      <Laptop className="w-5 h-5" />
                      <span className="text-xs">لابتوب</span>
                    </button>
                    <button 
                      onClick={() => { setDeviceType("screen"); setIssueType(400); }}
                      className={`p-4 rounded-2xl border text-center flex flex-col items-center gap-2 transition-all ${deviceType === "screen" ? "border-amber-500 bg-amber-500/10 text-amber-500 font-bold" : "border-slate-800 bg-slate-950 hover:border-slate-700 text-slate-400"}`}
                    >
                      <Monitor className="w-5 h-5" />
                      <span className="text-xs">شاشة</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-3">2. حدد نوع المشكلة الأساسية الحالية:</label>
                  <select 
                    onChange={(e) => setIssueType(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    {deviceType === "phone" && (
                      <>
                        <option value="150">كسر في الشاشة الخارجية / باغة (150 ج.م لشغل اليد)</option>
                        <option value="350">تغيير شاشة كاملة داخلية (350 ج.م)</option>
                        <option value="120">تغيير بطارية ضعيفة أو تالفة (120 ج.م)</option>
                        <option value="200">عطل في منفذ الشحن / سوكيت (200 ج.م)</option>
                      </>
                    )}
                    {deviceType === "laptop" && (
                      <>
                        <option value="300">تغيير هارد ديسك أو زيادة رامات (300 ج.م)</option>
                        <option value="500">تغيير شاشة لابتوب مكسورة (500 ج.م)</option>
                        <option value="250">تنظيف وتغيير معجون التبريد الحراري (250 ج.م)</option>
                        <option value="600">إصلاح مشكلة باور في البوردة (600 ج.م)</option>
                      </>
                    )}
                    {deviceType === "screen" && (
                      <>
                        <option value="400">تغيير طقم ليدات الإضاءة بالكامل (400 ج.م)</option>
                        <option value="300">إصلاح بوردة الباور / كارت التغذية (300 ج.م)</option>
                        <option value="700">عطل خطوط في الشاشة / كبس فلاتات (700 ج.م)</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              {/* شاشة التكلفة التفاعلية المباشرة */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl"></div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-500 block mb-2 font-bold">التكلفة التقديرية المتوقعة</span>
                  <div className="text-4xl md:text-5xl font-black text-amber-500 my-4">
                    {calculateTotal()} <span className="text-sm font-normal text-slate-400">ج.م</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed px-2">
                    * ملحوظة: هذا السعر تقريبي ويشمل الفحص والعمل التقني. السعر النهائي يتحدد بدقة بعد معاينة الفني المباشرة للجهاز في الورشة.
                  </p>
                </div>
                <div className="border-t border-slate-800/80 pt-4 mt-6">
                  <a href="#contact" className="inline-flex items-center gap-2 text-xs text-amber-500 hover:text-amber-400 font-bold transition-colors">
                    حجز موعد صيانة سريع الآن
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* المميزات والضمان / Why Choose Us */}
      <section id="features" className="py-20 max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-8 md:p-12 text-slate-950 grid grid-cols-1 md:grid-cols-2 gap-8 items-center shadow-xl">
          <div>
            <div className="bg-slate-950 text-amber-500 p-2 rounded-xl w-fit mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-black mb-4">ضمان حقيقي معتمد لراحة بالك</h2>
            <p className="text-slate-900 font-medium text-sm md:text-base leading-relaxed mb-6">
              جميع قطع الغيار المستخدمة داخل مركزنا أصلية من المصنع، ونقدم لك شهادة ضمان مكتوبة تصل إلى 3 أشهر على أي عطل يتم إصلاحه بالكامل، مع كشف مجاني تماماً إذا تم الإصلاح.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold">
                <CheckCircle className="w-4 h-4 text-slate-950" /> مهندسون وفنيون معتمدون بخبرة تزيد عن 8 سنوات.
              </div>
              <div className="flex items-center gap-2 text-sm font-bold">
                <CheckCircle className="w-4 h-4 text-slate-950" /> تسليم الأجهزة في الموعد المحدد تماماً دون تأخير.
              </div>
            </div>
          </div>
          <div className="bg-slate-900 rounded-2xl p-6 md:p-8 text-slate-100 space-y-6 shadow-2xl border border-white/5">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-500" />
                          
