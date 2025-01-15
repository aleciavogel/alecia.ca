import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { cn } from '@alecia/util'

interface RepoLinkProps {
  repoUrl?: string
  className?: string
}

export const RepoLink = ({ repoUrl, className }: RepoLinkProps) => {
  if (!repoUrl) return null

  return (
    <a
      href={repoUrl}
      target="_blank"
      rel="nofollow noreferrer"
      className={cn(
        'block size-9',
        'flex justify-center items-center',
        'hover:text-accent-600',
        'rounded-full overflow-hidden',
        'transition-colors ease-in-out duration-300',
        'hover:text-primary-800',
        className,
      )}
    >
      <FontAwesomeIcon icon={faGithubSquare} className="size-11" />
    </a>
  )
}
