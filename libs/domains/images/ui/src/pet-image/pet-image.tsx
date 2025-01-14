import type { FC } from 'react'
import { Image } from 'next-sanity/image'

import { SinglePetImage } from '@alecia/image-types'
import { Typography, ZigZagAccent } from '@alecia/ui-kit'
import { getPlaceholderImage } from '@alecia/util'

export interface PetImageProps extends SinglePetImage {
  imageAlt?: string
  imageSrc?: string
}

export const PetImage: FC<PetImageProps> = ({ name, imageAlt, imageSrc }) => (
  <div className="relative overflow-hidden rounded-lg">
    <div className="absolute bottom-10 left-10">
      <Typography variant="galleryLabel" className="mb-1">
        {name}
      </Typography>
      <ZigZagAccent width="50%" className="fill-primary-300" />
    </div>
    <Image
      src={imageSrc ?? getPlaceholderImage(400, 400)}
      alt={imageAlt ?? ''}
      height={400}
      width={400}
      className="object-fill w-full"
    />
  </div>
)
