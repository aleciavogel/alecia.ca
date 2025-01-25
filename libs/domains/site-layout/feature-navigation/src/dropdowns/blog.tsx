import ListItem from '@alecia/site-layout-ui/menu-items/list-item'
import { type BlogCategory } from '@alecia/types/blog'
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '@alecia/ui-kit/ui/navigation-menu'
import { cn } from '@alecia/util/styles'

// TODO: Replace with Sanity Type from settings query
interface DropdownBlogProps {
  _key: string
  _type: 'dropdown.blog'
  label?: string
  name?: string
  subtitle?: string
  links: BlogCategory[] | null
}

const DropdownBlog = ({ label, links }: DropdownBlogProps) => (
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
            description={item.subtitle}
          />
        ))}
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
)

export default DropdownBlog
