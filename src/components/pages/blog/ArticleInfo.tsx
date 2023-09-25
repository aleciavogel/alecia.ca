import { type FC } from 'react'
import Link from 'next/link'

import ShareLinks from '@/components/features/blog/ShareLinks'
import Date from '@/components/features/blog/FormattedDate'
import type { PostFrontMatter } from '@/types/blog'

interface Props {
  timeToRead: string
  data: PostFrontMatter
}

const ArticleInfo: FC<Props> = ({
  data: { primaryColor, accentColor, createdAt, title },
  timeToRead,
}) => {
  return (
    <aside className="author-card">
      <p>
        {'By '}
        <Link href="/about/alecia">Alecia Vogel</Link>
      </p>
      <p className="mt-3">
        <Date dateString={createdAt} />
        <span className="mx-3">&#xB7;</span>
        {timeToRead}
      </p>

      <ShareLinks
        accentColor={accentColor ?? 'pink'}
        primaryColor={primaryColor ?? 'indigo'}
        title={title}
      />
    </aside>
  )
}

export default ArticleInfo
