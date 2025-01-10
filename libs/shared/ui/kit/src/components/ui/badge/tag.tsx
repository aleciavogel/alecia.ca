import type { FC } from 'react'
import { type IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'

import { cn } from '@alecia/util'

import { Badge } from './badge'

export interface TagProps {
  /** The text to display in the tag */
  text: string
  href?: string
  icon?: IconProp | null
  className?: string
}

export const Tag: FC<TagProps> = ({ text, href, icon, className }) => (
  <Badge
    href={href}
    className={cn(
      'transition duration-200 ease-in-out',
      classNames({
        'hover:bg-primary-200': href,
        'cursor-default': !href,
      }),
      className,
    )}
  >
    {icon ? <FontAwesomeIcon icon={icon} /> : null}
    <span>{text}</span>
  </Badge>
)
