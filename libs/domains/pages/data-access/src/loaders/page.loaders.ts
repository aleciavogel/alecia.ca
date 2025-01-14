import { homePageQuery, pageQuery, pageSlugQuery } from '@alecia/sanity-queries'
import type { HomePageQueryResult, PageQueryResult } from '@alecia/sanity-types'
import { loadQuery } from '@alecia/sanity-util/server'

/**
 * Fetches the home page from Sanity.
 */
export const getHomePage = async () =>
  loadQuery<HomePageQueryResult>(homePageQuery, { tags: ['homepage'] })

/**
 * Fetches a page from Sanity.
 * @param slug - The slug of the page to fetch.
 */
export const getPage = async (slug: string) =>
  loadQuery<PageQueryResult>(pageQuery, { params: { slug }, tags: ['page'] })

/**
 * Fetches all slugs for pages from Sanity.
 */
export const getPageSlugs = async () => loadQuery<string[]>(pageSlugQuery)
