import { type FC } from 'react'
import Link from 'next/link'

import { FormattedDate } from '@/features/formatted-text'
import ShareLinks from './share-links'
import { useArticle } from '../../hooks'

const ArticleInfo: FC = () => {
  const {
    frontMatter: { createdAt, title },
    timeToRead,
  } = useArticle()

  return (
    <aside className="author-card">
      <p>
        {'By '}
        <Link href="/about/alecia">Alecia Vogel</Link>
      </p>
      <p className="mt-3">
        <FormattedDate dateString={createdAt} />
        <span className="mx-3">&#xB7;</span>
        {timeToRead}
      </p>

      <ShareLinks title={title} />
    </aside>
  )
}

export default ArticleInfo
