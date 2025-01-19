import type { JSX } from 'react'

import { getSettings } from '@alecia/settings-data-access/server'
import { SocialLink } from '@alecia/site-layout-ui'
import { cn } from '@alecia/util'

interface FooterSocialLinksProps {
  id?: string
  className?: string
}

export const FooterSocialLinks = async ({ className, ...rest }: FooterSocialLinksProps) => {
  const data = await getSettings()

  if (!data?.social) return <div />

  return (
    <div className={cn('space-x-6', className)} {...rest}>
      {data.social.map((social) => (
        <SocialLink key={`footer-${social._key}`} {...social} />
      ))}
    </div>
  )
}
