import { settingsQuery } from '@alecia/sanity-queries/settings.query'
import { SettingsQueryResult } from '@alecia/sanity-types/sanity.types'
import { getData } from '@alecia/sanity-util/server-utils/get-data'
import SocialLink from '@alecia/site-layout-ui/footer/link'
import { cn } from '@alecia/util/styles'

interface FooterSocialLinksProps {
  id?: string
  className?: string
}

const FooterSocialLinks = async ({ className, ...rest }: FooterSocialLinksProps) => {
  const data = await getData<SettingsQueryResult>(settingsQuery, {}, ['settings'])

  if (!data?.social) return <div />

  return (
    <div className={cn('space-x-6', className)} {...rest}>
      {data.social.map((social) => (
        <SocialLink key={`footer-${social._key}`} href={social.url ?? '#'} />
      ))}
    </div>
  )
}

export default FooterSocialLinks
