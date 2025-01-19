/**
 * The base URL of the site, for use in generating absolute URLs
 */
export const SITE_BASE_URL =
  process.env['NEXT_PUBLIC_VERCEL_URL'] ?? process.env['NEXT_PUBLIC_BASE_URL']

/**
 * Non-webhook API Routes for the application
 */
export const Routes = {
  Emails: {
    ContactFormSubmission: '/contact/send',
    ContactFormConfirmation: '/contact/confirm',
  },
  Newsletters: {
    Subscribe: '/newsletter/subscribe',
  },
  API: {
    Captcha: '/api/captcha',
  },
}
