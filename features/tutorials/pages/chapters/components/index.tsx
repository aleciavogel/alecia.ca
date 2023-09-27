import { type FC } from 'react'

import { StickyLayout } from '@/features/site-layout'
import ChapterHeader from './chapter-header'
import { UnderConstructionBanner } from '@/features/banners'
import ChapterContent from './chapter-content'
import ChapterContainer from './chapter-container'
import ChapterSidebar from './sidebar'

const TutorialPage: FC = () => {
  return (
    <StickyLayout pageHeader={<ChapterHeader />} preFooter={<UnderConstructionBanner />}>
      <ChapterContainer>
        <ChapterContent />
        <ChapterSidebar />
      </ChapterContainer>
    </StickyLayout>
  )
}

export default TutorialPage
