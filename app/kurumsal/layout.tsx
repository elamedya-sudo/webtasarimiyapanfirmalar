'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function KurumsalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Sekme Menüsü ve Linkleri
  const tabs = [
    { id: '/kurumsal/hakkimizda', label: 'Hakkımızda & Zaman Tüneli' },
    { id: '/kurumsal/misyon-vizyon', label: 'Misyon, Vizyon & Kültür' },
    { id: '/kurumsal/ekibimiz', label: 'Ekibimiz' },
    { id: '/kurumsal/nerelerdeyiz', label: 'Nerelerdeyiz' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Sayfa Üst Başlık */}
        <div className="text-center mb-12 mt-16">
          <h1 className="text-4xl font-bold text-gray-900 tracking-wide">Kurumsal Yapımız</h1>
          <p className="text-gray-500 mt-2">Çeyrek asırlık mühendislik deneyimi ve küresel operasyon gücü.</p>
        </div>

        {/* Sekme Navigasyonu (Sayfa Linkleri) */}
        <div className="flex flex-wrap justify-center border-b border-gray-200 mb-12 gap-2 md:gap-4">
          {tabs.map((tab) => {
            // Eğer /kurumsal ana dizinine girilirse varsayılan olarak hakkımızda aktif görünsün
            const isActive = pathname === tab.id || (pathname === '/kurumsal' && tab.id === '/kurumsal/hakkimizda');
            
            return (
              <Link
                key={tab.id}
                href={tab.id}
                className={`px-6 py-3 font-bold text-sm tracking-wide transition-all duration-300 border-b-2 ${
                  isActive
                    ? 'border-[#df6e32] text-[#df6e32]'
                    : 'border-transparent text-gray-500 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>

        {/* Sekme İçerikleri (Alt sayfalar buraya gelecek) */}
        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-gray-100 min-h-[400px]">
          {children}
        </div>

      </div>
    </div>
  );
}