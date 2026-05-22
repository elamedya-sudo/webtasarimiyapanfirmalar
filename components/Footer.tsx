import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-16 border-t border-slate-800 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* 1. SÜTUN: Marka, Vizyon ve Google Partner Rozeti */}
        <div className="space-y-6">
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
          <p className="text-sm leading-relaxed text-gray-400 mt-4 text-justify">
            Ela Teknoloji, 2001 yılında çıktığı bu yolda tam 25 yılı (çeyrek asrı) geride bırakmış, köklü bir mühendislik ve dijital dönüşüm ajansıdır. Sektörde arama motoru optimizasyonu (SEO) kavramı henüz yeni doğmuşken bu alanda mühendislik düzeyinde çalışmalar yapmaya başlayan ekibimiz, dijital trendlerin sadece takipçisi değil, her zaman öncüsü olmuştur.
          </p>
          
          {/* Google Partner Rozeti */}
          <div className="pt-2">
            <a href="https://www.google.com/partners/agency?id=2216272036" target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-105 transition-transform duration-300">
              <img src="https://www.gstatic.com/partners/badge/images/2026/PartnerBadgeClickable.svg" alt="Google Partner" className="h-16 w-auto" />
            </a>
          </div>
        </div>

        {/* 2. SÜTUN: Kurumsal Menü */}
        <div>
          <h3 className="text-white font-bold mb-6 text-lg tracking-wide uppercase">Kurumsal Menü</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/kurumsal/hakkimizda" className="text-gray-400 hover:text-[#df6e32] transition-colors">Hakkımızda</Link></li>
            <li><Link href="/kurumsal/ekibimiz" className="text-gray-400 hover:text-[#df6e32] transition-colors">Ekibimiz</Link></li>
            <li><Link href="/basari-hikayeleri" className="text-gray-400 hover:text-[#df6e32] transition-colors">Başarı Hikayeleri</Link></li>
            <li><Link href="/projeler" className="text-gray-400 hover:text-[#df6e32] transition-colors">Projeler</Link></li>
            <li><Link href="/iletisim" className="text-gray-400 hover:text-[#df6e32] transition-colors">İletişim</Link></li>
          </ul>
        </div>

        {/* 3. SÜTUN: Hizmetlerimiz */}
        <div>
          <h3 className="text-white font-bold mb-6 text-lg tracking-wide uppercase">Hizmetlerimiz</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/hizmetler/nextjs-headless" className="text-gray-400 hover:text-[#df6e32] transition-colors">Next.js & Headless Web Geliştirme</Link></li>
            <li><Link href="/hizmetler/dijital-kimlik" className="text-gray-400 hover:text-[#df6e32] transition-colors">Kurumsal Dijital Kimlik Tasarımı</Link></li>
            <li><Link href="/hizmetler/geo-seo" className="text-gray-400 hover:text-[#df6e32] transition-colors">SEO & GEO Mühendisliği</Link></li>
            <li><Link href="/hizmetler/google-ads" className="text-gray-400 hover:text-[#df6e32] transition-colors">Google Ads & Dijital Pazarlama</Link></li>
            <li><Link href="/hizmetler/e-ticaret" className="text-gray-400 hover:text-[#df6e32] transition-colors">E-Ticaret & Özel Dönüşüm</Link></li>
            <li><Link href="/hizmetler/saas-crm" className="text-gray-400 hover:text-[#df6e32] transition-colors">Özel SaaS & CRM Yazılımları</Link></li>
          </ul>
        </div>

        {/* 4. SÜTUN: İletişim Bilgileri */}
        <div>
          <h3 className="text-white font-bold mb-6 text-lg tracking-wide uppercase">İletişim</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <span className="text-[#df6e32] text-lg mt-0.5">📍</span>
              <span className="leading-relaxed">Küçükbakkalköy Mh. Kayışdağı Cd. Ali Ay Sk. No: 3/1 Orkide Apt. Ataşehir - İSTANBUL</span>
            </li>
            <li>
              <a href="tel:+902165765826" className="flex items-center gap-3 hover:text-white transition-colors">
                <span className="text-[#df6e32] text-lg">📞</span>
                <span>+90 (216) 576 58 26</span>
              </a>
            </li>
            <li>
              <a 
                href="https://wa.me/908503028476?text=Hizmetleriniz%20hakk%C4%B1nda%20daha%20fazla%20bilgi%20istiyorum" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 hover:text-[#25D366] transition-colors"
              >
                <span className="text-[#df6e32] text-lg group-hover:text-[#25D366]">📱</span>
                <span>WhatsApp: (850) 302 84 76</span>
              </a>
            </li>
            <li>
              <a href="mailto:destek@eladesign.net" className="flex items-center gap-3 hover:text-white transition-colors">
                <span className="text-[#df6e32] text-lg">✉️</span>
                <span>destek@eladesign.net</span>
              </a>
            </li>
          </ul>
        </div>

      </div>
      
      {/* Alt Telif Kısmı */}
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800/60 text-sm flex flex-col md:flex-row justify-between items-center text-gray-500 gap-4">
        <p>© {new Date().getFullYear()} Ela Teknoloji ve Tasarım. Tüm Hakları Saklıdır.</p>

      </div>
    </footer>
  );
}