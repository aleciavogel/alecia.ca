import { type DefaultColor } from './colors'

interface PostFrontMatter extends Record<string, string> {
  title: string
  subtitle: string
  description: string
  date: string
  primaryColor?: DefaultColor
  accentColor?: DefaultColor
  textColor?: DefaultColor
}

export interface PostData extends Record<string, any> {
  id: string
  content: string
  contentHtml: string
  timeToRead: string
  frontMatter: PostFrontMatter
}

export interface PostContent {
  id?: string
  slug: string
  timeToRead: string
  content: string
  frontMatter: PostFrontMatter
}
