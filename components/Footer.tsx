import Link from 'next/link';
import { ChevronRight, Building2, Factory, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10 border-t-[6px] border-blue-600">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Sütun 1: Logo ve Kısa Açıklama */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-black tracking-tighter mb-6 uppercase italic leading-none text-white text-left">
              İZMİR KATLANIR <span className="text-blue-500 text-3xl">CAM</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8 font-medium italic text-sm text-left">
              Bornova merkezli uzman kadromuzla İzmir genelinde balkon camlama ve PVC sistemlerinde sıfır hata prensibiyle çalışıyoruz.
            </p>
          </div>

          {/* Sütun 2: Hızlı Linkler */}
          <div className="col-span-1">
            <h4 className="font-bold mb-8 text-sm tracking-[0.2em] uppercase text-blue-500 text-left">Kurumsal</h4>
            <ul className="space-y-4">
              {[
                { name: "Hakkımızda", href: "/hakkimizda" },
                { name: "Uygulama Galerisi", href: "/galeri" },
                { name: "Blog & İpuçları", href: "/blog" },
                { name: "İletişim", href: "/iletisim" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium group text-left">
                    <ChevronRight className="w-3 h-3 text-blue-500 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sütun 3 & 4: İletişim ve Lokasyon */}
          <div className="md:col-span-2">
            <h4 className="font-bold mb-8 text-sm tracking-[0.2em] uppercase text-blue-500 text-left">İletişim & Lokasyon</h4>
            <div className="grid md:grid-cols-2 gap-8 text-slate-400 text-sm font-medium">
              
              <div className="flex items-start gap-4 text-white text-left">
                <Building2 className="w-6 h-6 text-blue-500 shrink-0" />
                <p>
                  <strong className="text-white block mb-1 uppercase tracking-wider text-xs">Ofis:</strong> 
                  Ergene Mh. 460 Sk. No: 13A <br/> Bornova / İzmir
                </p>
              </div>

              <div className="flex items-start gap-4 text-white text-left">
                <Factory className="w-6 h-6 text-blue-500 shrink-0" />
                <p>
                  <strong className="text-white block mb-1 uppercase tracking-wider text-xs">Atölye:</strong> 
                  Egdir MH. Gonca SK. No: 3 <br/> Bornova / İzmir
                </p>
              </div>

              {/* Telefon ve Mail Satırı */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 col-span-full pt-4 border-t border-slate-800/50">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-blue-500 shrink-0" />
                  <a href="tel:+905382370822" className="text-lg md:text-xl font-black text-white hover:text-blue-500 transition-colors">
                    +90 (538) 237 08 22
                  </a>
                </div>
                <div className="flex items-center gap-4 sm:ml-4">
                  <Mail className="w-6 h-6 text-blue-500 shrink-0" />
                  <a href="mailto:info@izmirkatlanircam.com" className="text-xs md:text-sm font-bold text-white hover:text-blue-500 transition-colors break-all">
                    info@izmirkatlanircam.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Telif Hakkı Çubuğu */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs text-slate-500 font-medium tracking-wide">
            © {currentYear} İzmir Katlanır Cam. Tüm Hakları Saklıdır.
          </p>
          <p className="text-xs text-slate-500 flex items-center gap-1 font-medium italic">
            Designed & Coded by 
            <span className="text-blue-500 font-black tracking-[0.2em] ml-1 uppercase not-italic">ELA TEKNOLOJİ</span>
          </p>
        </div>
      </div>
    </footer>
  );
}