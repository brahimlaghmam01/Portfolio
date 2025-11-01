import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('❌ EMAIL_USER or EMAIL_PASSWORD not set in .env.local')
      return NextResponse.json(
        { error: 'Email configuration is missing. Please contact the administrator.' },
        { status: 500 }
      )
    }

    console.log('📧 Attempting to send email...')
    console.log('📧 From:', process.env.EMAIL_USER)
    console.log('📧 To: laghmam.dev@gmail.com')

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Verify transporter configuration
    try {
      await transporter.verify()
      console.log('✅ SMTP connection verified successfully')
    } catch (verifyError) {
      console.error('❌ SMTP verification failed:', verifyError)
      return NextResponse.json(
        { error: 'Email server configuration error. Please check your Gmail App Password.' },
        { status: 500 }
      )
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'laghmam.dev@gmail.com',
      to: 'laghmam.dev@gmail.com',
      subject: `Portfolio Contact from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #2563eb; margin-bottom: 20px; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="margin-bottom: 20px;">
              <p style="margin: 5px 0; color: #666;">
                <strong style="color: #333;">Name:</strong> ${name}
              </p>
              <p style="margin: 5px 0; color: #666;">
                <strong style="color: #333;">Email:</strong> 
                <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
              </p>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; border-left: 4px solid #2563eb;">
              <p style="margin: 0 0 10px 0; color: #333; font-weight: bold;">Message:</p>
              <p style="margin: 0; color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="margin: 0; color: #999; font-size: 12px;">
                This email was sent from your portfolio contact form
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

---
This email was sent from your portfolio contact form
      `,
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)
    console.log('✅ Email sent successfully!')
    console.log('📧 Message ID:', info.messageId)

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('❌ Error sending email:', error)
    console.error('❌ Error details:', {
      message: error.message,
      code: error.code,
      command: error.command,
    })

    // Provide more specific error messages
    let errorMessage = 'Failed to send email. Please try again later.'

    if (error.code === 'EAUTH') {
      errorMessage = 'Authentication failed. Please check your Gmail App Password in .env.local'
    } else if (error.code === 'ESOCKET') {
      errorMessage = 'Network error. Please check your internet connection.'
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}

