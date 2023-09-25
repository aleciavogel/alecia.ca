import { type FC } from 'react'

import { cn } from '@/lib/utils'
import type { TutorialPartData } from '@/types/tutorials'
import MDXWrapper from '@/components/features/mdx'
import ChapterQuiz from '@/components/features/tutorials/quiz/ChapterQuiz'

const ChapterContent: FC<TutorialPartData> = ({ content }) => {
  const options = [
    'Here is the first option',
    'Option B',
    "I have one really long option and it just keeps coming and it don't stop coming",
    'There is only one correct option',
  ]
  return (
    <div className={cn('flex-1')}>
      <div className="tutorial-content pt-16 pb-10 px-16 md:px-20">
        <MDXWrapper source={content} />
      </div>
      <ChapterQuiz
        question="What is the answer to life, the universe, and everything?"
        options={options}
      />
    </div>
  )
}

export default ChapterContent
