import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, phone, email, service, message } = body;

    // SMTP Sunucu Ayarları - Orijinal Hosting Bilgilerin
    const transporter = nodemailer.createTransport({
      host: "mail.webtasarimiyapanfirmalar.com", 
      port: 587, // 465 yerine 587'yi deneyelim
      secure: false, // 587 için false olmalı
      auth: {
        user: "info@webtasarimiyapanfirmalar.com",
        pass: "vLTBf2W7YeABzwh",
      },
      tls: {
        rejectUnauthorized: false // Hosting sertifikası uyuşmazlığı varsa bunu aşar
      },
      connectionTimeout: 10000, // 10 saniye bekleme süresi
    });

    // Orijinal Profesyonel Mail Tasarımın
    const mailOptions = {
      from: '"Ela Teknoloji Web Talep" <info@webtasarimiyapanfirmalar.com>',
      to: 'hytasarim@gmail.com', 
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
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Mail başarıyla iletildi.' });
  } catch (error) {
    console.error("Mail Gönderme Hatası:", error);
    return NextResponse.json({ 
      success: false, 
      error: 'Mail gönderilemedi, lütfen sunucu ayarlarını kontrol edin.' 
    }, { status: 500 });
  }
}