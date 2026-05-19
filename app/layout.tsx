// app/layout.tsx
import './globals.css'; // Sende bu import zaten vardır, kendi yoluna göre bırak
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Ela Teknoloji | Web Tasarımı Yapan Firmalar',
  description: 'Kurumsal web tasarım ve mühendislik çözümleri.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="flex flex-col min-h-screen">
        <Header />
        
        {/* Sayfa içerikleri bu main etiketinin içine gelir */}
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}