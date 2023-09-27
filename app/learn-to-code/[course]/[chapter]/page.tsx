import { type FC } from 'react'
import { type Metadata } from 'next'

import { getTutorialPart } from '@/features/tutorials/utils'
import TutorialPage from '@/features/tutorials/chapters/components'

interface TutorialChapterPageProps {
  params: {
    course: string
    chapter: string
  }
}

// TODO: redirect if chapter doesn't exist
const TutorialChapterPage: FC<TutorialChapterPageProps> = ({ params }) => {
  const { course, chapter } = params
  const part = getTutorialPart(course, chapter)

  return <TutorialPage {...part} />
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

export default TutorialChapterPage
