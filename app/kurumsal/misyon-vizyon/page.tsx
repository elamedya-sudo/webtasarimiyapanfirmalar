'use client';
export default function MisyonVizyonPage() {
  return (
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
  );
}