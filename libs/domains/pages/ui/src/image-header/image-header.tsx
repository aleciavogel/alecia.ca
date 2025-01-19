import React, { type FC } from 'react'
import { Image } from 'next-sanity/image'

import { cn, getPlaceholderImage } from '@alecia/util'

import { ImageHeaderIntro, type ImageHeaderIntroProps } from './image-header-intro'

interface ImageHeaderProps extends ImageHeaderIntroProps {
  imageSrc?: string | null
  imageAlt?: string | null
}

export const ImageHeader: FC<ImageHeaderProps> = ({ imageSrc, imageAlt, ...props }) => (
  <header
    className={cn(
      'relative',
      'transition-dark-mode',
      'hero-padding',
      'md:pt-28 xl:pt-32',
      'after:z-[-1] after:content-[""] after:absolute after:inset-0',
      'after:bg-gradient-to-b after:from-primary-950 after:from-20% after:to-fuchsia-600',
    )}
  >
    <div className={cn('flex items-center justify-items-center px-8 md:px-20 page-container')}>
      <div
        className={cn(
          'w-full text-white',
          'grid grid-cols-1 md:grid-cols-2',
          'gap-6 md:gap-0 pb-8',
        )}
      >
        <div className="mt-10 md:mt-0 md:pt-24">
          <ImageHeaderIntro {...props} />
        </div>

        <div className="relative h-full z-[100] -mb-[150px]">
          <div
            className={cn(
              'md:absolute md:top-0 md:right-0',
              'w-[80%] max-w-[300px] md:max-w-full',
              'z-[100] mx-auto overflow-hidden rounded-lg',
              'shadow-lg',
            )}
            data-scroll
            data-scroll-speed={1.25}
          >
            <Image
              src={imageSrc ?? getPlaceholderImage(492, 913)}
              alt={imageAlt ?? 'About header image'}
              height={913}
              width={492}
              className="w-full object-fill"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  </header>
)
