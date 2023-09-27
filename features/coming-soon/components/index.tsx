import { type FC } from 'react'

import SiteWrapper from '@/features/page-containers/components/site-wrapper'
import UnderConstructionBanner from '@/features/banners/components/under-contruction'
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
