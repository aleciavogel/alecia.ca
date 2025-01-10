import { assertValue } from '@alecia/util'

export const resendApiKey = assertValue(
  process.env['RESEND_API_KEY'],
  'Missing environment variable: RESEND_API_KEY',
)
