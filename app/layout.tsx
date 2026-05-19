// app/layout.tsx
import './globals.css'; 
import Header from './components/Header'; // <-- Değişiklik burada
import Footer from './components/Footer'; // <-- Değişiklik burada

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
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}