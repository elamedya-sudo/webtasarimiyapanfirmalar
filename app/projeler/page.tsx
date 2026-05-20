'use client';

export default function ProjelerPage() {
  const referanslar = [
    "A-4 Ofset Baskı", "Abt Poliüretan", "Asisit Mühendislik", "Beyaz Filo", 
    "Beyoğlu Lisesi", "BZM Motorlu Araçlar", "Cihan Tekstil", "Çalışkan İnşaat", 
    "Elips Elektronik", "Ema Çevre Sağlık", "Erpa Kimya", "Erpa Orman Ürünleri", 
    "Eylül Tekstil", "Faik Sönmez Tekstil", "Fiil Kardeşler", "Galeri Nev Sanat", 
    "GBT Global", "Gözcü Kardeşler", "Hisçe İnşaat", "İlkerler Enerji", 
    "İnova İnşaat", "Kaan Gümrük Müşavirliği", "Kiptaş İstanbul Konutları", 
    "LBY İletişim Hizmetleri", "LDS Danışmanlık", "Marmara Deri Sanayi", 
    "Motan Metal", "Multikan Sağlık Ürünleri", "Nasyonel Otomotiv", "Nimal Tekstil", 
    "Onur Kargo", "Orçe Mühendislik Taşımacılık", "Öz Adil Yapı Malzemeleri", 
    "Özgenç Otomotiv", "Sarıhan Kardeşler", "Seta İnşaat", "Teknik Metal", 
    "Temel Otomotiv", "Verscom Bilgisayar", "VRL İnşaat"
  ];

  return (
    <div className="min-h-screen bg-[#0b1120] py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white mb-4">Projelerimiz & Referanslarımız</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            2001'den bu yana farklı sektörlerde yüzlerce firmaya dijital çözüm ortağı olduk. İşte bizi tercih eden çözüm ortaklarımızdan bazıları:
          </p>
        </div>

        {/* Referans Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {referanslar.map((ref, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex items-center justify-center text-center hover:border-[#df6e32] transition-colors group">
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{ref}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}