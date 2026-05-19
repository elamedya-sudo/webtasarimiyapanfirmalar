'use client';

export default function IletisimPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Üst Başlık */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Bizimle İletişime Geçin</h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Mühendislik odaklı web mimarileri, Next.js çözümleri ve dijital stratejilerimiz hakkında bilgi almak için ofisimize kahveye bekleriz veya dijital kanallardan bize anında ulaşabilirsiniz.
          </p>
        </div>

        {/* Bilgi Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Adres */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center text-center space-y-4">
            <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-2xl text-[#933c81]">
              📍
            </div>
            <h3 className="font-bold text-gray-800 text-lg">Merkez Ofis</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Küçükbakkalköy Mh. Kayışdağı Cd. Ali Ay Sk. No: 3/1 Orkide Apt. Ataşehir - İSTANBUL
            </p>
          </div>

          {/* Telefonlar */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center text-center space-y-4">
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-2xl text-[#df6e32]">
              📞
            </div>
            <h3 className="font-bold text-gray-800 text-lg">Telefon & WhatsApp</h3>
            <div className="text-gray-600 text-sm space-y-1">
              <p><strong>Sabit Hat:</strong> +90 (216) 576 58 26</p>
              <p><strong>WhatsApp:</strong> +90 (850) 302 84 76</p>
            </div>
          </div>

          {/* E-Posta */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center text-center space-y-4">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-2xl text-blue-500">
              ✉️
            </div>
            <h3 className="font-bold text-gray-800 text-lg">E-Posta</h3>
            <div className="text-gray-600 text-sm space-y-1">
              <p className="text-[#933c81] font-medium">info@webtasarimiyapanfirmalar.com</p>
              <p className="text-gray-400">elamedya@gmail.com</p>
            </div>
          </div>

        </div>

        {/* Harita */}
        <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100 overflow-hidden h-[450px] relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.644781488277!2d29.108253176551846!3d40.97941572141527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dac6683fca3a87%3A0x6b7de5b736b42b6a!2zS8O8w6fDvGtiYWtrYWxrw7b5LCBLYXnEscWfZGHEn8SxIENkLiBObzozLzEsIDM0NzUwIEF0YcWfZWhpci_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1716124567890!5m2!1str!2str" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl"
          ></iframe>
        </div>

      </div>
    </div>
  );
}