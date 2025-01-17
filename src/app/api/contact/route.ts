import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactEmail } from '@/emails/contact-email';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, subject, phoneNumber, message } = body;

        if (!process.env.RESEND_API_KEY) {
            console.error('Missing Resend API key');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        // Send email
        const data = await resend.emails.send({
            from: 'Contact Form <contact@codespaces.org>',
            to: 'hello@codespaces.org',
            subject: `Contact Form: ${subject}`,
            react: ContactEmail({ firstName, lastName, email, subject, phoneNumber, message }),
            reply_to: email,
            text: `Contact Form Submission\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phoneNumber || 'Not provided'}\nSubject: ${subject}\n\nMessage:\n${message}`,
        });

        console.log('Email sent successfully:', data.id);
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Failed to send email:', error);
        return NextResponse.json(
            { error: 'Failed to send email: ' + (error instanceof Error ? error.message : 'Unknown error') },
            { status: 500 }
        );
    }
} 