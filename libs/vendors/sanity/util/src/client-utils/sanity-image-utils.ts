import { getImageDimensions } from '@sanity/asset-utils'
import createImageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import type { Image, ImageUrlBuilder } from 'sanity'

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

export const getCroppedImageSrc = (image: Image) => {
  const crop = image.crop

  if (!image || !image.asset) {
    return
  }

  // get the image's og dimensions
  const { width, height } = getImageDimensions(image.asset)

  if (crop) {
    // compute the cropped image's area
    const croppedWidth = Math.floor(width * (1 - (crop.right + crop.left)))

    const croppedHeight = Math.floor(height * (1 - (crop.top + crop.bottom)))

    // compute the cropped image's position
    const left = Math.floor(width * crop.left)
    const top = Math.floor(height * crop.top)

    // gather into a url
    return {
      width: croppedWidth,
      height: croppedHeight,
      src: urlFor(image.asset).rect(left, top, croppedWidth, croppedHeight).url(),
    }
  }

  return {
    width,
    height,
    src: urlFor(image.asset).url(),
  }
}
