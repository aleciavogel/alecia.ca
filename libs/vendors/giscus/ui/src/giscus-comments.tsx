'use client'

import React, { type FC } from 'react'
import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'

import { GITHUB_CATEGORY_ID, GITHUB_REPO_ID, GITHUB_REPO_NAME } from '@alecia/giscus-constants'

interface GiscusCommentsProps {
  title: string
  category?: string
}

export const GiscusComments: FC<GiscusCommentsProps> = ({ title, category = 'Blog Comments' }) => {
  const { theme } = useTheme()

  return (
    <Giscus
      repo={GITHUB_REPO_NAME}
      repoId={GITHUB_REPO_ID}
      category={category}
      categoryId={GITHUB_CATEGORY_ID}
      mapping="specific"
      term={title}
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme === 'dark' ? 'transparent_dark' : 'light'}
      lang="en"
      loading="lazy"
    />
  )
}
