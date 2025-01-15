import { SiteLogo, SiteLogoHoverLayer, StickyHeader } from '@alecia/site-layout-ui'

export const InterceptedModalHeader = () => {
  return (
    <>
      <StickyHeader>
        <SiteLogo />
      </StickyHeader>

      <StickyHeader isHoverLayer>
        <SiteLogoHoverLayer />
      </StickyHeader>
    </>
  )
}
