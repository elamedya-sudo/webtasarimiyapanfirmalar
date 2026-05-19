'use client';

import Link from 'next/link';

export default function GoogleAdsPage() {
  return (
    <div className="min-h-screen bg-[#0b1120] font-sans selection:bg-[#933c81] selection:text-white pb-20">
      
      {/* 1. HERO ALANI */}
      <section className="relative pt-28 pb-16 px-4 overflow-hidden border-b border-slate-800/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full pointer-events-none opacity-40">
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm font-medium text-gray-500">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/hizmetler" className="hover:text-white transition-colors">Hizmetlerimiz</Link>
            <span>/</span>
            <span className="text-red-400">Google Ads & Pazarlama</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-red-950/30 text-red-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-red-900/50">
                <span>📈</span> ROAS ve Dönüşüm Odaklı
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Bütçenizi Değil, <br />
                <span className="bg-gradient-to-r from-red-400 to-blue-500 bg-clip-text text-transparent">
                  Gelirinizi Büyütün
                </span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed">
                Tıklama tuzağına düşen klasik reklam kampanyalarını unutun. Veri analitiği, negatif kelime mühendisliği ve yapay zeka destekli Performance Max (PMax) algoritmalarıyla; reklam bütçenizi doğrudan satışa ve nitelikli potansiyel müşteriye (Lead) dönüştürüyoruz.
              </p>
              <div className="pt-4">
                <Link 
                  href="/teklif-al"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-blue-600 text-white font-bold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(239,68,68,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition-all duration-300"
                >
                  Ücretsiz Reklam Analizi Alın
                </Link>
              </div>
            </div>
            
            {/* Sağ Taraf - Dashboard İllüstrasyonu */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-blue-500/20 rounded-2xl transform rotate-2 scale-105"></div>
              <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl shadow-2xl relative z-10">
                <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
                  <div className="text-gray-400 text-sm font-semibold">Kampanya Performansı (Aylık)</div>
                  <div className="text-green-400 text-xs font-bold bg-green-400/10 px-2 py-1 rounded">+342% ROAS</div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Dönüşüm Oranı (CR)</span>
                      <span className="text-white font-bold">%8.4</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Edinme Başına Maliyet (CPA)</span>
                      <span className="text-white font-bold">₺45.20 <span className="text-green-400 text-xs">▼ %12</span></span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                    <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                      <div className="text-gray-500 text-xs mb-1">Harcanan</div>
                      <div className="text-white font-mono">₺24,500</div>
                    </div>
                    <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-900/50">
                      <div className="text-blue-400 text-xs mb-1">Elde Edilen Gelir</div>
                      <div className="text-white font-mono">₺108,290</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. UZMANLIK ALANLARIMIZ (KAMPANYA TÜRLERİ) */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Tam Kapsamlı Dijital Reklam Yönetimi</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hedef kitlenizin dijital ayak izini takip ediyor, doğru mesajı tam olarak satın almaya hazır oldukları o kritik saniyede karşılarına çıkarıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:border-red-500/50 transition-colors">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-3">Arama Ağı (Search) Reklamları</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Müşterileriniz ürün veya hizmetinizi Google'da arattığı an en üst sırada yer alın. Gelişmiş negatif anahtar kelime listelerimizle bütçenizin alakasız tıklamalara gitmesini engelliyoruz.
              </p>
            </div>
            
            <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors">
              <div className="text-3xl mb-4">🛍️</div>
              <h3 className="text-xl font-bold text-white mb-3">Google Alışveriş (Shopping)</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                E-ticaret siteleri için can damarı. Ürünlerinizin görseli, fiyatı ve markanızla birlikte doğrudan arama sonuçlarında sergilenmesini sağlayarak satın alma niyetini anında yakalayın.
              </p>
            </div>

            <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-colors">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">Performance Max (PMax)</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Google'ın yapay zeka destekli en yeni kampanya türü. Tek bir kampanya ile YouTube, Görüntülü Reklam Ağı, Arama Ağı, Keşfet, Gmail ve Haritalar'da eş zamanlı olarak hedef kitlenize ulaşın.
              </p>
            </div>

            <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:border-orange-500/50 transition-colors">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-white mb-3">Akıllı Yeniden Pazarlama (Remarketing)</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sitenize girip alışveriş yapmadan veya form doldurmadan çıkan kullanıcıları, internetteki diğer gezintilerinde özelleştirilmiş tekliflerle yakalayıp sitenize geri getiriyoruz.
              </p>
            </div>

            <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:border-green-500/50 transition-colors lg:col-span-2">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Meta (Facebook & Instagram) ve TikTok Ads</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sadece arama niyetine değil, ilgi alanlarına ve demografik özelliklere göre hedefleme. Pixel ve Conversions API (CAPI) entegrasyonlarıyla sosyal medyanın gücünü satışa çeviren omnichannel stratejiler kurguluyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BİZİ FARKLI KILAN MÜHENDİSLİK YAKLAŞIMI */}
      <section className="py-16 px-4 bg-slate-900/20 border-y border-slate-800/50">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-white">Ajans Değil, <br className="hidden md:block"/>Büyüme Ortağınız</h2>
              <p className="text-gray-400 leading-relaxed">
                Reklamlarınızı "kur ve unut" mantığıyla yönetmiyoruz. Hesabınızı günlük olarak optimize ediyor, A/B testleriyle en iyi performans gösteren reklam metinlerini ve görsellerini süzüyoruz.
              </p>
              <ul className="space-y-4 pt-2">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded bg-blue-900/30 text-blue-400 flex items-center justify-center flex-shrink-0 mt-1 border border-blue-800/50">1</div>
                  <div>
                    <strong className="text-white block mb-1">Dönüşüm (Conversion) İzleme Kusursuzluğu</strong>
                    <p className="text-sm text-gray-500">Google Tag Manager (GTM) ve Server-Side Tracking ile hangi reklamın hangi satışı veya formu getirdiğini %100 netlikle ölçüyoruz.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded bg-blue-900/30 text-blue-400 flex items-center justify-center flex-shrink-0 mt-1 border border-blue-800/50">2</div>
                  <div>
                    <strong className="text-white block mb-1">Negatif Kelime İzolasyonu</strong>
                    <p className="text-sm text-gray-500">Sektörünüzle alakasız, sadece bütçenizi tüketen arama terimlerini sürekli olarak tespit edip engelliyoruz.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded bg-blue-900/30 text-blue-400 flex items-center justify-center flex-shrink-0 mt-1 border border-blue-800/50">3</div>
                  <div>
                    <strong className="text-white block mb-1">Şeffaf Raporlama</strong>
                    <p className="text-sm text-gray-500">Google Looker Studio üzerinden size özel hazırladığımız canlı panellerle, harcadığınız her kuruşun nereye gittiğini anlık olarak takip edebilirsiniz.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="flex-1 w-full flex justify-center lg:justify-end">
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 max-w-sm text-center shadow-xl">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                  <span className="text-3xl text-white">💰</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">ROAS Hedefi</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Bizim için başarı ölçütü tıklama sayısı (CTR) değil, harcadığınız 1 TL'nin size kaç TL olarak geri döndüğüdür.
                </p>
                <Link href="/iletisim" className="block w-full py-3 border border-slate-600 rounded-lg text-white font-medium hover:bg-slate-700 transition-colors">
                  ROAS Analizi İste
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}