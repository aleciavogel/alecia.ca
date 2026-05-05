import { assertValue } from '@alecia/util/assert-value'

export const RESEND_API_KEY = assertValue(
  process.env['RESEND_API_KEY'],
  'Missing environment variable: RESEND_API_KEY',
)
