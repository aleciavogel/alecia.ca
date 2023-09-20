import { type FC } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import type { MainNavItem } from '@/types/nav'
import StaticNavListItem from './StaticNavListItem'

const StaticNavLink: FC<MainNavItem> = ({
  title,
  srOnly = false,
  href,
  items,
  DropdownContent,
  icon,
}) => {
  return (
    <NavigationMenuItem>
      {items === undefined ? (
        <Link href={href} legacyBehavior passHref>
          <NavigationMenuLink className={`${srOnly ? 'sr-only' : navigationMenuTriggerStyle()}`}>
            {title}
          </NavigationMenuLink>
        </Link>
      ) : (
        <>
          <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-primary-800 dark:bg-primary-900 z-100">
            <ul
              className={`grid gap-3 p-4 ${
                DropdownContent !== undefined
                  ? ' md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'
                  : 'md:w-[500px] lg:w-[600px] md:grid-cols-2'
              }`}
            >
              {DropdownContent !== undefined && <DropdownContent />}
              {items?.map((item, index) => (
                <StaticNavListItem
                  key={`${encodeURIComponent(title)}-dropdown-${index}`}
                  href={item.href}
                  title={item.title}
                >
                  <div className="text-sm text-white/90 font-medium leading-none">
                    {item.icon !== undefined && (
                      <FontAwesomeIcon icon={item.icon} className="mr-2" />
                    )}
                    {item.title}
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-white/60">
                    {item.description}
                  </p>
                </StaticNavListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </>
      )}
    </NavigationMenuItem>
  )
}

export default StaticNavLink
