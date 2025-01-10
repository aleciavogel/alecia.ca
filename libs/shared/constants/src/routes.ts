/**
 * The base URL of the site, for use in generating absolute URLs
 */
export const SITE_BASE_URL =
  process.env['NEXT_PUBLIC_VERCEL_URL'] ?? process.env['NEXT_PUBLIC_BASE_URL']
