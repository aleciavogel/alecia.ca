import { render } from '@react-email/render'
import DOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'
import { Resend } from 'resend'

import { ContactFormValues } from '@alecia/contact-types'
import { ContactFormConfirmationEmail } from '@alecia/email-templates'
import { RESEND_API_KEY } from '@alecia/resend-constants/server'

const resend = new Resend(RESEND_API_KEY)

// Create DOM environment for dompurify
const window = new JSDOM('').window
const purify = DOMPurify(window)

export async function POST(request: Request) {
  const body: ContactFormValues = await request.json()

  // Sanitize the user input
  const sanitizedBody = {
    firstName: purify.sanitize(body.firstName),
    lastName: purify.sanitize(body.lastName),
    message: purify.sanitize(body.message),
    subject: purify.sanitize(body.subject),
    phone: purify.sanitize(body.phone),
    email: purify.sanitize(body.email),
  }

  try {
    const plainText = await render(ContactFormConfirmationEmail(sanitizedBody), {
      plainText: true,
    })

    const { data, error } = await resend.emails.send({
      from: 'Alecia Vogel <hello@alecia.ca>',
      replyTo: 'hello@alecia.ca',
      to: [sanitizedBody.email],
      subject: `Thank you for reaching out!`,
      react: ContactFormConfirmationEmail(sanitizedBody),
      text: plainText,
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
