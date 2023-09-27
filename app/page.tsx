import { type FC } from 'react'
import { type Metadata } from 'next'

import HomePage from '@/features/home/components/index'
import SiteWrapper from '@/features/page-containers/components/site-wrapper'
import { UnderConstructionBanner } from '@/features/banners'

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
