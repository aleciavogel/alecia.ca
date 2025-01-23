import { faClock } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import Link from 'next/link'
import { Image } from 'next-sanity/image'

import { ThumbnailDimensions } from '@alecia/constants'
import { AllBlogArticlesQueryResult } from '@alecia/sanity-types'
import { getCroppedImageSrc } from '@alecia/sanity-util'
import { ExtendedImage } from '@alecia/types'
import { Avatar, CardItem, Typography } from '@alecia/ui-kit'
import { cn, getPlaceholderImage } from '@alecia/util'

type SingleArticle = NonNullable<AllBlogArticlesQueryResult[number]>

interface BlogCardProps extends SingleArticle {
  changeOnDarkMode?: boolean
  className?: string
}

const DEFAULT_AVATAR = 'https://github.com/aleciavogel.png'

export const BlogCard = ({
  className,
  slug = '/',
  title = 'Untitled',
  previewText = '',
  estimatedReadingTime = 0,
  changeOnDarkMode = false,
  mainImage,
  categories,
}: BlogCardProps) => (
  <CardItem
    href={slug ? slug : '/'}
    className={cn('pb-7', className)}
    changeOnDarkMode={changeOnDarkMode}
    tags={
      categories
        ? categories.map((category) => ({ text: category.title, href: category.slug }))
        : []
    }
    image={{
      src:
        getCroppedImageSrc(mainImage as Omit<ExtendedImage, 'crop'> | null)?.src ??
        getPlaceholderImage(ThumbnailDimensions.Width, ThumbnailDimensions.Height),
      alt: mainImage?.alt ? mainImage.alt : '',
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
      <Link href={slug ? slug : '#'} className="mb-4 space-y-3 line-clamp-6 md:line-clamp-5">
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
            'flex gap-2 items-center text-sm',
            classNames({
              'text-primary-800 dark:text-primary-300': changeOnDarkMode,
              'text-primary-800': !changeOnDarkMode,
            }),
          )}
        >
          <Avatar className="h-7 w-7">
            <Image src={DEFAULT_AVATAR} alt={'Alecia Vogel'} width={100} height={100} />
          </Avatar>
          <span>Alecia Vogel</span>
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
          <span>{estimatedReadingTime} min read</span>
        </p>
      </div>
    </div>
  </CardItem>
)
