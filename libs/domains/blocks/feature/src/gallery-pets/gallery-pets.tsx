import type { FC } from 'react'

import { SinglePetImage } from '@alecia/image-types'
import { PetImage, PetImageProps } from '@alecia/images-ui'
import { Typography } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

import { GalleryPetScrollWrapper } from './gallery-pet-scroll-wrapper'

interface GalleryPetsProps {
  _key: string
  pretitle?: string
  title?: string
  images: SinglePetImage[] | null
}

export const GalleryPets: FC<GalleryPetsProps> = ({
  _key,
  pretitle = 'Pretitle',
  title = 'Untitled',
  images = [],
}) => (
  <div className={cn('container mx-auto grid grid-cols-3 gap-4')}>
    {images?.map((image: PetImageProps, index: number) => {
      const key = `${_key}-${String(index)}`

      if (index === 1) {
        return (
          <div key={key} className="grid-cols-1 max-md:order-1">
            <div className="max-w-[300px] mx-auto text-center space-y-4">
              <Typography variant="blockPretitle">{pretitle}</Typography>
              <Typography variant="galleryTitle" className="leading-relaxed">
                {title}
              </Typography>
            </div>
            <GalleryPetScrollWrapper index={index} className="md:pt-40">
              <PetImage {...image} />
            </GalleryPetScrollWrapper>
          </div>
        )
      }

      return (
        <div key={key} className="grid-cols-1">
          <GalleryPetScrollWrapper index={index} className="md:pt-24">
            <PetImage {...image} />
          </GalleryPetScrollWrapper>
        </div>
      )
    })}
  </div>
)
