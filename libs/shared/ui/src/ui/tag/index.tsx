import { type IconName } from '@fortawesome/fontawesome-svg-core'
import classNames from 'classnames'

import { cn } from '@alecia/util/styles'

import { Badge } from '../badge'
import Icon from '../icon'

export interface TagProps {
  /** The text to display in the tag */
  text: string | null
  href?: string | null
  icon?: IconName | null
  className?: string
}

const Tag = ({ text, href, icon, className }: TagProps) => (
  <Badge
    href={href ?? '#'}
    className={cn(
      'transition duration-200 ease-in-out',
      classNames({
        'hover:bg-primary-200': href,
        'cursor-default': !href,
      }),
      className,
    )}
  >
    {icon ? <Icon name={icon} /> : null}
    <span>{text}</span>
  </Badge>
)

export default Tag
