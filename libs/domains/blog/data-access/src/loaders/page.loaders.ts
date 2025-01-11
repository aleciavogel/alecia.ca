import { blogArticlePageQuery, blogIndexQuery } from '@alecia/sanity-queries'
import { BlogArticlePageQueryResult, BlogIndexQueryResult } from '@alecia/sanity-types'
import { fetchSanity } from '@alecia/sanity-util/server'

/**
 * Fetches the blog list page data.
 * @param categorySlug - The slug of the category to fetch blog posts for.
 */
export const getBlogIndexPage = async (categorySlug?: string) =>
  fetchSanity<BlogIndexQueryResult>(blogIndexQuery, {
    params: {
      slug: categorySlug ?? null,
    },
    tag: 'blog-index',
  })

/**
 * Fetches the blog article page data.
 * @param slug - The slug of the blog post to fetch.
 */
export const getBlogArticlePage = async (slug: string) =>
  fetchSanity<BlogArticlePageQueryResult>(blogArticlePageQuery, {
    params: {
      slug,
    },
    tag: 'blog-article',
  })
