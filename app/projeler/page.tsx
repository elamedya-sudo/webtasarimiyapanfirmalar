'use client';

const projeler = [
  {
    isim: "Tonermasters",
    link: "https://www.tonermasters.com.au",
    gorsel: "/images/projeler/tonermasters.png",
    kategori: "E-Ticaret",
    noFollow: true
  },
  {
    isim: "Dwt Türkiye",
    link: "https://www.dwt-turkiye.com",
    gorsel: "/images/projeler/dwt.jpg",
    kategori: "E-Ticaret",
    noFollow: true
  },
  {
    isim: "Vicom Energy",
    link: "https://www.vicomenergy.com",
    gorsel: "/images/projeler/vicom-ref.png",
    kategori: "Kurumsal",
    noFollow: true
  },
];

export default function ProjelerPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Projelerimiz</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projeler.map((proje, index) => (
            <a 
              key={index}
              href={proje.link}
              target="_blank"
              rel={proje.noFollow ? "nofollow noopener noreferrer" : "noopener noreferrer"}
              className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden block transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-100"
            >
              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <img 
                  src={proje.gorsel} 
                  alt={proje.isim} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x256?text=Gorsel+Bulunamadi";
                  }}
                />
              </div>

              <div className="p-6">
                <span className="text-purple-700 text-xs font-bold uppercase tracking-widest">{proje.kategori}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-orange-600 transition-colors">{proje.isim}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}