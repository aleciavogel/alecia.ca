import { type FC } from 'react'
import { type Metadata } from 'next'

import SiteWrapper from '@/components/layout/SiteWrapper'
import LearnToCodeHeader from '@/components/pages/learn-to-code/LearnToCodeHeader'
import LearnToCodeMain from '@/components/pages/learn-to-code/LearnToCodeMain'
import UnderConstructionBanner from '@/components/layout/banners/UnderConstruction'

const LearnToCode: FC = () => {
  return (
    <SiteWrapper>
      <LearnToCodeHeader />
      <LearnToCodeMain />
      <UnderConstructionBanner />
    </SiteWrapper>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Learn To Code | Alecia.ca`,
  }
}

export default LearnToCode
