import type { FC, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import Link from 'next/link'

import { cn } from '@alecia/util'

import { Icon } from '../icon'
import { buttonVariants } from './button'

interface IconButtonLinkProps extends VariantProps<typeof buttonVariants> {
  iconName?: string | null
  href?: string
  children: ReactNode
}

export const IconButtonLink: FC<IconButtonLinkProps> = ({
  href,
  iconName,
  children,
  variant,
  size,
}) => {
  return (
    <Link
      href={href ?? '#'}
      className={cn(buttonVariants({ variant, size }), 'text-base', 'group/link', 'space-x-2')}
    >
      <span>{children}</span>
      <Icon
        name={iconName}
        className={cn('group-hover/link:translate-x-1 transform translate-x-0')}
      />
    </Link>
  )
}
