import { type DefaultColor } from './colors'

export interface TutorialPartFrontMatter extends Record<string, string> {
  title: string
  createdAt: string
  updatedAt?: string
}

export interface TutorialIntroFrontMatter extends TutorialPartFrontMatter {
  subtitle: string
  description: string
  primaryColor?: DefaultColor
  accentColor?: DefaultColor
  textColor?: DefaultColor
  tags?: string[]
}

export interface TutorialIntroData extends Record<string, any> {
  id: string
  content: string
  contentHtml: string
  timeToRead: string
  frontMatter: TutorialIntroFrontMatter
}

export interface TutorialPartData extends Record<string, any> {
  id: string
  content: string
  contentHtml: string
  timeToRead: string
  frontMatter: TutorialPartFrontMatter
}

export interface TutorialTOCPart extends Record<string, string> {
  title: string
  part: string
}

export type TutorialTOC = TutorialTOCPart[]
