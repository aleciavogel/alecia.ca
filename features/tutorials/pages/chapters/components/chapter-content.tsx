'use client'

import { type FC } from 'react'

import { cn } from '@/common/lib/utils'
import MDXWrapper from '@/features/mdx'
import ChapterQuiz from '@/features/quizzes'
import useTutorialChapter from '@/features/tutorials/hooks/use-tutorial-chapter'

const ChapterContent: FC = () => {
  const {
    id,
    content,
    frontMatter: { quizOptions, quizQuestion, quizAnswer },
  } = useTutorialChapter()

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
