'use client'
import { type FC, useCallback } from 'react'

import { cn } from '@/common/lib/utils'
import QuizOption from './QuizOption'
import { RadioGroup } from '@/common/ui/radio-group'
import type { SavedQuizDetails } from '../types'
import { useLocalStorage } from '@/features/local-storage/hooks/useLocalStorage'

interface ChapterQuizProps {
  route: string
  question: string
  options: string[]
  correctIndex: string
}

const ChapterQuiz: FC<ChapterQuizProps> = ({ route, question, options, correctIndex }) => {
  const [userData, updateUserData] = useLocalStorage<SavedQuizDetails>(['quiz', route].join(':'), {
    selected: [],
    correct: false,
  })
  const { selected = [] } = userData ?? {}

  console.log('userData', userData)

  const handleOptionSelection = useCallback(
    (newValue: string): void => {
      const optionIndex = parseInt(newValue)
      const alreadySaved: boolean = selected.includes(optionIndex)

      if (alreadySaved) {
        return
      }

      const correct = optionIndex === parseInt(correctIndex)

      updateUserData({
        selected: [...selected, optionIndex],
        correct,
      })
    },
    [correctIndex, selected, updateUserData],
  )

  return (
    <div className={cn('w-full mb-16')}>
      <div
        className={cn(
          'md:max-w-screen-sm md:px-10 lg:max-w-screen-md mx-auto',
          'border-t border-t-primary-400 dark:border-t-primary-900',
          'border-b border-b-primary-400 dark:border-b-primary-900',
        )}
      >
        <div className={cn('flex justify-center -mt-0.5')}>
          <p
            className={cn(
              'inline-block',
              'bg-white dark:bg-gray-900',
              'text-sm font-medium uppercase',
              'text-accent-600 dark:text-accent-300',
              'px-2 -mt-[10px]',
              'transition-colors duration-300 ease-in-out',
            )}
          >
            Test Your New Knowledge
          </p>
        </div>
        <div className={cn('pt-8 pb-16 px-4')}>
          <h3 className="font-serif-small text-4xl text-primary-600 dark:text-primary-300 w-full">
            {question}
          </h3>
          <RadioGroup onValueChange={handleOptionSelection}>
            <div className={cn('grid grid-cols-4 gap-8 mt-8 px-4')}>
              {options.map((option, index) => (
                <QuizOption
                  key={`quiz-option-${index}`}
                  index={index}
                  option={option}
                  wasSelected={selected.includes(index)}
                  isCorrect={index === parseInt(correctIndex)}
                />
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  )
}

export default ChapterQuiz
