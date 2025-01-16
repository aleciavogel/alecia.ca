import type { FC } from 'react'
import { IconName } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { cn } from '@alecia/util'

interface IconProps {
  className?: string
  name?: IconName | null
}

export const Icon: FC<IconProps> = ({ name, className }: IconProps) => {
  if (!name) return null

  return (
    <FontAwesomeIcon
      icon={['fas', name]}
      className={cn('transition-all duration-200 ease-in-out', className)}
    />
  )
}
