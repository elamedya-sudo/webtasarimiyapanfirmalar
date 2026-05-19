import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 border-t border-slate-800 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Marka ve Vizyon */}
        <div className="space-y-4">
          <div className="relative w-48 h-12">
            <Image 
              src="/logo.png" 
              alt="Ela Teknoloji" 
              fill
              sizes="(max-width: 768px) 192px, 192px"
              className="brightness-0 invert opacity-90 object-contain object-left" 
              priority={false}
            />
          </div>
          <p className="text-sm leading-relaxed text-gray-400 mt-4">
            Yeni nesil mühendislik yaklaşımları ve Generative Engine Optimization (GEO) stratejileriyle dijital vitrininizi geleceğe taşıyoruz.
          </p>
        </div>

        {/* Hızlı Menü */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Hızlı Menü</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/kurumsal" className="hover:text-white transition-colors">Hakkımızda</Link></li>
            <li><Link href="/hizmetler" className="hover:text-white transition-colors">Neler Yapıyoruz?</Link></li>
            <li><Link href="/projeler" className="hover:text-white transition-colors">Portfolyo</Link></li>
            <li><Link href="/iletisim" className="hover:text-white transition-colors">İletişim</Link></li>
          </ul>
        </div>

        {/* İletişim Bilgileri */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">İletişim</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <span className="text-lg">📍</span>
              <span>Küçükbakkalköy Mh. Kayışdağı Cd. Ali Ay Sk. No: 3/1 Orkide Apt. Ataşehir - İSTANBUL</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-lg">📞</span>
              <span>+90 (216) 576 58 26</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-lg">📱</span>
              <span>WhatsApp: (850) 302 84 76</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-lg">✉️</span>
              <span>elamedya@gmail.com</span>
            </li>
          </ul>
        </div>

      </div>
      
      {/* Alt Telif Kısmı */}
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} Ela Teknoloji ve Tasarım. Tüm Hakları Saklıdır.
      </div>
    </footer>
  );
}