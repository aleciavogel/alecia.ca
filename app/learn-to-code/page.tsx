import { type FC } from 'react'
import { type Metadata } from 'next'

import StickyWrapper from '@/features/page-layout/layouts'
import LearnToCodeHeader from '@/features/tutorials/list/components/LearnToCodeHeader'
import LearnToCodeMain from '@/features/tutorials/list/components/LearnToCodeMain'
import UnderConstructionBanner from '@/features/banners/components/under-contruction'

const LearnToCode: FC = () => {
  return (
    <StickyWrapper>
      <LearnToCodeHeader />
      <LearnToCodeMain />
      <UnderConstructionBanner />
    </StickyWrapper>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Learn To Code | Alecia.ca`,
  }
}

export default LearnToCode
