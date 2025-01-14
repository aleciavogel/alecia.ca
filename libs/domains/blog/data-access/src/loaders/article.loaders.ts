import { allBlogArticlesQuery, blogArticlesForCategoryQuery } from '@alecia/sanity-queries'
import {
  AllBlogArticlesQueryResult,
  BlogArticlesForCategoryQueryResult,
} from '@alecia/sanity-types'
import { loadQuery } from '@alecia/sanity-util/server'

/**
 * Fetches all blog posts from Sanity, sorted by published date.
 */
export const getAllBlogPosts = async () =>
  loadQuery<AllBlogArticlesQueryResult>(allBlogArticlesQuery, {
    tags: ['posts'],
  })

/**
 * Fetches all blog posts for a specific category from Sanity, sorted by published date.
 */
export const getBlogArticlesForCategory = async (category: string) =>
  loadQuery<BlogArticlesForCategoryQueryResult>(blogArticlesForCategoryQuery, {
    params: {
      category,
    },
    tags: ['posts'],
  })
