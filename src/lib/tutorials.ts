import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { remark } from 'remark'
import html from 'remark-html'

import type { TutorialFrontMatter, TutorialPartData, TutorialTOC } from '@/types/tutorials'
import { walkSync } from '@/lib/files'

export const TUTORIALS_DIR = '_tutorials'
export const TUTORIALS_PATH = path.join(process.cwd(), TUTORIALS_DIR)

/**
 * Fetch all directory names from the _tutorials directory
 * @returns string[]
 */
export const fetchTutorials = (): string[] => {
  return fs.readdirSync(TUTORIALS_PATH)
}

/**
 * Fetch the frontmatter for a specific part of a tutorial
 * @param courseKey - the tutorial to fetch the data for
 * @param part - the part of the tutorial to fetch the data for
 * @returns TutorialPartData
 */
export const getTutorialPart = (courseKey: string, part: string): TutorialPartData => {
  const fullPath = path.join(TUTORIALS_PATH, courseKey, `${part}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data: frontMatter, content } = matter(fileContents)
  const timeToRead = readingTime(content).minutes

  const processedContent = remark().use(html).processSync(content)
  const contentHtml = processedContent.toString()

  return {
    id: [courseKey, part].join('/'),
    content,
    contentHtml,
    timeToRead,
    frontMatter: frontMatter as TutorialFrontMatter,
  }
}

/**
 * Fetches the table of contents for a complete tutorial
 * @param tutorialDir
 * @returns TutorialTOC
 */
export const getTutorialTOC = (tutorialDir: string): TutorialTOC => {
  const tutorialParts = getSortedTutorialParts(tutorialDir)
  const tutorialTOC: TutorialTOC = []

  tutorialParts.forEach((part) => {
    const tutorialPart = getTutorialPart(tutorialDir, part)
    tutorialTOC.push({
      title: tutorialPart.frontMatter.title,
      part: tutorialPart.id,
    })
  })

  return tutorialTOC
}

export const getSortedTutorialParts = (tutorialDir: string): string[] => {
  const tutorialParts = walkSync(path.join(TUTORIALS_PATH, tutorialDir))

  // Each part is a file formatted as `##-part-slug.mdx` (ie, `1-intro.mdx`, `10-conclusion.mdx`)
  // We want to sort these by the number at the beginning of the filename, ensuring that if the file
  // name does not have a leading zero, that everything is still in the correct order (ie, `10-` comes
  // after `2-`)
  return [...tutorialParts].sort((a, b) => {
    const aPart = a.split('-')[0]
    const bPart = b.split('-')[0]

    return parseInt(aPart) - parseInt(bPart)
  })
}
