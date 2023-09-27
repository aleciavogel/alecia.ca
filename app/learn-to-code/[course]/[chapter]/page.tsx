import { type FC } from 'react'
import { type Metadata } from 'next'

import StickyWrapper from '@/features/page-layout/layouts'
import { getTutorialPart } from '@/features/tutorials/utils'
import ChapterHeader from '@/features/tutorials/chapters/ChapterHeader'
import ChapterMain from '@/features/tutorials/chapters/ChapterMain'
import ChapterSidebar from '@/features/tutorials/chapters/ChapterSidebar'
import ChapterContent from '@/features/tutorials/chapters/components/ChapterContent'
import UnderConstructionBanner from '@/features/banners/components/under-contruction'

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
    <StickyWrapper>
      <ChapterHeader {...part} />
      <ChapterMain>
        <ChapterContent {...part} />
        <ChapterSidebar course={course} chapter={chapter} />
      </ChapterMain>
      <UnderConstructionBanner />
    </StickyWrapper>
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
