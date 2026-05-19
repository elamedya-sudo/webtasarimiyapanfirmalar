// app/page.tsx
'use client';

import { useState } from 'react';

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Altyapı & Ölçeklendirme',
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
        setFormData({ name: '', company: '', phone: '', email: '', service: 'Altyapı & Ölçeklendirme', message: '' });
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
    <div className="bg-[#0b1120] min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Sol Taraf: Metin ve İletişim Bilgileri */}
          <div className="space-y-8 text-white mt-4">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              Altyapınızı Ölçeklendirmeye Hazır mısınız?
            </h1>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Monolitik yapılardan kurtulmak, kendi SaaS çözümünüzü inşa etmek veya yüksek bütçeli reklamlarınızı optimize etmek için buradayız. 
              </p>
              <p>
                Geleneksel web standartlarının ötesine geçerek; Next.js mimarisiyle performans odaklı Headless sistemler kuruyor ve Generative Engine Optimization (GEO) stratejileriyle dijital vitrininizi yapay zeka arama motorlarına tam uyumlu hale getiriyoruz.
              </p>
              <p>
                Ataşehir'deki merkezimizde kahve eşliğinde projenizin teknik detaylarını masaya yatıralım.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#933c81]/20 flex items-center justify-center text-[#df6e32] flex-shrink-0">
                  📍
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">Merkez Ofis</h3>
                  <p className="text-sm text-gray-400 mt-1">Küçükbakkalköy Mh. Kayışdağı Cd. Ali Ay Sk. No: 3/1<br/>Orkide Apt. Ataşehir / İSTANBUL</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#df6e32]/20 flex items-center justify-center text-[#df6e32] flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">Teknik İletişim</h3>
                  <p className="text-sm text-gray-400 mt-1">Mühendislik ve yazılım talepleriniz için doğrudan bize ulaşın.<br/>info@webtasarimiyapanfirmalar.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Taraf: Form Kartı */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 lg:p-10 rounded-2xl shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-8">Proje Detaylarını Paylaşın</h2>
            
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
                <option value="" disabled className="text-gray-500">İlgilendiğiniz Hizmeti Seçin</option>
                <option value="SaaS & Özel Yazılım">SaaS & Özel CRM Geliştirme</option>
                <option value="Next.js Headless Mimari">Next.js Headless Mimari</option>
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
    </div>
  );
}