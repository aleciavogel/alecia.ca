import type { JSX } from 'react'

import { getSettings } from '@alecia/settings-data-access/server'
import { SocialLink } from '@alecia/site-layout-ui'

export const FooterSocialLinks = async (): Promise<JSX.Element> => {
  const data = await getSettings()

  if (!data?.social) return <div />

  return (
    <div id="footer-links" className="space-x-6 text-2xl text-center md:text-right">
      {data.social.map((social) => (
        <SocialLink key={`footer-${social._key}`} {...social} />
      ))}
    </div>
  )
}
