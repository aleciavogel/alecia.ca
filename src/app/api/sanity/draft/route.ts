import { defineEnableDraftMode } from 'next-sanity/draft-mode'

import { SANITY_TOKEN } from '@alecia/vendors/sanity/constants/server'
import { sanityClient } from '@alecia/vendors/sanity/util/server/client'

export const { GET } = defineEnableDraftMode({
  client: sanityClient.withConfig({ token: SANITY_TOKEN }),
})
