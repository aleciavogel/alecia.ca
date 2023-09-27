import { type FC } from 'react'

import { StickyHeader } from '@/features/site-nav'
import { StickyWrapper } from '@/features/page-layout'
import HomeHeader from './home-header'
import { HomeIntro } from './page-partials'

const HomePage: FC = () => {
  return (
    <StickyWrapper>
      <div>
        <HomeHeader />
        <div
          id="page-container"
          className="relative overflow-hidden pb-20 pt-48 mt-[-152px] z-40 h-full"
        >
          <HomeIntro />

          <div className="clipped-container">
            <StickyHeader hasColor={true} />
          </div>
        </div>
      </div>
    </StickyWrapper>
  )
}

export default HomePage
