import { IconName } from '@fortawesome/pro-light-svg-icons'
import { faArrowRightLong } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import Link from 'next/link'

import { CoursesByDifficultyQueryResult } from '@alecia/sanity-types/sanity.types'
import CardItem from '@alecia/ui-kit/ui/card-template'
import Typography from '@alecia/ui-kit/ui/typography'
import { cn } from '@alecia/util/styles'

type SingleCourse = CoursesByDifficultyQueryResult[number]

interface CourseProps extends SingleCourse {
  changeOnDarkMode?: boolean
  className?: string
}

const CourseCard = ({
  className,
  slug = '#',
  title = 'Untitled',
  previewText = '',
  changeOnDarkMode = false,
  imageSrc,
  imageAlt,
  categories,
}: CourseProps) => {
  return (
    <CardItem
      href={slug ?? '#'}
      className={cn('pb-10 group/card', className)}
      changeOnDarkMode={changeOnDarkMode}
      tags={
        categories?.map((cat) => ({
          text: cat.title ?? '',
          slug: cat.slug,
          icon: cat.icon as IconName,
        })) ?? []
      }
      image={imageSrc ? { src: imageSrc, alt: imageAlt ?? '' } : undefined}
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
          <Link href={slug ?? '#'}>
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
            {previewText?.length ? previewText : 'No preview text has been set yet.'}
          </Typography>
        </div>

        <Link
          href={slug ?? '#'}
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

export default CourseCard
