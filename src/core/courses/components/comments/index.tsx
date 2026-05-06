'use client'

import { stegaClean } from '@sanity/client/stega'

import GiscusComments from '@alecia/vendors/giscus/components/giscus-comments'

interface CourseCommentsProps {
  title?: string | null
  courseName?: string | null
  chapterNumber?: number | null
}

const CourseComments = ({ title, courseName, chapterNumber }: CourseCommentsProps) => {
  const cleanTitle = stegaClean(title) ?? 'Untitled'
  const cleanCourseName = stegaClean(courseName)

  const giscusTitle =
    cleanCourseName && chapterNumber
      ? `[${cleanCourseName}] ${chapterNumber}. ${cleanTitle}`
      : cleanCourseName
      ? `[${cleanCourseName}] ${cleanTitle}`
      : cleanTitle

  return (
    <div className="mx-auto w-full px-16 md:max-w-screen-sm lg:max-w-screen-md">
      <GiscusComments title={giscusTitle} category="Course Chapters" />
    </div>
  )
}

export default CourseComments
