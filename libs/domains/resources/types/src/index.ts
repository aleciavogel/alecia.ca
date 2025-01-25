import { ResourcesIndexQueryResult } from '@alecia/sanity-types/sanity.types'

/**
 * Type definition of a single resource category.
 */
export type ResourceCategoryType = NonNullable<ResourcesIndexQueryResult['resources']>[number]

/**
 * Type definition of a single resource link.
 */
export type ResourceLinkType = NonNullable<ResourceCategoryType['links']>[number]
