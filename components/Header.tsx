"use client"; // Menü açma/kapama etkileşimi için gerekli
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 lg:px-12 py-6 bg-white sticky top-0 z-[100] border-b border-gray-100 shadow-sm">
      {/* Logo Alanı */}
      <div className="flex items-center">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image 
            src="/assets/images/logo.svg" 
            alt="İzmir Katlanır Cam Logo" 
            width={220} 
            height={50} 
            className="w-auto h-10 lg:h-12"
          />
        </Link>
      </div>

      {/* Masaüstü Menü */}
      <div className="hidden xl:flex items-center gap-8">
        {["Katlanır Cam", "Giyotin Sistemleri", "PVC Sistemleri", "Galeri", "Blog", "Hakkımızda", "İletişim"].map((item) => (
          <Link 
            key={item}
            href={`/${item.toLowerCase().replace(/ /g, '-').replace(/ı/g, 'i').replace(/ü/g, 'u').replace(/ç/g, 'c').replace(/ö/g, 'o').replace(/ğ/g, 'g').replace(/ş/g, 's')}`}
            className="text-[14px] font-bold tracking-widest text-gray-900 hover:text-blue-600 transition-colors uppercase whitespace-nowrap"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Sağ Taraf: Telefon Butonu ve Mobil Menü Tetikleyici */}
      <div className="flex items-center gap-4">
        <a 
          href="tel:+905382370822" 
          className="hidden lg:flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-slate-900 transition-all text-[14px] font-black tracking-widest uppercase"
        >
          <Phone className="w-4 h-4" />
          0538 237 08 22
        </a>

        {/* Mobil Menü Butonu */}
        <button 
          className="xl:hidden p-2 text-blue-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobil Menü İçeriği (Açıldığında Görünür) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 flex flex-col p-6 gap-4 xl:hidden shadow-xl animate-in slide-in-from-top duration-300">
           {["Katlanır Cam", "Giyotin Sistemleri", "PVC Sistemleri", "İletişim"].map((item) => (
            <Link 
              key={item}
              href="#" 
              className="text-lg font-bold text-gray-900 uppercase"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}