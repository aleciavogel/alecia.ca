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
      className={cn('text-white hover:text-accent-400 transition-dark-mode', className)}
      {...props}
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  )
}
