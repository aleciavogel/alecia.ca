import { type FC } from 'react'
import { type Metadata } from 'next'

import HomePage from '@/shared/pages/home'
import SiteWrapper from '@/features/_layout/page/components/SiteWrapper'
import UnderConstructionBanner from '@/features/_site/banners/UnderConstruction'

const Home: FC = () => {
  return (
    <SiteWrapper>
      <HomePage />
      <UnderConstructionBanner />
    </SiteWrapper>
  )
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: `Senior Full-Stack Software Developer | Alecia.ca`,
  }
}

export default Home
