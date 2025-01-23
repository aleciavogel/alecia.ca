import type { FC, ReactNode } from 'react'
import { IconName } from '@fortawesome/pro-solid-svg-icons'
import type { VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import { stegaClean } from 'next-sanity'

import { cn } from '@alecia/util'

import { Icon } from '../icon'
import { buttonVariants } from './button'

interface IconButtonLinkProps extends VariantProps<typeof buttonVariants> {
  iconName?: string | null
  href?: string | null
  children: ReactNode
}

export const IconButtonLink: FC<IconButtonLinkProps> = ({
  href,
  iconName,
  children,
  variant,
  size,
}) => (
  <Link
    href={stegaClean(href) ?? '#'}
    className={cn(buttonVariants({ variant, size }), 'text-base', 'group/link', 'space-x-2')}
  >
    <span>{children}</span>

    {iconName ? (
      <Icon
        name={stegaClean(iconName) as IconName}
        className={cn(
          'group-hover/link:translate-x-1 transform translate-x-0 transition-transform duration-300 ease-in-out',
        )}
      />
    ) : null}
  </Link>
)
