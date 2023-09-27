import { type FC } from 'react'
import { type Metadata } from 'next'

import SiteWrapper from '@/features/page-containers/components/site-wrapper'
import LearnToCodeHeader from '@/features/tutorials/content/components/LearnToCodeHeader'
import LearnToCodeMain from '@/features/tutorials/content/components/LearnToCodeMain'
import UnderConstructionBanner from '@/features/banners/components/under-contruction'

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
