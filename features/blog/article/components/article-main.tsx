import { type FC } from 'react'

import PostInfo from './post-info/article-info'
import ReadingProgress from '@/features/reading-progress'
import { ClippedContainer, ContentWrapper } from '@/features/page-layout'

interface ArticleMainProps {
  children?: string | React.ReactNode
}

const ArticleMain: FC<ArticleMainProps> = ({ children }) => {
  return (
    <ContentWrapper>
      <ReadingProgress />
      <PostInfo />

      <div>
        <div className="page-content">{children}</div>
      </div>

      <ClippedContainer variant="angled-right" />
    </ContentWrapper>
  )
}

export default ArticleMain
