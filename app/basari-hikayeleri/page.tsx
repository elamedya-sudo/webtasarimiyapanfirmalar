'use client';

import Link from 'next/link';

export default function BasariHikayeleriPage() {
  const cases = [
    {
      title: "Tonermasters: Bot Koruması ve %25 Bütçe Verimliliği",
      excerpt: "Avustralya merkezli dev e-ticaret sitesinde PayPal sahte sipariş botlarını temizledik, altyapıyı hızlandırdık ve 9 aydır atıl duran Google Ads bütçesini optimize ettik.",
      metrics: ["%300 Hız Artışı", "Bot Saldırıları Sıfırlandı", "Yüksek ROAS"],
      href: "/basari-hikayeleri/tonermasters" // Klasör yoluna tam uyumlu hale getirildi
    },
    {
      title: "DWT Türkiye: Alman Endüstri Devinin Dijital Altyapı Entegrasyonu",
      excerpt: "Babcock & Wilcox'un Türkiye operasyonları için binlerce karmaşık teknik ürünü şantiye şartlarına uygun, akıllı filtreleme ve katalog mühendisliği ile dijitale taşıdık.",
      metrics: ["Katalog Mühendisliği", "B2B Entegrasyonu", "Saha ve Mobil Uyum"],
      href: "/basari-hikayeleri/dwt-turkiye"
    },
    {
      title: "Vicom Energy: Nijerya'nın Elektrik Ağını Global Vitrine Taşımak",
      excerpt: "Afrika kıtasında ulusal ölçekte enerji dağıtımı yapan şirketin altyapısını, zorlu internet koşullarına özel CDN ve Mobile-First mimariyle uluslararası pazara sunduk.",
      metrics: ["Global B2B Ağı", "Mobile-First Mimari", "Süreç Otomasyonu"],
      href: "/basari-hikayeleri/vicom-energy"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b1120] pb-20">
      {/* Üst Başlık Alanı */}
      <section className="pt-24 pb-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-wide">Başarı Hikayeleri</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Veriyle ölçümlenebilir, mühendislikle şekillenmiş ve işletmelerin kaderini değiştiren dijital büyüme operasyonlarımız.
        </p>
      </section>

      {/* Hikaye Kartları Listesi */}
      <section className="container mx-auto px-4 max-w-5xl space-y-6">
        {cases.map((c, i) => (
          <Link href={c.href} key={i} className="block group">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-[#df6e32]/50 transition-all duration-500 shadow-xl hover:shadow-[#df6e32]/10 transform hover:-translate-y-1">
              <div className="grid md:grid-cols-12 gap-8 items-center">
                
                {/* Sol Kısım: İçerik */}
                <div className="md:col-span-9">
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-[#df6e32] transition-colors leading-tight">
                    {c.title}
                  </h2>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {c.excerpt}
                  </p>
                  
                  {/* Etiketler (Metrics) */}
                  <div className="flex flex-wrap gap-3">
                    {c.metrics.map((m, idx) => (
                      <span 
                        key={idx} 
                        className="bg-[#df6e32]/10 text-[#df6e32] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border border-[#df6e32]/20"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Sağ Kısım: Yönlendirme İkonu */}
                <div className="md:col-span-3 flex md:justify-end items-center mt-4 md:mt-0">
                  <span className="inline-flex items-center text-white font-bold text-sm tracking-wide group-hover:text-[#933c81] transition-colors">
                    Detayları İncele
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
                
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}