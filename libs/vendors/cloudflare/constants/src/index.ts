import { assertValue } from '@alecia/util/styles'

export const TURNSTILE_SITE_KEY = assertValue(
  process.env['NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY'],
  'Missing environment variable: NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY',
)
