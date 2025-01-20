import { faArrowRightLong } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import Link from 'next/link'

import { AllProjectsQueryResult } from '@alecia/sanity-types'
import { CardItem, Typography } from '@alecia/ui-kit'
import { cn, getPlaceholderImage } from '@alecia/util'

type SingleProject = AllProjectsQueryResult[number]

interface ProjectProps extends SingleProject {
  changeOnDarkMode?: boolean
  className?: string
  imageSrc?: string | null
}

export const ProjectCard = ({
  className,
  slug = '#',
  title = 'Untitled',
  changeOnDarkMode = false,
  tags,
  imageSrc,
  mainImage,
}: ProjectProps) => (
  <CardItem
    href={slug ?? '#'}
    className={cn('pb-16 group/card', className)}
    changeOnDarkMode={changeOnDarkMode}
    tags={
      tags?.map((tag) => ({ text: tag.label ?? '', href: tag.slug ?? '#', icon: tag.icon })) ?? []
    }
    image={{
      src: imageSrc ?? getPlaceholderImage(1200, 500),
      alt: mainImage?.alt ?? '',
    }}
  >
    <div
      className={cn(
        'space-y-3 h-full pt-4',
        classNames({
          'text-body': changeOnDarkMode,
          'text-gray-600': !changeOnDarkMode,
        }),
      )}
    >
      <div className="mb-4 space-y-3 line-clamp-3 md:line-clamp-2">
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
        <span className="relative zigzag-btn font-semibold group-hover/link:zigzag-btn">
          View Project
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
