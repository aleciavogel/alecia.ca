import { notFound } from 'next/navigation'
import { Image } from 'next-sanity/image'
import { Image as SanityImage } from 'sanity'

import { Routes, ThumbnailDimensions } from '@alecia/constants'
import { RenderedBlocks } from '@alecia/pages'
import { ProjectHeader } from '@alecia/pages-ui'
import { ProjectPreFooter } from '@alecia/projects-ui'
import { projectPageQuery, projectSlugsQuery } from '@alecia/sanity-queries'
import { AllProjectsQueryResult, ProjectPageQueryResult } from '@alecia/sanity-types'
import { getCroppedImageSrc } from '@alecia/sanity-util'
import { client, getData } from '@alecia/sanity-util/server'
import { processMetadata } from '@alecia/settings-data-access/server'
import { SiteWrapper } from '@alecia/site-layout'
import { PageContents } from '@alecia/site-navigation'
import { ExtendedImage } from '@alecia/types'
import { Typography } from '@alecia/ui-kit'
import { buildRoute, getPlaceholderImage } from '@alecia/util'

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

// Combine settings data and project data to generate metadata
export async function generateMetadata({ params }: ProjectPageProps) {
  const project = await getData<ProjectPageQueryResult>(projectPageQuery, params, [
    `project:${params.slug}`,
  ])
  if (!project) notFound()
  const meta = await processMetadata({
    metadata: project.metadata,
    slug: buildRoute(Routes.Projects.Project, params),
    fallbackTitle: project.title,
  })

  return {
    ...meta,
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
        <div className="space-y-6 md:space-y-16 page-container page-content-padding">
          <div className="space-y-4">
            <Typography variant="blockPretitle" as="h2">
              The Objective
            </Typography>
            <Typography variant="blockTitle">{project.subtitle}</Typography>
          </div>
          <div>
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
