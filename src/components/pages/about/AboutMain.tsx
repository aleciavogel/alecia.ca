import { type FC } from 'react'
import Link from 'next/link'

import FormattedDate from '@/components/FormattedDate'
import { getSortedPostsData } from '@/lib/posts'
import PageMain from '../PageMain'

const AboutMain: FC<any> = ({ params }) => {
  const posts = getSortedPostsData()
  const allPostsData = posts.slice(0, 3)
  return (
    <PageMain>
      <div className="about-intro">
        <h2 className="font-serif">Latest Posts</h2>

        <ul className="blog-list">
          {allPostsData?.map(({ slug, frontMatter: { date, title } }: any) => (
            <li key={slug}>
              <Link href={`/blog/${slug}`}>{title}</Link>
              <br />
              <small>
                <FormattedDate dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </div>
    </PageMain>
  )
}

export default AboutMain
