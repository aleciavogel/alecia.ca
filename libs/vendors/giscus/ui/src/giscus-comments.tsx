'use client'

import Giscus from '@giscus/react'
import { stegaClean } from 'next-sanity'
import { useTheme } from 'next-themes'

import { GITHUB_CATEGORY_ID, GITHUB_REPO_ID, GITHUB_REPO_NAME } from '@alecia/giscus-constants'

interface GiscusCommentsProps {
  title: string
  category?: string
}

const GiscusComments = ({ title, category = 'Blog Articles' }: GiscusCommentsProps) => {
  const { resolvedTheme } = useTheme()

  return (
    <Giscus
      repo={GITHUB_REPO_NAME}
      repoId={GITHUB_REPO_ID}
      category={category}
      categoryId={GITHUB_CATEGORY_ID}
      mapping="specific"
      term={stegaClean(title)}
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={resolvedTheme === 'dark' ? 'transparent_dark' : 'light'}
      lang="en"
      loading="lazy"
    />
  )
}

export default GiscusComments
