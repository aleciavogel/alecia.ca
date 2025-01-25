import type { FC } from 'react'
import Link from 'next/link'

import AleciaLogo from '@alecia/graphics/brand/alecia-logo'
import { cn } from '@alecia/util/styles'

/**
 * Site logo component shown in the header when hovered.
 * This allows for the logo to be clickable while also ensuring that
 * it shows as one color when transitioning between two differently colored
 * sections (purple bg to white, for example.
 */
const SiteLogoHoverLayer: FC = () => (
  <Link
    href="/"
    title="Home"
    className={cn(
      'transition-colors ease-in-out duration-200',
      'pointer-events-auto text-transparent',
      'hover:text-primary-500 hover:dark:text-primary-600',
    )}
  >
    <AleciaLogo className="h-10 md:h-14 w-auto" />
  </Link>
)

export default SiteLogoHoverLayer
