import { forwardRef } from 'react'

import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

const StaticNavListItem = forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
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
              className,
            )}
            {...props}
          >
            {children}
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
StaticNavListItem.displayName = 'StaticNavListItem'

export default StaticNavListItem
