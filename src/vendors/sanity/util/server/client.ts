import { createClient, type SanityClient } from 'next-sanity'

import {
  SANITY_API_VERSION,
  SANITY_DATASET,
  SANITY_PROJECT_ID,
  SANITY_STUDIO_URL,
} from '@alecia/vendors/sanity/constants'

export const sanityClient: SanityClient = createClient({
  apiVersion: SANITY_API_VERSION,
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  useCdn: true,
  perspective: 'published',
  stega: {
    studioUrl: SANITY_STUDIO_URL,
  },
})
