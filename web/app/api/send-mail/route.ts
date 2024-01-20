import { NextResponse, NextRequest } from 'next/server';
import { transporter } from '../../../lib/nodemailer';
import DOMPurify from 'isomorphic-dompurify';

export async function POST(request: NextRequest) {
  try {
    const { fullname, email, message } = await request.json();

    if (!fullname || !email || !message) {
      return NextResponse.json(
        { message: 'Wszystkie pola są wymagane.' },
        { status: 500 }
      );
    }

    const cleanedFullname = DOMPurify.sanitize(fullname);
    const cleanedEmail = DOMPurify.sanitize(email);
    const cleanedMessage = DOMPurify.sanitize(message);

    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: process.env.RECIPENT_EMAIL,
      subject: 'Wiadomość z formularza kontaktowego',
      html: `${cleanedFullname} ${cleanedEmail} ${cleanedMessage}`,
    };

    await transporter.sendMail({ ...mailOptions });

    return NextResponse.json({ message: 'Email wysłany' }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Wystąpił błąd' }, { status: 500 });
  }
}
