import { assertValue } from '@alecia/util/styles'

export const SESSION_COOKIE_NAME = '__session'

/**
 * Server-side Firebase API KEY
 */
export const GOOGLE_SERVICE_ACCOUNT_KEY = assertValue(
  process.env['GOOGLE_SERVICE_ACCOUNT_KEY'],
  'GOOGLE_SERVICE_ACCOUNT_KEY is not defined',
)

/**
 * Server-side Realtime Firebase Database URL
 */
// export const FIREBASE_DATABASE_URL = assertValue(
//   process.env['FIREBASE_DATABASE_URL'],
//   'FIREBASE_DATABASE_URL is not defined',
// )

/**
 * Server-side Google App Name
 */
export const GOOGLE_APP_NAME = 'auth-app'
