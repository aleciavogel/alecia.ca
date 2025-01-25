import { assertValue } from '@alecia/util/assert-value'

/**
 * Client-side Firebase API KEY
 */
export const FIREBASE_API_KEY = assertValue(
  process.env['NEXT_PUBLIC_FIREBASE_API_KEY'],
  'NEXT_PUBLIC_FIREBASE_API_KEY is not defined',
)

/**
 * Client-side Firebase AUTH_DOMAIN
 */
export const FIREBASE_AUTH_DOMAIN = assertValue(
  process.env['NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN'],
  'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN is not defined',
)

/**
 * Client-side Firebase PROJECT_ID
 */
export const FIREBASE_PROJECT_ID = assertValue(
  process.env['NEXT_PUBLIC_FIREBASE_PROJECT_ID'],
  'NEXT_PUBLIC_FIREBASE_PROJECT_ID is not defined',
)

/**
 * Client-side Firebase STORAGE_BUCKET
 */
export const FIREBASE_STORAGE_BUCKET = assertValue(
  process.env['NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET'],
  'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET is not defined',
)

/**
 * Client-side Firebase MESSAGING_SENDER_ID
 */
export const FIREBASE_MESSAGING_SENDER_ID = assertValue(
  process.env['NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID'],
  'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID is not defined',
)

/**
 * Client-side Firebase APP_ID
 */
export const FIREBASE_APP_ID = assertValue(
  process.env['NEXT_PUBLIC_FIREBASE_APP_ID'],
  'NEXT_PUBLIC_FIREBASE_APP_ID is not defined',
)

/**
 * Client-side Firebase MEASUREMENT_ID
 */
export const FIREBASE_MEASUREMENT_ID = assertValue(
  process.env['NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID'],
  'NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID is not defined',
)
