
import nodemailer from "nodemailer";

const senderEmail = process.env.SENDER_EMAIL;
const password = process.env.SENDER_PWD;
const targetEmail = process.env.TARGET_EMAIL;

export default async function contactFormMailer(req, res) {
  
    console.log("EMAIL ENV:", senderEmail, password, targetEmail);
    console.log("REQUEST BODY:", req.body);

  
    if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

    try {
      const { name, email, message } = req.body;

      const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: senderEmail,
            pass: password,
        }
        });

        const msg = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        `;

      const mailOptions = {
        from: `${name} <${senderEmail}> `,
        to: targetEmail,
        subject: `Contact Form - ${name} has a message: ${message.substr(0, 30)}...`,
        replyTo: email,
        msg,
      };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("Email error:", e);
    return res.status(500).json({ ok: false, error: e.message });
  }
}