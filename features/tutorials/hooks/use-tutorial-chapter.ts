import { useContext, type ContextType } from 'react'

import { TutorialChapterContext } from '../contexts'

const useTutorialChapter = (): ContextType<typeof TutorialChapterContext> =>
  useContext(TutorialChapterContext)

export default useTutorialChapter
