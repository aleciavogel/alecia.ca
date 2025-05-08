import type { ComponentProps } from 'react'
import { faBars } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { cn } from '@alecia/util/styles'

interface MenuHoverIconProps extends ComponentProps<'div'> {
  asChild?: boolean
}

const MenuToggleHoverLayer = ({ ref, className, ...props }: MenuHoverIconProps) => (
  <div
    id="site-menu-icon"
    role="button"
    aria-label="Site Menu"
    aria-controls="site-menu"
    ref={ref}
    className={cn(
      'transition-dark-mode pointer-events-auto',
      'text-transparent hover:text-primary-500 hover:dark:text-primary-600',
      'text-4xl',
      className,
    )}
    {...props}
  >
    <FontAwesomeIcon icon={faBars} className="pointer-events-auto" />
  </div>
)

export default MenuToggleHoverLayer
