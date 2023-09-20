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
              'text-white/70 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary-700 dark:hover:bg-primary-800 hover:bg-opacity-40 hover:text-white focus:primary-700 focus:text-white',
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
