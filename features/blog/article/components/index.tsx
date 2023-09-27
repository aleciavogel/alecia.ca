import { type FC } from 'react'
import Link from 'next/link'

import { StickyLayout } from '@/features/page-layout'
import MDXWrapper from '@/features/mdx/components'
import type { PostData } from '@/features/blog/types'
import { MorePostsBanner } from './bottom-banner'
import ArticleHeader from './article-header'
import ArticleMain from './article-main'

interface BlogPostPageProps extends PostData {
  category: string
}

const BlogPostPage: FC<BlogPostPageProps> = ({ category, content, frontMatter }) => {
  return (
    <StickyLayout
      textColor={frontMatter.textColor}
      primaryColor={frontMatter.primaryColor}
      accentColor={frontMatter.accentColor}
      pageHeader={() => <ArticleHeader category={category} data={frontMatter} />}
      preFooter={() => <MorePostsBanner relatedPosts={frontMatter.relatedPosts} />}
      title={frontMatter.title}
      subtitle={frontMatter.description}
    >
      <ArticleMain timeToRead={frontMatter.timeToRead} data={frontMatter}>
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
