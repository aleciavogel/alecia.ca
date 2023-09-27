import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { remark } from 'remark'
import html from 'remark-html'

import type { PostData, PostFrontMatter } from '@/features/blog/types'
import { walkSync } from '@/common/lib/files'

const POSTS_DIR = '_content/blog'
const POSTS_PATH = path.join(process.cwd(), POSTS_DIR)

export function getPostSlugs(category?: string): string[] {
  const targetDir = category !== undefined ? path.join(POSTS_PATH, category) : POSTS_PATH
  const fileNames = walkSync(targetDir)
  return [...fileNames].map((fileName) => {
    const filePath = fileName.split(POSTS_DIR + '/')[1]
    return filePath.replace(/\.mdx$/, '') // Remove the file extension from the path
  })
}

interface PostContent {
  id?: string
  slug: string
  timeToRead: string
  content: string
  frontMatter: PostFrontMatter
}

export function getPostBySlug(slug: string): PostContent {
  const realSlug = slug.replace(/\.mdx$/, '')

  const fullPath = path.join(POSTS_PATH, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data: frontMatter, content } = matter(fileContents)
  const timeToRead = readingTime(content).text

  return {
    slug,
    content,
    timeToRead,
    frontMatter: frontMatter as PostFrontMatter,
  }
}

export function getPostTitleBySlug(slug: string): Record<string, string> {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(POSTS_PATH, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const {
    data: { title },
  } = matter(fileContents)

  return {
    title,
  }
}

export function getSortedPostsData(category?: string): PostContent[] {
  const fileNames = getPostSlugs(category)
  const allPostsData = fileNames.map((slug) => getPostBySlug(slug))

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (new Date(a.frontMatter.date) < new Date(b.frontMatter.date)) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPostData(slug: string): Promise<PostData> {
  const fullPath = path.join(POSTS_PATH, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content)
  const contentHtml = processedContent.toString()
  const timeToRead = readingTime(matterResult.content).text

  // Combine the data with the id and contentHtml
  return {
    id: slug,
    contentHtml,
    timeToRead,
    content: matterResult.content,
    frontMatter: matterResult.data as PostFrontMatter,
  }
}
