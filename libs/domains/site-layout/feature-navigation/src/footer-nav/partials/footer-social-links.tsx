import type { JSX } from 'react'
import { IconName } from '@fortawesome/fontawesome-svg-core'

import { SOCIAL_ICON_MAP } from '@alecia/constants'
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

        const iconName = SOCIAL_ICON_MAP[iconSource] as IconName

        return (
          <SocialLinksItem key={socialKey} icon={iconName} href={social.url} label={social.label} />
        )
      })}
    </>
  )
}
