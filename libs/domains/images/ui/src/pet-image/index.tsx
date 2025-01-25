import classNames from 'classnames'
import { Image } from 'next-sanity/image'

import { GalleryPetsBlockType } from '@alecia/block-types'
import ZigZagAccent from '@alecia/graphics/zigzags/zigzag-accent'
import Typography from '@alecia/ui-kit/ui/typography'
import { getPlaceholderImage } from '@alecia/util/images'

type PetImageProps = NonNullable<GalleryPetsBlockType['images']>[number]

const PetImage = ({ name, imageAlt, imageSrc, additionalInfo }: PetImageProps) => (
  <div className="relative overflow-hidden rounded-lg group">
    {/* Name and ZigZag */}
    <div
      className={classNames('absolute bottom-10 left-10 z-10', {
        'transition-all duration-300 group-hover:bottom-[80%]':
          additionalInfo && additionalInfo.length > 0,
      })}
    >
      <Typography variant="galleryLabel" className="mb-1">
        {name}
      </Typography>
      <ZigZagAccent width="50%" className="fill-primary-300" />
    </div>

    {/* Additional Info */}
    {additionalInfo && (
      <div className="text-white absolute top-[25%] left-0 pr-8 z-10 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        <ul className="pl-10 list-disc list-inside space-y-4">
          {additionalInfo?.map((info, index) => (
            <li key={index} className="">
              {info}
            </li>
          ))}
        </ul>
      </div>
    )}

    {/* Overlay */}
    <div className="absolute inset-0 bg-primary-700/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"></div>

    {/* Image */}
    <Image
      src={imageSrc ?? getPlaceholderImage(400, 400)}
      alt={imageAlt ?? ''}
      height={400}
      width={400}
      loading="lazy"
      className="object-fill w-full"
    />
  </div>
)

export default PetImage
