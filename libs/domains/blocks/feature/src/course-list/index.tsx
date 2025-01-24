import { CourseCard } from '@alecia/courses-ui'
import type { CoursesByDifficultyQueryResult } from '@alecia/sanity-types'
import { EmptyState } from '@alecia/site-layout-ui'
import { cn } from '@alecia/util'

interface CourseListProps {
  courses?: CoursesByDifficultyQueryResult
}

const CourseList = ({ courses }: CourseListProps) => {
  if (!courses || courses.length === 0) return <EmptyState />

  return (
    <div
      className={cn(
        'page-content-block',
        'grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3',
        'px-8 md:px-20',
      )}
    >
      {courses?.map((course) => (
        <CourseCard key={course._id} {...course} changeOnDarkMode />
      ))}
    </div>
  )
}

export default CourseList
