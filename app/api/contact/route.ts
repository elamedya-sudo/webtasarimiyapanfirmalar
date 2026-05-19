import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Vercel panelindeki Environment Variables'dan anahtarı çeker
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, phone, email, service, message } = body;

    // Resend üzerinden profesyonel gönderim
    const data = await resend.emails.send({
      from: 'Ela Teknoloji <onboarding@resend.dev>',
      to: 'hytasarim@gmail.com',
      subject: `🔥 Yeni Proje Talebi: ${company} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; border: 1px solid #ddd; padding: 20px; border-radius: 10px;">
          <h2 style="color: #933c81;">Yeni Bir Mühendislik Talebi Geldi!</h2>
          <p>Web sitenizdeki teklif formundan yeni bir talep bırakıldı.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <ul style="list-style: none; padding: 0; line-height: 1.8;">
            <li><strong>Müşteri Adı:</strong> ${name}</li>
            <li><strong>Firma Adı:</strong> ${company}</li>
            <li><strong>Telefon:</strong> ${phone}</li>
            <li><strong>E-Posta:</strong> ${email}</li>
            <li><strong>İlgilendiği Hizmet:</strong> ${service}</li>
          </ul>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #df6e32; margin-top: 20px;">
            <strong>Proje Detayları:</strong><br/>
            ${message}
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'Mail iletildi.', data });
  } catch (error) {
    console.error("Resend Gönderme Hatası:", error);
    return NextResponse.json({ success: false, error: 'Sistemsel hata.' }, { status: 500 });
  }
}