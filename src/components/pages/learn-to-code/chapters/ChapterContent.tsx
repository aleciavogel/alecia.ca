import { type FC } from 'react'

import { cn } from '@/lib/utils'
import type { TutorialPartData } from '@/types/tutorials'
import MDXWrapper from '@/components/features/mdx'
import ChapterQuiz from '@/components/features/tutorials/quiz/ChapterQuiz'

const ChapterContent: FC<TutorialPartData> = ({
  content,
  frontMatter: { quizOptions, quizQuestion },
}) => {
  return (
    <div className={cn('flex-1')}>
      <div className="tutorial-content pt-16 pb-10 px-16 md:px-20">
        <MDXWrapper source={content} />
      </div>
      {quizQuestion !== undefined && quizOptions !== undefined ? (
        <ChapterQuiz question={quizQuestion} options={quizOptions} />
      ) : (
        <div />
      )}
    </div>
  )
}

export default ChapterContent
