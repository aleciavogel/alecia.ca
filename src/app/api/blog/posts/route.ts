import { type NextRequest, NextResponse } from 'next/server'

import { getPostSlugs, getPostTitleBySlug } from '@/lib/posts'

export interface PostSearchInfo {
  slug: string
  title: string
}

export const GET = (_request: NextRequest): NextResponse => {
  // Fetch all post names
  const allPosts = getPostSlugs()
  const titledPosts: Array<Record<string, string>> = allPosts.map((href, index) => {
    const { title } = getPostTitleBySlug(href)
    return {
      slug: href,
      title,
    }
  })

  return new NextResponse(JSON.stringify(titledPosts), {
    headers: {
      'content-type': 'application/json',
    },
  })
}
