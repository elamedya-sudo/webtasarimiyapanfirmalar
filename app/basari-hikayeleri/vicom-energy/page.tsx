'use client';

import Link from 'next/link';

export default function VicomEnergyCase() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-gray-300 py-20 px-4">
      <article className="max-w-4xl mx-auto space-y-16">
        
        {/* Giriş ve Mücadele */}
        <header className="space-y-8">
          <div className="space-y-6">
            <span className="text-[#df6e32] font-extrabold tracking-widest uppercase text-sm block">Başarı Hikayesi</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Vicom Energy: Nijerya'nın Elektrik Ağını Global Vitrine Taşımak
            </h1>
            <p className="text-xl text-gray-400 italic">
              "Afrika kıtasında ulusal ölçekte elektrik, gaz ve petrol dağıtımı yapan devasa bir enerji şirketini uluslararası yatırımcılara ve partnerlere nasıl sunarsınız?"
            </p>
          </div>
          
          {/* Canlı Site Butonu */}
          <div>
            <a 
              href="https://www.vicomenergy.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#933c81] to-[#df6e32] text-white font-extrabold tracking-wide py-3 px-8 rounded-xl shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1 transition-all duration-300"
            >
              Canlı Siteyi İncele
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
        </header>

        {/* 1. Bölüm */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-[#933c81]">01.</span> Afrika'nın Kalbinden Küresel Pazara
          </h2>
          <p className="mb-4">
            Nijerya'nın önde gelen enerji servis sağlayıcısı Vicom Energy Services Limited, sadece bölgesel bir aktör değil, global şirketlerle entegre çalışan bir organizasyon. Sundukları kritik altyapı hizmetlerinin (elektrik, petrol, teknik servis) ciddiyetini yansıtacak, uluslararası güvenilirlik hissi veren ve tamamen İngilizce dilinde B2B odaklı bir dijital altyapıya ihtiyaçları vardı.
          </p>
        </section>

        {/* 2. Bölüm */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-[#df6e32]">02.</span> Zorlu Mobil Altyapılara Özel Geliştirme
          </h2>
          <p className="mb-4">
            Afrika pazarında internete erişimin çok büyük bir kısmı mobil cihazlar üzerinden sağlanmaktadır. Bu demografik gerçeği göz önüne alarak, projenin çekirdeğini tamamen "Mobile-First" (Önce Mobil) mantığıyla inşa ettik.
          </p>
          <div className="bg-slate-900 border-l-4 border-[#df6e32] p-6 rounded-r-xl">
            <p className="text-sm">
              Yerel internet altyapısındaki potansiyel hız kayıplarını telafi etmek için site varlıklarını küresel CDN'ler (Content Delivery Network) üzerinden dağıttık. Çoklu hizmet yapısını sezgisel menülerle basitleştirerek, kullanıcıların gereksiz veri indirmesinin önüne geçtik.
            </p>
          </div>
        </section>

        {/* 3. Bölüm */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-[#10b981]">03.</span> B2B İletişim Otomasyonu
          </h2>
          <p className="mb-4">
            Uluslararası petrol ve gaz şirketlerinin Vicom Energy ile hızlı ve resmi bir şekilde temas kurabilmesi için "Teklif İste" (Request a Quote) modüllerini spesifik formlarla sisteme gömdük. Gelen taleplerin doğrudan ilgili departmanlara yönlendirilmesini sağlayarak şirketin dijital operasyon verimliliğini artırdık.
          </p>
        </section>

        {/* Sonuç Bölümü */}
        <footer className="bg-gradient-to-r from-[#933c81] to-[#df6e32] p-10 rounded-2xl text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">Sınır Ötesi Mühendislik Gücü</h3>
          <p className="text-white text-lg mb-8">
            Kıtalararası mesafelere ve kültürel iş yapış farklılıklarına rağmen, bir ülkenin ana elektrik sağlayıcısının dijital yüzünü sıfırdan inşa etmek, ajansımızın küresel operasyon kabiliyetinin en büyük kanıtıdır.
          </p>
          <Link href="/projeler" className="inline-block border-2 border-white text-white font-bold tracking-wide py-2 px-6 rounded-lg hover:bg-white hover:text-[#df6e32] transition-colors">
            ← Tüm Projelere Dön
          </Link>
        </footer>

      </article>
    </div>
  );
}