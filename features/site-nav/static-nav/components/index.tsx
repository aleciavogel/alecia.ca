import React, { type FC } from 'react'

import StaticNavLink from '@/features/site-nav/static-nav/components/nav-link'
import { MAIN_NAV } from '@/features/_layout/nav/constants'
import { NavigationMenu, NavigationMenuList } from '@/common/ui/navigation-menu'
import { cn } from '@/common/lib/utils'

const StaticMenu: FC = () => {
  return (
    <NavigationMenu
      className={cn(
        'hidden md:block',
        'backdrop-blur transition-colors duration-300 ease-in-out',
        'bg-primary-800 dark:bg-primary-900',
        'absolute top-0 left-1/2 transform -translate-x-1/2 z-50',
        'mt-4 md:mt-6',
      )}
    >
      <NavigationMenuList className="">
        {MAIN_NAV.map((navItem, index) => (
          <StaticNavLink key={`static-menu-${index}`} {...navItem} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default StaticMenu
