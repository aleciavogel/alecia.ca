import { createClient } from 'next-sanity'

import { IS_DEV_MODE } from '@alecia/constants'
import {
  SANITY_API_VERSION,
  SANITY_DATASET,
  SANITY_PROJECT_ID,
  SANITY_STUDIO_URL,
} from '@alecia/sanity-constants'

/**
 * Create a Sanity client for fetching data from the Sanity API
 */
export const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  useCdn: !IS_DEV_MODE,
  stega: {
    studioUrl: SANITY_STUDIO_URL,
  },
})
