import { stegaClean } from '@sanity/client/stega'
import type { PortableTextBlock } from 'next-sanity'

import {
  ImageBlock,
  ImageBlockLayout,
  ImageBlockSide,
} from '@alecia/core/blocks/components/image-block'
import { ExtendedImage } from '@alecia/types/images'
import { getPlaceholderImage } from '@alecia/util/images'
import { getCroppedImageSrc } from '@alecia/vendors/sanity/util/client/sanity-image-utils'

export interface ImageWithTextProps {
  _type: 'image-with-text'
  _key: string
  side?: string | null
  layout?: string | null
  body?: PortableTextBlock[]
  image?: ExtendedImage | null
  centeredText?: boolean | null
}

const ImageWithText = ({ image, layout, side, ...rest }: ImageWithTextProps) => {
  if (!image) {
    return (
      <div className="page-content-block">
        <ImageBlock
          {...rest}
          side={stegaClean(side) as ImageBlockSide | null}
          layout={stegaClean(layout) as ImageBlockLayout | null}
          imageAlt={''}
          imageSrc={getPlaceholderImage(800, 600)}
          width={800}
          height={600}
          imgBgColor={null}
        />
      </div>
    )
  }

  const { width, height, src } = getCroppedImageSrc(image) ?? {}

  return (
    <div className="page-content-block">
      <ImageBlock
        {...rest}
        side={stegaClean(side) as ImageBlockSide | null}
        layout={stegaClean(layout) as ImageBlockLayout | null}
        imageAlt={image?.alt ?? ''}
        imageSrc={src ?? getPlaceholderImage(800, 600)}
        width={width}
        height={height}
        imgBgColor={image?.bgColor}
      />
    </div>
  )
}

export default ImageWithText
