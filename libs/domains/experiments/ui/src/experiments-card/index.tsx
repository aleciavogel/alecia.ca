import { forwardRef } from 'react'
import { faArrowUpRight } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ExperimentIndexQueryResult } from '@alecia/sanity-types/sanity.types'
import Tag from '@alecia/ui-kit/ui/tag'
import { getPlaceholderImage } from '@alecia/util/images'
import { cn } from '@alecia/util/styles'

import RepoLink from '../repo-link'

type SingleExperimentResult = NonNullable<ExperimentIndexQueryResult['experiments']>[number]

interface ExperimentCardProps extends SingleExperimentResult {
  className?: string
}

const ExperimentCard = forwardRef<HTMLDivElement, ExperimentCardProps>(
  ({ tags, imageSrc, imageAlt, title, subtitle, slug, repoUrl, className }, ref) => (
    <div
      ref={ref}
      className={cn(
        'block relative rounded-md overflow-hidden w-full',
        'after:bg-primary-600/0 hover:after:bg-primary-600/80 after:transition-colors after:duration-300',
        "after:content-[''] after:absolute after:h-full after:w-full after:z-[1] after:top-0 after:left-0",
        'animated-flat-shadow shadow-primary-800 hover:shadow-primary-900',
        'group/card',
        className, // Allow additional class names from props
      )}
    >
      <div className="relative text-white/0 group-hover/card:text-white">
        <img
          src={imageSrc && imageSrc.length ? imageSrc : getPlaceholderImage(300, 400)}
          alt={imageAlt}
          className="w-full"
        />
        <div className="absolute bottom-5 px-5 left-0 z-[11] space-x-2">
          {tags?.map((tag) => (
            <Tag
              text={tag.label ?? 'Untitled tag'}
              href={tag.slug ?? '#'}
              key={`${imageSrc}-${tag._id}`}
            />
          ))}
        </div>

        <div className="absolute z-[2] bottom-[70px] left-0 px-5 line-clamp-3">
          <h3 className="font-serif transition-colors ease-in duration-300 text-3xl">{title}</h3>
        </div>

        <div className={cn('absolute z-[2] top-3 right-3 transition-colors ease-in duration-300')}>
          <FontAwesomeIcon icon={faArrowUpRight} className="size-8" />
        </div>

        <RepoLink repoUrl={repoUrl} className="absolute z-[2] right-5 top-16" />
      </div>
    </div>
  ),
)
ExperimentCard.displayName = 'ExperimentCard'

export default ExperimentCard
