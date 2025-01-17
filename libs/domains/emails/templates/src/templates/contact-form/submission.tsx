import React from 'react'
import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'

import { ContactFormValues } from '@alecia/contact-types'

export const ContactFormSubmissionEmail = ({
  firstName,
  lastName,
  message,
  phone,
  email,
  subject,
}: ContactFormValues) => (
  <Html>
    <Head />
    <Preview>
      New contact form submission from ${firstName} ${lastName}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Row>
            <Column style={headerContent}>
              <Heading style={headerContentTitle}>{subject}</Heading>
            </Column>
          </Row>
        </Section>

        <Section style={content}>
          <Text style={paragraph}>
            <strong>
              {firstName} {lastName} says:
            </strong>
          </Text>
          <Text style={paragraph}>{message}</Text>

          <Hr style={divider} />

          <Text style={paragraph}>
            <strong>Email:</strong>{' '}
            <Link style={plainLink} href={`mailto:${email}`}>
              {email}
            </Link>
          </Text>
          <Text style={paragraph}>
            <strong>Phone Number:</strong>{' '}
            <Link style={plainLink} href={`tel:${phone}`}>
              {phone}
            </Link>
          </Text>
        </Section>
      </Container>

      <Section style={footer}>
        <Text style={footerText}>
          Reply to this email message directly to respond to this contact form submission.
        </Text>
      </Section>
    </Body>
  </Html>
)

ContactFormSubmissionEmail.PreviewProps = {
  firstName: 'Alecia',
  lastName: 'Vogel',
  email: 'hello@alecia.ca',
  phone: '555-555-5555',
  subject: 'General Inquiry',
  message: 'Hello, I have a question about your services. Can you please provide more information?',
} as ContactFormValues

export default ContactFormSubmissionEmail

const main = {
  backgroundColor: '#f3f3f5',
  fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
}

const headerContent = { padding: '20px 30px 15px' }

const headerContentTitle = {
  color: '#fff',
  fontSize: '27px',
  fontWeight: 'bold',
  lineHeight: '27px',
}

const paragraph = {
  fontSize: '15px',
  lineHeight: '21px',
  color: '#3c3f44',
}

const divider = {
  margin: '30px 0',
}

const container = {
  width: '680px',
  maxWidth: '100%',
  margin: '0 auto',
  backgroundColor: '#ffffff',
}

const footer = {
  width: '680px',
  maxWidth: '100%',
  margin: '32px auto 0 auto',
  padding: '0 30px',
}

const content = {
  padding: '20px 30px 30px 30px',
}

const plainLink = {
  color: '#0077cc',
  textDecoration: 'none',
}

const header = {
  borderRadius: '5px 5px 0 0',
  display: 'flex',
  flexDireciont: 'column',
  backgroundColor: '#5b21b6',
}

const footerText = {
  fontSize: '12px',
  lineHeight: '15px',
  color: '#9199a1',
  margin: '0',
}
