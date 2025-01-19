import { IconName } from '@fortawesome/pro-regular-svg-icons'

import { Icon, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

interface ShareLinkProps {
  href: string
  icon: string
  label: string
}

export const ShareLinkItem = ({ href, icon, label }: ShareLinkProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <a
            href={href}
            className={cn('inline-block text-current transition-colors duration-300 ease-in-out')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              name={(icon ? icon : 'faEnvelope') as IconName}
              className={cn(
                'text-xl text-primary-600 dark:text-primary-400',
                'hover:text-accent-600 dark:hover:text-accent-400',
              )}
            />
          </a>
        </TooltipTrigger>
        <TooltipContent side="top" sideOffset={10}>
          {label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
