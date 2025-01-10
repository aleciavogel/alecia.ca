import { assertValue } from '@alecia/util'

export const ALGOLIA_APP_ID = assertValue(
  process.env['ALGOLIA_APPLICATION_ID'],
  'Missing environment variable: ALGOLIA_APPLICATION_ID',
)

export const ALGOLIA_ADMIN_KEY = assertValue(
  process.env['ALGOLIA_ADMIN_KEY'],
  'Missing environment variable: ALGOLIA_ADMIN_KEY',
)

export const ALGOLIA_INDEX_NAME = assertValue(
  process.env['ALGOLIA_INDEX_NAME'],
  'Missing environment variable: ALGOLIA_INDEX_NAME',
)
