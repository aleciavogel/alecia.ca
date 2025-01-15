import type { JSX } from 'react'

import { SOCIAL_ICON_PROP_MAP } from '@alecia/constants'
import { getSettings } from '@alecia/settings-data-access/server'
import { SocialLinksItem } from '@alecia/site-layout-ui'

export const FooterSocialLinks = async (): Promise<JSX.Element> => {
  const data = await getSettings()

  if (!data?.social) return <div />

  return (
    <>
      {data.social.map((social, index) => {
        const socialKey = `footer-social-${String(index)}`
        const socialSite = social.url ?? ''
        const iconSource = new URL(socialSite).hostname
          .replace('www.', '')
          .split('.')[0]
          .toLowerCase()

        const icon = SOCIAL_ICON_PROP_MAP[iconSource]

        return (
          <SocialLinksItem key={socialKey} icon={icon} href={social.url} label={social.label} />
        )
      })}
    </>
  )
}
