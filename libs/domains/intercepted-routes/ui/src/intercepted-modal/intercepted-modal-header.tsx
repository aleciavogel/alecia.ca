import { StickyHeader } from '@alecia/site-layout-ui'

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
