import { assertValue } from '@alecia/util'

/**
 * The token used to read from the Sanity API
 * Note: it is only available on the server, not the browser
 */
export const SANITY_TOKEN = assertValue(
  process.env['SANITY_API_READ_TOKEN'],
  'Missing environment variable: SANITY_API_READ_TOKEN',
)
