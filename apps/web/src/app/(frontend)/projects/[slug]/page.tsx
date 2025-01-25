import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Image } from 'next-sanity/image'
import { Image as SanityImage } from 'sanity'

import RenderedBlocks from '@alecia/blocks/rendered'
import { ThumbnailDimensions } from '@alecia/constants/images'
import { Routes, SITE_BASE_URL } from '@alecia/constants/routes'
import ProjectHeader from '@alecia/pages-ui/project-header'
import ProjectPreFooter from '@alecia/projects-ui/prefooter'
import { projectPageQuery, projectSlugsQuery } from '@alecia/sanity-queries/projects/projects.query'
import { settingsQuery } from '@alecia/sanity-queries/settings.query'
import {
  AllProjectsQueryResult,
  ProjectPageQueryResult,
  SettingsQueryResult,
} from '@alecia/sanity-types/sanity.types'
import {
  getCroppedImageSrc,
  urlForOpenGraphImage,
} from '@alecia/sanity-util/client-utils/sanity-image-utils'
import { client } from '@alecia/sanity-util/server-utils/client'
import { getData } from '@alecia/sanity-util/server-utils/get-data'
import SiteWrapper from '@alecia/site-layout/site-wrapper/site-wrapper'
import PageContents from '@alecia/site-navigation/page-contents/page-contents'
import { ExtendedImage } from '@alecia/types/images'
import Typography from '@alecia/ui-kit/ui/typography'
import { getPlaceholderImage } from '@alecia/util/images'
import { buildRoute } from '@alecia/util/routes'

type SingleProject = AllProjectsQueryResult[number]

interface RelatedProject extends SingleProject {
  imageSrc?: string
}

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return await client.fetch(
    projectSlugsQuery,
    {},
    {
      next: {
        tags: ['project'],
      },
    },
  )
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const [page, settings] = await Promise.all([
    getData<ProjectPageQueryResult>(
      projectPageQuery,
      params,
      [`project:${params.slug}`, 'project'],
      { stega: false },
    ),
    getData<SettingsQueryResult>(settingsQuery, {}, ['settings'], { stega: false }),
  ])

  if (!page) {
    return {}
  }

  const projectTags =
    page.tags?.map((tag) => tag.label).filter((cat) => cat !== null && cat !== undefined) ?? []
  const pageKeywords = page.metadata?.keywords ?? []
  const combinedKeywords = [
    'edmonton',
    'web development',
    'full-stack developer',
    'portfolio',
    ...pageKeywords,
    ...projectTags,
  ]

  return {
    metadataBase: new URL('https://' + SITE_BASE_URL),
    title: page.metadata?.title ?? page.title,
    description: page.metadata?.description,
    applicationName: settings?.title,
    generator: 'Next.js',
    keywords: combinedKeywords,
    openGraph: {
      type: 'website',
      url:
        'https://' +
        SITE_BASE_URL +
        buildRoute(Routes.Projects.Project, { slug: page.metadata?.slug?.current ?? '/' }),
      title: page.metadata?.title ?? page.title ?? undefined,
      description: page.metadata?.description ?? undefined,
      // TODO: iterate through image blocks to retrieve image URLs
      images: page.metadata?.image
        ? [
            {
              url: urlForOpenGraphImage(page.metadata.image as SanityImage) ?? '',
              width: 1200,
              height: 627,
              alt: page.metadata?.title || page.title || '',
            },
          ]
        : page.mainImage
        ? [
            {
              url: urlForOpenGraphImage(page.mainImage as SanityImage) ?? '',
              width: 1200,
              height: 627,
              alt: page.mainImage.alt || page.title || '',
            },
          ]
        : settings?.ogimage
        ? [
            {
              url: urlForOpenGraphImage(settings?.ogimage as SanityImage) ?? '',
              width: 1200,
              height: 627,
              alt: page.metadata?.title || page.title || '',
            },
          ]
        : undefined,
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getData<ProjectPageQueryResult>(projectPageQuery, params, [
    `project:${params.slug}`,
    'project',
  ])

  if (!project) notFound()

  const {
    width = 800,
    height = 600,
    src = getPlaceholderImage(800, 600),
  } = project.mainImage !== undefined && project.mainImage !== null
    ? getCroppedImageSrc(project.mainImage as SanityImage) ?? {}
    : {}

  const morePosts = [project.prevProject, project.nextProject]
    .filter(Boolean)
    .reduce((uniquePosts: NonNullable<SingleProject>[], proj) => {
      if (!uniquePosts.some((p) => p._id === proj?._id)) {
        if (proj) uniquePosts.push(proj)
      }
      return uniquePosts
    }, [])
    .map((proj) => ({
      ...proj,
      imageSrc:
        getCroppedImageSrc(proj.mainImage as Omit<ExtendedImage, 'crop'> | null)?.src ??
        getPlaceholderImage(ThumbnailDimensions.Width, ThumbnailDimensions.Height),
    })) as RelatedProject[]

  return (
    <SiteWrapper>
      <ProjectHeader
        pretitle="Projects"
        title={project.title}
        pretitleLink={Routes.Projects.Index}
      />
      <PageContents variant="rectangular" className="mb-0 pb-[300px]" isWavy={false}>
        <div className="space-y-6 md:space-y-16">
          <div className="space-y-4 page-content-block">
            <Typography variant="blockPretitle" as="h2">
              The Objective
            </Typography>
            <Typography variant="blockTitle">{project.subtitle}</Typography>
          </div>
          <div className="page-content-block">
            {project.mainImage ? (
              <Image
                src={src}
                alt="Placeholder"
                width={width}
                height={height}
                className="w-full"
                priority
              />
            ) : (
              <img src={getPlaceholderImage(800, 600)} alt="Placeholder" className="w-full" />
            )}
          </div>
          <div className="space-y-24">
            <RenderedBlocks modules={project.modules} />
          </div>
        </div>
      </PageContents>
      <ProjectPreFooter relatedProjects={morePosts} />
    </SiteWrapper>
  )
}
