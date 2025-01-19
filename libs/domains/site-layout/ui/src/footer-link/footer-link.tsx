import type { FC, HTMLProps } from 'react'
import React from 'react'
import Link from 'next/link'

import { type WithRequired } from '@alecia/types'
import { cn } from '@alecia/util'

type LinkProps = WithRequired<HTMLProps<HTMLAnchorElement>, 'href'>

interface FooterLinkProps extends LinkProps {
  listItemClassName?: string
}

export const FooterLink: FC<FooterLinkProps> = ({
  children,
  listItemClassName,
  className,
  href,
  ...props
}) => (
  <li className={listItemClassName}>
    <Link
      className={cn('hover:text-white/60 transition-dark-mode', className)}
      {...props}
      href={'/' + href}
    >
      {children}
    </Link>
  </li>
)
