import { IconName } from '@fortawesome/pro-regular-svg-icons'

import { SOCIAL_ICON_MAP } from '@alecia/constants'
import { SocialLinkType } from '@alecia/settings-types'
import { Icon, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

interface SocialLinkProps extends SocialLinkType {
  className?: string
}

export const SocialLink = ({ label, url, className, ...props }: SocialLinkProps) => {
  const socialSite = url ?? ''
  const iconSource = new URL(socialSite).hostname.replace('www.', '').split('.')[0].toLowerCase()
  const iconName = SOCIAL_ICON_MAP[iconSource] as IconName

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            aria-label={label}
            target="_blank"
            rel="noreferrer"
            className={cn('text-current opacity-100 hover:opacity-80 transition-all', className)}
            href={url}
            {...props}
          >
            <Icon name={iconName} />
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
