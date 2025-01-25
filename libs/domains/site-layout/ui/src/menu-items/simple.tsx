'use client'

import { type FC } from 'react'
import Link from 'next/link'

import { InternalLinkProps } from '@alecia/types/nav'
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@alecia/ui-kit/ui/navigation-menu'

const SimpleMenuLink: FC<InternalLinkProps> = ({ label, slug }) => {
  const srOnly = false

  if (!slug) return null

  return (
    <NavigationMenuItem>
      <Link href={`${slug}`} legacyBehavior passHref className="active:text-white">
        {}
        <NavigationMenuLink className={srOnly ? 'sr-only' : navigationMenuTriggerStyle()}>
          {label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}

export default SimpleMenuLink
