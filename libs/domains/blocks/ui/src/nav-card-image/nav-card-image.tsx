import type { FC, JSX } from 'react'
import { Image } from 'next-sanity/image'

import { cn, getPlaceholderImage } from '@alecia/util'

interface NavCardImageProps {
  image: string | null
  alt: string | null
}

export const NavCardImage: FC<NavCardImageProps> = ({ image, alt = '' }): JSX.Element => (
  <div
    className={cn(
      'mx-auto',
      'overflow-hidden rounded-md grow-0 shadow-lg',
      'w-[70vw]',
      'relative z-[3] md:-mt-10',
    )}
    data-scroll
    data-scroll-speed={1.75}
  >
    <Image
      src={image ?? getPlaceholderImage(500, 600)}
      alt={alt ?? ''}
      className="w-full"
      loading="lazy"
      width={500}
      height={600}
    />
  </div>
)
