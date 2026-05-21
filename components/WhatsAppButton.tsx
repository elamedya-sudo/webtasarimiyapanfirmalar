import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "905382370822"; // Senin numaran
  const message = "Merhaba, İzmir Katlanır Cam'dan ücretsiz keşif randevusu almak istiyorum.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[999] bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 hover:bg-[#128C7E] transition-all duration-300 group flex items-center gap-3 overflow-hidden max-w-[60px] hover:max-w-[300px]"
    >
      <MessageCircle className="w-8 h-8 shrink-0" />
      <span className="font-black text-sm uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Ücretsiz Keşif Hattı
      </span>
    </a>
  );
}