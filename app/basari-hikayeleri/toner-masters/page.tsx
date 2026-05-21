'use client';

export default function TonermastersCase() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-gray-300 py-20 px-4">
      <article className="max-w-4xl mx-auto space-y-16">
        
        {/* Giriş ve Mücadele */}
        <header className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Tonermasters: 15 Günde Dijital İflasın Eşiğinden Global Liderliğe</h1>
            <p className="text-xl text-gray-400 italic">"Alman yazılım firması iflas etti, kodları vermiyorlar. 15 gün içinde taşınmanız lazım." - İşte o meşhur sabah aramasıyla başlayan 15 günlük yazılım operasyonumuzun hikayesi.</p>
          </div>
          
          {/* YENİ EKLENEN CANLI SİTE BUTONU */}
          <div>
            <a 
              href="https://www.tonermasters.com.au" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#933c81] to-[#df6e32] text-white font-extrabold tracking-wide py-3 px-8 rounded-xl shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1 transition-all duration-300"
            >
              Canlı Siteyi İncele
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </header>

        {/* 1. Bölüm: 15 Günlük Göç Operasyonu */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-[#933c81]">01.</span> 15 Günlük Yazılım Göçü (Migration)
          </h2>
          <p className="mb-4">Eski Alman e-ticaret altyapısı iflas edip kaynak kodlara erişim kapandığında, Tonermasters için saatler işliyordu. Elimizde sadece ürün listeleri, sipariş veritabanı ve üye kayıtları vardı.</p>
          <div className="bg-slate-900 border-l-4 border-[#933c81] p-6 rounded-r-xl">
            <ul className="space-y-3 text-sm">
              <li>✅ <strong>Veri Restorasyonu:</strong> Dağınık formattaki verileri temizleyerek Woo-Commerce altyapısına %100 uyumlu hale getirdik.</li>
              <li>✅ <strong>Sıfır Kesinti:</strong> Taşınma sürecini, müşterilerin fark etmeyeceği şekilde, 15 gün gibi rekor bir sürede tamamladık.</li>
            </ul>
          </div>
        </section>

        {/* 2. Bölüm: Siber Güvenlik */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-[#df6e32]">02.</span> PayPal ve Bot Saldırıları ile Mücadele
          </h2>
          <p className="mb-4">Sistem stabilize olduktan kısa süre sonra, sitenin PayPal ödeme kapısını hedef alan, dakikada 60 fake sipariş üreten devasa bir saldırı başladı. 2 AUD'lik ürünler üzerinden yapılan bu bot trafiği, tüm e-ticaret akışını felç ediyordu.</p>
          <div className="bg-slate-900 border-l-4 border-[#df6e32] p-6 rounded-r-xl">
            <p className="text-sm">Cloudflare tarafında sadece standart güvenlik duvarı yetmedi. <strong>Custom WAF kuralları</strong> yazarak botların ayak izlerini (fingerprint) takip ettik. Eklenti katmanında değil, doğrudan Edge seviyesinde yaptığımız filtrelemelerle sahte sipariş trafiğini %99 oranında engelledik.</p>
          </div>
        </section>

        {/* 3. Bölüm: ADS Operasyonunu Devralmak */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-[#10b981]">03.</span> ADS Operasyonunda "Sessiz 9 Ay"
          </h2>
          <p className="mb-4">Daha da ilginç olan, firmanın ADS tarafını yöneten "Amerikalı Neal"in, aslında 9 aydır hesaba bakmadığını keşfetmemizdi. Bir sabah kontrol ettiğimizde, Neal'in firmayı devredip gittiğini ve kampanyaların kendi haline bırakıldığını fark ettik.</p>
          <div className="bg-slate-800 p-6 rounded-xl italic text-gray-400">
            "Sıfır müdahale ile geçen 9 ayın sonunda, ads hesabını devralarak yeniden kurguladık. Şubat 2026'da 24.000 AUD olan reklam bütçesini, performans verileriyle 30.000 AUD'ye çıkartırken, ROAS oranlarını optimize ettik."
          </div>
        </section>

        {/* Sonuç Bölümü */}
        <footer className="bg-gradient-to-r from-[#933c81] to-[#df6e32] p-10 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Mühendislik Sadece Kod Yazmak Değildir</h3>
          <p className="text-white text-lg">Bir sabah gelen telefonla başlayan bu macera, bugün Avustralya pazarında sağlam bir e-ticaret imparatorluğuna dönüştü. Siz de iş süreçlerinizde "yönetilmiyor" veya "iflas ediyor" hissi yaşıyorsanız, mühendislik yaklaşımımızla tanışın.</p>
        </footer>

      </article>
    </div>
  );
}