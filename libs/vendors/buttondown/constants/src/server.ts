import { assertValue } from '@alecia/util'

export const BUTTONDOWN_API_KEY = assertValue(
  process.env['BUTTONDOWN_API_KEY'],
  'Missing environment variable: BUTTONDOWN_API_KEY',
)
