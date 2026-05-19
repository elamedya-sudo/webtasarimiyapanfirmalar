'use client';

import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    {
      title: "Geleneksel Web Mimarisinden Headless Mimarisine Geçiş",
      excerpt: "Neden WordPress tabanlı ağır temalardan kurtulup Next.js mimarisine geçmelisiniz? Performans, güvenlik ve ölçeklenebilirlik üzerine teknik bir analiz.",
      category: "Teknoloji",
      date: "19 Mayıs 2026"
    },
    {
      title: "Yapay Zeka Çağında GEO (Generative Engine Optimization)",
      excerpt: "Artık kullanıcılar sadece Google'da arama yapmıyor; ChatGPT ve Gemini'ye soru soruyor. Markanızı YZ motorları için nasıl optimize edersiniz?",
      category: "SEO & GEO",
      date: "15 Mayıs 2026"
    },
    {
      title: "İşletmenizi Dijitalleştiren CRM Otomasyonları",
      excerpt: "Neden her şirket kendi özel SaaS çözümüne ihtiyaç duyar? Manuel süreçleri sıfıra indiren otomasyon kurguları üzerine bir rehber.",
      category: "SaaS & CRM",
      date: "10 Mayıs 2026"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b1120] font-sans selection:bg-[#933c81] selection:text-white pb-20">
      
      {/* HERO */}
      <section className="pt-24 pb-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Mühendislik Blogu</h1>
        <p className="text-gray-400 max-w-lg mx-auto">Teknolojik dönüşüm, web mimarileri ve dijital büyüme stratejileri üzerine derinlemesine analizler.</p>
      </section>

      {/* BLOG KARTLARI */}
      <section className="container mx-auto px-4 py-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-[#df6e32]/50 transition-all duration-300 flex flex-col">
              <div className="p-8 flex-grow">
                <div className="text-[#df6e32] text-xs font-bold uppercase tracking-widest mb-4">{post.category}</div>
                <h2 className="text-xl font-bold text-white mb-4 hover:text-[#933c81] transition-colors cursor-pointer">{post.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{post.excerpt}</p>
              </div>
              <div className="px-8 pb-8 flex items-center justify-between border-t border-slate-800 pt-6">
                <span className="text-slate-600 text-xs">{post.date}</span>
                <Link href="#" className="text-white font-semibold text-sm hover:text-[#df6e32]">Devamını Oku →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}