'use client'

import { type FC } from 'react'

import QuizContext from '@/contexts/QuizContext'
import type { SavedQuizDetails, SavedQuizzes } from '@/types/tutorials'
import { useLocalStorage } from '@/hooks/useLocalStorage'

interface QuizProviderProps {
  children: React.ReactNode
}

const QuizProvider: FC<QuizProviderProps> = ({ children }) => {
  const [savedQuizzes, setSavedQuizzes] = useLocalStorage<SavedQuizzes>('chapter-quizzes', {})

  const updateQuizResult = (route: string, quizResult: SavedQuizDetails): void => {
    setSavedQuizzes((prev) => ({ ...prev, [route]: quizResult }))
  }

  const fetchQuizResult = (route: string): SavedQuizDetails | undefined => {
    return savedQuizzes[route]
  }

  return (
    <QuizContext.Provider
      value={{
        savedQuizzes,
        updateQuizResult,
        fetchQuizResult,
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}

export default QuizProvider
