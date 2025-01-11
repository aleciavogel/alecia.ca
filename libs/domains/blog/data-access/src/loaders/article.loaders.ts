import { allBlogArticlesQuery, blogArticlesForCategoryQuery } from '@alecia/sanity-queries'
import {
  AllBlogArticlesQueryResult,
  BlogArticlesForCategoryQueryResult,
} from '@alecia/sanity-types'
import { fetchSanity } from '@alecia/sanity-util/server'

/**
 * Fetches all blog posts from Sanity, sorted by published date.
 */
export const getAllBlogPosts = async () =>
  fetchSanity<AllBlogArticlesQueryResult>(allBlogArticlesQuery, {
    tag: 'posts',
  })

/**
 * Fetches all blog posts for a specific category from Sanity, sorted by published date.
 */
export const getBlogArticlesForCategory = async (category: string) =>
  fetchSanity<BlogArticlesForCategoryQueryResult>(blogArticlesForCategoryQuery, {
    params: {
      category,
    },
    tag: 'posts',
  })
