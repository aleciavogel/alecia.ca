import { createContext } from 'react'
import type { PostData } from '@/features/blog/types'

interface ArticleContext extends PostData {
  category: string
}

const initialState: ArticleContext = {
  category: '',
  content: '',
  frontMatter: {
    createdAt: '',
    description: '',
    seoDescription: '',
    seoTitle: '',
    title: '',
    updatedAt: '',
  },
  id: '',
  timeToRead: '',
}

const context = createContext<ArticleContext>(initialState)

export default context
