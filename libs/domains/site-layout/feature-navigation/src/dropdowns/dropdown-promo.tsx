import type { FC } from 'react'

import { ListItem, TeleportListItem } from '@alecia/site-layout-ui'
import type { InternalLinkProps } from '@alecia/types'
import {
  HappyLittleBracketsLogo,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '@alecia/ui-kit'
import { cn } from '@alecia/util'

interface DropdownPromoProps {
  _key: string
  _type: 'dropdown.promo'
  label?: string
  subtitle?: string
  links: InternalLinkProps[] | null
}

export const DropdownPromo: FC<DropdownPromoProps> = ({ label, links }) => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
    <NavigationMenuContent className="bg-primary-900">
      <ul className={cn('grid gap-3 p-4', 'md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]')}>
        <li className="row-span-3">
          {/*<NavigationMenuLink asChild>*/}
          <div
            className={cn(
              // 'hover:text-white hover:bg-white/10',
              'text-white/80 rounded-lg flex h-full w-full select-none flex-col justify-end bg-gradient-to-b from-primary-800/30 to-primary-800/60 p-6 no-underline outline-none focus:shadow-md',
            )}
            // href="/learn-to-code/happy-little-brackets"
          >
            <HappyLittleBracketsLogo className="w-32 mb-6 fill-white" />
            <p className="text-sm leading-tight">
              <strong>[COMING SOON]</strong>
              <br /> A fun and interactive way for kids to learn how to code.
            </p>
          </div>
          {/*</NavigationMenuLink>*/}
        </li>

        {links?.map((item, index) => {
          if (item.icon?.includes('faTransporterEmpty')) {
            return (
              <TeleportListItem
                key={`promo-dropdown-${String(index)}`}
                href={item.slug ?? '#'}
                label={item.label ?? ''}
                description={item.subtitle ?? ''}
              />
            )
          }

          return (
            <ListItem
              key={`promo-dropdown-${String(index)}`}
              href={item.slug ?? '#'}
              label={item.label ?? ''}
              iconName={item.icon ?? undefined}
              description={item.subtitle ?? ''}
            />
          )
        })}
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
)
