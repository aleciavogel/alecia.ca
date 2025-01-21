import React, { type FC, type HTMLProps } from 'react'
import Link from 'next/link'

import { SITE_BASE_URL } from '@alecia/constants'
import { cn } from '@alecia/util'

export const AnchorTag: FC<HTMLProps<HTMLAnchorElement>> = ({
  children,
  className,
  href,
  ...props
}) => {
  const isExternal = (url: string): boolean => {
    return (
      Boolean(url.match(/^https?:\/\//)) ||
      Boolean(url.match(/^\/\//)) ||
      Boolean(SITE_BASE_URL && !url.includes(SITE_BASE_URL))
    )
  }

  // Safeguard against non-string hrefs
  if (!href) {
    return null
  }

  // Check if href is a string
  const isExternalLink = isExternal(href)

  if (isExternalLink) {
    return (
      <a
        className={cn('zigzag-link text-nowrap', className)}
        rel="noreferrer noopener"
        href={href}
        target="_blank"
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <Link className={cn('zigzag-link', className)} href={href} {...props}>
      {children}
    </Link>
  )
}
