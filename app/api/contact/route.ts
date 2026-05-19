import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, phone, email, service, message } = body;

    // Resend'in test hesabı kuralları gereği, 'to' adresi kayıt olunan e-posta olmalıdır.
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Ela Teknoloji Web Talep <onboarding@resend.dev>',
        to: 'elamedya@gmail.com', // Mail artık bu adrese düşecek
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

    if (!res.ok) {
      const errorResponse = await res.json();
      console.error("Resend API Hatası:", errorResponse);
      throw new Error('Resend API bağlantısı başarısız oldu.');
    }

    return NextResponse.json({ success: true, message: 'Mail başarıyla iletildi.' });
  } catch (error) {
    console.error("Mail Gönderme Hatası:", error);
    return NextResponse.json({ 
      success: false, 
      error: 'Mail gönderilemedi, lütfen sunucu ayarlarını kontrol edin.' 
    }, { status: 500 });
  }
}