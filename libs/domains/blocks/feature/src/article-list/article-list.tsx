import type { FC } from 'react'
import type { IconName } from '@fortawesome/fontawesome-svg-core'
import { stegaClean } from '@sanity/client/stega'

import { BlogCard } from '@alecia/blog-ui'
import type { AllBlogArticlesQueryResult } from '@alecia/sanity-types'
import { cn } from '@alecia/util'

interface BlogListProps {
  posts?: AllBlogArticlesQueryResult
}

export const BlogList: FC<BlogListProps> = ({ posts }) => {
  return (
    <div
      className={cn(
        'container mx-auto',
        'grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3',
        'px-8 md:px-20',
      )}
    >
      {posts?.map((post) => (
        <BlogCard
          key={`post-${post._id ?? ''}`}
          {...post}
          changeOnDarkMode
          image={{ src: post.imageSrc, alt: post.imageAlt }}
          timeToRead={`${String(post.estimatedReadingTime ?? 0)} min read`}
          tags={post.categories?.map((category) => {
            return {
              text: category.title ?? 'Untitled Category',
              href: category.slug ?? '#',
              icon: category.icon ? (stegaClean(category.icon) as IconName) : undefined,
            }
          })}
        />
      ))}
    </div>
  )
}
