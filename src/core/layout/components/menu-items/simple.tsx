'use client'

import { type FC } from 'react'
import Link from 'next/link'

import { NavigationMenuItem, navigationMenuTriggerStyle } from '@alecia/common/ui/navigation-menu'
import { InternalLinkProps } from '@alecia/types/nav'

const SimpleMenuLink: FC<InternalLinkProps> = ({ label, slug }) => {
  const srOnly = false

  if (!slug) return null

  return (
    <NavigationMenuItem>
      <Link href={`${slug}`} passHref className="active:text-white">
        {}
        <span className={srOnly ? 'sr-only' : navigationMenuTriggerStyle()}>{label}</span>
      </Link>
    </NavigationMenuItem>
  )
}

export default SimpleMenuLink
