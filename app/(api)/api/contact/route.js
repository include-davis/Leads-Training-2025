import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  // use Ethereal Email + 
  // make env file with these variables:
  auth: {
    user: process.env.ETHEREAL_USER,
    pass: process.env.ETHEREAL_PASS,
  },
})

export async function POST(request) {
  try {
    // parse json body
    const { name, email, message } = await request.json()

    // send the mail
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: `New contact form message from ${name}`,
      text: message,
      html: `<p>${message}</p>`,
      replyTo: email,
    })

    // log preview url for Ethereal
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info))

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Mail error:', err)
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 500 }
    )
  }
}
