'use client'

import type { FC, JSX } from 'react'
import { Image } from 'next-sanity/image'

import { useParallax } from '@alecia/core/scroll/hooks/use-parallax'
import { getPlaceholderImage } from '@alecia/util/images'
import { cn } from '@alecia/util/styles'

interface NavCardImageProps {
  image: string | null
  alt: string | null
}

const NavCardImage: FC<NavCardImageProps> = ({ image, alt = '' }): JSX.Element => {
  const ref = useParallax<HTMLDivElement>({ speed: 1.75 })

  return (
    <div
      ref={ref}
      className={cn(
        'mx-auto',
        'overflow-hidden rounded-md grow-0 shadow-lg',
        'w-[70vw]',
        'relative z-[3] md:-mt-10',
      )}
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
}

export default NavCardImage
