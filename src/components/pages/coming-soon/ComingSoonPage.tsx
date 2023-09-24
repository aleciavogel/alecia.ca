import { type FC } from 'react'

import SiteWrapper from '@/components/layout/SiteWrapper'
import UnderConstructionBanner from '@/components/layout/banners/UnderConstruction'
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
