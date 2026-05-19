// app/components/FloatingActions.tsx
'use client';

import { useState } from 'react';

export default function FloatingActions() {
  const [isHovered, setIsHovered] = useState(false);

  // Ela Teknoloji İletişim Bilgileri
  const phone = '+902165765826';
  const whatsapp = '+908503028476';

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group md:bottom-8 md:right-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. GİZLİ EYLEMLER (Hover Olunca Açılır) */}
      <div 
        className={`flex flex-col items-end gap-2 transition-all duration-300 ease-in-out ${
          isHovered ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'
        }`}
      >
        {/* Hemen Ara Butonu */}
        <a
          href={`tel:${phone}`}
          className="bg-white border border-slate-200 text-gray-800 flex items-center gap-3 px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all duration-200 group/btn"
          title="Bizi Hemen Ara"
        >
          <span className="text-sm font-medium text-slate-600 group-hover/btn:text-gray-950">
            Mühendislik Hattı
          </span>
          <span className="w-9 h-9 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 border border-orange-200">
            📞
          </span>
        </a>

        {/* WhatsApp Butonu */}
        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border border-slate-200 text-gray-800 flex items-center gap-3 px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all duration-200 group/btn"
          title="WhatsApp Destek Hattı"
        >
          <span className="text-sm font-medium text-slate-600 group-hover/btn:text-gray-950">
            WhatsApp Destek
          </span>
          <span className="w-9 h-9 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 border border-emerald-200">
            💬
          </span>
        </a>
      </div>

      {/* 2. ANA MERKEZ (HUB) BUTONU (Hep Görünür) */}
      <button 
        className={`w-16 h-16 rounded-full flex flex-col items-center justify-center shadow-2xl transition-all duration-300 ${
          isHovered 
            ? 'bg-slate-900 rotate-45 scale-90' 
            : 'bg-gradient-to-br from-[#933c81] to-[#df6e32]'
        }`}
        aria-label="İletişim Seçenekleri"
      >
        {/* İkon: Normalde İletişim Balonu, Hover Olunca 'X' (rotasyon ile) */}
        {isHovered ? (
          <span className="text-white text-3xl font-bold transition-transform duration-300">
            +
          </span>
        ) : (
          <div className="text-white text-3xl transition-transform duration-300 flex flex-col items-center">
            ✉️
            <span className="text-[10px] font-semibold text-white/80 tracking-wide mt-0.5">Bize Ulaşın</span>
          </div>
        )}
      </button>

    </div>
  );
}