import { type StaticImageData } from 'next/image'

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
  image: string
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
