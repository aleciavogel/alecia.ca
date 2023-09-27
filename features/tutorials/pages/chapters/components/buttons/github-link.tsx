import { type FC } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { cn } from '@/common/lib/utils'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

interface GithubLinkProps {
  githubHref: string
}

const GithubLink: FC<GithubLinkProps> = ({ githubHref }) => {
  return (
    <Link
      className={cn(
        'inline-block shadow',
        'bg-black hover:bg-gray-800',
        'text-white text-sm font-bold uppercase tracking-loose',
        'px-4 py-3 rounded-md',
        'transition-colors duration-300',
      )}
      href={githubHref}
      target="_blank"
      referrerPolicy="no-referrer"
    >
      <FontAwesomeIcon icon={faGithub} className="mr-2" />
      View Code On GitHub
    </Link>
  )
}

export default GithubLink
