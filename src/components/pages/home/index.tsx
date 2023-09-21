import { type FC } from 'react'

import HomeHeader from './HomeHeader'
import HomeIntro from './home-intro'
import SiteHeader from '@/components/layout/SiteHeader'

const HomePage: FC = () => {
  return (
    <div>
      <HomeHeader />
      <div
        id="page-container"
        className="relative overflow-hidden pb-20 pt-48 mt-[-152px] z-40 h-full"
      >
        <HomeIntro />

        <div className="clipped-container">
          <SiteHeader hasColor={true} />
        </div>
      </div>
    </div>
  )
}

export default HomePage
