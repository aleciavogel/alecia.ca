import type { FC } from 'react'
import { fab, IconName as BrandIconName } from '@fortawesome/free-brands-svg-icons'
import { fas, IconName } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IconProps {
  className?: string
  name?: BrandIconName | IconName | null
}

const Icon: FC<IconProps> = ({ name, className }: IconProps) => {
  if (!name) return null

  return <FontAwesomeIcon icon={fab[name] ?? fas[name]} className={className} />
}

export default Icon
