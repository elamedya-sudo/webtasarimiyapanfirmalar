import './globals.css'; 
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export const metadata = {
  title: 'Ela Teknoloji | Web Tasarımı Yapan Firmalar',
  description: 'Kurumsal web tasarım, modern mühendislik çözümleri ve GEO altyapısı.',
  icons: {
    icon: '/favicon.ico',
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
        
        <FloatingActions />
        <Footer />
      </body>
    </html>
  );
}