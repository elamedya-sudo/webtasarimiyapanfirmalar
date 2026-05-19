'use client';

import Link from 'next/link';

export default function DijitalKimlikPage() {
  return (
    <div className="min-h-screen bg-[#0b1120] font-sans selection:bg-[#933c81] selection:text-white pb-20">
      
      {/* 1. HERO ALANI */}
      <section className="relative pt-28 pb-16 px-4 overflow-hidden border-b border-slate-800/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full pointer-events-none opacity-40">
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-[#4f46e5]/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-[#933c81]/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm font-medium text-gray-500">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/hizmetler" className="hover:text-white transition-colors">Hizmetlerimiz</Link>
            <span>/</span>
            <span className="text-[#4f46e5]">Dijital Kimlik Tasarımı</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-indigo-900/30 text-indigo-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-indigo-800/50">
                <span>🎨</span> Özgün ve Kurumsal Çizgi
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Markanızın <br />
                <span className="bg-gradient-to-r from-[#4f46e5] to-[#933c81] bg-clip-text text-transparent">
                  Dijitaldeki Yüzü
                </span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed">
                Hazır şablonlara ve sıradan tasarımlara yer yok. Hedef kitlenizde güven uyandıran, markanızın kurumsal ağırlığını yansıtan ve kullanıcı deneyimini (UI/UX) merkeze alan tamamen size özel (bespoke) arayüzler tasarlıyoruz.
              </p>
              <div className="pt-4">
                <Link 
                  href="/teklif-al"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#4f46e5] to-[#933c81] text-white font-bold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(147,60,129,0.5)] hover:-translate-y-1 transition-all duration-300"
                >
                  Tasarım Sürecini Başlat
                </Link>
              </div>
            </div>
            
            {/* Sağ Taraf - Görsel İlüstrasyon (Soyut UI/UX) */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4f46e5]/20 to-[#933c81]/20 rounded-2xl transform -rotate-3 scale-105"></div>
              <div className="bg-slate-900 border border-slate-700 p-8 rounded-2xl shadow-2xl relative z-10">
                {/* Soyut Web Arayüzü Çizimi */}
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                </div>
                <div className="space-y-4">
                  <div className="w-1/3 h-4 bg-slate-800 rounded-md"></div>
                  <div className="w-3/4 h-8 bg-gradient-to-r from-[#4f46e5]/40 to-transparent rounded-md"></div>
                  <div className="w-1/2 h-4 bg-slate-800 rounded-md"></div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="h-24 bg-slate-800/50 rounded-lg border border-slate-700"></div>
                    <div className="h-24 bg-slate-800/50 rounded-lg border border-slate-700"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ODAK NOKTALARIMIZ */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Mükemmeliyetçi Tasarım Anlayışı</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Sadece "güzel" görünen değil, aynı zamanda kullanıcıyı hedeflenen aksiyona (dönüşüme) yönlendiren, kurum kültürünüzle birebir örtüşen stratejik tasarımlar yapıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:border-[#4f46e5]/50 transition-colors">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">UI/UX Optimizasyonu</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Kullanıcı arayüzü (UI) ve kullanıcı deneyimi (UX) testlerinden geçmiş, ziyaretçinin sitenizde kaybolmadan aradığına saniyeler içinde ulaştığı akıllı navigasyon mimarileri kuruyoruz.
              </p>
            </div>
            
            <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:border-[#4f46e5]/50 transition-colors">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-white mb-3">Mobil Öncelikli (Mobile-First)</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Trafiğin %80'inden fazlasının mobilden geldiği günümüzde, tasarımlarımıza önce mobil ekranlardan başlıyor, daha sonra masaüstü ve tablet görünümlerine ölçeklendiriyoruz.
              </p>
            </div>

            <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:border-[#4f46e5]/50 transition-colors">
              <div className="text-3xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-white mb-3">Kurumsal Marka Bütünlüğü</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Logonuzdan tipografinize, renk paletinizden kurumsal dilinize kadar her detayı birbiriyle uyumlu hale getiriyor; markanızın ağırlığını dijitale pürüzsüzce aktarıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TASARIM SÜRECİMİZ */}
      <section className="py-16 px-4 bg-slate-900/20 border-y border-slate-800/50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Profesyonel Tasarım Sürecimiz</h2>
          
          <div className="space-y-6">
            {/* Adım 1 */}
            <div className="flex flex-col md:flex-row gap-6 bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50 items-start">
              <div className="w-12 h-12 flex-shrink-0 bg-[#4f46e5]/20 text-[#4f46e5] font-bold text-xl rounded-full flex items-center justify-center border border-[#4f46e5]/30">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Keşif ve Strateji</h3>
                <p className="text-gray-400 text-sm">
                  Markanızı, sektörünüzü, rakiplerinizi ve hedef kitlenizi analiz ediyoruz. Hangi renklerin, fontların ve tasarım dilinin size en uygun olduğuna bu strateji toplantılarında karar veriyoruz.
                </p>
              </div>
            </div>

            {/* Adım 2 */}
            <div className="flex flex-col md:flex-row gap-6 bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50 items-start">
              <div className="w-12 h-12 flex-shrink-0 bg-[#933c81]/20 text-[#933c81] font-bold text-xl rounded-full flex items-center justify-center border border-[#933c81]/30">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Tel Çerçeve (Wireframing)</h3>
                <p className="text-gray-400 text-sm">
                  Renkler ve görseller işin içine girmeden önce, sayfanın iskeletini ve bilgi mimarisini çiziyoruz. Ziyaretçinin hangi butona tıklayacağı, hangi metni önce okuyacağı bu aşamada belirleniyor.
                </p>
              </div>
            </div>

            {/* Adım 3 */}
            <div className="flex flex-col md:flex-row gap-6 bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50 items-start">
              <div className="w-12 h-12 flex-shrink-0 bg-[#df6e32]/20 text-[#df6e32] font-bold text-xl rounded-full flex items-center justify-center border border-[#df6e32]/30">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Görsel Arayüz (UI) Tasarımı</h3>
                <p className="text-gray-400 text-sm">
                  Onaylanan iskeletin üzerine kurumsal kimliğinizi giydiriyor, modern ve çarpıcı bir görünüm elde ediyoruz. Animasyon senaryoları ve geçiş efektleri ile tasarımı ruh sahibi yapıyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}