'use client';

import Link from 'next/link';

export default function NextjsHeadlessPage() {
  return (
    <div className="min-h-screen bg-[#0b1120] font-sans selection:bg-[#933c81] selection:text-white pb-20">
      
      {/* 1. HERO ALANI */}
      <section className="relative pt-28 pb-16 px-4 overflow-hidden border-b border-slate-800/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full pointer-events-none opacity-40">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#933c81]/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-[#df6e32]/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Breadcrumb (Geri Dönüş Menüsü) */}
          <div className="mb-8 flex items-center gap-2 text-sm font-medium text-gray-500">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/hizmetler" className="hover:text-white transition-colors">Hizmetlerimiz</Link>
            <span>/</span>
            <span className="text-[#df6e32]">Next.js Headless</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-purple-900/30 text-purple-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-purple-800/50">
                <span>⚛️</span> React Tabanlı Modern Web
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Geleceğin Hızı: <br />
                <span className="bg-gradient-to-r from-[#933c81] to-[#df6e32] bg-clip-text text-transparent">
                  Next.js & Headless
                </span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed">
                Ağır sayfa oluşturuculara ve kod yığınına dönüşmüş geleneksel sistemlere veda edin. Ön yüz (Frontend) ve arka yüzü (Backend) ayırarak, Vercel altyapısında saniyeler içinde açılan, ultra güvenli ve eşsiz bir web deneyimi sunuyoruz.
              </p>
              <div className="pt-4">
                <Link 
                  href="/teklif-al"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#933c81] to-[#df6e32] text-white font-bold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(147,60,129,0.3)] hover:shadow-[0_0_30px_rgba(223,110,50,0.5)] hover:-translate-y-1 transition-all duration-300"
                >
                  Projenizi Hızlandıralım
                </Link>
              </div>
            </div>
            
            {/* Sağ Taraf - Kod / Teknoloji Görselleştirme */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#933c81]/20 to-[#df6e32]/20 rounded-2xl transform rotate-3 scale-105"></div>
              <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl shadow-2xl relative z-10 font-mono text-sm text-gray-300">
                <div className="flex gap-2 mb-4 border-b border-slate-700 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-2">
                  <p><span className="text-purple-400">import</span> {'{'} <span className="text-blue-300">Speed, Security</span> {'}'} <span className="text-purple-400">from</span> <span className="text-green-300">'@ela-teknoloji/core'</span>;</p>
                  <p><span className="text-purple-400">const</span> <span className="text-blue-300">Architecture</span> = <span className="text-yellow-300">()</span> <span className="text-purple-400">=&gt;</span> {'{'}</p>
                  <p className="pl-4"><span className="text-purple-400">return</span> (</p>
                  <p className="pl-8 text-gray-400">&lt;HeadlessCMS&gt;</p>
                  <p className="pl-12 text-gray-400">&lt;NextJsFrontend /&gt;</p>
                  <p className="pl-12 text-gray-400">&lt;VercelEdgeNetwork /&gt;</p>
                  <p className="pl-8 text-gray-400">&lt;/HeadlessCMS&gt;</p>
                  <p className="pl-4">);</p>
                  <p>{'}'};</p>
                  <p className="pt-2"><span className="text-purple-400">export default</span> <span className="text-blue-300">Architecture</span>;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AVANTAJLAR BÖLÜMÜ */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Neden Headless Mimari?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Geleneksel web sitelerinde tasarım ve veritabanı birbirine yapışıktır. Headless mimaride ise bu iki katman birbirinden bağımsız, API'ler aracılığıyla haberleşerek eşsiz avantajlar sağlar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Maksimum Hız ve Core Web Vitals</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Next.js'in Sunucu Taraflı Oluşturma (SSR) ve Statik Site Üretimi (SSG) yetenekleri sayesinde sayfalarınız saliseler içinde açılır. Google'ın hız testlerinden tam puan alarak SEO sıralamalarınızı organik olarak yükseltirsiniz.
              </p>
            </div>
            
            <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-3">Geçilemez Güvenlik (Sıfır Veritabanı Riski)</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Ön yüzünüz sadece statik dosyalardan oluştuğu için, geleneksel sistemlerdeki gibi doğrudan bir veritabanı bağlantısı yoktur. Kötü niyetli bot saldırıları (DDoS, SQL Injection) ön yüzünüzde tamamen etkisiz hale gelir.
              </p>
            </div>

            <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">Sınırsız Ölçeklenebilirlik</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Kampanya dönemlerinde veya ani trafik artışlarında sitenizin çökme riski yoktur. Vercel gibi global edge ağları üzerinden siteniz dünyanın her yerindeki ziyaretçilere anında kesintisiz hizmet verir.
              </p>
            </div>

            <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-white mb-3">Çoklu Platform Özgürlüğü</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                İçeriğinizi bir kez arka planda (CMS) girersiniz; bu içerik aynı anda web sitenizde, mobil uygulamanızda veya akıllı saat uygulamanızda sorunsuzca ve anında yayınlanır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NASIL ÇALIŞIYORUZ / TEKNOLOJİ YIĞINI */}
      <section className="py-16 px-4 bg-slate-900/20 border-y border-slate-800/50">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-white">Modern Teknoloji Yığınımız</h2>
              <p className="text-gray-400 leading-relaxed">
                Her projeye standart bir paket giydirmiyoruz. İhtiyacınıza göre, verileri yöneteceğiniz bir Headless CMS (Strapi, Sanity veya yapılandırılmış Headless WordPress) kuruyor, ön yüzü ise pürüzsüz bir arayüzle sıfırdan Next.js ile kodluyoruz.
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-[#df6e32]">✓</span> <strong className="text-white">Frontend:</strong> Next.js, React, Tailwind CSS
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-[#df6e32]">✓</span> <strong className="text-white">Backend/CMS:</strong> Strapi, Sanity, Headless WP
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-[#df6e32]">✓</span> <strong className="text-white">Deployment:</strong> Vercel Global Edge Network
                </li>
              </ul>
            </div>
            
            <div className="flex-1 w-full bg-slate-800/50 p-8 rounded-2xl border border-slate-700 flex flex-col gap-4">
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 text-center">
                <span className="text-gray-400 text-xs uppercase tracking-wider font-bold">Adım 1: Veri Katmanı</span>
                <p className="text-white font-medium mt-1">Headless CMS (İçerik Yönetimi)</p>
              </div>
              <div className="flex justify-center text-slate-500">
                ↓ (REST / GraphQL API)
              </div>
              <div className="bg-gradient-to-r from-[#933c81]/80 to-[#df6e32]/80 p-4 rounded-xl text-center shadow-lg">
                <span className="text-white/70 text-xs uppercase tracking-wider font-bold">Adım 2: Sunum Katmanı</span>
                <p className="text-white font-bold mt-1">Next.js Özel Arayüzü</p>
              </div>
              <div className="flex justify-center text-slate-500">
                ↓
              </div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 text-center">
                <span className="text-gray-400 text-xs uppercase tracking-wider font-bold">Adım 3: Kullanıcı</span>
                <p className="text-white font-medium mt-1">Milisaniyeler İçinde Açılan Sayfalar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}