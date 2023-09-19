import { type FC } from 'react'

import { faBars } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface MenuIconProps {
  hover?: boolean
}

const MenuIcon: FC<MenuIconProps> = ({ hover = false }) => {
  const icon = <FontAwesomeIcon icon={faBars} className="h-8 md:h-10 w-auto pointer-events-auto" />

  if (hover) {
    return (
      <div
        id="site-menu-icon"
        role="button"
        aria-label="Site Menu"
        // onClick={toggleMenu}
        aria-controls={'site-menu'}
      >
        {icon}
      </div>
    )
  }

  return icon
}

export default MenuIcon
