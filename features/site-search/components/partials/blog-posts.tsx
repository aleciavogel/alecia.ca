'use client'

import { type FC, useState, useEffect } from 'react'

import { CommandGroup } from '@/common/ui/command'
import type { PostSearchInfo } from '@/features/site-search/types'
import SearchLink from '../search-link'

interface BlogPostsCommandGroupProps {
  runCommand: (callback: () => unknown) => void
}

const BlogPostsCommandGroup: FC<BlogPostsCommandGroupProps> = ({ runCommand }) => {
  // Load posts from API
  const [posts, setPosts] = useState<PostSearchInfo[]>([])

  useEffect(() => {
    const getPosts = async (): Promise<void> => {
      const res = await fetch('/api/blog/posts')
      const posts = await res.json()
      setPosts(posts)
    }

    getPosts()
      .then(() => {
        console.log('Posts loaded')
      })
      .catch((err) => {
        console.error('Error occurred during post fetch', err)
      })
  }, [])

  return (
    <CommandGroup heading="Blog Posts">
      {posts.map((post) => (
        <SearchLink
          key={`search-posts-${post.slug}`}
          label={post.title}
          url={'/blog/' + post.slug}
          onSelect={runCommand}
        />
      ))}
    </CommandGroup>
  )
}

export default BlogPostsCommandGroup
