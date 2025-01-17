import type { HTMLProps } from 'react'
import type { IconName } from '@fortawesome/fontawesome-svg-core'
import Link from 'next/link'
import { stegaClean } from 'next-sanity'

import { Icon } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

export interface IconNavLinkProps extends HTMLProps<HTMLAnchorElement> {
  icon?: string | null
  label?: string
  subtitle?: string
  slug: string | null
}

// TODO: animate the transition
export const IconNavLink = ({
  icon,
  label = '',
  subtitle = '',
  slug,
  className,
  ...rest
}: IconNavLinkProps) => {
  const iconName =
    icon !== null && typeof icon === 'string' ? (stegaClean(icon) as IconName) : 'faRocket'

  return (
    <Link
      href={slug ?? '#'}
      className={cn(
        'block rounded-md px-5 py-6 text-white space-y-2 text-sm',
        'border-l-8 border-l-primary-900',
        'bg-primary-900 hover:bg-white',
        'text-white hover:text-primary-900',
        'transition-colors ease-in-out duration-200',
        'overflow-hidden w-full',
        className,
      )}
      {...rest}
    >
      <h4 className="space-x-2 uppercase text-sm font-semibold">
        <Icon name={iconName as IconName} />
        <span>{label}</span>
      </h4>
      <p>{subtitle}</p>
    </Link>
  )
}
