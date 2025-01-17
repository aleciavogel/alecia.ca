import type { FC, ReactNode } from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import { Image } from 'next-sanity/image'

import { ThumbnailDimensions } from '@alecia/constants'
import { cn } from '@alecia/util'

import { Tag, type TagProps } from '../badge'

export interface CardWithTextProps {
  href: string
  children: ReactNode
  changeOnDarkMode?: boolean
  tags?: TagProps[]
  image?: {
    src: string
    alt: string
  }
  className?: string
}

export const CardItem: FC<CardWithTextProps> = ({
  children,
  className,
  changeOnDarkMode = false,
  tags,
  image,
  href,
}) => (
  <div
    className={cn(
      'block h-full',
      'rounded-lg overflow-hidden',
      'border-2',
      'border-primary-800',
      'relative',
      'text-left',
      'animated-flat-shadow',
      'shadow-primary-800',
      'group/card',
      'bg-white',
      classnames({
        'dark:bg-gray-900': changeOnDarkMode,
        'dark:border-primary-300 dark:hover:border-primary-500': changeOnDarkMode,
        'dark:shadow-primary-400 dark:hover:shadow-primary-500': changeOnDarkMode,
        'pt-16': !image && tags?.length,
      }),
      className,
    )}
  >
    <div>
      {tags ? (
        <div
          className={cn(
            'absolute w-full flex justify-end space-x-3 left-0',
            classnames({
              'top-4 px-4': !image,
              'top-2 px-3': image,
            }),
          )}
        >
          {tags.map((tag, index) => (
            <Tag
              key={`tag-${String(index)}`}
              {...tag}
              className={classnames({
                shadow: image,
              })}
            />
          ))}
        </div>
      ) : null}

      {image ? (
        <Link href={href}>
          <Image
            src={image.src}
            alt={image.alt}
            width={ThumbnailDimensions.Width}
            height={ThumbnailDimensions.Height}
          />
        </Link>
      ) : null}
    </div>
    <div
      className={cn(
        'px-5 py-4',
        classnames({
          'border-t-2': Boolean(image),
          'transition-all duration-200 ease-in-out': Boolean(image),
          'border-t-solid border-t-primary-800 dark:border-t-primary-300': Boolean(image),
          'dark:group-hover/card:border-t-primary-500': Boolean(image),
          'group-hover/card:border-t-primary-950': Boolean(image),
        }),
      )}
    >
      <div
        className={cn(
          'space-y-3 h-full',
          classnames({
            'text-body': changeOnDarkMode,
            'text-gray-600': !changeOnDarkMode,
          }),
        )}
      >
        {children}
      </div>
    </div>
  </div>
)
