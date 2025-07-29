import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const msg = `
      <div>
        <h1>${name} has sent you a message</h1>
        <p>${message}</p>
        <p>Reply to: ${email}</p>
      </div>
    `;

    const mailOptions = {
      from: `"${name}" <${testAccount.user}>`,
      to: testAccount.user,
      subject: `New message from ${name}`,
      html: msg,
    };

    const info = await transporter.sendMail(mailOptions);
    const preview = nodemailer.getTestMessageUrl(info);

    return new Response(JSON.stringify({ ok: true, preview }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: e.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}