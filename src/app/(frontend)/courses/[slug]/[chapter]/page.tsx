import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'
import { Image as SanityImage } from 'sanity'

import { Routes } from '@alecia/constants/routes'
import ChapterNavFooter from '@alecia/core/courses/components/chapter-nav-footer'
import PageContents from '@alecia/core/navigation/components/page-contents/page-contents'
import ProjectHeader from '@alecia/core/pages/components/project-header'
import SiteWrapper from '@alecia/core/theming/components/site-wrapper/site-wrapper'
import { buildRoute } from '@alecia/util/routes'
import {
  courseChapterPageQuery,
  courseChapterSlugsQuery,
} from '@alecia/vendors/sanity/queries/courses/courses.query'
import { urlForOpenGraphImage } from '@alecia/vendors/sanity/util/client/sanity-image-utils'
import { sanityClient } from '@alecia/vendors/sanity/util/server/client'
import { sanityFetch } from '@alecia/vendors/sanity/util/server/live'

const ChapterBlocks = dynamic(() => import('@alecia/core/courses/components/chapter-blocks'))

interface CourseChapterPageProps {
  params: Promise<{
    slug: string
    chapter: string
  }>
}

export async function generateStaticParams() {
  const courses = await sanityClient.fetch(
    courseChapterSlugsQuery,
    {},
    {
      next: {
        tags: ['course.chapter'],
      },
    },
  )

  return courses.flatMap((course) =>
    (course.chapters ?? []).map((ch) => ({
      slug: course.slug,
      chapter: ch.chapter,
    })),
  )
}

export async function generateMetadata({ params }: CourseChapterPageProps): Promise<Metadata> {
  const { slug, chapter } = await params

  const { data } = await sanityFetch({
    query: courseChapterPageQuery,
    params: { slug, chapter },
    stega: false,
  })

  if (!data?.chapter) {
    return {}
  }

  const ch = data.chapter
  const chapterUrl = buildRoute(Routes.Courses.Chapter, {
    slug: data.courseSlug ?? slug,
    chapter: ch.metadata?.slug?.current ?? chapter,
  })

  return {
    title: ch.metadata?.title ?? ch.title,
    description: ch.metadata?.description ?? `${ch.title} — a chapter from ${data.courseTitle}`,
    alternates: {
      canonical: chapterUrl,
    },
    openGraph: {
      type: 'article',
      url: chapterUrl,
      title: ch.metadata?.title ?? ch.title ?? undefined,
      description: ch.metadata?.description ?? undefined,
      images: ch.metadata?.image
        ? [
            {
              url: urlForOpenGraphImage(ch.metadata.image as SanityImage) ?? '',
              width: 1200,
              height: 627,
              alt: ch.metadata?.title || ch.title || '',
            },
          ]
        : undefined,
    },
  }
}

export default async function CourseChapterPage({ params }: CourseChapterPageProps) {
  const { slug, chapter } = await params
  const { data } = await sanityFetch({
    query: courseChapterPageQuery,
    params: { slug, chapter },
  })

  if (!data?.chapter) {
    notFound()
  }

  const ch = data.chapter
  const courseHref = buildRoute(Routes.Courses.Course, { slug })

  // Find the next chapter from the chapters array
  const allChapters = data.nextChapter ?? []
  const currentIndex = allChapters.findIndex((c) => c._id === ch._id)
  const chapterNumber = currentIndex >= 0 ? currentIndex + 1 : null
  const nextChapterData =
    currentIndex >= 0 && currentIndex < allChapters.length - 1
      ? allChapters[currentIndex + 1]
      : null

  const nextChapter = nextChapterData
    ? {
        title: nextChapterData.title ?? 'Next Chapter',
        href: buildRoute(Routes.Courses.Chapter, {
          slug,
          chapter: nextChapterData.slug ?? '',
        }),
      }
    : null

  const headerTitle = chapterNumber ? `Chapter ${chapterNumber}: ${ch.title}` : ch.title

  return (
    <SiteWrapper>
      <ProjectHeader pretitle={data.courseTitle} title={headerTitle} pretitleLink={courseHref} />
      <PageContents className="pt-48 md:pt-56 lg:pt-64 pb-48">
        <div id="chapter-content" className="flex flex-col gap-6">
          <ChapterBlocks blocks={ch.body} />
        </div>

        <ChapterNavFooter
          quiz={ch.sectionQuiz}
          nextSectionText={ch.nextSectionText}
          nextChapter={nextChapter}
          courseHref={courseHref}
        />
      </PageContents>
    </SiteWrapper>
  )
}
