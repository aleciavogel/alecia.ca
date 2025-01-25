import type { HTMLProps } from 'react'
import Link from 'next/link'

import { cn } from '@alecia/util/styles'

const AnchorTag = ({ children, className, href = '#', ...props }: HTMLProps<HTMLAnchorElement>) => {
  return (
    <Link className={cn('zigzag-link', className)} href={href} {...props}>
      {children}
    </Link>
  )
}

export default AnchorTag
