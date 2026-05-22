import './globals.css'; 
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import ScrollToTop from '@/components/ScrollToTop';
import Script from 'next/script';

export const metadata = {
  title: 'Ela Teknoloji | Web Tasarımı Yapan Firmalar',
  description: 'Kurumsal web tasarım, modern mühendislik çözümleri ve GEO altyapısı.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="flex flex-col min-h-screen">
        
        {/* --- GOOGLE ANALYTICS BAŞLANGIÇ --- */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-GZ6KZFJL4V`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GZ6KZFJL4V');
          `}
        </Script>
        {/* --- GOOGLE ANALYTICS BİTİŞ --- */}

        <Header />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <FloatingActions />
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}