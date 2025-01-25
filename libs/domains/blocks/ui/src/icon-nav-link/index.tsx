import type { IconName } from '@fortawesome/fontawesome-svg-core'
import Link from 'next/link'
import { stegaClean } from 'next-sanity'

import Icon from '@alecia/ui-kit/ui/icon'
import { cn } from '@alecia/util/styles'

import { IconNavLinkProps } from './types'

// TODO: animate the transition
const IconNavLink = ({
  icon,
  label = '',
  subtitle = '',
  slug,
  className,
  ...rest
}: IconNavLinkProps) => {
  const iconName = stegaClean(icon)

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
      <h3 className="space-x-2 uppercase text-sm font-semibold">
        <Icon name={iconName as IconName} />
        <span>{label}</span>
      </h3>
      <p>{subtitle}</p>
    </Link>
  )
}

export default IconNavLink
