import { type FC } from 'react'
import { type Metadata } from 'next'

import HomePage from '@/components/pages/home'
import SiteWrapper from '@/components/layout/SiteWrapper'
import UnderConstructionBanner from '@/components/layout/banners/UnderConstruction'

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
