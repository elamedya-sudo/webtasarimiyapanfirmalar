'use client';

export default function TonermastersCase() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-gray-300 py-20 px-4">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Tonermasters: Global Ölçekte Bot Koruması ve Performans</h1>
        
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 my-10">
          <h3 className="text-xl font-bold text-white mb-4">Mühendislik Problemi</h3>
          <p className="leading-relaxed">Avustralya pazarında lider olan Tonermasters, PayPal üzerinden gelen yoğun bot saldırıları (sahte siparişler) ve yüksek trafik altında yavaşlayan veritabanı sorguları ile karşı karşıyaydı. Mevcut altyapı, artan reklam bütçesine rağmen dönüşüm oranlarını kısıtlıyordu.</p>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">Uygulanan Çözümler</h3>
        <ul className="list-disc pl-6 space-y-4 mb-10">
          <li><strong>Cloudflare Bot Management:</strong> WAF kuralları ve bot koruması ile sahte trafiğin %99'u kaynakta engellendi.</li>
          <li><strong>Bütçe Optimizasyonu:</strong> Şubat 2026 itibarıyla 24.000 AUD olan reklam bütçesi, verimlilik artışıyla 30.000 AUD seviyesine güvenle çıkarıldı.</li>
          <li><strong>Altyapı İyileştirmesi:</strong> Sunucu yanıt süreleri (TTFB) milisaniye seviyelerine indirildi.</li>
        </ul>

        <div className="bg-gradient-to-r from-[#933c81] to-[#df6e32] p-1 rounded-2xl">
          <div className="bg-[#0b1120] p-8 rounded-xl text-center">
            <h4 className="text-lg font-bold text-white mb-2">Sonuç</h4>
            <p className="text-white text-xl font-semibold">Sürdürülebilir, güvenli ve yüksek hızlı bir e-ticaret deneyimi ile artan yatırım getirisi (ROAS).</p>
          </div>
        </div>
      </article>
    </div>
  );
}