import React, { forwardRef } from 'react'

import { faBars } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface MenuIconProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
  hover?: boolean
}

const MenuToggle = forwardRef<HTMLDivElement, MenuIconProps>(
  ({ className, asChild = false, hover = false, ...props }, ref) => {
    const icon = (
      <FontAwesomeIcon icon={faBars} className="h-8 md:h-10 w-auto pointer-events-auto" />
    )

    if (hover) {
      return (
        <div
          id="site-menu-icon"
          role="button"
          aria-label="Site Menu"
          // variant="link"
          // onClick={toggleMenu}
          aria-controls={'site-menu'}
          ref={ref}
          {...props}
        >
          {icon}
        </div>
      )
    }

    return (
      <div ref={ref} {...props}>
        {icon}
      </div>
    )
  },
)

MenuToggle.displayName = 'MenuToggle'

export default MenuToggle
