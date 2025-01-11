import { homePageQuery, pageQuery, pageSlugQuery } from '@alecia/sanity-queries'
import type { HomePageQueryResult, PageQueryResult } from '@alecia/sanity-types'
import { fetchSanity } from '@alecia/sanity-util/server'

/**
 * Fetches the home page from Sanity.
 */
export const getHomePage = async () =>
  fetchSanity<HomePageQueryResult>(homePageQuery, { tag: 'homepage' })

/**
 * Fetches a page from Sanity.
 * @param slug - The slug of the page to fetch.
 */
export const getPage = async (slug: string) =>
  fetchSanity<PageQueryResult>(pageQuery, { params: { slug }, tag: 'page' })

/**
 * Fetches all slugs for pages from Sanity.
 */
export const getPageSlugs = async () => fetchSanity<string[]>(pageSlugQuery)
