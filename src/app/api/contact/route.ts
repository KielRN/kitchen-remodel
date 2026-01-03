import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, service, message } = body;

        // Server-side validation
        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // In a real application, you would send an email here using Resend or Nodemailer
        // Example:
        // await resend.emails.send({
        //   from: 'onboarding@resend.dev',
        //   to: process.env.CONTACT_EMAIL || 'admin@example.com',
        //   subject: `New Inquiry from ${name} - ${service}`,
        //   html: `<p>Name: ${name}</p><p>Email: ${email}</p>...`
        // });

        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 500));

        console.log('Form submission received:', { name, email, service });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
