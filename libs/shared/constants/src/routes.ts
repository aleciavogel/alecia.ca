import { IS_PRODUCTION_MODE } from './env'

/**
 * The base URL of the site, for use in generating absolute URLs
 */
export const SITE_BASE_URL = IS_PRODUCTION_MODE
  ? 'alecia.ca'
  : process.env['NEXT_PUBLIC_VERCEL_URL'] ??
    process.env['NEXT_PUBLIC_BASE_URL'] ??
    'alecia.local:3000'

/**
 * Non-webhook API Routes for the application
 */
export const Routes = {
  API: {
    Captcha: '/api/captcha',
    Contact: {
      Send: '/api/contact/send',
    },
    Newsletters: {
      // TODO: create this route for buttondown
      Subscribe: '/api/newsletter/subscribe',
    },
    Sanity: {
      DisableDraft: '/api/sanity/disable-draft',
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
