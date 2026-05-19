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
    service: 'Next.js Headless Mimari',
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
        setFormData({ name: '', company: '', phone: '', email: '', service: 'Next.js Headless Mimari', message: '' });
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
    <div className="min-h-screen bg-gray-50">
      
      {/* 1. KAHRAMAN (HERO) ALANI VE KUTULU HİZMETLER */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          
          {/* Üst Başlık */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Geleceğin Web Mimarisini <br className="hidden md:block"/> Bugün İnşa Ediyoruz
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Standart temalara ve hantal sistemlere veda edin. Modern mühendislik, GEO uyumu ve veri odaklı stratejilerle markanızı dijitalin zirvesine taşıyoruz.
            </p>
          </div>

          {/* Kutulu Alanlar (Hizmet Kartları) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Kutu 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                ⚛️
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Next.js Mimari</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Geleneksel CMS sınırlarını aşıyor, ultra hızlı ve Headless mimariyle ölçeklenebilir modern web projeleri geliştiriyoruz.
              </p>
            </div>

            {/* Kutu 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                🤖
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">GEO & SEO</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sadece Google için değil, yapay zeka motorları (Generative Engine Optimization) için de optimize edilmiş kusursuz altyapılar.
              </p>
            </div>

            {/* Kutu 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                📈
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Google Ads</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yüksek bütçeli reklamlarınızı nokta atışı stratejilerle yönetiyor, ROAS (Reklam Getirisi) oranlarınızı maksimize ediyoruz.
              </p>
            </div>

            {/* Kutu 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                💻
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">SaaS Çözümleri</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Süreçlerinizi hızlandıracak, işletmenize özel tasarlanmış bulut tabanlı CRM ve iş yönetim yazılımları kodluyoruz.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. KOYU RENKLİ FORM VE VİZYON ALANI */}
      <section className="bg-[#0b1120] py-20 border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Sol Taraf: Vizyon Metni (Adresler Çıkarıldı, Sadeleştirildi) */}
            <div className="space-y-8 text-white">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Altyapınızı Ölçeklendirmeye Hazır mısınız?
              </h2>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Monolitik yapılardan kurtulmak, kendi SaaS çözümünüzü inşa etmek veya yüksek bütçeli reklamlarınızı optimize etmek için buradayız. 
                </p>
                <p>
                  Geleneksel web standartlarının ötesine geçerek; <strong className="text-white">Next.js mimarisiyle</strong> performans odaklı sistemler kuruyor ve <strong className="text-white">Generative Engine Optimization (GEO)</strong> stratejileriyle dijital vitrininizi geleceğe hazırlıyoruz.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-center gap-3">
                    <span className="text-[#df6e32]">✓</span> Yüksek Performanslı Headless Sistemler
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#df6e32]">✓</span> Veriye Dayalı Dijital Pazarlama (ROAS Odaklı)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#df6e32]">✓</span> Kesintisiz Müşteri İletişimi ve CRM Entegrasyonu
                  </li>
                </ul>
                <p className="pt-4 text-sm text-gray-400 italic">
                  Yandaki formu doldurarak teknik taleplerinizi bize iletin, en kısa sürede profesyonel bir yol haritası ile dönüş yapalım.
                </p>
              </div>
            </div>

            {/* Sağ Taraf: Form Kartı */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 lg:p-10 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-8">Proje Detaylarını Paylaşın</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
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
                  className="w-full bg-slate-800/80 border border-slate-700 text-white px-5 py-3.5 rounded-xl focus:outline-none focus:border-[#df6e32] focus:ring-1 focus:ring-[#df6e32] transition-all appearance-none"
                  value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="Next.js Headless Mimari">Next.js Headless Mimari</option>
                  <option value="SaaS & Özel CRM Geliştirme">SaaS & Özel CRM Geliştirme</option>
                  <option value="GEO & Arama Motoru Optimizasyonu">GEO & Arama Motoru Optimizasyonu</option>
                  <option value="Google Ads & Dijital Pazarlama">Google Ads & Dijital Pazarlama</option>
                </select>

                <textarea 
                  rows={4} required placeholder="Mevcut altyapınız ve ihtiyaçlarınızdan kısaca bahsedin..."
                  className="w-full bg-slate-800/80 border border-slate-700 text-white placeholder-gray-500 px-5 py-3.5 rounded-xl focus:outline-none focus:border-[#df6e32] focus:ring-1 focus:ring-[#df6e32] transition-all resize-none"
                  value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>

                <button 
                  type="submit" disabled={loading}
                  className="w-full bg-gradient-to-r from-[#933c81] to-[#df6e32] text-white font-bold text-lg py-4 rounded-xl hover:shadow-[0_0_20px_rgba(223,110,50,0.4)] transition-all transform hover:-translate-y-0.5"
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