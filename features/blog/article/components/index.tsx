import { type FC } from 'react'
import Link from 'next/link'

import { StickyLayout } from '@/features/site-layout'
import MDXWrapper from '@/features/mdx'
import { MorePostsBanner } from './bottom-banner'
import ArticleHeader from './article-header'
import ArticleMain from './article-main'
import { useArticle } from '../hooks'

const BlogPostPage: FC = () => {
  const {
    frontMatter: { textColor, primaryColor, accentColor, relatedPosts },
    content,
  } = useArticle()

  return (
    <StickyLayout
      textColor={textColor}
      primaryColor={primaryColor}
      accentColor={accentColor}
      pageHeader={<ArticleHeader />}
      preFooter={<MorePostsBanner relatedPosts={relatedPosts} />}
    >
      <ArticleMain>
        <MDXWrapper source={content} />
        <p className="mt-8 content-block">
          <Link href="/blog" className="">
            <span>← All Posts</span>
          </Link>
        </p>
      </ArticleMain>
    </StickyLayout>
  )
}

export default BlogPostPage
