import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'

import { ContactFormValues } from '@alecia/contact-types'

const ALECIA_IMG_SRC =
  'https://res.cloudinary.com/ddwbykwa4/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1737096490/img_ontsyt.png'

export const ContactFormConfirmationEmail = ({
  firstName,
  lastName,
  message,
  subject,
  email,
  phone,
}: ContactFormValues) => {
  const previewText = `Alecia will get back to you soon!`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 my-auto mx-auto font-sans px-2">
          <Container className="bg-white border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={ALECIA_IMG_SRC}
                width="100"
                height="100"
                alt="Alecia.ca"
                className="my-0 mx-auto rounded-full"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              <strong>Alecia</strong> has received your email!
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">Hello {firstName},</Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Thank you for reaching out! I truly appreciate you taking the time to connect with me
              and I’ll do my best to respond as quickly as possible.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              I typically respond to inquiries within 1–2 business days. If your request is urgent
              or time-sensitive, please feel free to reply to this email to let me know.
            </Text>
            <Text className="text-black text-[14px] mb-[0px]">
              In the meantime, feel free to:
              <br />-{' '}
              <Link className="text-violet-600 text-[14px]" href="https://alecia.ca/projects">
                Explore my portfolio.
              </Link>
              <br />-{' '}
              <Link className="text-violet-600" href="https://techbrat.fm">
                Check out my podcast.
              </Link>
              <br /> -{' '}
              <Link
                className="text-violet-600 text-[14px]"
                href="https://linkedin.com/in/alecia-vogel"
              >
                Connect with me on LinkedIn.
              </Link>
              <br />
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Looking forward to connecting with you!
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Sincerely,
              <br />
              Alecia
            </Text>
            <Hr className="my-[24px]" />
            <Section>
              <Text className="text-black text-[14px] font-bold p-0 my-[30px] mx-0">
                <strong>Here's what you sent:</strong>
              </Text>
              <Section className="px-4 bg-violet-100 text-violet-800">
                <Text className="text-[14px] leading-[24px]">
                  <strong>Subject:</strong> {subject}
                </Text>
                <Text className="text-[14px] leading-[24px]">{message}</Text>
              </Section>
              <Text className="text-black text-[14px] leading-[24px]">
                Email:{' '}
                <Link className="text-violet-600" href={`mailto:${email}`}>
                  {email}
                </Link>
                <br />
                Phone Number:{' '}
                <Link className="text-violet-600" href={`tel:${phone}`}>
                  {phone}
                </Link>
              </Text>
            </Section>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              This confirmation message was intended for{' '}
              <span className="text-black">
                {firstName} {lastName}
              </span>{' '}
              and was sent from{' '}
              <Link className="text-violet-600" href="https://alecia.ca/contact">
                Alecia Vogel's website
              </Link>
              . If you were not the contact form submitter, please reply to this email to let me
              know.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

ContactFormConfirmationEmail.PreviewProps = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  email: 'ada@lovelace.com',
  phone: '555-555-5555',
  subject: 'General Inquiry',
  message: 'Hello, I have a question about your services. Can you please provide more information?',
} as ContactFormValues

export default ContactFormConfirmationEmail
