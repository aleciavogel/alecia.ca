import { type FC } from 'react'

import PostInfo from './post-info/article-info'
import ReadingProgress from '@/features/reading-progress'
import { ClippedContainer, ContentWrapper } from '@/features/page-layout'

interface ArticleMainProps {
  timeToRead: string
  data: any
  children?: string | React.ReactNode
}

const ArticleMain: FC<ArticleMainProps> = ({ data, children, timeToRead }) => {
  return (
    <ContentWrapper>
      <ReadingProgress />
      <PostInfo data={data} timeToRead={timeToRead} />

      <div>
        <div className="page-content">{children}</div>
      </div>

      <ClippedContainer variant="angled-right" />
    </ContentWrapper>
  )
}

export default ArticleMain
