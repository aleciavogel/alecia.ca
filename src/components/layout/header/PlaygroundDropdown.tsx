'use client'
import { type FC } from 'react'

import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

const PlaygroundDropdown: FC = () => {
  return (
    <li className="row-span-3">
      <NavigationMenuLink asChild>
        <div
          className={cn(
            'h-full w-full', // Sizing
            'p-6', // Margin & padding
            'flex flex-col justify-end', // Flexbox
            'rounded-lg select-none focus:shadow-md outline-none', // Other container styles
            'text-white', // Base text styles
            // Background colors
            'bg-gradient-to-b to-indigo-700/60 from-indigo-700/30', // Gradient (Light mode)
            'dark:to-indigo-800/60 dark:from-indigo-800/30', // Gradient (Dark mode)
          )}
        >
          <p className="italic text-sm mb-2 leading-snug">
            &ldquo;The more I study, the more insatiable do I feel my genius for it to be.&rdquo;
          </p>
          <p className="text-sm text-white/80 text-right not-italic">&mdash; Ada Lovelace</p>
        </div>
      </NavigationMenuLink>
    </li>
  )
}

export default PlaygroundDropdown
