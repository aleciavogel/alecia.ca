import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Course Chapter',
  description: 'An interactive course chapter by Alecia Vogel.',
  robots: {
    index: false,
  },
}

interface CourseChapterPageProps {
  params: Promise<{
    slug: string
    chapter: string
  }>
}

// TODO: implement this page
export default async function CourseChapterPage({ params }: CourseChapterPageProps) {
  // const { slug, chapter } = await params

  return <div>I will be a chapter uwu</div>
}
