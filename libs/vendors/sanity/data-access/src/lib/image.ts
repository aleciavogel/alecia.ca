import createImageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import type { ImageUrlBuilder } from 'sanity'

import { SANITY_DATASET, SANITY_PROJECT_ID } from '@alecia/sanity-constants'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId: SANITY_PROJECT_ID, dataset: SANITY_DATASET })

export const urlFor = (source: SanityImageSource): ImageUrlBuilder => {
  return builder.image(source)
}
