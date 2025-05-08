import { faArrowRightLong } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import Link from 'next/link'

import CardItem from '@alecia/common/ui/card-template'
import Typography from '@alecia/common/ui/typography'
import { ThumbnailDimensions } from '@alecia/constants/images'
import { getPlaceholderImage } from '@alecia/util/images'
import { cn } from '@alecia/util/styles'
import { AllProjectsQueryResult } from '@alecia/vendors/sanity/types/sanity.types'

type SingleProject = AllProjectsQueryResult[number]

interface ProjectProps extends SingleProject {
  changeOnDarkMode?: boolean
  className?: string
  imageSrc?: string | null
  imageAlt?: string | null
}

const ProjectCard = ({
  className,
  slug = '#',
  title = 'Untitled',
  changeOnDarkMode = false,
  tags,
  imageSrc,
  imageAlt,
}: ProjectProps) => (
  <CardItem
    href={slug ?? '#'}
    className={cn('pb-16 group/card', className)}
    changeOnDarkMode={changeOnDarkMode}
    tags={
      tags?.map((tag) => ({ text: tag.label ?? '', href: tag.slug ?? '#', icon: tag.icon })) ?? []
    }
    image={{
      src: imageSrc
        ? imageSrc
        : getPlaceholderImage(ThumbnailDimensions.Width, ThumbnailDimensions.Height),
      alt: imageAlt ? imageAlt : '',
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

export default ProjectCard
