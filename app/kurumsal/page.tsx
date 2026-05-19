'use client';

import Link from 'next/link';

export default function KurumsalPage() {
  return (
    <div className="min-h-screen bg-[#0b1120] font-sans selection:bg-[#933c81] selection:text-white pb-20">
      
      {/* 1. HERO / BAŞLIK ALANI */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        {/* Arka Plan Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full pointer-events-none opacity-40">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#933c81]/30 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#df6e32]/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 text-[#df6e32] text-xs font-semibold px-4 py-1.5 rounded-full border border-slate-700 backdrop-blur-sm mb-6">
            <span>🏆</span> Web Sitesi Yapan Firmalar Arasında En Deneyimlisi
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
            Bizi Yakından <span className="bg-gradient-to-r from-[#933c81] to-[#df6e32] bg-clip-text text-transparent">Tanıyın</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            2001 Yılından bu yana titizlikle çalışarak müşterilerimizin web tasarım ve yazılım ihtiyaçlarını karşılıyoruz. Sizi rakiplerinizden ayıran göz alıcı tasarımlar ve yenilikçi mühendislik çözümleriyle arama motorlarında zirveye taşıyoruz.
          </p>
        </div>
      </section>

      {/* 2. İSTATİSTİKLER (SAYILARLA BİZ) */}
      <section className="py-12 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 text-center shadow-lg">
              <div className="text-5xl font-extrabold text-white mb-2">25+</div>
              <h3 className="text-[#df6e32] font-semibold text-lg mb-3">Yıllık Sektör Tecrübesi</h3>
              <p className="text-gray-400 text-sm leading-relaxed">2001 yılından bugüne sürekli değişen web teknolojilerine öncülük ediyor, işletmenize kalıcı değer katan köklü bir dijital miras inşa ediyoruz.</p>
            </div>
            <div className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 text-center shadow-lg">
              <div className="text-5xl font-extrabold text-white mb-2">1000+</div>
              <h3 className="text-[#df6e32] font-semibold text-lg mb-3">Başarılı Proje Teslimi</h3>
              <p className="text-gray-400 text-sm leading-relaxed">E-ticaret devlerinden kurumsal markalara kadar birbirinden farklı sektörlerde başarı hikayelerine imza atarak ciroları artıran projeler ürettik.</p>
            </div>
            <div className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 text-center shadow-lg">
              <div className="text-5xl font-extrabold text-white mb-2">%100</div>
              <h3 className="text-[#df6e32] font-semibold text-lg mb-3">Müşteri Memnuniyeti</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Proje teslimatıyla bitmeyen iş ortaklığımız ve 7/24 teknik destek güvencemizle işinizi kendi işimiz gibi sahipleniyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VİZYON VE KÜLTÜR */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Vizyonumuz ve Yaklaşımımız</h2>
              <p className="text-gray-400 leading-relaxed">
                İşletmenizi stratejik, yenilikçi ve veriye dayalı çözümlerle büyütmek bizim en büyük tutkumuz. Yaratıcılık, güven ve müşteri memnuniyetini merkeze alan çalışma prensiplerimizle; deneyimli ekibimiz size sadece vaatler değil, başarısı kanıtlanmış ve ölçülebilir sonuçlar sunar.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#933c81]/10 rounded-bl-full"></div>
              <h2 className="text-2xl font-bold text-white mb-4 relative z-10">Kültürümüz</h2>
              <p className="text-gray-400 leading-relaxed relative z-10">
                Kültürümüz, kimliğimizin ve yaptığımız her işin kalbidir. Yaratıcılığı açığa çıkarmanın ve başarıyı yakalamanın anahtarının; pozitif, destekleyici ve iş birliğine dayalı bir çalışma ortamından geçtiğine inanıyoruz. Biz burada sadece iş arkadaşı değil, büyük bir aileyiz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEĞERLERİMİZ (KART DÜZENİ) */}
      <section className="py-16 px-4 relative z-10 bg-slate-900/20 border-y border-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Değerlerimiz</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Değerlerimiz; çalışmaya, ilişkilere ve dünyaya kattığımız değere yaklaşımımızı şekillendirir. Hem kendi başarımızı hem de müşterilerimizin başarısını bu sağlam temeller üzerine inşa ediyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 hover:border-[#df6e32]/50 transition-colors">
              <div className="text-2xl mb-4">⚖️</div>
              <h3 className="text-white font-bold mb-2">Dürüstlük ve Şeffaflık</h3>
              <p className="text-gray-400 text-sm">Her zaman doğru olanı yapmaya inanıyoruz. Etik çalışma prensipleri işimizin merkezindedir.</p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 hover:border-[#df6e32]/50 transition-colors">
              <div className="text-2xl mb-4">💡</div>
              <h3 className="text-white font-bold mb-2">Yenilikçilik (İnovasyon)</h3>
              <p className="text-gray-400 text-sm">Dijital dünya sürekli değişiyor, biz de öyle. En yeni teknolojileri projelerinize entegre ediyoruz.</p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 hover:border-[#df6e32]/50 transition-colors">
              <div className="text-2xl mb-4">🤝</div>
              <h3 className="text-white font-bold mb-2">İş Birliği</h3>
              <p className="text-gray-400 text-sm">En iyi sonuçların "birlikte" üretildiğine inanıyoruz. Ekibimiz müşterilerimizle tam bir uyum içinde çalışır.</p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 hover:border-[#df6e32]/50 transition-colors">
              <div className="text-2xl mb-4">⭐</div>
              <h3 className="text-white font-bold mb-2">Mükemmeliyet</h3>
              <p className="text-gray-400 text-sm">Yaptığımız her işte en yüksek kaliteyi sunma tutkusuna sahibiz. Vasatlığa asla yer yok.</p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 hover:border-[#df6e32]/50 transition-colors">
              <div className="text-2xl mb-4">🎯</div>
              <h3 className="text-white font-bold mb-2">Müşteri Odaklılık</h3>
              <p className="text-gray-400 text-sm">Müşterilerimiz işimizin kalbidir. Size özel, sonuç odaklı çözümler üretiyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION (HAREKETE GEÇİRİCİ MESAJ) */}
      <section className="py-20 px-4 relative z-10 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">Markanızı Geleceğe Taşıyalım</h2>
          <p className="text-gray-400 mb-8">
            2001'den bu yana yüzlerce markayı dijitalde başarıya ulaştırdık. Sıradaki başarı hikayemiz sizinki olsun.
          </p>
          <Link 
            href="/teklif-al"
            className="inline-block bg-gradient-to-r from-[#933c81] to-[#df6e32] text-white font-bold px-10 py-4 rounded-xl shadow-[0_0_20px_rgba(223,110,50,0.3)] hover:shadow-[0_0_30px_rgba(223,110,50,0.5)] hover:-translate-y-1 transition-all duration-300"
          >
            Hemen Tanışalım
          </Link>
        </div>
      </section>

    </div>
  );
}