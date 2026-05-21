import { LayoutGrid, CircleCheck } from 'lucide-react';

export default function ServiceRange() {
  const services = [
    "Cambalkon - Katlanır Cam Sistemleri",
    "Isıcamlı Cam Balkon Sistemleri",
    "Giyotin Cam Sistemleri",
    "Bioklimatik Pergola Sistemleri",
    "Kış Bahçesi Sistemleri",
    "Sürme Cam Balkon Sistemleri",
    "Hareketli Cam Sistemleri",
    "Rüzgar Kırıcı Cam Sistemleri",
    "PVC Pencere ve PVC Kapı Sistemleri",
    "Sürgülü Kapı & Pencere Sistemleri",
    "Panjur & Kepenk Sistemleri",
    "Küpeşte Korkuluk Sistemleri"
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-gray-100 text-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16 items-center">
          
          {/* Sol Başlık Alanı */}
          <div className="lg:col-span-1 text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-2xl mb-8 shadow-lg">
              <LayoutGrid className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-6 leading-none">
              Tüm Hizmet <br/> Yelpazemiz
            </h2>
            <p className="text-slate-500 font-medium leading-relaxed italic">
              İzmir'in her noktasına uzman kadromuz ve mobil ekiplerimizle profesyonel uygulama desteği sağlıyoruz.
            </p>
          </div>

          {/* Sağ Liste Alanı */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-4 group cursor-default text-left">
                  <CircleCheck className="w-5 h-5 text-blue-600 shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-slate-700 font-bold text-[15px] tracking-tight leading-none uppercase">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}