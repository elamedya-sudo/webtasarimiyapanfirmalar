'use client';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:bottom-8 md:right-8">
      {/* Hemen Ara Butonu */}
      <a
        href="tel:+902165765826"
        className="flex items-center justify-center w-14 h-14 bg-[#df6e32] text-white rounded-full shadow-xl hover:scale-110 transition-transform duration-200 group relative"
        title="Hemen Ara"
      >
        <span className="text-xl">📞</span>
        <span className="absolute right-16 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap hidden md:inline">
          Hemen Ara: (216) 576 58 26
        </span>
      </a>

      {/* WhatsApp Butonu */}
      <a
        href="https://wa.me/908503028476"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:scale-110 transition-transform duration-200 group relative"
        title="WhatsApp ile Yazın"
      >
        <span className="text-2xl font-bold leading-none select-none">💬</span>
        <span className="absolute right-16 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap hidden md:inline">
          WhatsApp Destek Hattı
        </span>
      </a>
    </div>
  );
}