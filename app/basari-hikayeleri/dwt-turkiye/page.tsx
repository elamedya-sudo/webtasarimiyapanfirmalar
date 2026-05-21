'use client';

import Link from 'next/link';

export default function DwtTurkiyeCase() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-gray-300 py-20 px-4">
      <article className="max-w-4xl mx-auto space-y-16">
        
        {/* Giriş ve Mücadele */}
        <header className="space-y-8">
          <div className="space-y-6">
            <span className="text-[#df6e32] font-extrabold tracking-widest uppercase text-sm block">Başarı Hikayesi</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              DWT Türkiye: Alman Endüstri Devinin Dijital Altyapı Entegrasyonu
            </h1>
            <p className="text-xl text-gray-400 italic">
              "Binlerce karmaşık teknik ürünü ve endüstriyel dokümanı, global kurumsal kimliği bozmadan Türk sanayicisine en hızlı şekilde nasıl ulaştırırsınız?"
            </p>
          </div>
          
          {/* Canlı Site Butonu */}
          <div>
            <a 
              href="https://www.dwt-turkiye.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#933c81] to-[#df6e32] text-white font-extrabold tracking-wide py-3 px-8 rounded-xl shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1 transition-all duration-300"
            >
              Canlı Siteyi İncele
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
        </header>

        {/* 1. Bölüm: İhtiyaç */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-[#933c81]">01.</span> Alman Disiplini ve Global Standartlar
          </h2>
          <p className="mb-4">
            Almanya merkezli endüstri devi DWT GmbH'nin (Babcock & Wilcox) Türkiye operasyonları için ciddi bir dijital vitrin gerekiyordu. Temel zorluk; boru kaynak ağzı açma makineleri, soğuk kesim aletleri gibi son derece teknik binlerce kalemin, Almanya merkezin katı kurumsal kimlik kurallarına %100 sadık kalınarak sergilenmesiydi.
          </p>
        </section>

        {/* 2. Bölüm: Çözüm */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-[#df6e32]">02.</span> Gelişmiş Filtreleme ve Katalog Mühendisliği
          </h2>
          <p className="mb-4">
            Sanayi sektöründeki bir mühendisin aradığı teknik ürüne saniyeler içinde ulaşması hayati önem taşır. Bu kullanıcı deneyimi (UX) problemini çözmek için özel bir veri mimarisi kurguladık.
          </p>
          <div className="bg-slate-900 border-l-4 border-[#df6e32] p-6 rounded-r-xl">
            <ul className="space-y-3 text-sm">
              <li>✅ <strong>Akıllı Kategorizasyon:</strong> Karmaşık teknik verilerle dolu ürünleri, gelişmiş bir filtreleme yapısıyla anlaşılır hale getirdik.</li>
              <li>✅ <strong>Teknik Dokümantasyon:</strong> Katalog modülü entegre ederek ürün PDF'lerinin ve teknik çizimlerin tek tıkla cihazlara inmesini sağladık.</li>
            </ul>
          </div>
        </section>

        {/* 3. Bölüm: Mobil */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-[#10b981]">03.</span> "Şantiye Şartlarına" Uygun Mobil Tasarım
          </h2>
          <p className="mb-4">
            B2B endüstriyel sitelerde genellikle masaüstü kullanım ön planda olsa da, DWT müşterilerinin (şantiye şefleri, saha mühendisleri) sahada mobil cihazlardan bilgiye eriştiğini tespit ettik. Sistemi, en düşük bant genişliğinde bile şantiyede hızlı açılacak "Responsive" bir kod yapısıyla inşa ettik.
          </p>
        </section>

        {/* Sonuç Bölümü */}
        <footer className="bg-gradient-to-r from-[#933c81] to-[#df6e32] p-10 rounded-2xl text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">Ağır Sanayi, Çevik Yazılım</h3>
          <p className="text-white text-lg mb-8">
            Global markaların bölgesel güçlerini dijitalde eksiksiz yansıtmak, sıradan bir web tasarımından çok daha fazlasını; gerçek bir veri mühendisliğini gerektirir.
          </p>
          <Link href="/projeler" className="inline-block border-2 border-white text-white font-bold tracking-wide py-2 px-6 rounded-lg hover:bg-white hover:text-[#df6e32] transition-colors">
            ← Tüm Projelere Dön
          </Link>
        </footer>

      </article>
    </div>
  );
}