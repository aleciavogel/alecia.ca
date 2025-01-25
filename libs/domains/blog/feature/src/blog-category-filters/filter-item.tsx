'use client'

import { IconName } from '@fortawesome/pro-light-svg-icons'
import { stegaClean } from '@sanity/client/stega'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import buttonVariants from '@alecia/ui-kit/ui/button/variants'
import Icon from '@alecia/ui-kit/ui/icon'
import { cn } from '@alecia/util/styles'

// TODO: Replace with Sanity Type
interface BlogCategoryFilterProps {
  name?: string | null
  iconName?: string | null
  href?: string | null
  slug?: string | null
}

const ALL_POSTS_SLUGS = ['all-posts', 'all']

const BlogCategoryFilterItem = ({
  name = 'Untitled Category',
  iconName,
  href = '/blog',
  slug = '',
}: BlogCategoryFilterProps) => {
  const params = useSearchParams()
  const cleanedSlug = stegaClean(slug ?? '')
  const currentCategory = params.get('category')
  const isAllButton = ALL_POSTS_SLUGS.includes(cleanedSlug)
  const isPageListingAll = currentCategory === null || ALL_POSTS_SLUGS.includes(currentCategory)
  const isAllSelected = isAllButton && isPageListingAll
  const isSelected = currentCategory?.toLowerCase() === cleanedSlug.toLowerCase()

  return (
    <Link
      href={isAllButton ? '/blog' : href ?? '/blog'}
      className={cn(
        buttonVariants({ variant: isSelected || isAllSelected ? 'default' : 'outline' }),
        'flex items-center gap-2',
      )}
    >
      {iconName ? <Icon name={iconName as IconName} /> : null}
      <span>{name ?? 'Untitled Category'}</span>
    </Link>
  )
}

export default BlogCategoryFilterItem
