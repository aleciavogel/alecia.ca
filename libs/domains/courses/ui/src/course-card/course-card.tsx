import type { FC } from 'react'
import { faArrowRightLong } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import Link from 'next/link'

import { CardItem, type TagProps, Typography } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

interface CourseProps {
  title?: string
  content?: string
  url?: string
  description?: string
  changeOnDarkMode?: boolean
  className?: string
  image?: {
    src: string
    alt: string
  }
  tags?: TagProps[]
}

export const CourseCard: FC<CourseProps> = ({
  className,
  url = '/',
  title = 'Untitled',
  description = '',
  changeOnDarkMode = false,
  image,
  tags,
}) => {
  return (
    <CardItem
      href={url}
      className={cn('pb-10 group/card', className)}
      changeOnDarkMode={changeOnDarkMode}
      tags={tags}
      image={image}
    >
      <div
        className={cn(
          'space-y-3 h-full',
          classNames({
            'text-body': changeOnDarkMode,
            'text-gray-600': !changeOnDarkMode,
          }),
        )}
      >
        <div className="mb-4 space-y-3 line-clamp-4 md:line-clamp-5">
          <Link href={url}>
            <Typography
              size="3xl"
              variant="h3"
              className={cn(
                classNames({
                  'text-primary hover:text-accent': changeOnDarkMode,
                  'text-primary-600 hover:text-accent-600': !changeOnDarkMode,
                }),
              )}
            >
              {title}
            </Typography>
          </Link>
          <Typography
            className={cn(
              'max-w-[460px] leading-normal',
              'text-sm md:text-base',
              classNames({
                'text-body': changeOnDarkMode,
                'text-gray-600': !changeOnDarkMode,
              }),
            )}
          >
            {description.length ? description : 'No preview text has been set yet.'}
          </Typography>
        </div>

        <Link
          href={url}
          className={cn(
            'absolute bottom-8 left-5 space-x-2 group/link',
            classNames({
              'text-primary hover:text-accent': changeOnDarkMode,
              'text-primary-600 hover:text-accent-600': !changeOnDarkMode,
            }),
          )}
        >
          <span className="relative zigzag-btn font-semibold group-hover/link:zigzag-btn-hover">
            Course
          </span>

          <FontAwesomeIcon
            icon={faArrowRightLong}
            className={cn(
              'transition-all duration-200 ease-in-out',
              'transform translate-x-0',
              'group-hover/card:translate-x-1',
            )}
          />
        </Link>
      </div>
    </CardItem>
  )
}
