import { notFound } from 'next/navigation'

import { BlogPortableText, BlogPostBlock } from '@alecia/blog'
import { getBlogArticlePage } from '@alecia/blog-data-access/server'
import { BlogComments } from '@alecia/blog-ui'
import { HeroHeader } from '@alecia/pages-ui'
import { BlogArticlePageQueryResult } from '@alecia/sanity-types'
import { PageContents, ReadingProgress, SiteWrapper } from '@alecia/site-layout'

const fetchArticleData = async (slug: string): Promise<BlogArticlePageQueryResult | undefined> => {
  return await getBlogArticlePage(slug)
}

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await fetchArticleData(params.slug)

  if (!article) {
    notFound()
  }

  const articleCategory = article.categories?.[0]
  const tag = {
    text: articleCategory?.title ?? 'Untitled Category',
    href: articleCategory?.slug ?? '#',
  }

  return (
    <SiteWrapper>
      <HeroHeader
        title={article.title}
        subtitle={article.subtitle}
        coverImage={article.imageSrc}
        tag={tag}
      />
      <ReadingProgress />
      <PageContents>
        <div id="post-content" className="flex flex-col gap-6 drop-cap">
          <BlogPortableText value={article.body as BlogPostBlock[] | undefined} />
        </div>
        <BlogComments title={article.title} />
      </PageContents>
    </SiteWrapper>
  )
}
