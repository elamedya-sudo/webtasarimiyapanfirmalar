'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Next.js & Headless Web Geliştirme',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Talebiniz başarıyla alındı. Ekibimiz sizinle iletişime geçecektir.');
        setFormData({ 
          name: '', 
          company: '', 
          phone: '', 
          email: '', 
          service: 'Next.js & Headless Web Geliştirme', 
          message: '' 
        });
      } else {
        alert('Bir hata oluştu, lütfen tekrar deneyin.');
      }
    } catch (error) {
      alert('Bağlantı hatası.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1120] flex flex-col font-sans selection:bg-[#933c81] selection:text-white">
      
      {/* 1. HERO (GİRİŞ / KARŞILAMA) ALANI - DARK */}
      <section className="relative overflow-hidden pt-28 pb-20 px-4">
        {/* Arka Plan Karanlık Estetik Glow Efekti */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
          <div className="absolute top-0 left-10 w-96 h-96 bg-[#933c81]/30 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#df6e32]/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 text-[#df6e32] text-xs font-semibold px-4 py-1.5 rounded-full border border-slate-700 backdrop-blur-sm">
            <span>🚀</span> Yeni Nesil Headless & Mühendislik Yaklaşımı
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Geleceğin Web Mimarisini <br />
            <span className="bg-gradient-to-r from-[#933c81] to-[#df6e32] bg-clip-text text-transparent drop-shadow-lg">
              Bugün İnşa Ediyoruz
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Standart hazır temalara ve hantal sistemlere veda edin. Modern yazılım mühendisliği, GEO uyumu ve veri odaklı stratejilerle markanızı dijitalin zirvesine taşıyoruz.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link 
              href="/teklif-al"
              className="bg-gradient-to-r from-[#933c81] to-[#df6e32] text-white font-bold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(147,60,129,0.3)] hover:shadow-[0_0_30px_rgba(223,110,50,0.5)] hover:-translate-y-1 transition-all duration-300 text-base"
            >
              Hemen Proje Başlat
            </Link>
            <a 
              href="#hizmetler"
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-gray-300 font-semibold px-8 py-4 rounded-xl hover:bg-slate-800 hover:text-white transition-all duration-300 text-base shadow-sm"
            >
              Uzmanlık Alanlarımız
            </a>
          </div>
        </div>
      </section>

      {/* 2. 6'LI HİZMET KUTULARI ALANI - DARK */}
      <section id="hizmetler" className="py-20 px-4 border-t border-slate-800/50 relative z-10">
        <div className="container mx-auto max-w-7xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-white tracking-tight">Neler Yapıyoruz?</h2>
            <p className="text-gray-400 text-sm">Kurumsal süreçlerinizi uçtan uca dijitalleştiren profesyonel mühendislik çözümleri.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Kutu 1 */}
            <div className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-slate-800/60 transition-all duration-300 border border-slate-800 hover:border-slate-600 group">
              <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform shadow-inner">
                ⚛️
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Next.js & Headless Web Geliştirme</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Geleneksel CMS sınırlarını aşıyor, ultra hızlı, güvenli ve Headless mimariyle ölçeklenebilir modern web projeleri geliştiriyoruz.
              </p>
            </div>

            {/* Kutu 2 */}
            <div className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-slate-800/60 transition-all duration-300 border border-slate-800 hover:border-slate-600 group">
              <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform shadow-inner">
                🎨
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Kurumsal Dijital Kimlik Tasarımı</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Markanızın vizyonunu ve gücünü dijitale aktaran modern, özgün, kullanıcı deneyimi (UI/UX) odaklı arayüz tasarımları.
              </p>
            </div>

            {/* Kutu 3 */}
            <div className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-slate-800/60 transition-all duration-300 border border-slate-800 hover:border-slate-600 group">
              <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform shadow-inner">
                🤖
              </div>
              <h3 className="text-xl font-bold text-white mb-3">SEO & GEO Mühendisliği</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sadece klasik arama motorları için değil, yeni nesil yapay zeka motorları (Generative Engine Optimization) için optimize edilmiş kusursuz altyapılar.
              </p>
            </div>

            {/* Kutu 4 */}
            <div className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-slate-800/60 transition-all duration-300 border border-slate-800 hover:border-slate-600 group">
              <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform shadow-inner">
                📈
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Google Ads & Dijital Pazarlama</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Yüksek bütçeli reklam süreçlerinizi veri analitiğiyle yönetiyor, nokta atışı dönüşüm optimizasyonlarıyla ROAS oranlarınızı maksimize ediyoruz.
              </p>
            </div>

            {/* Kutu 5 */}
            <div className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-slate-800/60 transition-all duration-300 border border-slate-800 hover:border-slate-600 group">
              <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform shadow-inner">
                🛍️
              </div>
              <h3 className="text-xl font-bold text-white mb-3">E-Ticaret & Özel Dönüşüm Çözümleri</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Gelişmiş katalog modlarından global ölçekli headless e-ticaret sistemlerine kadar, satış ve yüksek performans odaklı mağaza altyapıları.
              </p>
            </div>

            {/* Kutu 6 */}
            <div className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-slate-800/60 transition-all duration-300 border border-slate-800 hover:border-slate-600 group">
              <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform shadow-inner">
                💻
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Özel SaaS & CRM Yazılımları</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                İşletmenizin iç süreçlerini, teklif, muhasebe ve müşteri yönetimini tek bir noktadan optimize eden bulut tabanlı kurumsal paneller.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. KOYU RENKLİ DENGELENMİŞ FORM VE VİZYON ALANI */}
      <section className="py-20 border-t border-slate-800/80 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Sol Taraf: Özellik Listesi ve Vizyon */}
            <div className="space-y-8 text-white">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Altyapınızı Ölçeklendirmeye Hazır mısınız?
              </h2>
              
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  Monolitik yapılardan kurtulmak, kendi SaaS çözümünüzü inşa etmek veya yüksek bütçeli reklamlarınızı optimize etmek için buradayız. 
                </p>
                <p>
                  Geleneksel web standartlarının ötesine geçerek; <strong className="text-white">Next.js mimarisiyle</strong> performans odaklı sistemler kuruyor ve <strong className="text-white">Generative Engine Optimization (GEO)</strong> stratejileriyle dijital vitrininizi geleceğe hazırlıyoruz.
                </p>
                <ul className="space-y-4 pt-4 text-base">
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="text-[#df6e32]">✓</span> Ultra Hızlı ve Performans Odaklı Headless Mimariler
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="text-[#df6e32]">✓</span> Yapay Zeka Arama Motorlarına (GEO) Tam Uyum
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="text-[#df6e32]">✓</span> Süreçlerinizi Otomatikleştiren Özel Bulut Yazılımlar
                  </li>
                </ul>
                <p className="pt-4 text-sm text-slate-500 italic">
                  Yandaki formu doldurarak teknik taleplerinizi bize iletin, en kısa sürede profesyonel bir yol haritası ile dönüş yapalım.
                </p>
              </div>
            </div>

            {/* Sağ Taraf: Yenilenmiş Form Kartı */}
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-8 lg:p-10 rounded-2xl shadow-2xl relative">
              {/* Form Arkası İnce Işık Efekti */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#933c81]/5 to-[#df6e32]/5 rounded-2xl pointer-events-none"></div>

              <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Proje Detaylarını Paylaşın</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input 
                    type="text" required placeholder="Adınız Soyadınız"
                    className="w-full bg-slate-800/80 border border-slate-700 text-white placeholder-gray-500 px-5 py-3.5 rounded-xl focus:outline-none focus:border-[#df6e32] focus:ring-1 focus:ring-[#df6e32] transition-all"
                    value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <input 
                    type="text" placeholder="Firma / Marka Adı"
                    className="w-full bg-slate-800/80 border border-slate-700 text-white placeholder-gray-500 px-5 py-3.5 rounded-xl focus:outline-none focus:border-[#df6e32] focus:ring-1 focus:ring-[#df6e32] transition-all"
                    value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input 
                    type="tel" required placeholder="Telefon Numaranız"
                    className="w-full bg-slate-800/80 border border-slate-700 text-white placeholder-gray-500 px-5 py-3.5 rounded-xl focus:outline-none focus:border-[#df6e32] focus:ring-1 focus:ring-[#df6e32] transition-all"
                    value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  <input 
                    type="email" required placeholder="Kurumsal E-Posta"
                    className="w-full bg-slate-800/80 border border-slate-700 text-white placeholder-gray-500 px-5 py-3.5 rounded-xl focus:outline-none focus:border-[#df6e32] focus:ring-1 focus:ring-[#df6e32] transition-all"
                    value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <select 
                  className="w-full bg-slate-800/80 border border-slate-700 text-white px-5 py-3.5 rounded-xl focus:outline-none focus:border-[#df6e32] focus:ring-1 focus:ring-[#df6e32] transition-all appearance-none text-sm"
                  value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="Next.js & Headless Web Geliştirme">Next.js & Headless Web Geliştirme</option>
                  <option value="Kurumsal Dijital Kimlik Tasarımı">Kurumsal Dijital Kimlik Tasarımı</option>
                  <option value="SEO & GEO Mühendisliği">SEO & GEO Mühendisliği</option>
                  <option value="Google Ads & Dijital Pazarlama">Google Ads & Dijital Pazarlama</option>
                  <option value="E-Ticaret & Özel Dönüşüm Çözümleri">E-Ticaret & Özel Dönüşüm Çözümleri</option>
                  <option value="Özel SaaS & CRM Yazılımları">Özel SaaS & CRM Yazılımları</option>
                </select>

                <textarea 
                  rows={4} required placeholder="Mevcut altyapınız ve ihtiyaçlarınızdan kısaca bahsedin..."
                  className="w-full bg-slate-800/80 border border-slate-700 text-white placeholder-gray-500 px-5 py-3.5 rounded-xl focus:outline-none focus:border-[#df6e32] focus:ring-1 focus:ring-[#df6e32] transition-all resize-none"
                  value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>

                <button 
                  type="submit" disabled={loading}
                  className="w-full bg-gradient-to-r from-[#933c81] to-[#df6e32] text-white font-bold text-lg py-4 rounded-xl shadow-[0_0_15px_rgba(223,110,50,0.3)] hover:shadow-[0_0_25px_rgba(223,110,50,0.5)] transition-all transform hover:-translate-y-0.5"
                >
                  {loading ? 'Gönderiliyor...' : 'Talebi Gönder'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}