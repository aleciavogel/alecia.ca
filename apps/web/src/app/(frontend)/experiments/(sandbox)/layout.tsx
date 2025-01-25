import { ReactNode } from 'react'

import SiteWrapper from '@alecia/site-layout/site-wrapper/site-wrapper'
import StickyNav from '@alecia/site-navigation/sticky-nav'
import { calcWavyBorderMask } from '@alecia/util/styles'

const WAVY_BORDER_MASK = { mask: calcWavyBorderMask({ position: 'bottom' }) }

interface ExperimentPageProps {
  children: ReactNode
  params: {
    slug: string
  }
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
