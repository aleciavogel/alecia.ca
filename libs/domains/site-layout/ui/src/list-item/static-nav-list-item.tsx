import React from 'react'

import { NavigationMenuLink } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

export const StaticNavListItem: React.FC<React.ComponentProps<'a'>> = ({
  ref,
  className,
  children,
  ...props
}) => {
  return (
    <li className={className}>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'text-white/70 hover:text-white focus:text-white leading-none no-underline',
            'block select-none rounded-md outline-none',
            'space-y-1',
            'p-3',
            'transition-all',
            'focus:primary-700 dark:focus:primary-800',
            'hover:bg-primary-700 dark:hover:bg-primary-800',
            'hover:bg-opacity-40',
          )}
          {...props}
        >
          {children}
        </a>
      </NavigationMenuLink>
    </li>
  )
}
