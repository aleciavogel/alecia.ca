import { type FC } from 'react'

import { TutorialChapterContext } from '../contexts'
import type { TutorialPartData } from '../types'

interface TutorialChapterProviderProps extends TutorialPartData {
  children: React.ReactNode
  course: string
}

const TutorialChapterProvider: FC<TutorialChapterProviderProps> = ({ children, ...props }) => {
  return <TutorialChapterContext.Provider value={props}>{children}</TutorialChapterContext.Provider>
}

export default TutorialChapterProvider
