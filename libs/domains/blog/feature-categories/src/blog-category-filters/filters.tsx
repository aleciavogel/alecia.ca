import type { JSX } from 'react'
import { stegaClean } from '@sanity/client/stega'

import { getBlogCategories } from '@alecia/blog-data-access/server'
import { Typography } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

import { BlogCategoryFilterItem } from './filter-item'

const ALL_POSTS_SLUGS = ['all-posts', 'all']

export const BlogCategoryFilters = async (): Promise<JSX.Element | null> => {
  const categories = await getBlogCategories()

  if (!categories) return null

  const allCategory = categories.filter((category) =>
    ALL_POSTS_SLUGS.includes(stegaClean(category.slug)?.toLowerCase() ?? ''),
  )[0]

  const rest = categories.filter((category) => {
    return !ALL_POSTS_SLUGS.includes(stegaClean(category.slug)?.toLowerCase() ?? '')
  })
  const filters = [allCategory, ...rest]

  return (
    <div className="page-content-block grid grid-cols-1 md:grid-cols-3">
      <nav aria-labelledby="blog-nav-heading" className={cn('space-y-3 w-full col-span-1')}>
        <Typography
          variant="pretitle"
          as="h2"
          className="uppercase max-md:hidden md:text-primary-800 dark:text-primary-300"
        >
          Categories
        </Typography>
        <ul className="w-full flex flex-wrap gap-4 px-0 justify-center md:justify-start">
          {filters.filter(Boolean).map((category, index) => (
            <li key={`filter-button-${String(index)}`}>
              <BlogCategoryFilterItem
                name={category.title}
                href={category.href}
                slug={category.slug}
                iconName={stegaClean(category.icon)}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
