import { createClient, type SanityClient } from 'next-sanity'

import { SANITY_API_VERSION, SANITY_DATASET, SANITY_PROJECT_ID } from '@alecia/sanity-constants'

// TODO: Move to its own package potentially
export const client: SanityClient = createClient({
  apiVersion: SANITY_API_VERSION,
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  useCdn: true,
  perspective: 'published',
})
