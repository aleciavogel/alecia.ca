import { assertValue } from '@alecia/util'

export * from './lib'

/**
 * The dataset name in Sanity.io
 */
export const SANITY_DATASET = assertValue(
  process.env['NEXT_PUBLIC_SANITY_DATASET'],
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET',
)

/**
 * The project ID in Sanity.io
 */
export const SANITY_PROJECT_ID = assertValue(
  process.env['NEXT_PUBLIC_SANITY_PROJECT_ID'],
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID',
)

/**
 * The API version in Sanity.io
 * @see https://www.sanity.io/docs/api-versioning for how versioning works
 */
export const SANITY_API_VERSION = process.env['NEXT_PUBLIC_SANITY_API_VERSION'] ?? '2023-06-21'

/**
 * The secret used to revalidate the cache
 * @see the app/api/revalidate/route.ts for how this is used
 */
export const SANITY_REVALIDATE_SECRET = process.env['SANITY_REVALIDATE_SECRET']

/**
 * Used to configure edit intent links, for Presentation Mode,
 * as well as to configure where the Studio is mounted in the router.
 */
export const SANITY_STUDIO_URL = '/hq'

/**
 * The title of the site
 */
export const SANITY_PROJECT_TITLE = process.env['NEXT_PUBLIC_SANITY_PROJECT_TITLE'] ?? 'Alecia.ca'
