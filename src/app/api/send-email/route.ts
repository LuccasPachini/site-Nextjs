import { NextResponse } from 'next/server'
const nodemailer = require("nodemailer");

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER, 
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: 'Nova mensagem do formulário de contato',
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>Mensagem de ${name}</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${message}</p>
        </div>
      `,
    })

    return NextResponse.json({ message: 'Mensagem enviada com sucesso' }, { status: 200 })
  } catch (error: any) {
    console.error('Erro ao enviar o email:', error)
    return NextResponse.json({ error: 'Erro ao enviar a mensagem' }, { status: 500 })
  }
}
