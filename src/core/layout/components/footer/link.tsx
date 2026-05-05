import type { HTMLProps } from 'react'
import React from 'react'
import Link from 'next/link'

import { type WithRequired } from '@alecia/types/utils'
import { cn } from '@alecia/util/styles'

type LinkProps = WithRequired<HTMLProps<HTMLAnchorElement>, 'href'>

interface FooterLinkProps extends LinkProps {
  listItemClassName?: string
}

const FooterLink = ({
  children,
  listItemClassName,
  className,
  href,
  ...props
}: FooterLinkProps) => (
  <li className={listItemClassName}>
    <Link
      className={cn('hover:text-white/60 transition-dark-mode', className)}
      {...props}
      href={href}
    >
      {children}
    </Link>
  </li>
)

export default FooterLink
