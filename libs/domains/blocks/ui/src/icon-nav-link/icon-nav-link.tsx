'use client'

import { type FC, HTMLProps } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import * as solidIcons from '@fortawesome/pro-solid-svg-icons'
import { faRocket } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { stegaClean } from 'next-sanity'

import { cn } from '@alecia/util'

export interface IconNavLinkProps extends HTMLProps<HTMLAnchorElement> {
  iconComponent?: FontAwesomeIconProps['icon']
  icon?: string | null
  label?: string
  subtitle?: string
  slug: string | null
}

// TODO: animate the transition
export const IconNavLink: FC<IconNavLinkProps> = ({
  iconComponent,
  icon,
  label = '',
  subtitle = '',
  slug,
  className,
  ...rest
}) => {
  const iconName = icon !== null && typeof icon === 'string' ? stegaClean(icon) : undefined
  const finalIcon = iconComponent
    ? iconComponent
    : (solidIcons[iconName as keyof typeof solidIcons] as IconProp)

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
        <FontAwesomeIcon icon={finalIcon ?? faRocket} />
        <span>{label}</span>
      </h4>
      <p>{subtitle}</p>
    </Link>
  )
}
