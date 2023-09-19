import { type FC } from 'react'

import NavLink from '@/components/layout/header/StaticNavLink'
import { MAIN_NAV } from '@/config/nav'

const StaticMenu: FC = () => {
  return (
    <nav
      aria-label="Main"
      className="static-menu absolute top-0 left-1/2 transform -translate-x-1/2 z-10 py-4 pointer-events-none md:py-6"
    >
      <ul className="space-x-10 text-base h-10 flex justify-center items-center last:mr-10">
        {MAIN_NAV.map(({ href, title, ...rest }, index) => (
          <NavLink key={`static-menu-${index}`} to={href} {...rest}>
            {title}
          </NavLink>
        ))}
      </ul>
    </nav>
  )
}

export default StaticMenu
