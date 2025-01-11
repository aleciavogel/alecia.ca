import createImageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import type { ImageUrlBuilder } from 'sanity'

import { SANITY_DATASET, SANITY_PROJECT_ID } from '@alecia/sanity-constants'

/**
 * Create a URL builder for a given Sanity image source
 * @source https://www.sanity.io/docs/image-url
 */
const imgBuilder = createImageUrlBuilder({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
})

/**
 * Create a URL builder for a given Sanity image source
 * @param source - The Sanity image source to create a URL builder for
 * @source https://www.sanity.io/docs/image-url
 */
export const urlFor = (source: SanityImageSource): ImageUrlBuilder => {
  return imgBuilder.image(source)
}
