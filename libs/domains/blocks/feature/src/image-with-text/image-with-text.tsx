import { stegaClean } from '@sanity/client/stega'
import type { PortableTextBlock } from 'next-sanity'

import { ImageBlock, ImageBlockLayout, ImageBlockSide } from '@alecia/blocks-ui'
import { urlFor } from '@alecia/sanity-util'
import { ExtendedImage } from '@alecia/types'
import { getPlaceholderImage } from '@alecia/util'

export interface ImageWithTextProps {
  _type: 'image-with-text'
  _key: string
  side?: string | null
  layout?: string | null
  body?: PortableTextBlock[]
  image?: ExtendedImage | null
  centeredText?: boolean | null
}

export const ImageWithText = ({ image, layout, side, ...rest }: ImageWithTextProps) => (
  <ImageBlock
    {...rest}
    side={stegaClean(side) as ImageBlockSide | null}
    layout={stegaClean(layout) as ImageBlockLayout | null}
    imageAlt={image?.alt ?? ''}
    imageSrc={
      image
        ? urlFor(image)
            .width(image.dimensions?.width ?? 800)
            .height(image.dimensions?.height ?? 600)
            .fit('crop')
            .url()
        : getPlaceholderImage(800, 600)
    }
    width={image?.dimensions?.width}
    height={image?.dimensions?.height}
    imgBgColor={image?.bgColor}
  />
)
