import { type FC } from 'react'

import { StickyWrapper, ChevronHeader } from '@/features/page-layout'
import UnderConstructionBanner from '@/features/banners/components/under-contruction'
import ComingSoonMain from './ComingSoonMain'

interface ComingSoonPageProps {
  pageTitle: string
}

const ComingSoonPage: FC<ComingSoonPageProps> = ({ pageTitle }) => {
  return (
    <StickyWrapper>
      <ChevronHeader title={pageTitle} />
      <ComingSoonMain />
      <UnderConstructionBanner />
    </StickyWrapper>
  )
}

export default ComingSoonPage
