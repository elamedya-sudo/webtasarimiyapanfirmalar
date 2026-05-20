'use client';

import Image from 'next/image';

const projeler = [
  {
    isim: "Tonermasters",
    link: "https://tonermasters.com.au",
    gorsel: "/images/projeler/tonermasters.png",
    kategori: "E-Ticaret",
    noFollow: true // SEO için kontrol noktası
  },
  {
    isim: "Sobece",
    link: "https://sobece.com",
    gorsel: "/images/projeler/sobece.png",
    kategori: "Kurumsal",
    noFollow: false
  },
  // İstediğin kadar proje ekleyebilirsin
];

export default function ProjelerPage() {
  return (
    <div className="min-h-screen bg-[#0b1120] py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-white mb-12">Projelerimiz</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projeler.map((proje, index) => (
            <a 
              key={index}
              href={proje.link}
              target="_blank"
              rel={proje.noFollow ? "nofollow noopener noreferrer" : "noopener noreferrer"}
              className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden block transition-all duration-500 hover:-translate-y-2 hover:border-[#df6e32]/50 hover:shadow-2xl hover:shadow-[#df6e32]/10"
            >
              {/* Görsel Alanı */}
              <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-slate-800 animate-pulse" /> {/* Yüklenirken efekt */}
                <Image 
                  src={proje.gorsel} 
                  alt={proje.isim} 
                  fill 
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] to-transparent opacity-80" />
              </div>

              {/* İçerik Alanı */}
              <div className="p-6">
                <span className="text-[#933c81] text-xs font-bold uppercase tracking-widest">{proje.kategori}</span>
                <h3 className="text-xl font-bold text-white mt-1 group-hover:text-[#df6e32] transition-colors">{proje.isim}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}