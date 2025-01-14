import { resourcesIndexQuery } from '@alecia/sanity-queries'
import { ResourcesIndexQueryResult } from '@alecia/sanity-types'
import { loadQuery } from '@alecia/sanity-util/server'

/**
 * Fetches the resource page data.
 */
export const getResourcesPage = async (categorySlug?: string) =>
  loadQuery<ResourcesIndexQueryResult>(resourcesIndexQuery, {
    tags: ['resources'],
  })
