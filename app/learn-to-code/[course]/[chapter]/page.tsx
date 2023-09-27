import { type FC } from 'react'
import { type Metadata } from 'next'

import SiteWrapper from '@/features/_layout/page/components/SiteWrapper'
import { getTutorialPart } from '@/features/tutorials/utils'
import ChapterHeader from '@/features/tutorials/content/components/chapters/ChapterHeader'
import ChapterMain from '@/features/tutorials/content/components/chapters/ChapterMain'
import ChapterSidebar from '@/features/tutorials/content/components/chapters/ChapterSidebar'
import ChapterContent from '@/features/tutorials/content/components/chapters/ChapterContent'
import UnderConstructionBanner from '@/features/banners/components/UnderConstruction'

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
      <ChapterMain>
        <ChapterContent {...part} />
        <ChapterSidebar course={course} chapter={chapter} />
      </ChapterMain>
      <UnderConstructionBanner />
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
