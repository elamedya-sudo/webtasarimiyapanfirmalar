"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ 
    name: "", company: "", phone: "", email: "", service: "", message: "" 
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFeedback("Talebiniz başarıyla alındı. Uzmanlarımız en kısa sürede dönüş yapacaktır.");
        setFormData({ name: "", company: "", phone: "", email: "", service: "", message: "" });
      } else {
        setStatus("error");
        setFeedback("Sistemsel bir sorun oluştu. Lütfen teknik@eladesign.net adresine mail atınız.");
      }
    } catch (error) {
      setStatus("error");
      setFeedback("Sunucu ile bağlantı kurulamadı.");
    }
  };

  const services = [
    {
      title: "UX/UI & Modern Web Tasarım",
      description: "Markanızın dijital kimliğini, en güncel tasarım trendleri ve kullanıcı deneyimi (UX) prensipleriyle modern, etkileyici ve dönüşüm odaklı bir vitrine dönüştürüyoruz.",
      icon: "🎨",
    },
    {
      title: "Headless E-Ticaret Dönüşümü",
      description: "Mevcut monolitik yapılarınızı (WooCommerce vb.) Next.js ve Vercel mimarisiyle uçtan uca, ultra hızlı ve SEO dostu headless sistemlere taşıyoruz.",
      icon: "⚡",
    },
    {
      title: "Özel SaaS & CRM Geliştirme",
      description: "İşletmenizin iç süreçlerini yönetmek için dışa bağımlılığı bitiren, tamamen size özel kodlanmış, ölçeklenebilir bulut tabanlı yazılımlar.",
      icon: "⚙️",
    },
    {
      title: "Cloudflare WAF & Sunucu Güvenliği",
      description: "İnatçı bot saldırıları ve proxy trafiklerine karşı özel güvenlik duvarı yapılandırmaları ile kesintisiz ve güvenli sunucu mimarileri.",
      icon: "🛡️",
    },
    {
      title: "Performans Odaklı Ads Yönetimi",
      description: "Sadece reklam açmıyor; yüksek bütçeli kampanyalarınızı, algoritma istikrarı ve maksimum dönüşüm (ROAS) odaklı yönetiyoruz.",
      icon: "📈",
    },
    {
      title: "Teknik SEO & GEO Optimizasyonu",
      description: "Arama motorlarının yanı sıra yeni nesil AI botları (ChatGPT, AI Overviews) için de optimize edilmiş, teknik derinliği yüksek görünürlük stratejileri.",
      icon: "🎯",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-950 relative overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center min-h-screen p-8 md:p-24 relative w-full">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="z-10 text-center max-w-4xl flex flex-col items-center gap-6 mt-12">
          <div className="px-4 py-1.5 rounded-full border border-slate-800 bg-slate-900/50 text-sm font-medium text-slate-300 flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            Bir Ela Teknoloji ve Tasarım Markasıdır
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Sıradan Bir Web Sitesi Değil, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Dijital Mühendislik
            </span> Üretiyoruz.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mt-4 leading-relaxed">
            Standart şablonları unutun. İşletmenize özel tasarlanmış, yüksek performanslı web mimarileri ve veri odaklı büyüme stratejileri inşa ediyoruz.
          </p>

          <button 
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className="mt-8 px-8 py-4 bg-white text-slate-950 font-semibold rounded-full hover:bg-slate-200 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)]"
          >
            Projenizi Planlayın
          </button>
        </div>
      </section>

      {/* SERVICES GRID SECTION */}
      <section className="w-full max-w-6xl px-8 py-24 z-10 border-t border-slate-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Uzmanlık Alanlarımız</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Karmaşık sorunlara, modern yazılım mimarileri ve analitik stratejilerle getirdiğimiz kesin çözümler.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-2xl bg-slate-900/30 border border-slate-800 hover:border-purple-500/30 hover:bg-slate-900/50 transition-all duration-300 group cursor-default">
              <div className="text-4xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT & FOOTER SECTION */}
      <section className="w-full bg-[#133454]/10 border-t border-slate-900 mt-12">
        <div className="max-w-6xl mx-auto px-8 py-20 z-10 flex flex-col md:flex-row gap-16 justify-between items-start">
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Altyapınızı Ölçeklendirmeye Hazır mısınız?</h2>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed">Monolitik yapılardan kurtulmak, kendi SaaS çözümünüzü inşa etmek veya yüksek bütçeli reklamlarınızı optimize etmek için Ataşehir'deki merkezimizde kahve eşliğinde projenizi konuşalım.</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#933c81]/20 flex items-center justify-center text-[#933c81] shrink-0">📍</div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Merkez Ofis</h4>
                  <p className="text-slate-400">Ataşehir / İstanbul</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#df6e32]/20 flex items-center justify-center text-[#df6e32] shrink-0">✉️</div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Teknik İletişim</h4>
                  <p className="text-slate-400">Mühendislik ve yazılım talepleriniz için doğrudan bize ulaşın.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 shadow-2xl flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-white mb-4">Proje Detaylarını Paylaşın</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Adınız Soyadınız" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#933c81] transition-colors" />
                <input type="text" required value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} placeholder="Firma / Marka Adı" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#933c81] transition-colors" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="Telefon Numaranız" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#933c81] transition-colors" />
                <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="Kurumsal E-Posta" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#933c81] transition-colors" />
              </div>

              <select required value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:border-[#933c81] transition-colors appearance-none">
                <option value="" disabled>İlgilendiğiniz Hizmeti Seçin</option>
                <option value="Modern Web Tasarım & UX/UI">Modern Web Tasarım & UX/UI</option>
                <option value="Headless & Next.js Dönüşümü">Headless & Next.js Dönüşümü</option>
                <option value="Özel SaaS / CRM Yazılımı">Özel SaaS / CRM Yazılımı</option>
                <option value="Cloudflare WAF & Güvenlik">Cloudflare WAF & Güvenlik</option>
                <option value="Yüksek Bütçeli Ads Yönetimi">Yüksek Bütçeli Ads Yönetimi</option>
                <option value="Teknik SEO & GEO Optimizasyonu">Teknik SEO & GEO Optimizasyonu</option>
                <option value="Diğer / Genel Danışmanlık">Diğer / Genel Danışmanlık</option>
              </select>

              <textarea rows={4} required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="Mevcut altyapınız ve ihtiyaçlarınızdan kısaca bahsedin..." className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#933c81] transition-colors resize-none mt-2"></textarea>
              
              <button type="submit" disabled={status === "loading"} className="w-full bg-gradient-to-r from-[#933c81] to-[#df6e32] text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity mt-2 disabled:opacity-50">
                {status === "loading" ? "Gönderiliyor..." : "Talebi Gönder"}
              </button>

              {feedback && (
                <div className={`mt-3 p-3 rounded-lg text-sm text-center ${status === "success" ? "bg-green-900/30 text-green-400" : "bg-red-900/30 text-red-400"}`}>
                  {feedback}
                </div>
              )}
            </form>
          </div>

        </div>
        
        <div className="border-t border-slate-900/50 py-6 text-center">
          <p className="text-slate-500 text-sm">
            © 2026 webtasarimiyapanfirmalar.com | Bir <strong className="text-slate-300">Ela Teknoloji ve Tasarım</strong> Markasıdır.
          </p>
        </div>
      </section>
    </main>
  );
}