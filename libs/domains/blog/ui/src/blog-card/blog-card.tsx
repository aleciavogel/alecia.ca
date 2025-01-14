import type { FC } from 'react'
import { faClock } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import Link from 'next/link'
import { Image } from 'next-sanity/image'

import { Avatar, CardItem, TagProps, Typography } from '@alecia/ui-kit'
import { cn, getPlaceholderImage } from '@alecia/util'

interface PostProps {
  timeToRead?: string | null
  authorImageSrc?: string | null
  authorName?: string | null
  title?: string | null
  slug?: string | null
  previewText?: string | null
  changeOnDarkMode?: boolean
  className?: string
  tags?: TagProps[]
  image?: {
    src?: string | null
    alt?: string | null
  }
}

const DEFAULT_AVATAR = 'https://github.com/aleciavogel.png'

export const BlogCard: FC<PostProps> = ({
  className,
  slug = '/',
  title = 'Untitled',
  previewText = '',
  timeToRead = '0 min read',
  authorImageSrc = DEFAULT_AVATAR,
  authorName = 'Alecia Vogel',
  changeOnDarkMode = false,
  image: { src, alt } = {},
  tags,
}) => (
  <CardItem
    href={slug ? slug : '/'}
    className={cn('pb-7', className)}
    changeOnDarkMode={changeOnDarkMode}
    tags={tags}
    image={{
      src: src ? src : getPlaceholderImage(1200, 628),
      alt: alt ? alt : 'Blog post image',
    }}
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
      <Link href={slug ? slug : '#'} className="mb-4 space-y-3 line-clamp-4 md:line-clamp-5">
        <Typography
          variant="h3"
          size="2xl"
          className={cn(
            'font-serif-small font-semibold',
            classNames({
              'text-primary-600 dark:text-primary-400': changeOnDarkMode,
              'text-primary-600': !changeOnDarkMode,
            }),
          )}
        >
          {title}
        </Typography>
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
          {previewText?.length ? previewText : 'No preview text has been set yet.'}
        </Typography>
      </Link>

      <div className="absolute bottom-4 left-5">
        <Typography
          variant="small"
          className={cn(
            'flex gap-2 items-center text-xs',
            classNames({
              'text-primary-800 dark:text-primary-300': changeOnDarkMode,
              'text-primary-800': !changeOnDarkMode,
            }),
          )}
        >
          <Avatar className="h-7 w-7">
            <Image
              src={authorImageSrc ? authorImageSrc : DEFAULT_AVATAR}
              alt={authorName ? authorName : 'Alecia Vogel'}
              width={100}
              height={100}
            />
          </Avatar>
          <span>{authorName}</span>
        </Typography>
      </div>

      <div className="absolute bottom-5 right-5">
        <p
          className={cn(
            'text-sm',
            classNames({
              'text-primary-800 dark:text-primary-300': changeOnDarkMode,
              'text-gray-600': !changeOnDarkMode,
            }),
          )}
        >
          <FontAwesomeIcon
            icon={faClock}
            className={cn(
              'mr-2 text-primary-600',
              classNames({
                'dark:text-primary-300': changeOnDarkMode,
              }),
            )}
          />
          <span>{timeToRead}</span>
        </p>
      </div>
    </div>
  </CardItem>
)
