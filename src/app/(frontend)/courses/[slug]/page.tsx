import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableTextBlock } from 'next-sanity'
import { Image as SanityImage } from 'sanity'

import Typography from '@alecia/common/ui/typography'
import { Routes } from '@alecia/constants/routes'
import PageContents from '@alecia/core/navigation/components/page-contents/page-contents'
import HeroHeader from '@alecia/core/pages/components/hero-header'
import SiteWrapper from '@alecia/core/theming/components/site-wrapper/site-wrapper'
import { getPlaceholderImage } from '@alecia/util/images'
import { buildRoute } from '@alecia/util/routes'
import {
  coursePageQuery,
  courseSlugsQuery,
} from '@alecia/vendors/sanity/queries/courses/courses.query'
import {
  getCroppedImageSrc,
  urlForOpenGraphImage,
} from '@alecia/vendors/sanity/util/client/sanity-image-utils'
import { sanityClient } from '@alecia/vendors/sanity/util/server/client'
import { sanityFetch } from '@alecia/vendors/sanity/util/server/live'

const CoursePortableText = dynamic(
  () => import('@alecia/core/courses/components/course-portable-text'),
)

interface CoursePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return await sanityClient.fetch(
    courseSlugsQuery,
    {},
    {
      next: {
        tags: ['course'],
      },
    },
  )
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params

  const { data: course } = await sanityFetch({
    query: coursePageQuery,
    params: { slug },
    stega: false,
  })

  if (!course) {
    return {}
  }

  const courseTags =
    course.categories?.map((category) => category.title).filter((cat) => cat !== null) ?? []
  const courseUrl = buildRoute(Routes.Courses.Course, {
    slug: course.metadata?.slug?.current ?? '/',
  })

  return {
    title: course.metadata?.title ?? course.title,
    description: course.metadata?.description ?? course.previewText,
    keywords: ['course', ...courseTags],
    alternates: {
      canonical: courseUrl,
    },
    openGraph: {
      type: 'website',
      url: courseUrl,
      title: course.metadata?.title ?? course.title ?? undefined,
      description: course.metadata?.description ?? course.previewText ?? undefined,
      images: course.metadata?.image
        ? [
            {
              url: urlForOpenGraphImage(course.metadata.image as SanityImage) ?? '',
              width: 1200,
              height: 627,
              alt: course.metadata?.title || course.title || '',
            },
          ]
        : course.mainImage
        ? [
            {
              url: urlForOpenGraphImage(course.mainImage as SanityImage) ?? '',
              width: 1200,
              height: 627,
              alt: course.mainImage.alt || course.title || '',
            },
          ]
        : undefined,
    },
  }
}

export default async function CourseIntroPage({ params }: CoursePageProps) {
  const { slug } = await params
  const { data: course } = await sanityFetch({
    query: coursePageQuery,
    params: { slug },
  })

  if (!course) {
    notFound()
  }

  const courseCategory = course.categories?.[0]
  const tag = courseCategory
    ? {
        text: courseCategory.title ?? 'Uncategorized',
        href: courseCategory.slug ?? '#',
      }
    : undefined

  const { src = getPlaceholderImage(800, 600) } =
    course.mainImage !== undefined && course.mainImage !== null
      ? getCroppedImageSrc(course.mainImage as SanityImage) ?? {}
      : {}

  return (
    <SiteWrapper>
      <HeroHeader title={course.title} subtitle={course.subtitle} coverImage={src} tag={tag} />
      <PageContents className="pt-48 md:pt-56 lg:pt-64 pb-48">
        <div id="course-content" className="flex flex-col gap-6 page-content-block">
          <CoursePortableText value={course.body as PortableTextBlock[] | undefined} />
        </div>

        {course.chapters && course.chapters.length > 0 ? (
          <div className="page-content-block">
            <Typography variant="h2" className="mb-6">
              Chapters
            </Typography>
            <ol className="space-y-4">
              {course.chapters.map((chapter, index) => (
                <li key={chapter._id}>
                  <Link
                    href={buildRoute(Routes.Courses.Chapter, {
                      slug,
                      chapter: chapter.slug ?? '',
                    })}
                    className="group flex items-baseline gap-3 text-primary-600 dark:text-primary-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                  >
                    <span className="font-mono text-sm opacity-60">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-lg font-semibold group-hover:underline">
                      {chapter.title}
                    </span>
                    {chapter.subtitle ? (
                      <span className="text-sm text-body opacity-70 hidden sm:inline">
                        {chapter.subtitle}
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        ) : null}
      </PageContents>
    </SiteWrapper>
  )
}
