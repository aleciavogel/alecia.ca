import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Course',
  description: 'An interactive course by Alecia Vogel.',
  robots: {
    index: false,
  },
}

export default async function CourseIntroPage() {
  return <div>I will display a list of advanced courses</div>
}
