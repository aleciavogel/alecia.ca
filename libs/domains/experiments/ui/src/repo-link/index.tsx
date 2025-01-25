import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { cn } from '@alecia/util/styles'

interface RepoLinkProps {
  repoUrl?: string
  className?: string
}

const RepoLink = ({ repoUrl, className }: RepoLinkProps) => {
  if (!repoUrl) return null

  return (
    <a
      href={repoUrl}
      target="_blank"
      rel="nofollow noreferrer"
      className={cn(
        'block size-6',
        'flex justify-center items-center',
        'hover:text-accent-600',
        'rounded-full overflow-hidden',
        'transition-colors ease-in-out duration-300',
        'hover:text-accent-200',
        className,
      )}
    >
      <FontAwesomeIcon icon={faGithubSquare} className="size-7" />
    </a>
  )
}

export default RepoLink
