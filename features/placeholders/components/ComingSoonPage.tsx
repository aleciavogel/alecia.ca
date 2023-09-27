import { type FC } from 'react'

import SiteWrapper from '@/features/_layout/page/components/SiteWrapper'
import UnderConstructionBanner from '@/features/banners/components/UnderConstruction'
import ComingSoonHeader from './ComingSoonHeader'
import ComingSoonMain from './ComingSoonMain'

interface ComingSoonPageProps {
  pageTitle: string
}

const ComingSoonPage: FC<ComingSoonPageProps> = ({ pageTitle }) => {
  return (
    <SiteWrapper>
      <ComingSoonHeader pageTitle={pageTitle} />
      <ComingSoonMain />
      <UnderConstructionBanner />
    </SiteWrapper>
  )
}

export default ComingSoonPage
