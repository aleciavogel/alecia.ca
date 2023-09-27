'use client'

import { type FC } from 'react'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { type DefaultColor } from '@/common/types/colors'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/common/ui/tooltip'

const FB_BASE = 'https://www.facebook.com/sharer/sharer.php?u='
const TW_BASE = 'https://twitter.com/intent/tweet?url='

interface Props {
  accentColor: DefaultColor
  primaryColor: DefaultColor
  title: string
}

const ShareLinks: FC<Props> = ({ primaryColor, accentColor, title }) => {
  // Retrieve the current absolute url of the page for nextjs
  const pathname = usePathname()
  const encoded = encodeURIComponent(process.env.NEXT_PUBLIC_BASE_URL + pathname)
  const emailBody = encodeURIComponent(
    'Hey! Check out this article on Alecia.ca: ' + process.env.NEXT_PUBLIC_BASE_URL + pathname,
  )
  const emailSubject = encodeURIComponent(title)
  const iconStyles =
    'text-xl text-primary-600 dark:text-primary-400 hover:text-accent-600 dark:hover:text-accent-400'

  return (
    <div className={`share-links`}>
      <Tooltip>
        <TooltipTrigger>
          <a
            href={FB_BASE + encoded} // TODO: fix
            className="share-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} className={iconStyles} />
          </a>
        </TooltipTrigger>
        <TooltipContent side="bottom" sideOffset={10}>
          Share on Facebook
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <a
            href={TW_BASE + encoded}
            className="share-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className={iconStyles} />
          </a>
        </TooltipTrigger>
        <TooltipContent side="bottom" sideOffset={10}>
          Share on Twitter
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <a href={`mailto:?subject=${emailSubject}&body=${emailBody}`} className="share-link">
            <FontAwesomeIcon icon={faEnvelope} className={iconStyles} />
          </a>
        </TooltipTrigger>
        <TooltipContent sideOffset={10} side="bottom">
          Share via Email
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

export default ShareLinks
