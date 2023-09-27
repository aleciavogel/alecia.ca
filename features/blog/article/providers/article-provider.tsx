import { type FC } from 'react'

import type { PostData } from '@/features/blog/types'
import { ArticleContext } from '../contexts'

interface ArticleProviderProps extends PostData {
  children: React.ReactNode
  category: string
}

const ArticleProvider: FC<ArticleProviderProps> = ({ children, ...props }) => {
  return <ArticleContext.Provider value={props}>{children}</ArticleContext.Provider>
}

export default ArticleProvider
