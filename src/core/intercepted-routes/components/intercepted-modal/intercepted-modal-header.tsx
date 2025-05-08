import { StickyHeader } from '@alecia/core/layout/components'

import { InterceptedLogo } from '../intercepted-logo'

export const InterceptedModalHeader = () => {
  return (
    <>
      <StickyHeader>
        <InterceptedLogo />
      </StickyHeader>

      <StickyHeader isHoverLayer>
        <InterceptedLogo showText />
      </StickyHeader>
    </>
  )
}
InterceptedModalHeader.displayName = 'InterceptedModalHeader'
