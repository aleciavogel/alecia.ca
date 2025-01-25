import { render } from '@react-email/render'
import DOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

import { Routes } from '@alecia/constants/routes'
import { ContactFormValues } from '@alecia/contact-types'
import ContactFormConfirmationEmail from '@alecia/email-templates/templates/contact-form/confirmation'
import ContactFormSubmissionEmail from '@alecia/email-templates/templates/contact-form/submission'
import { RESEND_API_KEY } from '@alecia/resend-constants/server'
import { api } from '@alecia/util/api'

const resend = new Resend(RESEND_API_KEY)

// Create DOM environment for dompurify
const window = new JSDOM('').window
const purify = DOMPurify(window)

type TokenRequest = { token?: string | null }

export async function POST(request: NextRequest) {
  const body: ContactFormValues & { token: string } = await request.json()

  // Sanitize the user input
  const sanitizedBody = {
    firstName: purify.sanitize(body.firstName),
    lastName: purify.sanitize(body.lastName),
    message: purify.sanitize(body.message),
    subject: purify.sanitize(body.subject),
    phone: purify.sanitize(body.phone),
    email: purify.sanitize(body.email),
    token: purify.sanitize(body.token),
  }

  // Verify that the captcha token is present and valid
  if (!sanitizedBody.token) {
    return NextResponse.json({ error: 'Invalid captcha' }, { status: 400 })
  }

  const response = await api.post<TokenRequest>(Routes.API.Captcha, { token: sanitizedBody.token })

  if (!response.ok) {
    const data = await response.json()
    return NextResponse.json({ error: data.message }, { status: response.status })
  }

  try {
    // Prepare the submission email
    const submissionPlainText = await render(ContactFormSubmissionEmail(sanitizedBody), {
      plainText: true,
    })

    const submissionEmail = resend.emails.send({
      from: 'Alecia.ca <no-reply@alecia.ca>',
      replyTo: sanitizedBody.email,
      to: ['hello@alecia.ca'],
      subject: `[Contact Form] ${sanitizedBody.subject}`,
      react: ContactFormSubmissionEmail(sanitizedBody),
      text: submissionPlainText,
    })

    // Prepare the confirmation email
    const confirmationPlainText = await render(ContactFormConfirmationEmail(sanitizedBody), {
      plainText: true,
    })

    const confirmationEmail = resend.emails.send({
      from: 'Alecia Vogel <hello@alecia.ca>',
      replyTo: 'hello@alecia.ca',
      to: [sanitizedBody.email],
      subject: `Thank you for reaching out!`,
      react: ContactFormConfirmationEmail(sanitizedBody),
      text: confirmationPlainText,
    })

    // Send both emails concurrently
    const [confirmationResponse, submissionResponse] = await Promise.all([
      confirmationEmail,
      submissionEmail,
    ])

    if (confirmationResponse.error || submissionResponse.error) {
      return Response.json(
        {
          error: {
            confirmationError: confirmationResponse.error,
            submissionError: submissionResponse.error,
          },
        },
        { status: 500 },
      )
    }

    return Response.json({
      confirmationResponse,
      submissionResponse,
    })
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
