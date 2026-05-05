import {
  NavigationMenuList,
  NavigationMenuRoot as NavigationMenu,
} from '@alecia/common/ui/navigation-menu'
import NonDropdownLink from '@alecia/core/layout/components/menu-items/simple'
import { cn } from '@alecia/util/styles'
import { settingsQuery } from '@alecia/vendors/sanity/queries/settings.query'
import { sanityFetch } from '@alecia/vendors/sanity/util/server/live'

import { DropdownAbout, DropdownBlog, DropdownPromo, DropdownQuote } from '../dropdowns'

const StaticNav = async () => {
  const { data } = await sanityFetch({ query: settingsQuery })

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

export default StaticNav
