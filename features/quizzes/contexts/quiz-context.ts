'use client'

import { createContext } from 'react'

import type { SavedQuizzes, SavedQuizDetails } from '../types'

interface QuizContext {
  savedQuizzes: SavedQuizzes
  updateQuizResult: (route: string, quiz: SavedQuizDetails) => void
  fetchQuizResult: (route: string) => SavedQuizDetails | undefined
}

const initialState: QuizContext = {
  savedQuizzes: {},
  updateQuizResult: () => {},
  fetchQuizResult: (route: string) => undefined,
}

const context = createContext<QuizContext>(initialState)

export default context
