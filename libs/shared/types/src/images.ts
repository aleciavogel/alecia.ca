import type { Image as SanityImage } from 'sanity'

export interface ExtendedImage extends SanityImage {
  alt?: string
  caption?: string
}
