'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TeklifAlPage() {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Next.js & Headless Web Geliştirme', // Başlangıç değeri güncellendi
    message: '',
  });

  useEffect(() => {
    if (isSubmitted && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (isSubmitted && countdown === 0) {
      router.push('/');
    }
  }, [isSubmitted, countdown, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    loading || setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        alert('Sistemsel bir sorun oluştu, lütfen tekrar deneyin.');
      }
    } catch (error) {
      console.error(error);
      alert('Bağlantı hatası yaşandı.');
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white border border-gray-100 p-8 rounded-2xl shadow-xl text-center space-y-6">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-500 text-4xl animate-bounce">✓</div>
          <h2 className="text-2xl font-bold text-gray-800">Mesajınız Başarıyla İletildi!</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Talebiniz mühendislik ekibimize ulaştı. Hem size hem de ekibimize bilgilendirme mailleri gönderildi.
          </p>
          <div className="text-xs text-gray-400 bg-gray-50 py-2 rounded-lg">
            {countdown} saniye sonra ana sayfaya yönlendiriliyorsunuz...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
        
        {/* Sol Açıklama Alanı */}
        <div className="md:col-span-5 bg-gradient-to-br from-[#933c81] to-[#df6e32] p-10 text-white flex flex-col justify-between">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold leading-tight">Yeni Bir Proje Başlatın</h1>
            <p className="text-white/80 text-sm leading-relaxed">
              Ela Teknoloji olarak, dijital vitrininizi modern mühendislik standartları ve GEO (Üretken Motor Optimizasyonu) vizyonuyla inşa ediyoruz.
            </p>
            <p className="text-white/80 text-sm leading-relaxed">
              Yandaki formu eksiksiz doldurarak talebinizi ilettiğinizde, sistemimiz anında devreye girer ve kurumsal çözüm sürecimiz başlar.
            </p>
          </div>
          
          <div className="mt-10 border-t border-white/20 pt-6 text-xs text-white/70 space-y-1">
            <p>📍 Ataşehir / İSTANBUL</p>
            <p>📞 +90 (216) 576 58 26</p>
          </div>
        </div>

        {/* Sağ Form Alanı */}
        <form onSubmit={handleSubmit} className="md:col-span-7 p-10 space-y-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Proje Talep Formu</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">Adınız Soyadınız *</label>
              <input type="text" required className="w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:border-[#933c81]" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">Firma Adı</label>
              <input type="text" className="w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:border-[#933c81]" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">Telefon Numaranız *</label>
              <input type="tel" required className="w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:border-[#933c81]" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">E-Posta Adresiniz *</label>
              <input type="email" required className="w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:border-[#933c81]" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">İlgilendiğiniz Hizmet</label>
            {/* 6'LI YENİ SELECT YAPISI */}
            <select 
              className="w-full px-4 py-2.5 border rounded-lg text-sm bg-white focus:outline-none focus:border-[#933c81]"
              value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}
            >
              <option value="Next.js & Headless Web Geliştirme">Next.js & Headless Web Geliştirme</option>
              <option value="Kurumsal Dijital Kimlik Tasarımı">Kurumsal Dijital Kimlik Tasarımı</option>
              <option value="SEO & GEO Mühendisliği">SEO & GEO Mühendisliği</option>
              <option value="Google Ads & Dijital Pazarlama">Google Ads & Dijital Pazarlama</option>
              <option value="E-Ticaret & Özel Dönüşüm Çözümleri">E-Ticaret & Özel Dönüşüm Çözümleri</option>
              <option value="Özel SaaS & CRM Yazılımları">Özel SaaS & CRM Yazılımları</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">Proje Detayları / Mesajınız *</label>
            <textarea rows={4} required className="w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:border-[#933c81]" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
          </div>

          <button type="submit" disabled={loading} className="w-full bg-[#933c81] text-white py-3 rounded-lg font-medium hover:bg-opacity-95 transition-all text-sm shadow-md">
            {loading ? 'Gönderiliyor...' : 'Talebi Güvenle Gönder'}
          </button>
        </form>
      </div>
    </div>
  );
}