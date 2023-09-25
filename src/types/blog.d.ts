import { type DefaultColor } from './colors'

interface PostFrontMatter extends Record<string, string> {
  createdAt: string
  updatedAt?: string
  title: string
  description: string
  seoTitle?: string
  seoDescription?: string
  primaryColor?: DefaultColor
  accentColor?: DefaultColor
  textColor?: DefaultColor
  relatedPosts?: string[]
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
