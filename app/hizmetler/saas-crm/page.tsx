'use client';

import Link from 'next/link';

export default function SaasCrmPage() {
  return (
    <div className="min-h-screen bg-[#0b1120] font-sans selection:bg-[#933c81] selection:text-white pb-20">
      
      {/* 1. HERO ALANI */}
      <section className="relative pt-28 pb-16 px-4 overflow-hidden border-b border-slate-800/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full pointer-events-none opacity-40">
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-[#10b981]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-[#933c81]/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm font-medium text-gray-500">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/hizmetler" className="hover:text-white transition-colors">Hizmetlerimiz</Link>
            <span>/</span>
            <span className="text-[#10b981]">Özel SaaS & CRM</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-950/30 text-emerald-400 text-xs font-semibold px-4 py-1.5 rounded-full border border-emerald-900/50">
                <span>💻</span> Bulut Tabanlı Kurumsal Yönetim
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                İşletmenize Özel <br />
                <span className="bg-gradient-to-r from-[#10b981] to-[#933c81] bg-clip-text text-transparent">
                  SaaS & CRM Çözümleri
                </span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed">
                Paket programların sınırlarına hapsolmayın. Teklif süreçlerinizi, müşteri ön muhasebesini, personel yönetimini ve operasyonlarınızı tek bir merkezden, sadece sizin iş akışınıza özel olarak tasarlanmış bulut tabanlı sistemlerle yönetin.
              </p>
              <div className="pt-4">
                <Link 
                  href="/teklif-al"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#10b981] to-[#933c81] text-white font-bold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(147,60,129,0.4)] hover:-translate-y-1 transition-all duration-300"
                >
                  Yazılım İhtiyacınızı Belirleyelim
                </Link>
              </div>
            </div>
            
            {/* Sağ Taraf - Dashboard İllüstrasyonu */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#10b981]/10 to-[#933c81]/20 rounded-2xl transform rotate-2 scale-105"></div>
              <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl relative z-10 overflow-hidden">
                {/* Sahte Tarayıcı/Uygulama Üst Barı */}
                <div className="bg-slate-800 px-4 py-3 border-b border-slate-700 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-4 bg-slate-900 rounded px-3 py-1 text-xs text-gray-500 font-mono w-48">crm.isletmeniz.com</div>
                </div>
                {/* İçerik */}
                <div className="p-6 flex gap-6">
                  {/* Sol Menü Modeli */}
                  <div className="w-1/4 space-y-3">
                    <div className="h-6 w-full bg-slate-800 rounded"></div>
                    <div className="h-6 w-3/4 bg-slate-800/50 rounded"></div>
                    <div className="h-6 w-5/6 bg-slate-800/50 rounded"></div>
                    <div className="h-6 w-2/3 bg-slate-800/50 rounded"></div>
                  </div>
                  {/* Ana Ekran Modeli */}
                  <div className="w-3/4 space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-1 h-20 bg-gradient-to-br from-[#10b981]/20 to-transparent border border-[#10b981]/30 rounded-xl p-3">
                        <div className="w-8 h-8 rounded-full bg-[#10b981]/20 mb-2"></div>
                        <div className="w-1/2 h-3 bg-[#10b981]/50 rounded"></div>
                      </div>
                      <div className="flex-1 h-20 bg-slate-800/50 rounded-xl p-3 border border-slate-700">
                        <div className="w-8 h-8 rounded-full bg-slate-700 mb-2"></div>
                        <div className="w-2/3 h-3 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                    <div className="w-full h-32 bg-slate-800/30 rounded-xl border border-slate-700 p-4">
                      <div className="w-1/3 h-4 bg-slate-700 rounded mb-4"></div>
                      <div className="w-full h-2 bg-slate-700 rounded mb-2"></div>
                      <div className="w-5/6 h-2 bg-slate-700 rounded mb-2"></div>
                      <div className="w-4/6 h-2 bg-slate-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AVANTAJLAR VE ÖZELLİKLER */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Kendi Yazılımınıza Sahip Olmanın Gücü</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Excel tablolarında kaybolmaya veya karmaşık arayüzlere sahip yabancı sistemlere aylık yüksek lisans ücretleri ödemeye son.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:border-[#10b981]/50 transition-colors group">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">🏢</div>
              <h3 className="text-xl font-bold text-white mb-3">Teklif ve Müşteri Ön Muhasebesi</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Müşterilerinize saniyeler içinde şık teklifler oluşturun. Kabul edilen teklifleri anında projeye veya faturaya dönüştürüp, tahsilat ve ön muhasebe süreçlerinizi tek bir çatı altında tutun.
              </p>
            </div>
            
            <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:border-[#933c81]/50 transition-colors group">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">🔗</div>
              <h3 className="text-xl font-bold text-white mb-3">B2B ve B2C Müşteri Portalları</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sadece çalışanlarınız için değil, müşterileriniz veya bayileriniz için de özel portallar geliştiriyoruz. Sipariş geçebilecekleri, destek talebi açabilecekleri veya cari durumlarını görebilecekleri güvenli ağlar.
              </p>
            </div>

            <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:border-[#df6e32]/50 transition-colors group">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">🤖</div>
              <h3 className="text-xl font-bold text-white mb-3">İş Akışı Otomasyonu</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Tekrar eden manuel işleri yazılıma devredin. Bir form doldurulduğunda otomatik mail atılması, faturası geciken müşteriye SMS gönderilmesi gibi kuralları (trigger) sisteme entegre ediyoruz.
              </p>
            </div>

            <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:border-[#10b981]/50 transition-colors group">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">🔌</div>
              <h3 className="text-xl font-bold text-white mb-3">Kesintisiz API Entegrasyonları</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Mevcut ERP sistemlerinizle (Logo, Micro, SAP vb.), ödeme altyapılarıyla (Iyzico, PayTR) veya e-devlet servisleriyle (e-Fatura) tam entegre çalışabilen akıllı köprüler kuruyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEDEN BİZ? / YAKLAŞIMIMIZ */}
      <section className="py-16 px-4 bg-slate-900/20 border-y border-slate-800/50">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            
            <div className="flex-1 w-full order-2 md:order-1">
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Yazılım Geliştirme Sürecimiz</h3>
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-600 before:to-transparent">
                  {/* Step 1 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full border border-slate-500 bg-slate-800 text-gray-300 font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">1</div>
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl border border-slate-700 bg-slate-800/80 shadow-sm">
                      <h4 className="font-bold text-white mb-1">İhtiyaç Analizi</h4>
                      <p className="text-sm text-gray-400">İş süreçlerinizi dinliyor, kağıt üzerinde mimariyi tasarlıyoruz.</p>
                    </div>
                  </div>
                  {/* Step 2 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full border border-slate-500 bg-slate-800 text-gray-300 font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">2</div>
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl border border-slate-700 bg-slate-800/80 shadow-sm">
                      <h4 className="font-bold text-white mb-1">Arayüz (UI/UX)</h4>
                      <p className="text-sm text-gray-400">Personelinizin zorlanmadan kullanacağı temiz ve sezgisel ekranlar çiziyoruz.</p>
                    </div>
                  </div>
                  {/* Step 3 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full border border-[#10b981] bg-[#10b981]/20 text-[#10b981] font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(16,185,129,0.3)]">3</div>
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl border border-[#10b981]/30 bg-[#10b981]/10 shadow-sm">
                      <h4 className="font-bold text-white mb-1">Kodlama & Test</h4>
                      <p className="text-sm text-gray-300">Modern ve güvenli bir altyapı ile sistemi ayağa kaldırıp stres testlerinden geçiriyoruz.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-6 order-1 md:order-2">
              <h2 className="text-3xl font-bold text-white">Yüksek Verimlilik, <br />Sıfır Lisans Maliyeti</h2>
              <p className="text-gray-400 leading-relaxed">
                Küresel SaaS platformlarına kullanıcı başına her ay yüzlerce dolar ödemek yerine, kendi şirketinizin malı olan kapalı devre (On-Premise) veya size özel barındırılan (Private Cloud) çözümlere sahip olun. 
              </p>
              <p className="text-gray-400 leading-relaxed">
                Gelecekte firmanız büyüdükçe veya yeni bir departman eklendiğinde yazılımınız da sizinle birlikte, tam istediğiniz şekilde esner ve genişler.
              </p>
              <div className="pt-4">
                <Link href="/iletisim" className="text-[#10b981] font-bold hover:text-white transition-colors flex items-center gap-2">
                  Ofisimizde Demomuzu İnceleyin <span>→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}