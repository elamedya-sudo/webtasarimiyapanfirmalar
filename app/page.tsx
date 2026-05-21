'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProjectCarousel from '@/components/ProjectCarousel';
import Stats from '@/components/Stats';

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
      
      {/* 1. HERO ALANI */}
      <section className="relative overflow-hidden pt-28 pb-20 px-4">
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

      {/* 2. PROJE CAROUSEL */}
      <ProjectCarousel />

      {/* 3. BAŞARI HİKAYELERİ (SABİT) */}
      <section className="py-20 px-4 bg-[#0b1120] border-t border-slate-800">
        <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Başarı Hikayeleri</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[ { title: "Tonermasters", link: "/basari-hikayeleri/toner-masters" }, { title: "DWT Türkiye", link: "/basari-hikayeleri/dwt-turkiye" }, { title: "Vicom Energy", link: "/basari-hikayeleri/vicom-energy" } ].map((h, i) => (
                <div key={i} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-[#df6e32]/50 transition-all text-center">
                    <h3 className="text-xl font-bold text-white mb-4">{h.title}</h3>
                    <Link href={h.link} className="text-[#df6e32] font-bold">Detayları İncele →</Link>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* 4. SAYILARLA BİZ */}
      <Stats />

      {/* 5. HİZMETLER */}
      <section id="hizmetler" className="py-20 px-4 border-t border-slate-800/50 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-white tracking-tight">Neler Yapıyoruz?</h2>
            <p className="text-gray-400 text-sm">Kurumsal süreçlerinizi uçtan uca dijitalleştiren profesyonel mühendislik çözümleri.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-800 group"><div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-3xl mb-6">⚛️</div><h3 className="text-xl font-bold text-white mb-3">Next.js & Headless Web Geliştirme</h3><p className="text-gray-400 text-sm leading-relaxed">Geleneksel CMS sınırlarını aşıyor, ultra hızlı sistemler geliştiriyoruz.</p></div>
            <div className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-800 group"><div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-3xl mb-6">🎨</div><h3 className="text-xl font-bold text-white mb-3">Kurumsal Dijital Kimlik</h3><p className="text-gray-400 text-sm leading-relaxed">Vizyonunuzu dijitale aktaran modern, özgün UI/UX tasarımları.</p></div>
            <div className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-800 group"><div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-3xl mb-6">🤖</div><h3 className="text-xl font-bold text-white mb-3">SEO & GEO Mühendisliği</h3><p className="text-gray-400 text-sm leading-relaxed">Yapay zeka arama motorları için optimize edilmiş kusursuz altyapılar.</p></div>
            <div className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-800 group"><div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-3xl mb-6">📈</div><h3 className="text-xl font-bold text-white mb-3">Google Ads & Pazarlama</h3><p className="text-gray-400 text-sm leading-relaxed">Veri analitiğiyle yönetilen, ROAS odaklı reklam yönetimi.</p></div>
            <div className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-800 group"><div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-3xl mb-6">🛍️</div><h3 className="text-xl font-bold text-white mb-3">E-Ticaret Çözümleri</h3><p className="text-gray-400 text-sm leading-relaxed">Global ölçekli, satış odaklı yüksek performanslı mağaza altyapıları.</p></div>
            <div className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-800 group"><div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-3xl mb-6">💻</div><h3 className="text-xl font-bold text-white mb-3">Özel SaaS & CRM Yazılımları</h3><p className="text-gray-400 text-sm leading-relaxed">İç süreçleri optimize eden bulut tabanlı kurumsal paneller.</p></div>
          </div>
        </div>
      </section>

      {/* 6. FORM ALANI */}
      <section className="py-20 border-t border-slate-800/80 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-white"><h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Altyapınızı Ölçeklendirmeye Hazır mısınız?</h2><p className="text-gray-400 text-lg">Next.js mimarisiyle performans odaklı sistemler kuruyor ve dijital vitrininizi geleceğe hazırlıyoruz.</p></div>
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-8 rounded-2xl shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input type="text" required placeholder="Adınız" className="w-full bg-slate-800/80 border border-slate-700 text-white p-4 rounded-xl" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  <input type="text" placeholder="Firma Adı" className="w-full bg-slate-800/80 border border-slate-700 text-white p-4 rounded-xl" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} />
                </div>
                <input type="tel" required placeholder="Telefon" className="w-full bg-slate-800/80 border border-slate-700 text-white p-4 rounded-xl" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                <input type="email" required placeholder="E-Posta" className="w-full bg-slate-800/80 border border-slate-700 text-white p-4 rounded-xl" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                <textarea rows={4} required placeholder="Mesajınız..." className="w-full bg-slate-800/80 border border-slate-700 text-white p-4 rounded-xl" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-[#933c81] to-[#df6e32] text-white font-bold py-4 rounded-xl">{loading ? 'Gönderiliyor...' : 'Talebi Gönder'}</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}