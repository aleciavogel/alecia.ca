import Image from 'next/image'

import { urlFor } from '@alecia/sanity-util/client-utils/sanity-image-utils'
import { ExtendedImage } from '@alecia/types/images'
import { cn } from '@alecia/util/styles'

// TODO: Replace with Sanity types
export interface ImageBoxProps {
  image?: ExtendedImage
  alt?: string
  width?: number
  height?: number
  size?: string
  classesWrapper?: string
  'data-sanity'?: string
}

const ImageBox = ({
  image,
  alt = 'Cover image',
  width = 3500,
  height = 2000,
  size = '100vw',
  classesWrapper,
  ...props
}: ImageBoxProps) => {
  const imageUrl = image && urlFor(image).height(height).width(width).fit('crop').url()

  return (
    <div
      className={cn(`w-full overflow-hidden rounded-[3px] bg-gray-50`, classesWrapper)}
      data-sanity={props['data-sanity']}
    >
      {imageUrl ? (
        <Image
          className="absolute h-full w-full"
          alt={alt}
          width={width}
          height={height}
          sizes={size}
          src={imageUrl}
        />
      ) : null}
    </div>
  )
}

export default ImageBox
