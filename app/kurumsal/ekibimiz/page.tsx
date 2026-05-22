'use client';
export default function EkibimizPage() {
  const ekip = [
    {
      isim: "Hüseyin Yüksel",
      unvan: "Bilgisayar Mühendisi - Kurucu",
      gorsel: "/images/ekip/hyuksel-2-1.jpg",
      email: "huseyin@eladesign.org",
      instagram: "https://www.instagram.com/yukselhy/",
      linkedin: "https://www.linkedin.com/in/huseyin-yuksel"
    },
    {
      isim: "Halil Yüksel",
      unvan: "Google ADS & SEO - Kurucu Ortak",
      gorsel: "/images/ekip/halil-yuksel.jpg",
      email: "halil@eladesign.org",
      instagram: "https://www.instagram.com/halilyuksell/",
      linkedin: "https://www.linkedin.com/in/halil-yuksel/"
    },
    {
      isim: "Ayşe Yüksel",
      unvan: "Kreatif Direktör - Kurucu Ortak",
      gorsel: "/images/ekip/ayse-ekip-1.jpg",
      email: "ayse@eladesign.org"
    },
    {
      isim: "Tanyel Çakır",
      unvan: "Mimar - 3d Max Modelleme",
      gorsel: "/images/ekip/tanyel-cakir.jpg",
      email: "tanyel@eladesign.org"
    },
    {
      isim: "Semiha Parlak",
      unvan: "Grafik Tasarım",
      gorsel: "/images/ekip/semiha-parlak.jpg",
      email: "semiha@eladesign.org"
    },
    {
      isim: "Ahmet Temel",
      unvan: "Sosyal Medya Yöneticisi",
      gorsel: "/images/ekip/ahmet-temel.jpg",
      email: "ahmet@eladesign.org"
    }
  ];

  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center md:text-left">Çözüm Odaklı Uzman Kadromuz</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ekip.map((uye, index) => (
          <div key={index} className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="h-80 w-full bg-gray-200 relative overflow-hidden">
              <img 
                src={uye.gorsel} 
                alt={uye.isim} 
                className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" 
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/300x350?text=Ela+Team";
                }}
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="text-lg font-bold text-gray-900">{uye.isim}</h4>
              <p className="text-[#933c81] text-xs font-semibold mt-1 uppercase tracking-wider">{uye.unvan}</p>
              
              <div className="flex justify-center items-center gap-3 mt-5 opacity-60 group-hover:opacity-100 transition-opacity">
                <a href={`mailto:${uye.email}`} className="text-gray-500 hover:text-[#df6e32] text-sm font-bold flex items-center gap-1 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  E-posta
                </a>
                {(uye.linkedin || uye.instagram) && <span className="text-gray-300">•</span>}
                {uye.linkedin && (
                  <a href={uye.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0077b5] text-sm font-bold transition-colors">LinkedIn</a>
                )}
                {uye.linkedin && uye.instagram && <span className="text-gray-300">•</span>}
                {uye.instagram && (
                  <a href={uye.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#E1306C] text-sm font-bold transition-colors">Instagram</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}