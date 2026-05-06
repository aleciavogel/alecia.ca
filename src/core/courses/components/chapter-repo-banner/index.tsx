import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { cn } from '@alecia/util/styles'

interface ChapterRepoBannerProps {
  repoUrl: string
}

const ChapterRepoBanner = ({ repoUrl }: ChapterRepoBannerProps) => {
  return (
    <div
      className={cn(
        'w-full max-w-screen-sm mx-auto rounded-lg',
        'border border-accent-200 dark:border-accent-800',
        'bg-accent-50 dark:bg-accent-950',
        'px-5 py-4',
        'flex items-center gap-4',
      )}
    >
      <FontAwesomeIcon
        icon={faGithub}
        className="size-6 shrink-0 text-accent-600 dark:text-accent-400"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-accent-900 dark:text-accent-100">
          Follow along with the code for this chapter on GitHub.
        </p>
      </div>
      <a
        href={repoUrl}
        target="_blank"
        rel="nofollow noreferrer"
        className={cn(
          'shrink-0 inline-flex items-center gap-1.5',
          'rounded-md px-3 py-1.5 text-sm font-medium',
          'bg-accent-600 text-white',
          'hover:bg-accent-700 dark:hover:bg-accent-500',
          'transition-colors duration-200',
        )}
      >
        View repo
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="size-3" />
      </a>
    </div>
  )
}

export default ChapterRepoBanner
