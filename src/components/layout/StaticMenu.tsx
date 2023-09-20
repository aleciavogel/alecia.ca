import React, { type FC } from 'react'
// import Link from 'next/link'

import StaticNavLink from '@/components/layout/header/StaticNavLink'
import { MAIN_NAV } from '@/config/nav'
import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu'

const StaticMenu: FC = () => {
  return (
    <NavigationMenu className="absolute top-0 left-1/2 transform -translate-x-1/2 z-[200] mt-4 md:mt-6">
      <NavigationMenuList className="text-white">
        {MAIN_NAV.map((navItem, index) => (
          <StaticNavLink key={`static-menu-${index}`} {...navItem} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default StaticMenu
