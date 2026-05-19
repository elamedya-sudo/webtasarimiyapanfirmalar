'use client';

export default function TonermastersCase() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-gray-300 py-20 px-4">
      <article className="max-w-4xl mx-auto">
        {/* Başlık ve Giriş */}
        <div className="mb-12 border-b border-slate-800 pb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Tonermasters: E-Ticaretin Mühendislik Operasyonu</h1>
          <p className="text-xl text-gray-400">Avustralya'nın dijital toner pazarında, bot saldırılarını bertaraf ederek güvenli ve sürdürülebilir büyüme.</p>
        </div>

        {/* 1. Zorluklar */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Karşılaşılan Teknik Zorluklar</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <h4 className="text-red-400 font-bold mb-2">PayPal Bot Saldırıları</h4>
              <p className="text-sm">Sistem üzerinde sürekli olarak denenen sahte ödeme denemeleri, hem ödeme altyapısını zorluyor hem de envanter yönetimini manipüle ediyordu.</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <h4 className="text-orange-400 font-bold mb-2">Performans Darboğazı</h4>
              <p className="text-sm">Artan reklam bütçesiyle gelen yoğun trafik, monolitik veritabanı sorgularının yanıt süresini (TTFB) kabul edilemez seviyelere çekmişti.</p>
            </div>
          </div>
        </section>

        {/* 2. Çözüm Yaklaşımı */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Ela Teknoloji Mühendislik Çözümü</h2>
          <div className="space-y-6">
            <div className="p-6 border-l-4 border-[#933c81] bg-slate-900/30">
              <h4 className="text-white font-bold mb-2">Katmanlı Güvenlik Mimarisi (Cloudflare WAF)</h4>
              <p className="text-sm">Bot yönetimini yazılım katmanından ağ katmanına (Edge) taşıdık. Özel WAF kuralları ile şüpheli PayPal API çağrılarını siteye girmeden durdurduk.</p>
            </div>
            <div className="p-6 border-l-4 border-[#df6e32] bg-slate-900/30">
              <h4 className="text-white font-bold mb-2">Verimlilik Odaklı Reklam Yönetimi</h4>
              <p className="text-sm">Şubat 2026'da gerçekleşen teknik overhaul sonrası, atık bütçeyi (wasted spend) minimize ederek 24.000 AUD olan reklam bütçesini 30.000 AUD seviyesine, risk almadan çıkardık.</p>
            </div>
          </div>
        </section>

        {/* 3. Sonuçlar ve Metrikler */}
        <section className="bg-slate-900 rounded-2xl p-10 border border-slate-800 text-center">
          <h2 className="text-3xl font-bold text-white mb-10">Sonuçlar</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-white">Sıfır</div>
              <div className="text-xs text-gray-500 uppercase mt-2">Bot İhlali</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">+25%</div>
              <div className="text-xs text-gray-500 uppercase mt-2">Bütçe Artışı</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">400ms</div>
              <div className="text-xs text-gray-500 uppercase mt-2">Yanıt Süresi</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">Stabil</div>
              <div className="text-xs text-gray-500 uppercase mt-2">Dönüşüm Oranı</div>
            </div>
          </div>
        </section>

        <div className="mt-12 text-center">
           <Link href="/iletisim" className="text-[#df6e32] font-bold hover:underline">Sizin için benzer bir mühendislik operasyonu planlayalım mı? →</Link>
        </div>
      </article>
    </div>
  );
}