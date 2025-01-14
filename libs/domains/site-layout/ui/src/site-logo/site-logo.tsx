import { type FC } from 'react'

import { AleciaLogo } from '@alecia/ui-kit'

/**
 * Site logo component shown in the header as the base level.
 */
export const SiteLogo: FC = () => (
  <div className="pointer-events-none text-current">
    <AleciaLogo className="h-10 md:h-14 w-auto" />
  </div>
)
