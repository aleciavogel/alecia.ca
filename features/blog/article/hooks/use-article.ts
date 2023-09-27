import { useContext, type ContextType } from 'react'

import { ArticleContext } from '../contexts'

const useArticle = (): ContextType<typeof ArticleContext> => useContext(ArticleContext)

export default useArticle
