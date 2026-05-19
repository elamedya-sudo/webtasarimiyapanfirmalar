'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const services = [
    { name: 'Next.js & Headless Web Geliştirme', href: '/hizmetler/nextjs-headless' },
    { name: 'Kurumsal Dijital Kimlik Tasarımı', href: '/hizmetler/dijital-kimlik' },
    { name: 'SEO & GEO Mühendisliği', href: '/hizmetler/geo-seo' },
    { name: 'Google Ads & Dijital Pazarlama', href: '/hizmetler/google-ads' },
    { name: 'E-Ticaret & Özel Dönüşüm Çözümleri', href: '/hizmetler/e-ticaret' },
    { name: 'Özel SaaS & CRM Yazılımları', href: '/hizmetler/saas-crm' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Ela Teknoloji Logo" width={180} height={48} className="object-contain" priority />
          </Link>

          {/* MASAÜSTÜ MENÜ (Projeler Geri Geldi) */}
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700 items-center">
            <Link href="/" className="hover:text-[#df6e32] transition-colors">Ana Sayfa</Link>
            <Link href="/kurumsal" className="hover:text-[#df6e32] transition-colors">Kurumsal</Link>
            
            <div className="relative group py-2">
              <Link href="/hizmetler" className="hover:text-[#df6e32] transition-colors flex items-center gap-1">
                Hizmetlerimiz <span className="text-[10px]">▼</span>
              </Link>
              <div className="absolute top-full left-0 mt-0 w-72 bg-white border border-gray-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left flex flex-col p-2">
                {services.map((service, index) => (
                  <Link 
                    key={index} href={service.href}
                    className="px-4 py-2 text-sm text-gray-600 hover:text-[#933c81] hover:bg-purple-50 rounded-lg transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/projeler" className="hover:text-[#df6e32] transition-colors">Projeler</Link>
            <Link href="/blog" className="hover:text-[#df6e32] transition-colors">Blog</Link>
            <Link href="/iletisim" className="hover:text-[#df6e32] transition-colors">İletişim</Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Link href="/teklif-al" className="bg-[#933c81] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-opacity-90 hover:shadow-lg transition-all">
                Proje Başlat
              </Link>
            </div>
            <button className="md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 focus:outline-none z-50" onClick={toggleMenu} aria-label="Menüyü Aç">
              <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={toggleMenu} />

      <div className={`fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-20 flex items-center px-6 border-b border-gray-100">
          <Image src="/logo.png" alt="Ela Teknoloji" width={140} height={38} className="object-contain" />
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-6 space-y-6">
          <Link href="/" onClick={toggleMenu} className="block text-xl font-bold text-gray-800">Ana Sayfa</Link>
          <Link href="/kurumsal" onClick={toggleMenu} className="block text-xl font-bold text-gray-800">Kurumsal</Link>
          
          <div className="flex flex-col">
            <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="flex justify-between items-center text-xl font-bold text-gray-800 w-full focus:outline-none">
              Hizmetlerimiz <span className={`text-sm text-[#df6e32] transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 flex flex-col ${isServicesOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
              <div className="flex flex-col space-y-4 pl-4 border-l-2 border-[#933c81]/30">
                <Link href="/hizmetler" onClick={toggleMenu} className="text-[#df6e32] font-bold">Tüm Hizmetler →</Link>
                {services.map((service, index) => (
                  <Link key={index} href={service.href} onClick={toggleMenu} className="text-gray-600 hover:text-[#933c81] font-medium text-sm">
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* MOBİL MENÜ (Projeler Geri Geldi) */}
          <Link href="/projeler" onClick={toggleMenu} className="block text-xl font-bold text-gray-800">Projeler</Link>
          <Link href="/blog" onClick={toggleMenu} className="block text-xl font-bold text-gray-800">Blog</Link>
          <Link href="/iletisim" onClick={toggleMenu} className="block text-xl font-bold text-gray-800">İletişim</Link>
        </div>

        <div className="p-6 border-t border-gray-100 bg-gray-50">
          <Link href="/teklif-al" onClick={toggleMenu} className="flex items-center justify-center w-full bg-gradient-to-r from-[#933c81] to-[#df6e32] text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all">
            Proje Başlat
          </Link>
        </div>
      </div>
    </>
  );
}