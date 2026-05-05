import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Image } from 'next-sanity/image'
import { Image as SanityImage } from 'sanity'

import Typography from '@alecia/common/ui/typography'
import { ThumbnailDimensions } from '@alecia/constants/images'
import { Routes } from '@alecia/constants/routes'
import RenderedBlocks from '@alecia/core/blocks/components/rendered'
import PageContents from '@alecia/core/navigation/components/page-contents/page-contents'
import ProjectHeader from '@alecia/core/pages/components/project-header'
import ProjectPreFooter from '@alecia/core/projects/components/prefooter'
import SiteWrapper from '@alecia/core/theming/components/site-wrapper/site-wrapper'
import { ExtendedImage } from '@alecia/types/images'
import { getPlaceholderImage } from '@alecia/util/images'
import { buildRoute } from '@alecia/util/routes'
import {
  projectPageQuery,
  projectSlugsQuery,
} from '@alecia/vendors/sanity/queries/projects/projects.query'
import { AllProjectsQueryResult } from '@alecia/vendors/sanity/types/sanity.types'
import {
  getCroppedImageSrc,
  urlForOpenGraphImage,
} from '@alecia/vendors/sanity/util/client/sanity-image-utils'
import { sanityClient } from '@alecia/vendors/sanity/util/server/client'
import { sanityFetch } from '@alecia/vendors/sanity/util/server/live'

type SingleProject = AllProjectsQueryResult[number]

interface RelatedProject extends SingleProject {
  imageSrc?: string
}

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return await sanityClient.fetch(
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
  const { slug } = await params
  const { data: page } = await sanityFetch({
    query: projectPageQuery,
    params: { slug },
    stega: false,
  })

  if (!page) {
    return {}
  }

  const projectTags =
    page.tags?.map((tag) => tag.label).filter((cat) => cat !== null && cat !== undefined) ?? []
  const pageKeywords = page.metadata?.keywords ?? []
  const projectUrl = buildRoute(Routes.Projects.Project, {
    slug: page.metadata?.slug?.current ?? '/',
  })

  return {
    title: page.metadata?.title ?? page.title,
    description:
      page.metadata?.description ??
      `Explore ${
        page.title ?? 'this project'
      }, a web development project by Alecia Vogel, a senior full-stack developer based in Edmonton, AB.`,
    keywords: ['portfolio', ...pageKeywords, ...projectTags],
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      url: projectUrl,
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
        : undefined,
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const { data: project } = await sanityFetch({
    query: projectPageQuery,
    params: { slug },
  })

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
