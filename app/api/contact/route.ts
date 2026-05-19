import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, phone, email, service, message } = body;

    // SMTP Sunucu Ayarlarınız
    const transporter = nodemailer.createTransport({
      host: "mail.webtasarimiyapanfirmalar.com", // Mevcut hosting mail sunucunuz
      port: 465,
      secure: true, 
      auth: {
        user: "info@webtasarimiyapanfirmalar.com", // Gönderici adres
        pass: "vLTBf2W7YeABzwh", // Bu mailin şifresi
      },
    });

    // Gönderilecek Mailin Tasarımı
    const mailOptions = {
      from: '"Ela Teknoloji Web Talep" <info@webtasarimiyapanfirmalar.com>',
      to: 'hytasarim@gmail.com', // Size gelecek adres
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
    return NextResponse.json({ success: false, error: 'Mail gönderilemedi.' }, { status: 500 });
  }
}