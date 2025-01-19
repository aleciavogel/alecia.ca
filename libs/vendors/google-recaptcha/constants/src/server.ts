import { assertValue } from '@alecia/util'

export const RECAPTCHA_SECRET = assertValue(
  process.env['RECAPTCHA_SECRET'],
  'Missing environment variable: RECAPTCHA_SECRET',
)
