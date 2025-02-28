import { faRss } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { stegaClean } from 'next-sanity'

import { SITE_BASE_URL } from '@alecia/constants/routes'
import { settingsQuery } from '@alecia/sanity-queries/settings.query'
import { SettingsQueryResult } from '@alecia/sanity-types/sanity.types'
import { getData } from '@alecia/sanity-util/server-utils/get-data'
import SocialLink from '@alecia/ui-kit/ui/social-link'
import {
  TooltipContent,
  TooltipProvider,
  TooltipRoot as Tooltip,
  TooltipTrigger,
} from '@alecia/ui-kit/ui/tooltip'
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
        <SocialLink
          key={`footer-${social._key}`}
          url={stegaClean(social.url) ?? '#'}
          label={stegaClean(social.label)}
        />
      ))}
      <TooltipProvider>
        <Tooltip delayDuration={300}>
          <TooltipTrigger asChild>
            <a
              aria-label="Stay Updated"
              aria-describedby="rss-tooltip"
              target="_blank"
              rel="noreferrer"
              className="text-current opacity-100 hover:opacity-80 transition-all"
              href={`https://${SITE_BASE_URL}/blog/feed.xml`}
            >
              <FontAwesomeIcon icon={faRss} />
            </a>
          </TooltipTrigger>
          <TooltipContent id="rss-tooltip" role="tooltip">
            <p>Stay Updated</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

export default FooterSocialLinks
