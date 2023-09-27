import { type StaticImageData } from 'next/image'
// import { type DefaultColor } from './colors'

export interface TutorialFrontMatter extends Record<string, string> {
  createdAt: string
  updatedAt?: string
  title: string
  description: string
  seoTitle?: string
  seoDescription?: string
  demoHref?: string
  githubHref?: string
  quizQuestion?: string
  quizOptions?: string[]
  quizAnswer?: string
}

export interface TutorialPartData extends Record<string, any> {
  id: string
  content: string
  contentHtml: string
  timeToRead: number
  frontMatter: TutorialFrontMatter
}

export interface TutorialTOCPart extends Record<string, string> {
  title: string
  part: string
}

export type TutorialTOC = TutorialTOCPart[]

export type StackType = 'frontend' | 'backend' | 'fullstack'

export interface TutorialStackItem {
  name: string
  description?: string
  docsHref?: string
  type: StackType
  image: StaticImageData
}

export enum TutorialLevel {
  beginner = 'beginner',
  intermediate = 'intermediate',
  advanced = 'advanced',
}

export enum TutorialTech {
  PHOENIX = 'phoenix',
  ELIXIR = 'elixir',
  REACT = 'react',
  NEXTJS = 'nextjs',
  TYPESCRIPT = 'typescript',
  JAVASCRIPT = 'javascript',
  HTML = 'html',
  CSS = 'css',
  TAILWIND = 'tailwindcss',
  RUBY = 'ruby',
  RAILS = 'rails',
  POSTGRESQL = 'postgresql',
  MYSQL = 'mysql',
  PYTHON = 'python',
  PHP = 'php',
}

export interface Tutorial {
  title: string
  description: string
  thumbnail?: StaticImageData
  timeToRead: string
  stack: TutorialStackItem[]
  level: TutorialLevel
  prereqs?: string[] // list of tutorial keys
}

export interface SavedQuizDetails {
  selected: number[]
  correct: boolean
}

export type SavedQuizzes = Record<string, SavedQuizDetails>
