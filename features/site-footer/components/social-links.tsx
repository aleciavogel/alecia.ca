import { type FC } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { SOCIAL_LINKS } from '@/common/config'

const SocialLinks: FC = () => {
  return (
    <div id="footer-links">
      {SOCIAL_LINKS.map(({ label, url, icon }, index) => (
        <Link
          key={`footer-social-link-${index}`}
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
        >
          <FontAwesomeIcon icon={icon} />
        </Link>
      ))}
    </div>
  )
}

export default SocialLinks
