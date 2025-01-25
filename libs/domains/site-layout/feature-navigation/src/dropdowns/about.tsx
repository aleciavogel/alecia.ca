import { Image } from 'next-sanity/image'

import { urlFor } from '@alecia/sanity-util/client-utils/sanity-image-utils'
import ListItem from '@alecia/site-layout-ui/menu-items/list-item'
import { InternalLinkProps } from '@alecia/types/nav'
import { AvatarRoot as Avatar } from '@alecia/ui-kit/ui/avatar'
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '@alecia/ui-kit/ui/navigation-menu'
import { cn } from '@alecia/util/styles'

// TODO: Replace with Sanity Type from settings query
interface DropdownAboutProps {
  _key: string
  _type: 'dropdown.about'
  label?: string
  name?: string
  subtitle?: string
  image: string | null
  links: InternalLinkProps[] | null
}

const DropdownAbout = ({ label, image, links, name, subtitle }: DropdownAboutProps) => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
    <NavigationMenuContent className="bg-primary-900">
      <ul className={cn('grid gap-3 p-4', 'md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]')}>
        <li className="row-span-3">
          <NavigationMenuLink asChild>
            <a
              className="rounded-lg flex h-full w-full hover:bg-white/10 select-none flex-col justify-end bg-gradient-to-b from-primary-800/30 to-primary-800/60 p-6 no-underline outline-none focus:shadow-md"
              href="/about"
            >
              {image && name ? (
                <Avatar className="h-28 w-28 border-4 border-primary-900">
                  <Image
                    alt={`${name}'s profile picture`}
                    className="h-full rounded-full object-cover"
                    height={112}
                    width={112}
                    // data-sanity={encodeDataAttribute?.('owner.avatar')}
                    src={urlFor(image).height(96).width(96).fit('crop').url()}
                  />
                </Avatar>
              ) : (
                <div
                  className="h-28 w-28 rounded-full"
                  // data-sanity={encodeDataAttribute?.('owner.avatar')}
                />
              )}

              <div
                className="mb-1 mt-4 text-lg text-white font-medium"
                // data-sanity={encodeDataAttribute?.('owner.name')}
              >
                {name}
              </div>
              <p
                className="text-sm leading-tight text-white/80"
                // data-sanity={encodeDataAttribute?.('owner.shortBio')}
              >
                {subtitle}
              </p>
            </a>
          </NavigationMenuLink>
        </li>
        {links?.map((internalLink, index) => (
          <ListItem
            key={`about-dropdown-${String(index)}`}
            href={internalLink.slug ?? '#'}
            iconName={internalLink.icon ?? undefined}
            label={internalLink.label ?? ''}
            description={internalLink.subtitle}
          />
        ))}
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
)

export default DropdownAbout
