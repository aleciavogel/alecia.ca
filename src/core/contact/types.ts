import * as z from 'zod'

export const ContactFormSchema = z.object({
  firstName: z.string({
    required_error: 'Please enter your first name.',
  }),
  lastName: z.string({
    required_error: 'Please enter your last name.',
  }),
  email: z
    .string({
      required_error: 'Please enter your email address.',
    })
    .email('This is not a valid email.')
    .min(1, 'Please enter your email address.'),
  phone: z.string({
    required_error: 'Please enter your phone number.',
  }),
  subject: z.string({
    required_error: 'Please select a subject.',
  }),
  message: z.string({
    required_error: 'Please enter a message.',
  }),
})

export type ContactFormValues = z.infer<typeof ContactFormSchema>
