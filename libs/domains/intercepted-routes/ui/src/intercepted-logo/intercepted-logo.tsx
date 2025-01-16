import { HTMLProps } from 'react'
import Link from 'next/link'

import { AleciaLogo } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

import { InterceptedLogoText } from './intercepted-logo-text'

interface InterceptedLogoProps extends HTMLProps<HTMLDivElement> {
  showText?: boolean
  topText?: string
  isHoverLayer?: boolean
}

/**
 * Site logo component for intercepted modal shown in the header as the base level (no link)
 */
export const InterceptedLogo = ({
  isHoverLayer = false,
  showText,
  topText,
  ...props
}: InterceptedLogoProps) => {
  if (isHoverLayer) {
    return (
      <Link
        href="/"
        className={cn(
          'transition-colors ease-in-out duration-200',
          'pointer-events-auto text-transparent',
          'hover:text-primary-500 hover:dark:text-primary-600',
        )}
      >
        <AleciaLogo className="h-10 md:h-14 w-auto" />
        <InterceptedLogoText showText={showText} topText={topText} />
      </Link>
    )
  }

  return (
    <div
      className="pointer-events-none text-current flex gap-2 justify-center items-center"
      {...props}
    >
      <AleciaLogo className="h-10 md:h-14 w-auto" />
      <InterceptedLogoText showText={showText} topText={topText} />
    </div>
  )
}
