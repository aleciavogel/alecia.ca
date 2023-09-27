'use client'

import { createContext } from 'react'
import type { TutorialPartData } from '@/features/tutorials/types'

interface TutorialChapterContext extends TutorialPartData {
  course: string
}

const initialState: TutorialChapterContext = {
  id: '',
  content: '',
  contentHtml: '',
  timeToRead: 0,
  course: '',
  frontMatter: {
    title: '',
    description: '',
    createdAt: '',
    updatedAt: '',
    seoTitle: '',
    seoDescription: '',
    demoHref: '',
    githubHref: '',
    quizQuestion: '',
    quizOptions: [],
    quizAnswer: '',
  },
}

const context = createContext<TutorialChapterContext>(initialState)

export default context
