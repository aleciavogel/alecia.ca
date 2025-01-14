import { type FC } from 'react'
import Image from 'next/image'

import { urlFor } from '@alecia/sanity-util'
import { ExtendedImage } from '@alecia/types'
import { cn } from '@alecia/util'

export interface ImageBoxProps {
  image?: ExtendedImage
  alt?: string
  width?: number
  height?: number
  size?: string
  classesWrapper?: string
  'data-sanity'?: string
}

export const ImageBox: FC<ImageBoxProps> = ({
  image,
  alt = 'Cover image',
  width = 3500,
  height = 2000,
  size = '100vw',
  classesWrapper,
  ...props
}) => {
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
