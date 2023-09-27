import { type FC } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
} from '@/common/ui/navigation-menu'
import { cn } from '@/common/lib/utils'
import type { MainNavItem } from '../types'
import { DropdownLink } from './dropdowns'

const StaticNavLink: FC<MainNavItem> = ({
  title,
  srOnly = false,
  href,
  items,
  DropdownContent,
}) => {
  const hasMainDropdownComponent = typeof DropdownContent === 'function'
  const hasLeftComponent =
    typeof DropdownContent === 'object' && typeof DropdownContent.Left === 'function'
  const hasRightComponent =
    typeof DropdownContent === 'object' && typeof DropdownContent.Right === 'function'

  return (
    <NavigationMenuItem>
      {items === undefined && DropdownContent === undefined ? (
        <Link href={href ?? ''} legacyBehavior passHref>
          <NavigationMenuLink className={`${srOnly ? 'sr-only' : navigationMenuTriggerStyle()}`}>
            {title}
          </NavigationMenuLink>
        </Link>
      ) : (
        <>
          <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-primary-800 dark:bg-primary-900">
            <ul
              className={cn(
                'grid gap-3 p-4',
                DropdownContent !== undefined
                  ? 'md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'
                  : 'md:w-[500px] lg:w-[600px] md:grid-cols-2',
              )}
            >
              {hasMainDropdownComponent && <DropdownContent />}
              {hasLeftComponent && DropdownContent.Left !== undefined && <DropdownContent.Left />}
              {items?.map((item, index) => (
                <DropdownLink
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
                </DropdownLink>
              ))}
              {hasRightComponent && DropdownContent.Right !== undefined && (
                <DropdownContent.Right />
              )}
            </ul>
          </NavigationMenuContent>
        </>
      )}
    </NavigationMenuItem>
  )
}

export default StaticNavLink
