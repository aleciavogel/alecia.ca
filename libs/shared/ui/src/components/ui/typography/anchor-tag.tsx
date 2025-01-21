import React, { type FC, type HTMLProps } from 'react'
import Link from 'next/link'

import { cn } from '@alecia/util'

export const AnchorTag: FC<HTMLProps<HTMLAnchorElement>> = ({
  children,
  className,
  href = '#',
  ...props
}) => {
  return (
    <Link className={cn('zigzag-link', className)} href={href} {...props}>
      {children}
    </Link>
  )
}
