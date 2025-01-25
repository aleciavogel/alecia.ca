import { HTMLProps } from 'react'

import AleciaLogo from '@alecia/graphics/brand/alecia-logo'

/**
 * Site logo component shown in the header as the base level.
 */
const SiteLogo = (props: HTMLProps<HTMLDivElement>) => (
  <div className="pointer-events-none text-current" {...props}>
    <AleciaLogo className="h-10 md:h-14 w-auto" />
  </div>
)

export default SiteLogo
