import { type FC } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChain } from '@fortawesome/pro-solid-svg-icons'

import { cn } from '@/lib/utils'

interface DemoLinkProps {
  demoHref: string
}

const DemoLink: FC<DemoLinkProps> = ({ demoHref }) => {
  return (
    <Link
      className={cn(
        'inline-block shadow',
        'bg-accent-700 hover:bg-accent-600',
        'text-white text-sm uppercase tracking-loose font-bold',
        'px-4 py-3 rounded-md',
        'transition-colors duration-300',
      )}
      href={demoHref}
      target="_blank"
      referrerPolicy="no-referrer"
    >
      <FontAwesomeIcon icon={faChain} className="mr-2" />
      Explore Demo
    </Link>
  )
}

export default DemoLink
