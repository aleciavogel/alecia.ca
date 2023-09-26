import { type FC } from 'react'

import { cn } from '@/lib/utils'
import type { TutorialPartData } from '@/types/tutorials'
import MDXWrapper from '@/components/features/mdx'
import ChapterQuiz from '@/components/features/tutorial-quiz/ChapterQuiz'

const ChapterContent: FC<TutorialPartData> = ({
  id,
  content,
  frontMatter: { quizOptions, quizQuestion, quizAnswer },
}) => {
  return (
    <div className={cn('flex-1')}>
      <div className="tutorial-content pt-16 pb-10 px-16 md:px-20">
        <MDXWrapper source={content} />
      </div>
      {quizQuestion !== undefined && quizOptions !== undefined && quizAnswer !== undefined ? (
        <ChapterQuiz
          route={id}
          question={quizQuestion}
          options={quizOptions}
          correctIndex={quizAnswer}
        />
      ) : (
        <div />
      )}
    </div>
  )
}

export default ChapterContent
