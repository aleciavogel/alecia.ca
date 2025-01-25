import { IconName } from '@fortawesome/pro-regular-svg-icons'

import { SOCIAL_ICON_MAP } from '@alecia/constants/icons'
import { SocialLinkType } from '@alecia/settings-types'
import { cn } from '@alecia/util/styles'

import Icon from '../icon'
import {
  TooltipContent,
  TooltipProvider,
  TooltipRoot as Tooltip,
  TooltipTrigger,
} from '../tooltip/index'

interface SocialLinkProps extends Omit<SocialLinkType, '_key' | '_type'> {
  className?: string
}

const SocialLink = ({ url, label, className, ...props }: SocialLinkProps) => {
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

export default SocialLink
