'use client';

const projeler = [
  // --- İLK 3 KUTU (SABİT) ---
  {
    isim: "Tonermasters",
    link: "/basari-hikayeleri/toner-masters", 
    gorsel: "/images/projeler/tonermasters.png",
    kategori: "Başarı Hikayesi", 
    noFollow: false,
    icLink: true 
  },
  {
    isim: "Dwt Türkiye",
    link: "/basari-hikayeleri/dwt-turkiye",
    gorsel: "/images/projeler/dwt.jpg",
    kategori: "Başarı Hikayesi",
    noFollow: false,
    icLink: true 
  },
  {
    isim: "Vicom Energy",
    link: "/basari-hikayeleri/vicom-energy",
    gorsel: "/images/projeler/vicom-ref.png",
    kategori: "Başarı Hikayesi",
    noFollow: false,
    icLink: true 
  },

  // --- MERKEZ MARKALARIMIZ (Kendi markamız yazmadan profesyonel kategorilendirildi) ---
  {
    isim: "Veluxe Home",
    link: "https://www.veluxe.com.tr/",
    gorsel: "/images/projeler/veluxe.jpg",
    kategori: "Mimari & Dekorasyon",
    noFollow: false 
  },
  {
    isim: "Render Atölyesi",
    link: "https://www.renderatolyesi.com/",
    gorsel: "/images/projeler/ref-render.png",
    kategori: "3D Modelleme & Tasarım",
    noFollow: false
  },

  // --- GLOBAL PROJELER ---
  {
    isim: "Pergolasan (Amerika)",
    link: "https://www.pergolasan.us/",
    gorsel: "/images/projeler/ref-prgolasan.png",
    kategori: "Global / Üretim",
    noFollow: true
  },
  {
    isim: "iQuanta (İngiltere/Amerika)",
    link: "https://www.iquanta.co.uk/",
    gorsel: "/images/projeler/Quanta.jpg",
    kategori: "Global / Finans",
    noFollow: true
  },
  {
    isim: "BB Baby (Orta Doğu)",
    link: "https://www.bbbaby.co.il/",
    gorsel: "/images/projeler/baby-ref.png",
    kategori: "Global E-Ticaret",
    noFollow: true
  },
  {
    isim: "USI Construction (Global)",
    link: "https://www.usi.construction/",
    gorsel: "/images/projeler/16.png",
    kategori: "Global / İnşaat",
    noFollow: true
  },

  // --- E-TİCARET & MODA ---
  {
    isim: "By Evren Musti",
    link: "https://www.byevrenmusti.com/",
    gorsel: "/images/projeler/evren.jpg",
    kategori: "E-Ticaret / Moda",
    noFollow: true
  },
  {
    isim: "Lemotti",
    link: "https://www.lemotti.com/",
    gorsel: "/images/projeler/lemotti-1.jpg",
    kategori: "E-Ticaret / Giyim",
    noFollow: true
  },
  {
    isim: "Lima Lingerie",
    link: "https://www.limalingerie.com/",
    gorsel: "/images/projeler/ref-limalingerie.png",
    kategori: "E-Ticaret / Giyim",
    noFollow: true
  },

  // --- SAĞLIK & MEDİKAL & BİYOTEKNOLOJİ ---
  {
    isim: "Genalyse",
    link: "https://www.genalyse.com/",
    gorsel: "/images/projeler/ref-genalyse.png",
    kategori: "Biyoteknoloji / Kurumsal",
    noFollow: true
  },
  {
    isim: "Livya Dent",
    link: "https://www.livyadent.com/",
    gorsel: "/images/projeler/ref-livyadent.png",
    kategori: "Sağlık / Medikal",
    noFollow: true
  },
  {
    isim: "Elika Psikoloji",
    link: "https://www.elikapsikoloji.com/",
    gorsel: "/images/projeler/elika.png",
    kategori: "Sağlık / Danışmanlık",
    noFollow: true
  },

  // --- KURUMSAL & ENDÜSTRİYEL ---
  {
    isim: "İnokstek",
    link: "https://www.inokstek.com/",
    gorsel: "/images/projeler/ref-inokstek.png",
    kategori: "Endüstriyel / Kurumsal",
    noFollow: true
  },
  {
    isim: "Adocim",
    link: "https://adocim.com/",
    gorsel: "/images/projeler/1.png",
    kategori: "Kurumsal / Sanayi",
    noFollow: true
  },
  {
    isim: "Polight",
    link: "https://www.polight.com.tr/",
    gorsel: "/images/projeler/polight-ref.png",
    kategori: "Kurumsal / Üretim",
    noFollow: true
  },
  {
    isim: "Karadağ Plasmak",
    link: "https://www.karadagplasmak.com/",
    gorsel: "/images/projeler/ref-karadag.png",
    kategori: "Endüstriyel Üretim",
    noFollow: true
  },
  {
    isim: "Daima Lift",
    link: "https://daimalift.com/",
    gorsel: "/images/projeler/ref-daima.png",
    kategori: "Endüstriyel / Kurumsal",
    noFollow: true
  },
  {
    isim: "Artem",
    link: "https://www.artem.com.tr/",
    gorsel: "/images/projeler/ref-artem.png",
    kategori: "Kurumsal",
    noFollow: true
  },
  {
    isim: "Ne Kolay Filo",
    link: "https://www.nekolayfilo.com/",
    gorsel: "/images/projeler/ref-nekolay.png",
    kategori: "Kurumsal / Otomotiv",
    noFollow: true
  },
  {
    isim: "Comilac",
    link: "https://comilac.com.tr/",
    gorsel: "/images/projeler/14.png",
    kategori: "Kurumsal / Üretim",
    noFollow: true
  },

  // --- MİMARİ & YAZILIM & DİĞER ---
  {
    isim: "Hasan Sever İnşaat",
    link: "https://www.hasansever.com/",
    gorsel: "/images/projeler/ref-hasansever.png",
    kategori: "İnşaat / Mimari",
    noFollow: true
  },
  {
    isim: "Soyalan Mimarlık",
    link: "https://www.soyalanmimarlik.com/",
    gorsel: "/images/projeler/ref-soyalan.png",
    kategori: "Mimari / Tasarım",
    noFollow: true
  },
  {
    isim: "ProgeCAD Türkiye",
    link: "https://www.progecadturkiye.com/",
    gorsel: "/images/projeler/progecad-ref.png",
    kategori: "Yazılım / Distribütör",
    noFollow: true
  },
  {
    isim: "Duygu Şahbudak",
    link: "https://www.duygusahbudak.com/",
    gorsel: "/images/projeler/ds-ref.png",
    kategori: "Menajerlik Ajansı",
    noFollow: true
  }
];

export default function ProjelerPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-wide mb-4">Projelerimiz</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Geliştirdiğimiz Headless altyapılar, yönettiğimiz küresel e-ticaret ağları ve kurumsal markalara sunduğumuz mühendislik çözümleri.
          </p>
        </div>
        
        {/* lg:grid-cols-3 ile yan yana maksimum 3 kutu kalması garantilendi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projeler.map((proje, index) => (
            <a 
              key={index}
              href={proje.link}
              target={proje.icLink ? "_self" : "_blank"}
              rel={proje.noFollow ? "nofollow noopener noreferrer" : "noopener noreferrer"}
              className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#df6e32]/10 hover:border-[#df6e32]/30"
            >
              <div className="relative h-56 w-full overflow-hidden bg-gray-100 flex items-center justify-center border-b border-gray-100">
                <img 
                  src={proje.gorsel} 
                  alt={proje.isim} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x256?text=Gorsel+Bulunamadi";
                  }}
                />
                
                {/* Siteye Git İkonu */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-gray-900 font-bold text-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {proje.icLink ? "Hikayeyi Oku" : "Siteyi İncele"}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <span className="text-[#933c81] text-xs font-black uppercase tracking-widest mb-2">{proje.kategori}</span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#df6e32] transition-colors line-clamp-2">{proje.isim}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}