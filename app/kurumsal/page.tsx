'use client';

import { useState } from 'react';

export default function KurumsalPage() {
  const [activeTab, setActiveTab] = useState('nerelerdeyiz'); // Geliştirmeyi direkt görmen için varsayılanı değiştirdim, istersen 'hakkimizda' yapabilirsin

  // Sekme Menüsü
  const tabs = [
    { id: 'hakkimizda', label: 'Hakkımızda & Zaman Tüneli' },
    { id: 'misyon-vizyon', label: 'Misyon, Vizyon & Kültür' },
    { id: 'ekibimiz', label: 'Ekibimiz' },
    { id: 'nerelerdeyiz', label: 'Nerelerdeyiz' },
  ];

  // Ekip Listesi
  const ekip = [
    {
      isim: "Hüseyin Yüksel",
      unvan: "Bilgisayar Mühendisi - Kurucu",
      gorsel: "/images/ekip/hyuksel-2-1.jpg",
      email: "huseyin@eladesign.org",
      instagram: "https://www.instagram.com/yukselhy/",
      linkedin: "https://www.linkedin.com/in/huseyin-yuksel"
    },
    {
      isim: "Halil Yüksel",
      unvan: "Google ADS & SEO - Kurucu Ortak",
      gorsel: "/images/ekip/halil-yuksel.jpg",
      email: "halil@eladesign.org",
      instagram: "https://www.instagram.com/halilyuksell/",
      linkedin: "https://www.linkedin.com/in/halil-yuksel/"
    },
    {
      isim: "Ayşe Yüksel",
      unvan: "Kreatif Direktör - Kurucu Ortak",
      gorsel: "/images/ekip/ayse-ekip-1.jpg",
      email: "ayse@eladesign.org"
    },
    {
      isim: "Tanyel Çakır",
      unvan: "Mimar - 3d Max Modelleme",
      gorsel: "/images/ekip/tanyel-cakir.jpg",
      email: "tanyel@eladesign.org"
    },
    {
      isim: "Semiha Parlak",
      unvan: "Grafik Tasarım",
      gorsel: "/images/ekip/semiha-parlak.jpg",
      email: "semiha@eladesign.org"
    },
    {
      isim: "Ahmet Temel",
      unvan: "Sosyal Medya Yöneticisi",
      gorsel: "/images/ekip/ahmet-temel.jpg",
      email: "ahmet@eladesign.org"
    }
  ];

  // Tarihsel Gelişim Kronolojisi
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

  // Genişletilmiş Global Operasyon Noktaları (Nerelerdeyiz)
  const lokasyonlar = [
    { sehir: "İstanbul", ulke: "Türkiye", tip: "Merkez Ofis & Ar-Ge", koordinat: "Ela Teknoloji & Veluxe Home Yönetim Merkezi" },
    { sehir: "Sydney", ulke: "Avustralya", tip: "E-Ticaret & Ads Yönetimi", koordinat: "Toner Masters Yüksek ROAS Operasyonları" },
    { sehir: "Abuja", ulke: "Nijerya", tip: "Kurumsal Enerji Altyapısı", koordinat: "Vicom Energy - Ulusal Elektrik Dağıtım Sistemleri" },
    { sehir: "New York & Texas", ulke: "Amerika", tip: "Finans & Üretim Pazarı", koordinat: "iQuanta, Wageruler, Pergolasan & Ambiance Style" },
    { sehir: "Paris", ulke: "Fransa", tip: "Premium Moda E-Ticaret", koordinat: "Galaxy Couture - Haute Couture Dijital Vitrini" },
    { sehir: "Olten", ulke: "İsviçre", tip: "Çok Dilli Sistem Yönetimi", koordinat: "The Supreme Steak House Çözüm Ortaklığı" },
    { sehir: "Kudüs", ulke: "İsrail / Filistin", tip: "Orta Doğu E-Ticaret Ağı", koordinat: "BB Baby - Bölgesel Anne & Bebek Pazarı" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Sayfa Üst Başlık */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 tracking-wide">Kurumsal Yapımız</h1>
          <p className="text-gray-500 mt-2">Çeyrek asırlık mühendislik deneyimi ve küresel operasyon gücü.</p>
        </div>

        {/* Sekme Navigasyonu */}
        <div className="flex flex-wrap justify-center border-b border-gray-200 mb-12 gap-2 md:gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-bold text-sm tracking-wide transition-all duration-300 border-b-2 ${
                activeTab === tab.id
                  ? 'border-[#df6e32] text-[#df6e32]'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sekme İçerikleri */}
        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-gray-100 min-h-[400px]">
          
          {/* 1. HAKKIMIZDA VE ZAMAN TÜNELİ */}
          {activeTab === 'hakkimizda' && (
            <div className="space-y-16 animate-fadeIn">
              
              {/* Profesyonel Giriş Metni */}
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
                
                {/* Yan Rozet Alanı / Önemli Bilgiler */}
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

              {/* DÜNDEN BUGÜNE ZAMAN TÜNELİ (TIMELINE) */}
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
          )}

          {/* 2. MİSYON, VİZYON VE KÜLTÜR İÇERİĞİ */}
          {activeTab === 'misyon-vizyon' && (
            <div className="space-y-12 animate-fadeIn">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-3xl mb-4 block">🎯</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Misyonumuz</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    İşletmelerin dijital dünyadaki varlıklarını geleneksel hantal yapılardan kurtarıp, modern, güvenli ve dönüşüm oranı yüksek yeni nesil web mimarilerine taşımak. Teknik körlükleri ortadan kaldırarak veri odaklı pazarlama ve mühendislik çözümleri sunmaktır.
                  </p>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-3xl mb-4 block">🚀</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Vizyonumuz</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Geliştirdiğimiz Headless mimariler ve özel SaaS altyapıları ile sadece yerel pazarda değil, global ölçekte parmakla gösterilen; siber güvenlik, yazılım hızı ve reklam optimizasyonunda standartları belirleyen lider bir teknoloji üssü olmak.
                  </p>
                </div>
              </div>

              <div className="bg-[#0b1120] text-white p-8 md:p-12 rounded-3xl shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
                  <span className="text-[#df6e32] font-bold tracking-widest uppercase text-sm">Biz Kimiz?</span>
                  <h3 className="text-3xl font-bold mb-4">Kültürümüz</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Kültürümüz, kimliğimizin ve yaptığımız her işin kalbidir. Yaratıcılığı açığa çıkarmanın ve başarıyı yakalamanın anahtarının; pozitif, destekleyici ve iş birliğine dayalı bir çalışma ortamından geçtiğine inanıyoruz.
                  </p>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Açık iletişim, karşılıklı saygı ve sürekli öğrenme tutkusu, işyerimizin temel taşlarıdır. Ekip arkadaşlarımızı risk almaya, kalıpların dışında düşünmeye ve dijital dünyada sınırları zorlamaya teşvik ediyoruz. Biz burada sadece iş arkadaşı değil, dijital geleceği birlikte inşa eden büyük bir aileyiz.
                  </p>
                </div>
              </div>

              <div>
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold text-gray-900">Değerlerimiz</h3>
                  <p className="text-gray-500 mt-2">Bizi biz yapan ve müşterilerimizin başarısını şekillendiren temel ilkelerimiz.</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl hover:border-purple-200 transition-colors">
                    <span className="text-2xl mb-3 block">🤝</span>
                    <h4 className="font-bold text-gray-900 mb-2">Dürüstlük ve Şeffaflık</h4>
                    <p className="text-sm text-gray-600">Her zaman doğru olanı yapıyor, müşterilerimizle güvene dayalı sarsılmaz bir bağ kuruyoruz.</p>
                  </div>
                  <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl hover:border-purple-200 transition-colors">
                    <span className="text-2xl mb-3 block">💡</span>
                    <h4 className="font-bold text-gray-900 mb-2">Yenilikçilik (İnovasyon)</h4>
                    <p className="text-sm text-gray-600">Değişimi kucaklıyor, yaratıcılığın sınırlarını zorlayarak dijitalde hep bir adım önde kalıyoruz.</p>
                  </div>
                  <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl hover:border-purple-200 transition-colors">
                    <span className="text-2xl mb-3 block">🔗</span>
                    <h4 className="font-bold text-gray-900 mb-2">İş Birliği</h4>
                    <p className="text-sm text-gray-600">En iyi sonuçların "birlikte" üretildiğine inanıyor, markanızla tek bir ekip gibi çalışıyoruz.</p>
                  </div>
                  <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl hover:border-purple-200 transition-colors">
                    <span className="text-2xl mb-3 block">⭐</span>
                    <h4 className="font-bold text-gray-900 mb-2">Mükemmeliyet</h4>
                    <p className="text-sm text-gray-600">"Sıradan" olanla asla yetinmiyor, yüksek standartlar belirleyerek projelere imza atıyoruz.</p>
                  </div>
                  <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl hover:border-purple-200 transition-colors lg:col-span-2 xl:col-span-1">
                    <span className="text-2xl mb-3 block">❤️</span>
                    <h4 className="font-bold text-gray-900 mb-2">Müşteri Odaklılık</h4>
                    <p className="text-sm text-gray-600">Sizi merkeze alıyor; hedeflerinize özel, büyüme ve sonuç odaklı kalıcı çözümler üretiyoruz.</p>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* 3. EKİBİMİZ İÇERİĞİ */}
          {activeTab === 'ekibimiz' && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center md:text-left">Çözüm Odaklı Uzman Kadromuz</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {ekip.map((uye, index) => (
                  <div key={index} className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="h-80 w-full bg-gray-200 relative overflow-hidden">
                      <img 
                        src={uye.gorsel} 
                        alt={uye.isim} 
                        className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" 
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/300x350?text=Ela+Team";
                        }}
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h4 className="text-lg font-bold text-gray-900">{uye.isim}</h4>
                      <p className="text-[#933c81] text-xs font-semibold mt-1 uppercase tracking-wider">{uye.unvan}</p>
                      
                      <div className="flex justify-center items-center gap-3 mt-5 opacity-60 group-hover:opacity-100 transition-opacity">
                        <a href={`mailto:${uye.email}`} className="text-gray-500 hover:text-[#df6e32] text-sm font-bold flex items-center gap-1 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                          E-posta
                        </a>
                        {(uye.linkedin || uye.instagram) && <span className="text-gray-300">•</span>}
                        {uye.linkedin && (
                          <a href={uye.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0077b5] text-sm font-bold transition-colors">LinkedIn</a>
                        )}
                        {uye.linkedin && uye.instagram && <span className="text-gray-300">•</span>}
                        {uye.instagram && (
                          <a href={uye.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#E1306C] text-sm font-bold transition-colors">Instagram</a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. NERELERDEYİZ İÇERİĞİ */}
          {activeTab === 'nerelerdeyiz' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start animate-fadeIn">
              
              {/* Lokasyon Kartları (Scroll eklendi ki liste uzadığında tasarımı bozmasın) */}
              <div className="lg:col-span-1 space-y-3 max-h-[450px] overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin', scrollbarColor: '#df6e32 #f3f4f6' }}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 sticky top-0 bg-white pt-2 pb-2 z-10 border-b border-gray-100">Küresel Operasyon Ağımız</h2>
                {lokasyonlar.map((lok, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-orange-200 transition-colors">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold text-gray-900 text-sm">{lok.sehir} - {lok.ulke}</h4>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shrink-0 ml-2"></span>
                    </div>
                    <p className="text-[11px] font-bold text-[#933c81] uppercase tracking-wider">{lok.tip}</p>
                    <p className="text-gray-500 text-xs mt-1 italic">{lok.koordinat}</p>
                  </div>
                ))}
              </div>

              {/* Dinamik Görsel Dünya Haritası Yapısı */}
              <div className="lg:col-span-2 bg-slate-900 rounded-2xl p-6 relative h-full min-h-[450px] flex flex-col justify-center items-center text-center overflow-hidden border border-slate-800 shadow-inner">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                <div className="relative z-10 space-y-4 max-w-lg p-6 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">
                  <div className="inline-flex p-3 bg-slate-800 rounded-full text-[#df6e32] font-bold text-xl mb-2 shadow-[0_0_15px_rgba(223,110,50,0.5)]">🌐</div>
                  <h3 className="text-2xl font-bold text-white tracking-wide">Sınırları Olmayan Mühendislik</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Projelerimizi lokal bağımlılıklardan uzak, tamamen bulut tabanlı ve küresel CDN (Vercel/Cloudflare Edge) ağları üzerinden dağıtıyoruz. İstanbul merkezimizden kıtalararası çözümler üretiyor; Amerika'dan Avustralya'ya, Avrupa'dan Afrika'ya kesintisiz dijital altyapılar kuruyoruz.
                  </p>
                  <div className="pt-4 text-[10px] text-slate-500 font-mono tracking-widest break-words">
                    ACTIVE NODES: IST-TR // SYD-AU // ABJ-NG // NYC-US // PAR-FR // OLT-CH // IL-ME
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}