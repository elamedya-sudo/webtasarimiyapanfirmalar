'use client';
export default function HakkimizdaPage() {
  const zamanTuneli = [
    {
      yil: "2001",
      baslik: "Temeller Atıldı: Deha Bilişim",
      detay: "Deha Bilişim adıyla kurularak sektöre ilk adımımızı attık. Hem ilk tasarım ve yazılım projelerimizi geliştiriyor hem de bilgisayar ve laptop anakart tamirleri gibi donanımsal mühendislik operasyonları yürütüyorduk.",
      gorseller: ["/images/hakkimizda/dehabilisim.jpg"]
    },
    {
      yil: "2009",
      baslik: "Dijital Odak: Ela Design Dönemi",
      detay: "Kurumsal vizyonumuzu tamamen dijitale kaydırarak Ela Design markasına geçiş yaptık. Web tasarım, yazılım altyapıları ve dijital pazarlamaya %100 odaklanarak ajanslaşma sürecimizi hızlandırdık.",
      gorseller: ["/images/hakkimizda/ela2001.jpg"]
    },
    {
      yil: "2013",
      baslik: "Render Atölyesi Kuruldu",
      detay: "Teknoloji ve tasarımı daha üst bir boyuta taşıyarak bünyemizde Render Atölyesi'ni kurduk. 3D modelleme ve mimari görselleştirme güçlerimizi ekosistemimize entegre ettik.",
      gorseller: ["/images/hakkimizda/render.jpg"]
    },
    {
      yil: "2017",
      baslik: "Ataşehir Ofisine Geçiş",
      detay: "Büyüyen kadromuz ve genişleyen müşteri ağımızla birlikte Ela Web Ajans olarak Ataşehir'deki (İnönü Ofisi) yeni merkezimize taşındık.",
      gorseller: ["/images/hakkimizda/inonuofis.jpg"]
    },
    {
      yil: "2021",
      baslik: "Kurumsallaşma ve Şirketleşme",
      detay: "Hizmet kalitemizi resmi bir çatı altında pekiştirerek Ela Web Tasarım Bilişim Medya Yayıncılık Ticaret Ltd. Şti. unvanıyla kurumsal şirket yapısına kavuştuk.",
      gorseller: ["/images/hakkimizda/logo-5-k.png"]
    },
    {
      yil: "2025",
      baslik: "Büyük Dönüşüm: Ela Teknoloji & Veluxe Home",
      detay: "Gelişen vizyonumuz doğrultusunda Ela Teknoloji ve Tasarım San. Tic. Ltd. Şti unvanını aldık. Headless web mimarileri ve SaaS CRM yazılımlarımızla dijitaldeki gücümüzü büyütürken, Veluxe Home markamızla fiziki üretim, dekorasyon ve mobilya sektörüne de güçlü bir giriş yaptık.",
      gorseller: ["/images/hakkimizda/logo.png", "/images/hakkimizda/veluxe-logo.webp"]
    }
  ];

  return (
    <div className="space-y-16 animate-fadeIn">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            Çeyrek Asırlık Güvenle: Dijital Dünyanın Mimarıyız
          </h2>
          <p className="text-gray-600 leading-relaxed text-base">
            Ela Teknoloji, <strong>2001 yılında</strong> çıktığı bu yolda tam <strong>25 yılı (çeyrek asrı)</strong> geride bırakmış, köklü bir mühendislik ve dijital dönüşüm ajansıdır. Sektörde arama motoru optimizasyonu (SEO) kavramı henüz yeni doğmuşken bu alanda mühendislik düzeyinde çalışmalar yapmaya başlayan ekibimiz, dijital trendlerin sadece takipçisi değil, her zaman öncüsü olmuştur.
          </p>
          <p className="text-gray-600 leading-relaxed text-base">
            İşletmelere sunduğumuz <strong>360 derece uçtan uca dijital hizmet</strong> yaklaşımımızla; gelişmiş yazılımlardan kurumsal kimliğe, kreatif tasarımlardan 3D modellemeye ve global pazarlama stratejilerine kadar tüm ihtiyaçları tek bir çatı altında çözüyoruz. Tamamen <strong>müşteri odaklı</strong> çalışma prensibimiz ve kesintisiz sürdürülebilirliğe adanmış <strong>muhteşem destek hizmetlerimizle</strong> gurur duyuyoruz. 
          </p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-4">
          <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
            <span className="text-2xl">⭐</span>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Google Partner</h4>
              <p className="text-xs text-gray-500">Sertifikalı Reklam Yönetimi</p>
            </div>
          </div>
          <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
            <span className="text-2xl">⏳</span>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">25 Yıllık Tecrübe</h4>
              <p className="text-xs text-gray-500">2001'den Beri Kesintisiz</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🚀</span>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">360° Çözüm Kümesi</h4>
              <p className="text-xs text-gray-500">Yazılım, Tasarım, SEO & Ads</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">Dünden Bugüne Yolculuğumuz</h3>
        <div className="relative border-l-2 border-gray-200 ml-4 md:ml-32 space-y-12">
          {zamanTuneli.map((aksiyon, idx) => (
            <div key={idx} className="relative pl-6 md:pl-8">
              <span className="hidden md:block absolute -left-32 top-0 text-xl font-black text-[#df6e32] w-24 text-right">
                {aksiyon.yil}
              </span>
              <span className="absolute -left-[11px] top-1.5 bg-[#933c81] w-5 h-5 rounded-full border-4 border-white ring-2 ring-purple-100"></span>
              
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                <span className="inline-block md:hidden text-lg font-black text-[#df6e32] mb-1">
                  {aksiyon.yil} -
                </span>
                <h4 className="text-lg font-bold text-gray-900">{aksiyon.baslik}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{aksiyon.detay}</p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-2">
                  {aksiyon.gorseller.map((imgSrc, imgIdx) => (
                    <div key={imgIdx} className="h-24 bg-white rounded-xl overflow-hidden border border-gray-200 p-1 flex items-center justify-center">
                      <img 
                        src={imgSrc} 
                        alt={`${aksiyon.yil} - ${imgIdx}`} 
                        className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/150?text=Ela+Medya";
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}