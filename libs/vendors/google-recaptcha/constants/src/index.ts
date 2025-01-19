import { assertValue } from '@alecia/util'

export const RECAPTCHA_KEY = assertValue(
  process.env['NEXT_PUBLIC_RECAPTCHA_KEY'],
  'Missing environment variable: NEXT_PUBLIC_RECAPTCHA_KEY',
)
