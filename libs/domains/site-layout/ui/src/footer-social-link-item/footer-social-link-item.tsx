import type { FC, HTMLProps } from 'react'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { cn } from '@alecia/util'

type Anchor = HTMLProps<HTMLAnchorElement>
type AnchorNoChildren = Omit<Anchor, 'children'>

interface SocialLinksItemProps extends AnchorNoChildren {
  label?: string
  icon: IconProp
}

// TODO - add a tooltip to the icon

export const SocialLinksItem: FC<SocialLinksItemProps> = ({ label, icon, className, ...props }) => {
  return (
    <a
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className={cn('text-current opacity-100 hover:opacity-80 transition-all', className)}
      {...props}
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  )
}
