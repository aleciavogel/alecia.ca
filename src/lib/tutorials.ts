import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { remark } from 'remark'
import html from 'remark-html'

import type {
  TutorialIntroFrontMatter,
  TutorialPartData,
  TutorialIntroData,
  TutorialTOC,
} from '@/types/tutorials'
import { walkSync } from '@/lib/files'

const TUTORIALS_DIR = path.join(process.cwd(), '_advanced')

/**
 * Fetch all directory names from the _advanced directory
 * @returns string[]
 */
export const getAdvancedTutorials = (): string[] => {
  return fs.readdirSync(TUTORIALS_DIR)
}

/**
 * Fetch the frontmatter from every tutorial/course intro.mdx file for
 * the index page of the tutorials section
 * @returns TutorialIntroData[]
 */
export const fetchAllTutorialInfo = (): TutorialIntroData[] => {
  const tutorialDirs = getAdvancedTutorials()
  const tutorialInfo: TutorialIntroData[] = []

  tutorialDirs.forEach((tutorialDir) => {
    const tutorialIntro = getTutorialIntro(tutorialDir)
    tutorialInfo.push(tutorialIntro)
  })

  // Sort the tutorials by the createdAt date
  return tutorialInfo.sort((a, b) => {
    if (a.frontMatter.createdAt < b.frontMatter.createdAt) {
      return 1
    } else if (a.frontMatter.createdAt > b.frontMatter.createdAt) {
      return -1
    } else {
      return 0
    }
  })
}

/**
 * Fetches the content for the tutorial intro.mdx file
 * @param tutorialDir
 * @returns TutorialIntroData
 */
export const getTutorialIntro = (tutorialDir: string): TutorialIntroData => {
  const fullPath = path.join(TUTORIALS_DIR, tutorialDir, 'intro.mdx')
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data: frontMatter, content } = matter(fileContents)
  const timeToRead = readingTime(content).text

  const processedContent = remark().use(html).processSync(content)
  const contentHtml = processedContent.toString()

  return {
    id: [tutorialDir, 'intro'].join('/'),
    content,
    contentHtml,
    timeToRead,
    frontMatter: frontMatter as TutorialIntroFrontMatter,
  }
}

/**
 * Fetch the frontmatter for a specific part of a tutorial
 * @param tutorialDir
 * @param part - the part of the tutorial to fetch the data for
 * @returns TutorialPartData
 */
export const getTutorialPart = (tutorialDir: string, part: string): TutorialPartData => {
  const fullPath = path.join(TUTORIALS_DIR, tutorialDir, `${part}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data: frontMatter, content } = matter(fileContents)
  const timeToRead = readingTime(content).text

  const processedContent = remark().use(html).processSync(content)
  const contentHtml = processedContent.toString()

  return {
    id: [tutorialDir, part].join('/'),
    content,
    contentHtml,
    timeToRead,
    frontMatter: frontMatter as TutorialIntroFrontMatter,
  }
}

/**
 * Fetches the table of contents for a complete tutorial
 * @param tutorialDir
 * @returns TutorialTOC
 */
export const getTutorialTOC = (tutorialDir: string): TutorialTOC => {
  const tutorialParts = getTutorialParts(tutorialDir)
  const tutorialTOC: TutorialTOC = []

  tutorialParts.forEach((part) => {
    const tutorialPart = getTutorialPart(tutorialDir, part)
    tutorialTOC.push({
      title: part === 'intro' ? 'Introduction' : tutorialPart.frontMatter.title,
      part: tutorialPart.id,
    })
  })

  return tutorialTOC
}

export const getTutorialParts = (tutorialDir: string): string[] => {
  const tutorialParts = walkSync(path.join(TUTORIALS_DIR, tutorialDir))

  // Order the parts so that the intro is always first and the parts
  // (each file labeled part-1, part-2, etc) are ordered numerically
  return [...tutorialParts].sort((a: string, b: string) => {
    if (a === 'intro.mdx') {
      return -1
    } else if (b === 'intro.mdx') {
      return 1
    } else {
      const aPart = a.split('-')[1]
      const bPart = b.split('-')[1]
      return parseInt(aPart) - parseInt(bPart)
    }
  })
}
