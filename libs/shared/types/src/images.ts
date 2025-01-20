import type { Image as SanityImage } from 'sanity'

export interface ExtendedImage extends SanityImage {
  alt?: string
  caption?: string
  dimensions?: {
    width?: number | null
    height?: number | null
  } | null
  bgColor?: string | null
}
