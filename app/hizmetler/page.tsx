'use client';

import Link from 'next/link';

export default function HizmetlerPage() {
  const services = [
    {
      id: 1,
      icon: "⚛️",
      title: "Next.js & Headless Web Geliştirme",
      description: "Geleneksel CMS sınırlarını aşıyor, ultra hızlı, güvenli ve Headless mimariyle ölçeklenebilir modern web projeleri geliştiriyoruz.",
      href: "/hizmetler/nextjs-headless"
    },
    {
      id: 2,
      icon: "🎨",
      title: "Kurumsal Dijital Kimlik Tasarımı",
      description: "Markanızın vizyonunu ve gücünü dijitale aktaran modern, özgün, kullanıcı deneyimi (UI/UX) odaklı arayüz tasarımları.",
      href: "/hizmetler/dijital-kimlik"
    },
    {
      id: 3,
      icon: "🤖",
      title: "SEO & GEO Mühendisliği",
      description: "Sadece klasik arama motorları için değil, yeni nesil yapay zeka motorları (Generative Engine Optimization) için optimize edilmiş kusursuz altyapılar.",
      href: "/hizmetler/geo-seo"
    },
    {
      id: 4,
      icon: "📈",
      title: "Google Ads & Dijital Pazarlama",
      description: "Yüksek bütçeli reklam süreçlerinizi veri analitiğiyle yönetiyor, nokta atışı dönüşüm optimizasyonlarıyla ROAS oranlarınızı maksimize ediyoruz.",
      href: "/hizmetler/google-ads"
    },
    {
      id: 5,
      icon: "🛍️",
      title: "E-Ticaret & Özel Dönüşüm Çözümleri",
      description: "Gelişmiş katalog modlarından global ölçekli headless e-ticaret sistemlerine kadar, satış ve yüksek performans odaklı mağaza altyapıları.",
      href: "/hizmetler/e-ticaret"
    },
    {
      id: 6,
      icon: "💻",
      title: "Özel SaaS & CRM Yazılımları",
      description: "İşletmenizin iç süreçlerini, teklif, muhasebe ve müşteri yönetimini tek bir noktadan optimize eden bulut tabanlı kurumsal paneller.",
      href: "/hizmetler/saas-crm"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b1120] font-sans selection:bg-[#933c81] selection:text-white pb-20">
      
      {/* HERO ALANI */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden border-b border-slate-800/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full pointer-events-none opacity-40">
          <div className="absolute top-10 right-1/4 w-72 h-72 bg-[#df6e32]/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Neler <span className="bg-gradient-to-r from-[#933c81] to-[#df6e32] bg-clip-text text-transparent">Yapıyoruz?</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Monolitik yapıları arkanızda bırakın. İşletmenizi geleceğe taşıyacak, ölçeklenebilir ve yüksek performanslı dijital mühendislik çözümlerimizle tanışın.
          </p>
        </div>
      </section>

      {/* HİZMET KARTLARI (GRID) */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-[#df6e32]/50 transition-all duration-300 flex flex-col h-full group">
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#df6e32] transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <Link 
                  href={service.href}
                  className="inline-flex items-center gap-2 text-[#933c81] font-semibold hover:text-[#df6e32] transition-colors mt-auto"
                >
                  Detayları İncele <span className="text-lg">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALT BİLGİ / CTA */}
      <section className="px-4 relative z-10">
        <div className="container mx-auto max-w-5xl bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-10 md:p-16 border border-slate-700 shadow-2xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Projeniz Hangi Kategoriye Giriyor?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            İhtiyacınızı tam olarak belirleyemediyseniz veya birden fazla hizmeti kapsayan hibrit bir çözüme ihtiyacınız varsa, Ataşehir ofisimizde detayları konuşalım.
          </p>
          <Link 
            href="/teklif-al"
            className="inline-block bg-gradient-to-r from-[#933c81] to-[#df6e32] text-white font-bold px-10 py-4 rounded-xl shadow-[0_0_20px_rgba(223,110,50,0.3)] hover:shadow-[0_0_30px_rgba(223,110,50,0.5)] transition-all duration-300"
          >
            Ücretsiz Danışmanlık Alın
          </Link>
        </div>
      </section>

    </div>
  );
}