import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center bg-slate-900 overflow-hidden text-white">
      {/* Arka plan karartma gradyanı */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent z-10"></div>
      
      {/* Next.js Otomatik Optimize Edilmiş Görsel */}
      <Image 
        src="/assets/images/izmir-cam-balkon-ana-sayfa-banner.webp"
        alt="İzmir Cam Balkon Uygulamaları"
        fill
        priority 
        className="object-cover opacity-40"
      />

      <div className="relative z-20 container mx-auto px-6 text-left">
        <div className="max-w-4xl">
          <span className="text-blue-500 font-black tracking-[0.4em] uppercase text-xs mb-6 block">
            İzmir Geneli Profesyonel Çözümler
          </span>
          
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-8 uppercase text-left">
            İZMİR KATLANIR <br /> 
            <span className="text-blue-600 italic uppercase">CAM SİSTEMLERİ</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-12 font-medium leading-relaxed">
            İzmir'in iklimine özel geliştirilmiş yüksek yalıtımlı katlanır cam, otomasyon ve PVC sistemleri ile yaşam alanlarınıza estetik ve değer katıyoruz.
          </p>
          
          <div className="flex gap-4">
            <Link 
              href="/iletisim" 
              className="bg-blue-600 text-white px-10 py-5 rounded-sm font-black tracking-widest uppercase text-[11px] hover:bg-white hover:text-blue-600 transition-all shadow-2xl"
            >
              Ücretsiz Keşif Al
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}