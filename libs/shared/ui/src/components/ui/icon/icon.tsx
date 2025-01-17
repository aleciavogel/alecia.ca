import type { FC } from 'react'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { IconName } from '@fortawesome/pro-regular-svg-icons'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IconProps {
  className?: string
  name?: IconName | null
}

export const Icon: FC<IconProps> = ({ name, className }: IconProps) => {
  if (!name) return null

  return <FontAwesomeIcon icon={fab[name] ?? fas[name]} className={className} />
}
