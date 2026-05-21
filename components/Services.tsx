import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Services() {
  return (
    <section className="py-24 bg-white text-slate-900 text-left">
      <div className="container mx-auto px-6">
        
        {/* Başlık Alanı */}
        <div className="mb-20 text-left">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6 leading-none text-slate-900">
            Çözüm Gruplarımız
          </h2>
          <div className="w-24 h-2 bg-blue-600"></div>
        </div>

        {/* Kartlar Grid Yapısı */}
        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* Kart 1: Katlanır Cam */}
          <div className="group flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="relative h-72 overflow-hidden">
              <Image 
                src="/assets/images/izmir-katlanir-cam-sistemleri-kapak.webp" // Dosya uzantın jpg ise değiştirmeyi unutma
                alt="Katlanır Cam Dünyası" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="p-10 flex flex-col flex-grow text-left">
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter leading-tight">Katlanır Cam Dünyası</h3>
              <p className="text-sm text-slate-500 mb-8 font-medium leading-relaxed italic">Klasik, sürme, ısıcamlı ve eşiksiz hareketli cam balkon sistemleriyle dört mevsim yaşayan balkonlar.</p>
              <Link href="/hizmetler/katlanir-cam" className="mt-auto inline-flex items-center gap-2 text-blue-600 font-black text-[12px] tracking-widest uppercase group-hover:text-blue-800 transition-colors">
                SİSTEMLERİ İNCELE <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Kart 2: Giyotin Sistemleri */}
          <div className="group flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="relative h-72 overflow-hidden">
              <Image 
                src="/assets/images/izmir-giyotin-cam-otomasyon-kapak.webp" 
                alt="Giyotin & Otomasyon" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="p-10 flex flex-col flex-grow text-left">
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter leading-tight">Giyotin & Otomasyon</h3>
              <p className="text-sm text-slate-500 mb-8 font-medium leading-relaxed italic">Bioklimatik pergola, hareketli giyotin, kış bahçesi ve rüzgar kırıcılarla akıllı ve lüks mekanlar.</p>
              <Link href="/hizmetler/giyotin-cam" className="mt-auto inline-flex items-center gap-2 text-blue-600 font-black text-[12px] tracking-widest uppercase group-hover:text-blue-800 transition-colors">
                SİSTEMLERİ İNCELE <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Kart 3: PVC Sistemleri */}
          <div className="group flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="relative h-72 overflow-hidden">
              <Image 
                src="/assets/images/izmir-pvc-kapi-pencere-kapak.webp" 
                alt="PVC & Yapı Sistemleri" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="p-10 flex flex-col flex-grow text-left">
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter leading-tight">PVC & Yapı Sistemleri</h3>
              <p className="text-sm text-slate-500 mb-8 font-medium leading-relaxed italic">Üstün yalıtımlı PVC pencere, sürgülü kapılar, otomatik panjur ve paslanmaz alüminyum küpeşteler.</p>
              <Link href="/hizmetler/pvc-sistemleri" className="mt-auto inline-flex items-center gap-2 text-blue-600 font-black text-[12px] tracking-widest uppercase group-hover:text-blue-800 transition-colors">
                SİSTEMLERİ İNCELE <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}