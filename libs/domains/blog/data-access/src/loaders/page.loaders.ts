import { blogArticlePageQuery, blogIndexQuery } from '@alecia/sanity-queries'
import { BlogArticlePageQueryResult, BlogIndexQueryResult } from '@alecia/sanity-types'
import { loadQuery } from '@alecia/sanity-util/server'

/**
 * Fetches the blog list page data.
 * @param categorySlug - The slug of the category to fetch blog posts for.
 */
export const getBlogIndexPage = async (categorySlug?: string) =>
  loadQuery<BlogIndexQueryResult>(blogIndexQuery, {
    params: {
      slug: categorySlug ?? null,
    },
    tags: ['page:blog', `blog.category:${categorySlug ?? 'all-posts'}`],
  })

/**
 * Fetches the blog article page data.
 * @param slug - The slug of the blog post to fetch.
 */
export const getBlogArticlePage = async (slug: string) =>
  loadQuery<BlogArticlePageQueryResult>(blogArticlePageQuery, {
    params: {
      slug,
    },
    tags: [`blog.article:${slug}`],
  })
