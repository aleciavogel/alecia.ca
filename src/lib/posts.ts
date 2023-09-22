import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { remark } from 'remark'
import html from 'remark-html'

import type { PostData, PostFrontMatter } from '@/types/blog'

const postsDirectory = path.join(process.cwd(), '_posts')

function* walkSync(dir: string): Generator<string> {
  const files = fs.readdirSync(dir, { withFileTypes: true })
  for (const file of files) {
    if (file.isDirectory()) {
      yield* walkSync(path.join(dir, file.name))
    } else {
      yield path.join(dir, file.name)
    }
  }
}

export function getPostSlugs(category?: string): string[] {
  const targetDir = category !== undefined ? path.join(postsDirectory, category) : postsDirectory
  const fileNames = walkSync(targetDir)
  return [...fileNames].map((fileName) => {
    const filePath = fileName.split('_posts/')[1]
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

  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)
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
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
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
