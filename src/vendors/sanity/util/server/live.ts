import { defineLive } from 'next-sanity/live'

import { SANITY_TOKEN } from '@alecia/vendors/sanity/constants/server'
import { sanityClient } from '@alecia/vendors/sanity/util/server/client'

export const { sanityFetch, SanityLive } = defineLive({
  client: sanityClient,
  serverToken: SANITY_TOKEN,
  browserToken: SANITY_TOKEN,
})
