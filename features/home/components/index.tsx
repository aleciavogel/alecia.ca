import { type FC } from 'react'

import { StickyLayout } from '@/features/site-layout'
import HomeHeader from './home-header'
import { HomeIntro } from './page-partials'
import { UnderConstructionBanner } from '@/features/banners'

const HomePage: FC = () => {
  return (
    <StickyLayout pageHeader={<HomeHeader />} preFooter={<UnderConstructionBanner />}>
      <HomeIntro />
    </StickyLayout>
  )
}

export default HomePage
