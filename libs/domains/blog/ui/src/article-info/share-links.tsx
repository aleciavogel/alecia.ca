'use client'

import { IconName } from '@fortawesome/pro-regular-svg-icons'
import { usePathname } from 'next/navigation'

import { SITE_BASE_URL } from '@alecia/constants/routes'
import { buildRoute } from '@alecia/util/routes'
import { cn } from '@alecia/util/styles'

import ShareLinkItem from './share-link-item'

const LINKEDIN_BASE = 'https://www.linkedin.com/sharing/share-offsite/?url={encodedUrl}'
const BLUESKY_BASE = 'https://bsky.app/intent/compose?text={encodedText}'
const EMAIL_BASE = 'mailto:?subject={encodedSubject}&body={encodedBody}'

const LINKEDIN_LABEL = 'Share on LinkedIn'
const BLUESKY_LABEL = 'Share on Bluesky'
const EMAIL_LABEL = 'Share via Email'

const ShareLinks = () => {
  const pathname = usePathname()
  const subject = 'Check out this article 👩‍💻'
  const url = `https://${SITE_BASE_URL}/blog/${pathname}`
  const encodedText = encodeURIComponent(`Hey! You should give this a read: ${url}`)

  // Retrieve the current absolute url of the page for Next.js

  const shareableLink = encodeURIComponent(url)
  const shareablePost = encodeURIComponent(`${subject} ${url}`)
  const shareableSubject = encodeURIComponent(subject)

  return (
    <div className={cn('mt-6 mb-16 space-x-6')}>
      <ShareLinkItem
        href={buildRoute(LINKEDIN_BASE, {
          encodedUrl: shareableLink,
        })}
        icon="faLinkedinIn"
        label={LINKEDIN_LABEL}
      />
      <ShareLinkItem
        href={buildRoute(BLUESKY_BASE, { encodedText: shareablePost })}
        icon="faBluesky"
        label={BLUESKY_LABEL}
      />
      <ShareLinkItem
        href={buildRoute(EMAIL_BASE, {
          encodedSubject: shareableSubject,
          encodedBody: encodedText,
        })}
        icon={'faEnvelope' as IconName}
        label={EMAIL_LABEL}
      />
    </div>
  )
}

export default ShareLinks
