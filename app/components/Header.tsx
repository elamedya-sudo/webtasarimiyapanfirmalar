import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo Alanı */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Ela Teknoloji Logo" 
            width={180} 
            height={48} 
            className="object-contain" 
            priority
          />
        </Link>

        {/* Masaüstü Menü */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-[#df6e32] transition-colors">Ana Sayfa</Link>
          <Link href="/kurumsal" className="hover:text-[#df6e32] transition-colors">Kurumsal</Link>
          <Link href="/hizmetler" className="hover:text-[#df6e32] transition-colors">Hizmetlerimiz</Link>
          <Link href="/basari-hikayeleri" className="hover:text-[#df6e32] transition-colors">Başarı Hikayeleri</Link>
          <Link href="/blog" className="hover:text-[#df6e32] transition-colors">Blog</Link>
          <Link href="/iletisim" className="hover:text-[#df6e32] transition-colors">İletişim</Link>
        </nav>

        {/* Hızlı Aksiyon Butonu */}
        <div className="hidden md:block">
          <Link 
            href="/teklif-al" 
            className="bg-[#933c81] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-opacity-90 hover:shadow-lg transition-all"
          >
            Proje Başlat
          </Link>
        </div>
      </div>
    </header>
  );
}