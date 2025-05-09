import type { PropsWithChildren } from 'react'

import StickyNav from '@alecia/core/navigation/components/sticky-nav'
import SiteWrapper from '@alecia/core/theming/components/site-wrapper/site-wrapper'
import { calcWavyBorderMask } from '@alecia/util/styles'

const WAVY_BORDER_MASK = { mask: calcWavyBorderMask({ position: 'bottom' }) }

interface ExperimentPageProps extends PropsWithChildren {
  params: Promise<{
    slug: string
  }>
}

export default async function ExperimentPageLayout({ children }: ExperimentPageProps) {
  return (
    <SiteWrapper showStaticNav={false}>
      <div
        id="#site-wrapper"
        className="relative min-h-[calc(100vh+25px)] -mb-[25px] bg-primary-950 z-[40]"
        style={WAVY_BORDER_MASK}
      >
        <StickyNav className="text-primary-600 dark:text-primary-400" />
        {children}
      </div>
    </SiteWrapper>
  )
}
