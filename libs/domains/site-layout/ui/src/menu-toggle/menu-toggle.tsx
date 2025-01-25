import type { FC } from 'react'
import { faBars } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MenuToggle: FC = () => (
  <div className="text-4xl pointer-events-none">
    <FontAwesomeIcon aria-hidden icon={faBars} className="pointer-events-none" />
  </div>
)

export default MenuToggle
