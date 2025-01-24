import { SinglePetImage } from '@alecia/image-types'
import { PetImage, PetImageProps } from '@alecia/images-ui'
import GalleryPetScrollWrapper from '@alecia/scroll-ui/group-item-scroll-wrapper'
import { Typography } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

interface GalleryPetsProps {
  _key: string
  pretitle?: string
  title?: string
  images: SinglePetImage[] | null
}

const GalleryPets = ({
  _key,
  pretitle = 'Pretitle',
  title = 'Untitled',
  images = [],
}: GalleryPetsProps) => (
  <div
    className={cn('mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4', 'page-content-block')}
  >
    <div className="max-w-[300px] mx-auto text-center space-y-4 md:hidden">
      <Typography variant="blockPretitle">{pretitle}</Typography>
      <Typography variant="galleryTitle" className="leading-relaxed text-4xl">
        {title}
      </Typography>
    </div>
    {images?.map((image: PetImageProps, index: number) => {
      const key = `${_key}-${String(index)}`

      if (index === 1) {
        return (
          <div key={key} className="grid-cols-1 max-md:order-1">
            <div className="max-w-[300px] mx-auto text-center space-y-4 max-md:hidden">
              <Typography variant="blockPretitle">{pretitle}</Typography>
              <Typography variant="galleryTitle" className="leading-relaxed text-4xl">
                {title}
              </Typography>
            </div>
            <GroupItemScrollWrapper index={index} className="md:pt-40">
              <PetImage {...image} />
            </GroupItemScrollWrapper>
          </div>
        )
      }

      return (
        <div key={key} className="grid-cols-1">
          <GroupItemScrollWrapper index={index} className="md:pt-24">
            <PetImage {...image} />
          </GroupItemScrollWrapper>
        </div>
      )
    })}
  </div>
)

export default GalleryPets
