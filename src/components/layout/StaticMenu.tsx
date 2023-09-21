import React, { type FC } from 'react'

import StaticNavLink from '@/components/layout/header/StaticNavLink'
import { MAIN_NAV } from '@/config/nav'
import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu'

const StaticMenu: FC = () => {
  return (
    <NavigationMenu className="backdrop-blur transition-colors duration-300 ease-in-out bg-primary-800 dark:bg-primary-900 absolute top-0 left-1/2 transform -translate-x-1/2 z-10 mt-4 md:mt-6">
      <NavigationMenuList className="">
        {MAIN_NAV.map((navItem, index) => (
          <StaticNavLink key={`static-menu-${index}`} {...navItem} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default StaticMenu
