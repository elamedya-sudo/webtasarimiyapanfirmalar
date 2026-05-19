import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, phone, email, service, message } = body;

    // 1. SİZE GELECEK OLAN BİLDİRİM MAİLİ (Admin Bildirimi)
    const adminRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Ela Teknoloji Web Talep <info@webtasarimiyapanfirmalar.com>',
        to: 'elamedya@gmail.com',
        subject: `🔥 Yeni Proje Talebi: ${company} - ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; border: 1px solid #ddd; padding: 20px; border-radius: 10px;">
            <h2 style="color: #933c81;">Yeni Bir Mühendislik Talebi Geldi!</h2>
            <p>Web sitenizdeki teklif formundan yeni bir talep bırakıldı. Detaylar aşağıdadır:</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <ul style="list-style: none; padding: 0; line-height: 1.8;">
              <li><strong>Müşteri Adı:</strong> ${name}</li>
              <li><strong>Firma Adı:</strong> ${company}</li>
              <li><strong>Telefon:</strong> ${phone}</li>
              <li><strong>E-Posta:</strong> ${email}</li>
              <li><strong>İlgilendiği Hizmet:</strong> ${service}</li>
            </ul>
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #df6e32; margin-top: 20px;">
              <strong>Proje Detayları/Mesaj:</strong><br/>
              ${message}
            </div>
          </div>
        `
      })
    });

    if (!adminRes.ok) {
      throw new Error('Yönetici maili gönderilemedi.');
    }

    // 2. MÜŞTERİYE GİDECEK OLAN OTOMATİK YANIT MAİLİ
    const customerRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Ela Teknoloji <info@webtasarimiyapanfirmalar.com>',
        to: email, // Müşterinin formda girdiği mail adresi
        subject: `Talebiniz Alındı - Ela Teknoloji`,
        html: `
          <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; padding: 30px; border-radius: 8px; background-color: #ffffff;">
            <div style="text-align: center; margin-bottom: 20px;">
              <img src="https://www.websitesiyapanfirmalar.net/wp-content/uploads/2025/12/logo.png" alt="Ela Teknoloji Logo" style="max-width: 200px; height: auto;" />
            </div>
            
            <h2 style="color: #2c3e50; text-align: center; font-size: 24px; margin-bottom: 20px;">Talebiniz Bize Ulaştı!</h2>
            
            <p style="font-size: 16px; line-height: 1.6; color: #555;">Merhaba <strong>${name}</strong>,</p>
            <p style="font-size: 16px; line-height: 1.6; color: #555;"><strong>${service}</strong> hizmetimiz ile ilgili iletmiş olduğunuz talebinizi başarıyla teslim aldık. Ekibimiz proje detaylarınızı inceleyerek en kısa sürede sizinle iletişime geçecektir.</p>
            <p style="font-size: 16px; line-height: 1.6; color: #555;">Bizi tercih ettiğiniz için teşekkür ederiz.</p>
            
            <hr style="border: none; border-top: 1px solid #eaeaea; margin: 30px 0;" />
            
            <div style="font-size: 14px; color: #7f8c8d; line-height: 1.8;">
              <strong>Ela Teknoloji ve Tasarım</strong><br/>
              📍 Küçükbakkalköy Mh. Kayışdağı Cd. Ali Ay Sk. No: 3/1 Orkide Apt. Ataşehir - İSTANBUL<br/>
              📞 +90 (216) 576 58 26<br/>
              📱 WhatsApp: (850) 302 84 76<br/>
              ✉️ elamedya@gmail.com
            </div>
          </div>
        `
      })
    });

    // Domain doğrulaması henüz tamamlanmadıysa müşteriye giden mail hata verebilir, 
    // bu durumun genel form akışını bozmaması için hatayı sadece konsola basıyoruz.
    if (!customerRes.ok) {
      console.error("Müşteri yanıt maili gönderilemedi. Resend üzerinde domain onayı gerekebilir.");
    }

    return NextResponse.json({ success: true, message: 'İşlem başarıyla tamamlandı.' });
  } catch (error) {
    console.error("Sistem Hatası:", error);
    return NextResponse.json({ 
      success: false, 
      error: 'İşlem tamamlanamadı.' 
    }, { status: 500 });
  }
}