import { JSX } from 'react'

import { getSettings } from '@alecia/settings-data-access/server'
import {
  DropdownAbout,
  DropdownBlog,
  DropdownPromo,
  DropdownQuote,
  SimpleMenuLink as NonDropdownLink,
} from '@alecia/site-layout-ui'
import { NavigationMenu, NavigationMenuList } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

export const StaticNav = async (): Promise<JSX.Element | null> => {
  const data = await getSettings()

  if (!data?.mainMenu) return null

  const { mainMenu } = data

  return (
    <NavigationMenu
      className={cn(
        'hidden md:block',
        'transition-colors duration-200 ease-in-out',
        'absolute top-0 left-1/2 transform -translate-x-1/2 z-[101]',
        'mt-4 md:mt-6',
      )}
    >
      <NavigationMenuList className="">
        {mainMenu.items?.map((item, index) => {
          const key = `static-menu-${String(index)}`

          switch (item._type) {
            case 'link.internal':
              return <NonDropdownLink key={key} {...item} />
            case 'dropdown.about':
              return <DropdownAbout key={key} {...item} />
            case 'dropdown.blog':
              return <DropdownBlog key={key} {...item} />
            case 'dropdown.promo':
              return <DropdownPromo key={key} {...item} />
            case 'dropdown.quote':
              return <DropdownQuote key={key} {...item} />
            default:
              return null
          }
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
