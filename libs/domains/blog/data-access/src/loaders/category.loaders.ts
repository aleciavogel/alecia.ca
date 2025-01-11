import { blogCategoriesQuery } from '@alecia/sanity-queries'
import { BlogCategoriesQueryResult } from '@alecia/sanity-types'
import { fetchSanity } from '@alecia/sanity-util/server'

/**
 * Fetches the blog categories from Sanity.
 */
export const getBlogCategories = async () =>
  fetchSanity<BlogCategoriesQueryResult>(blogCategoriesQuery, {
    tag: 'blog-categories',
  })
