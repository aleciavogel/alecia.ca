import type { HTMLProps } from 'react'
import { IconName } from '@fortawesome/pro-regular-svg-icons'

import Icon from '@alecia/ui-kit/ui/icon'
import {
  TooltipContent,
  TooltipProvider,
  TooltipRoot as Tooltip,
  TooltipTrigger,
} from '@alecia/ui-kit/ui/tooltip'
import { cn } from '@alecia/util/styles'

type Anchor = HTMLProps<HTMLAnchorElement>
type AnchorNoChildren = Omit<Anchor, 'children'>

interface SocialLinksItemProps extends AnchorNoChildren {
  label?: string
  icon: IconName
}

const SocialLinksItem = ({ label, icon, className, ...props }: SocialLinksItemProps) => {
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

export default SocialLinksItem
