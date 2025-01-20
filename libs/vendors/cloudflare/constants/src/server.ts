import { assertValue } from '@alecia/util'

export const TURNSTILE_SECRET = assertValue(
  process.env['CLOUDFLARE_TURNSTILE_SECRET'],
  'Missing environment variable: CLOUDFLARE_TURNSTILE_SECRET',
)

export const CLOUDFLARE_TURNSTILE_ROUTE =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify'
