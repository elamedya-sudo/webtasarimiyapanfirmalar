import { ShieldCheck, Ruler, Clock } from 'lucide-react';

export default function Features() {
  return (
    <section className="bg-[#0f172a] py-20 text-white">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-16">
        
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
            <ShieldCheck className="w-8 h-8 text-blue-500" />
          </div>
          <h4 className="font-black text-lg mb-4 tracking-tight uppercase leading-none">10 Yıl Garanti</h4>
          <p className="text-sm text-slate-400 font-medium leading-relaxed italic mt-4 px-4">
            Profil ve mekanizma sistemlerimizde uzun ömürlü kullanım ve servis garantisi sunuyoruz.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
            <Ruler className="w-8 h-8 text-blue-500" />
          </div>
          <h4 className="font-black text-lg mb-4 tracking-tight uppercase leading-none">Hassas Ölçüm</h4>
          <p className="text-sm text-slate-400 font-medium leading-relaxed italic mt-4 px-4">
            Lazer teknolojisi ile milimetrik ölçü alarak projelerinizde sıfır hata ile montaj sağlıyoruz.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
            <Clock className="w-8 h-8 text-blue-500" />
          </div>
          <h4 className="font-black text-lg mb-4 tracking-tight uppercase leading-none">Hızlı Teslimat</h4>
          <p className="text-sm text-slate-400 font-medium leading-relaxed italic mt-4 px-4">
            İzmir'in tüm ilçelerine en hızlı çözüm sürecini taahhüt ediyoruz.
          </p>
        </div>

      </div>
    </section>
  );
}