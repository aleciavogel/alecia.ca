import type { FC, HTMLProps } from 'react'
import { IconName } from '@fortawesome/pro-regular-svg-icons'

import { Icon, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

type Anchor = HTMLProps<HTMLAnchorElement>
type AnchorNoChildren = Omit<Anchor, 'children'>

interface SocialLinksItemProps extends AnchorNoChildren {
  label?: string
  icon: IconName
}

export const SocialLinksItem: FC<SocialLinksItemProps> = ({ label, icon, className, ...props }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            aria-label={label}
            target="_blank"
            rel="noreferrer"
            className={cn('text-current opacity-100 hover:opacity-80 transition-all', className)}
            {...props}
          >
            <Icon name={icon} />
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
