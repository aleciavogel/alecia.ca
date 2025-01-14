import { blogCategoriesQuery } from '@alecia/sanity-queries'
import { BlogCategoriesQueryResult } from '@alecia/sanity-types'
import { loadQuery } from '@alecia/sanity-util/server'

/**
 * Fetches the blog categories from Sanity.
 */
export const getBlogCategories = async () =>
  loadQuery<BlogCategoriesQueryResult>(blogCategoriesQuery, {
    tags: ['blog-categories'],
  })
