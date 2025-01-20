/**
 * The base URL of the site, for use in generating absolute URLs
 */
export const SITE_BASE_URL =
  process.env['NEXT_PUBLIC_VERCEL_URL'] ?? process.env['NEXT_PUBLIC_BASE_URL']

/**
 * Non-webhook API Routes for the application
 */
export const Routes = {
  API: {
    Captcha: '/api/captcha',
    Emails: {
      ContactFormSubmission: '/api/contact/send',
      ContactFormConfirmation: '/api/contact/confirm',
    },
    Newsletters: {
      // TODO: create this route for buttondown
      Subscribe: '/newsletter/subscribe',
    },
  },
  Home: '/',
  About: '/about',
  Resume: '/resume',
  Blog: {
    Index: '/blog',
    Article: '/blog/{slug}',
  },
  Contact: '/contact',
  Courses: {
    Index: '/courses',
    Course: '/courses/{slug}',
    Chapter: '/courses/{slug}/{chapter}',
  },
  Experiments: {
    Index: '/experiments',
    Experiment: '/experiments/{slug}',
  },
  Projects: {
    Index: '/projects',
    Project: '/projects/{slug}',
  },
  Resources: '/resources',
}
