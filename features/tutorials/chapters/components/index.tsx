import { type FC } from 'react'

import { StickyLayout } from '@/features/site-layout'
import type { TutorialPartData } from '../../types'
import ChapterHeader from './chapter-header'
import { UnderConstructionBanner } from '@/features/banners'
import ChapterContent from './chapter-content'
import ChapterContainer from './chapter-container'
import ChapterSidebar from './sidebar'

const TutorialPage: FC<TutorialPartData> = (props) => {
  const { id } = props
  const [course, chapter] = id.split('/')
  const sidebarProps = { course, chapter }

  return (
    <StickyLayout pageHeader={<ChapterHeader {...props} />} preFooter={<UnderConstructionBanner />}>
      <ChapterContainer {...props}>
        <ChapterContent {...props} />
        <ChapterSidebar {...sidebarProps} />
      </ChapterContainer>
    </StickyLayout>
  )
}

export default TutorialPage
