'use client';

import Link from 'next/link';

export default function BasariHikayeleriPage() {
  const cases = [
    {
      title: "Tonermasters: Bot Koruması ve %25 Bütçe Verimliliği",
      excerpt: "Avustralya merkezli dev e-ticaret sitesinde PayPal sahte sipariş botlarını temizledik, altyapıyı hızlandırdık ve bütçeyi optimize ettik.",
      metrics: ["%300 Hız Artışı", "Bot Saldırıları Sıfırlandı"],
      href: "/basari-hikayeleri/tonermasters"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b1120] pb-20">
      <section className="pt-24 pb-16 px-4 text-center">
        <h1 className="text-4xl font-extrabold text-white mb-4">Başarı Hikayeleri</h1>
        <p className="text-gray-400">Veriyle ölçümlenebilir, mühendislikle şekillenmiş dijital büyüme örnekleri.</p>
      </section>

      <section className="container mx-auto px-4 max-w-5xl">
        {cases.map((c, i) => (
          <Link href={c.href} key={i} className="block group">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-amber-500/50 transition-all shadow-xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">{c.title}</h2>
                  <p className="text-gray-400 mb-6">{c.excerpt}</p>
                  <div className="flex gap-4">
                    {c.metrics.map((m, idx) => (
                      <span key={idx} className="bg-amber-950/30 text-amber-400 text-xs px-3 py-1 rounded-full border border-amber-900">{m}</span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-end">
                  <span className="text-white font-semibold">Detayları İncele →</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}