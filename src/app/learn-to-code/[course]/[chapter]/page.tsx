import { type FC } from 'react'
import { type Metadata } from 'next'

import SiteWrapper from '@/components/layout/SiteWrapper'
import { getTutorialPart } from '@/lib/tutorials'
import ChapterHeader from '@/components/pages/learn-to-code/chapters/ChapterHeader'

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

  return (
    <SiteWrapper>
      <ChapterHeader {...part} />
      <main></main>
    </SiteWrapper>
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

export default TutorialChapterPage
