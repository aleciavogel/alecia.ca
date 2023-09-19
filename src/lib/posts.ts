import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), '_posts')

export function getPostSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => fileName.replace(/\.mdx$/, ''))
}

interface PostContent {
  id?: string
  slug: string
  content: string
  frontMatter: Record<string, string>
}

export function getPostBySlug(slug: string): PostContent {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data: frontMatter, content } = matter(fileContents)

  return {
    slug,
    content,
    frontMatter,
  }
}

export function getSortedPostsData(): PostContent[] {
  const fileNames = getPostSlugs()
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

interface PostData extends Record<string, any> {
  id: string
  contentHtml: string
}
export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  }
}
