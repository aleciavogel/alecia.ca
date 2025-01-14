import { type FC } from 'react'

import { type InternalLinkProps } from '@alecia/types'
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '@alecia/ui-kit'
import { cn } from '@alecia/util'

import { ListItem } from '../list-item'

interface DropdownQuoteProps {
  _key: string
  _type: 'dropdown.quote'
  label?: string
  author?: string
  quote?: string
  links: InternalLinkProps[] | null
}

export const DropdownQuote: FC<DropdownQuoteProps> = ({ label, quote, author, links }) => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
    <NavigationMenuContent className="bg-primary-900">
      <ul className={cn('grid gap-3 p-4', 'md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]')}>
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
                'bg-gradient-to-b',
                'to-primary-800/60 from-primary-800/30',
              )}
            >
              <p className="italic text-sm mb-2 leading-snug">&ldquo;{quote}&rdquo;</p>
              <p className="text-sm text-white/80 text-right not-italic">&mdash; {author}</p>
            </div>
          </NavigationMenuLink>
        </li>
        {links?.map((item, index) => (
          <ListItem
            key={`playground-dropdown-${String(index)}`}
            href={item.slug ?? '#'}
            iconName={item.icon ?? undefined}
            label={item.label ?? ''}
            description={item.subtitle}
          />
        ))}
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
)
