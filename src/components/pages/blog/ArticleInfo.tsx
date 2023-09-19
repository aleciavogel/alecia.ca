import { type FC } from 'react'
import Link from 'next/link'

import { type DefaultColor } from '@/definitions/colors'
import ShareLinks from './ShareLinks'
import Date from '../../Date'

interface Props {
  timeToRead: string
  data: {
    primaryColor?: DefaultColor
    accentColor?: DefaultColor
    date: string
    title: string
  }
}

const ArticleInfo: FC<Props> = ({
  data: { primaryColor, accentColor, date, title },
  timeToRead,
}) => {
  return (
    <aside className="author-card">
      <p>
        {'By '}
        <Link href="/">Alecia Vogel</Link>
      </p>
      <p className="mt-3">
        <Date dateString={date} />
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
