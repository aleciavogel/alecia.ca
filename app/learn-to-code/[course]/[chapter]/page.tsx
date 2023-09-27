import { type FC } from 'react'
import { type Metadata } from 'next'

import { getTutorialPart } from '@/features/tutorials/utils'
import TutorialChapterPage from '@/features/tutorials/pages/chapters'
import { TutorialChapterProvider } from '@/features/tutorials/providers'

interface TutorialChapterPageProps {
  params: {
    course: string
    chapter: string
  }
}

// TODO: redirect if chapter doesn't exist
const Page: FC<TutorialChapterPageProps> = async ({ params }) => {
  const { course, chapter } = params
  const part = getTutorialPart(course, chapter)

  return (
    <TutorialChapterProvider {...part}>
      <TutorialChapterPage />
    </TutorialChapterProvider>
  )
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { course, chapter } = params
  const {
    frontMatter: { title, description, seoTitle, seoDescription },
  } = getTutorialPart(course, chapter)
  return {
    title: `${seoTitle ?? title} | Alecia.ca`,
    description: seoDescription ?? description,
    authors: [
      {
        name: 'Alecia Vogel',
        url: 'https://alecia.ca',
      },
    ],
  }
}

export default Page
