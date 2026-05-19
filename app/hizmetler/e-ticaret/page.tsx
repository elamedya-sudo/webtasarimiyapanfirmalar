'use client';

import Link from 'next/link';

export default function ETicaretPage() {
  return (
    <div className="min-h-screen bg-[#0b1120] font-sans selection:bg-[#933c81] selection:text-white pb-20">
      
      {/* 1. HERO ALANI */}
      <section className="relative pt-28 pb-16 px-4 overflow-hidden border-b border-slate-800/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full pointer-events-none opacity-40">
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-[#933c81]/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm font-medium text-gray-500">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/hizmetler" className="hover:text-white transition-colors">Hizmetlerimiz</Link>
            <span>/</span>
            <span className="text-amber-400">E-Ticaret & Dönüşüm</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-950/30 text-amber-400 text-xs font-semibold px-4 py-1.5 rounded-full border border-amber-900/50">
                <span>🛍️</span> Yüksek Dönüşümlü Alışveriş Deneyimi
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Sınırları Aşan <br />
                <span className="bg-gradient-to-r from-amber-400 to-[#df6e32] bg-clip-text text-transparent">
                  E-Ticaret Mimarları
                </span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed">
                Yavaş açılan, sürekli eklenti çökmeleri yaşayan klasik mağazaları unutun. Headless e-ticaret altyapımızla milisaniyeler içinde yüklenen sayfalar, kesintisiz ödeme adımları ve global güvenlik standartlarıyla satışlarınızı garanti altına alıyoruz.
              </p>
              <div className="pt-4">
                <Link 
                  href="/teklif-al"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-[#df6e32] text-white font-bold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(223,110,50,0.4)] hover:-translate-y-1 transition-all duration-300"
                >
                  Mağazanızı Geleceğe Taşıyın
                </Link>
              </div>
            </div>
            
            {/* Sağ Taraf - Dashboard / Conversion İllüstrasyonu */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-[#df6e32]/20 rounded-2xl transform rotate-2 scale-105"></div>
              <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl shadow-2xl relative z-10">
                <div className="text-sm font-semibold text-white mb-6 flex justify-between items-center border-b border-slate-800 pb-4">
                  Dönüşüm Hunisi (Funnel)
                  <span className="text-xs font-normal text-amber-400 bg-amber-400/10 px-2 py-1 rounded border border-amber-500/20">Headless Mimarisi</span>
                </div>
                
                <div className="space-y-4 relative">
                  {/* Funnel Steps */}
                  <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 flex justify-between items-center z-10 relative">
                    <span className="text-gray-300 font-medium">1. Ürün İnceleme</span>
                    <span className="text-gray-500 font-mono text-sm">24,500</span>
                  </div>
                  <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700 flex justify-between items-center mx-4 z-10 relative">
                    <span className="text-gray-300 font-medium">2. Sepete Ekleme</span>
                    <span className="text-gray-500 font-mono text-sm">8,240 <span className="text-green-400 ml-2">↑ %34</span></span>
                  </div>
                  <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700 flex justify-between items-center mx-8 z-10 relative">
                    <span className="text-gray-300 font-medium">3. Ödeme Adımı</span>
                    <span className="text-gray-500 font-mono text-sm">6,120</span>
                  </div>
                  <div className="bg-gradient-to-r from-amber-500/20 to-[#df6e32]/20 p-4 rounded-xl border border-amber-500/30 flex justify-between items-center mx-12 z-10 relative shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                    <span className="text-amber-400 font-bold">4. Başarılı Satış</span>
                    <span className="text-white font-mono font-bold text-lg">5,890</span>
                  </div>
                  
                  {/* Center Line connecting funnel */}
                  <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-slate-700 z-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. UZMANLIK ALANLARIMIZ */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Mühendislik Harikası E-Ticaret Modelleri</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Sadece B2C perakende satışı değil, işletmenizin iş modeline uyan tamamen özelleştirilebilir mimariler inşa ediyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-colors">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">Headless E-Ticaret (Next.js)</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Shopify veya WooCommerce gibi sistemlerin sadece veritabanını kullanıyor, ziyaretçilerin gördüğü ön yüzü Next.js ile sıfırdan kodluyoruz. Sonuç: Sayfa yüklenme hızında %300'e varan artış ve mobil cihazlarda uygulama pürüzsüzlüğü.
              </p>
            </div>
            
            <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-colors">
              <div className="text-3xl mb-4">📖</div>
              <h3 className="text-xl font-bold text-white mb-3">B2B Katalog Modu Uygulamaları</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Her işletme doğrudan sepet üzerinden satış yapmaz. Geleneksel "sepete ekle" mantığının ötesinde; misafirlere fiyat gizleme, bayilere özel fiyatlandırma, toplu teklif isteme veya siteyi tamamen detaylı bir dijital katalog olarak sergileme gibi özel B2B senaryoları kurguluyoruz.
              </p>
            </div>

            <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-colors">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-3">Global Güvenlik ve Bot Koruması</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Özellikle uluslararası ödeme alan sitelerde karşılaşılan sahte siparişleri ve zararlı "PayPal bot" saldırılarını engelliyoruz. Cloudflare güvenlik duvarı (WAF) ve bot yönetimi entegrasyonlarıyla sahte trafiği daha sitenize ulaşmadan kesiyoruz.
              </p>
            </div>

            <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-colors">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-white mb-3">Kusursuz Checkout ve Dönüşüm Optimizasyonu</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Kullanıcıların sepeti terk etmesinin en büyük sebebi karmaşık ödeme ekranlarıdır. Dikkat dağıtmayan, tek sayfa (one-page) checkout kurguları, Iyzico/Stripe entegrasyonları ve misafir alışverişi kolaylıklarıyla satın alma sürecini kusursuzlaştırıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-16 px-4 bg-slate-900/20 border-y border-slate-800/50 text-center relative z-10">
        <div className="container mx-auto max-w-3xl">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-[#df6e32] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(245,158,11,0.4)]">
            <span className="text-2xl text-white">📈</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">Mevcut Altyapınız Size Kaybettiriyor mu?</h2>
          <p className="text-gray-400 mb-8">
            Yavaşlık yüzünden kaçan müşterilerinizin ve güvenlik açıkları yüzünden kaybettiğiniz zamanın maliyeti, yeni bir altyapıya geçmekten çok daha fazladır. E-ticaret sitenizi modern mühendislikle yeniden inşa edelim.
          </p>
          <Link 
            href="/iletisim"
            className="inline-block border-2 border-amber-500 text-amber-400 font-bold px-10 py-4 rounded-xl hover:bg-amber-500 hover:text-white transition-all duration-300"
          >
            Altyapı Analizi Talep Et
          </Link>
        </div>
      </section>

    </div>
  );
}