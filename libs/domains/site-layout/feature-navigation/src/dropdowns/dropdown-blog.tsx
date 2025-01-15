import { type FC } from 'react'

import { ListItem } from '@alecia/site-layout-ui'
import { type BlogCategory } from '@alecia/types'
import { NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

interface DropdownBlogProps {
  _key: string
  _type: 'dropdown.blog'
  label?: string
  name?: string
  subtitle?: string
  links: BlogCategory[] | null
}

export const DropdownBlog: FC<DropdownBlogProps> = ({ label, links }) => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
    <NavigationMenuContent className="bg-primary-900">
      <ul className={cn('grid gap-3 p-4', 'md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]')}>
        {links?.map((item, index) => (
          <ListItem
            key={`blog-dropdown-${String(index)}`}
            href={item.slug === '/blog?category=all' ? '/blog' : item.slug ?? '#'}
            label={item.title ?? ''}
            iconName={item.icon ?? undefined}
            description={item.description}
          />
        ))}
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
)
