'use client'

import { IconName } from '@fortawesome/pro-regular-svg-icons'
import { usePathname } from 'next/navigation'

import { SITE_BASE_URL } from '@alecia/constants'
import { SocialLinksItem } from '@alecia/site-layout-ui'
import { cn } from '@alecia/util'

import { ShareLinkItem } from './share-link-item'

const FB_BASE = 'https://www.facebook.com/sharer/sharer.php?u='
const TW_BASE = 'https://twitter.com/intent/tweet?url='

const FB_LABEL = 'Share on Facebook'
const TW_LABEL = 'Share on X'
const EMAIL_LABEL = 'Share via Email'

export const ShareLinks = () => {
  // const data = await getPost()
  // const title = data?.title ?? ''
  const title = 'TODO: FIX THIS'

  // Retrieve the current absolute url of the page for Next.js
  const pathname = usePathname()
  const encoded = encodeURIComponent(SITE_BASE_URL + pathname)
  const emailBody = encodeURIComponent(
    `Hey! Check out this article on Alecia.ca: ${SITE_BASE_URL}${pathname}`,
  )
  const emailSubject = encodeURIComponent(title)

  return (
    <div className={cn('mt-6 mb-16 space-x-6')}>
      <ShareLinkItem href={FB_BASE + encoded} icon={'faFacebookF' as IconName} label={FB_LABEL} />
      <ShareLinkItem href={TW_BASE + encoded} icon="faXTwitter" label={TW_LABEL} />
      <ShareLinkItem
        href={`mailto:?subject=${emailSubject}&body=${emailBody}`}
        icon={'faEnvelope' as IconName}
        label={EMAIL_LABEL}
      />
    </div>
  )
}
