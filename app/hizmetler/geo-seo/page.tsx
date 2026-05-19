'use client';

import Link from 'next/link';

export default function GeoSeoPage() {
  return (
    <div className="min-h-screen bg-[#0b1120] font-sans selection:bg-[#933c81] selection:text-white pb-20">
      
      {/* 1. HERO ALANI */}
      <section className="relative pt-28 pb-16 px-4 overflow-hidden border-b border-slate-800/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full pointer-events-none opacity-40">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#df6e32]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-[#933c81]/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm font-medium text-gray-500">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/hizmetler" className="hover:text-white transition-colors">Hizmetlerimiz</Link>
            <span>/</span>
            <span className="text-[#df6e32]">SEO & GEO Mühendisliği</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange-950/30 text-orange-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-orange-900/50">
                <span>🤖</span> Yapay Zeka Çağına Hazır Altyapı
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Arama Motorlarının Ötesi: <br />
                <span className="bg-gradient-to-r from-[#df6e32] to-[#933c81] bg-clip-text text-transparent">
                  SEO & GEO Mühendisliği
                </span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed">
                Sadece klasik Google sıralamaları için değil; ChatGPT, Gemini ve Perplexity gibi üretken yapay zeka motorlarının (Generative Engines) markanızı kaynak göstermesi için sitenizi optimize ediyoruz. Semantik veri yapıları ve kusursuz teknik altyapıyla geleceği bugünden yakalayın.
              </p>
              <div className="pt-4">
                <Link 
                  href="/teklif-al"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#df6e32] to-[#933c81] text-white font-bold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(223,110,50,0.3)] hover:shadow-[0_0_30px_rgba(147,60,129,0.5)] hover:-translate-y-1 transition-all duration-300"
                >
                  Görünürlüğünüzü Artırın
                </Link>
              </div>
            </div>
            
            {/* Sağ Taraf - Yapay Zeka / Veri Akışı İllüstrasyonu */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#df6e32]/10 to-[#933c81]/20 rounded-2xl transform rotate-3 scale-105"></div>
              <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl shadow-2xl relative z-10 space-y-4">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">AI Search Engine Bot Crawler Status</div>
                <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 animate-pulse">●</span>
                    <span className="text-sm font-mono text-gray-300">Semantic Schema Integration</span>
                  </div>
                  <span className="text-xs bg-green-950 text-green-400 px-2 py-1 rounded border border-green-900">100% Valid</span>
                </div>
                <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 animate-pulse">●</span>
                    <span className="text-sm font-mono text-gray-300">LLM Contextual Relevance</span>
                  </div>
                  <span className="text-xs bg-green-950 text-green-400 px-2 py-1 rounded border border-green-900">High Trust</span>
                </div>
                <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-400">ℹ️</span>
                    <span className="text-sm font-mono text-gray-300">Core Web Vitals Speed Index</span>
                  </div>
                  <span className="text-xs bg-blue-950 text-blue-400 px-2 py-1 rounded border border-blue-900">0.2s LCP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEO VS GEO KARŞILAŞTIRMA BÖLÜMÜ */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Geleneksel SEO ve GEO Arasındaki Fark Nedir?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Arama alışkanlıkları kökten değişiyor. Kullanıcılar artık sadece anahtar kelime aratmıyor, yapay zekaya doğrudan karmaşık sorular soruyor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Geleneksel SEO */}
            <div className="bg-slate-900/30 p-8 rounded-2xl border border-slate-800/80 space-y-4">
              <div className="text-2xl text-slate-500 font-bold uppercase tracking-wider text-sm">Geleneksel SEO</div>
              <h3 className="text-xl font-bold text-white">Anahtar Kelime Odaklı Yapı</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Klasik arama motoru optimizasyonu, belirli anahtar kelimelerin sayfa içinde geçme sıklığına, meta etiketlerine ve backlink hacimlerine odaklanır. Sitenizi sadece link listelerinde üst sıralara taşımayı hedefler.
              </p>
            </div>
            
            {/* Yeni Nesil GEO */}
            <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/40 p-8 rounded-2xl border border-orange-500/20 shadow-xl space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#df6e32]/5 rounded-bl-full"></div>
              <div className="text-2xl text-[#df6e32] font-bold uppercase tracking-wider text-sm">Yeni Nesil GEO</div>
              <h3 className="text-xl font-bold text-white">Anlam, Otorite ve Bağlam Odaklı Yapı</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Yapay zeka modelleri (LLM), web sitelerini tararken ham anahtar kelimelere değil, bilginin derinliğine ve doğruluğuna bakar. Geliştirdiğimiz semantik şemalar sayesinde, yapay zeka sitenizi bir uzman olarak kabul eder ve kullanıcılara doğrudan sizin verilerinizi önerir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE ODAK ALANLARI */}
      <section className="py-16 px-4 bg-slate-900/20 border-y border-slate-800/50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Teknik Optimizasyon Sütunlarımız</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="text-2xl">JSON-LD & Şema Mimarisi</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Arama botlarının ve yapay zeka ajanlarının sitenizdeki ürünleri, hizmetleri, makaleleri ve kurumsal kimliğinizi sıfır hata ile okuyabilmesi için gelişmiş JSON-LD şemaları mimarisi kurguluyoruz.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-2xl">Bilgi Yoğunluğu (EEAT)</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Google'ın Deneyim, Uzmanlık, Otorite ve Güvenilirlik (E-E-A-T) kriterlerine tam uyumlu içerik yapıları tasarlayarak sitenizin sektördeki dijital otoritesini en üst seviyeye çıkarıyoruz.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-2xl">Performans & Core Web Vitals</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Yavaş açılan siteler botlar tarafından cezalandırılır. Next.js altyapımızın getirdiği hız avantajıyla, arama motoru botlarının sitenizi çok daha hızlı ve derinlemesine taramasını sağlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}