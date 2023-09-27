import { type FC } from 'react'
import { type Metadata } from 'next'

import HomePage from '@/features/home'
import StickyWrapper from '@/features/page-layout/layouts'
import { UnderConstructionBanner } from '@/features/banners'

const Home: FC = () => {
  return (
    <StickyWrapper>
      <HomePage />
      <UnderConstructionBanner />
    </StickyWrapper>
  )
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: `Senior Full-Stack Software Developer | Alecia.ca`,
  }
}

export default Home
