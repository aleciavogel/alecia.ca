'use client'

import { type FC } from 'react'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { type DefaultColor } from '@/definitions/colors'

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

  return (
    <div className={`share-links text-${primaryColor}-600`}>
      <a
        href={FB_BASE + encoded} // TODO: fix
        className={`dark:text-${primaryColor}-400 hover:text-${accentColor}-600 dark:hover:text-${accentColor}-400`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>

      <a
        href={TW_BASE + encoded}
        className={`dark:text-${primaryColor}-400 hover:text-${accentColor}-600 dark:hover:text-${accentColor}-400`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>

      <a
        href={`mailto:?subject=${emailSubject}&body=${emailBody}`}
        className={`dark:text-${primaryColor}-400 hover:text-${accentColor}-600 dark:hover:text-${accentColor}-400`}
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  )
}

export default ShareLinks
