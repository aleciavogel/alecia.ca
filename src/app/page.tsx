import { type Metadata } from 'next'

import AboutHeader from '@/components/pages/about/AboutHeader'
import AboutMain from '@/components/pages/about/AboutMain'
import SiteWrapper from '@/components/pages/shared/layout/SiteWrapper'
import { type FC } from 'react'

const Home: FC = () => {
  return (
    <SiteWrapper>
      <AboutHeader />
      <AboutMain />
    </SiteWrapper>
  )
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: `About Me | Alecia.ca`,
  }
}

export default Home
