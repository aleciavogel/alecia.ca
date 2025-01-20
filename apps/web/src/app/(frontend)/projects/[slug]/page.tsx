import { notFound } from 'next/navigation'
import { Image } from 'next-sanity/image'
import { Image as SanityImage } from 'sanity'

import { Routes } from '@alecia/constants'
import { RenderedBlocks } from '@alecia/pages'
import { SimpleHeader } from '@alecia/pages-ui'
import { getProject } from '@alecia/projects-data-access/server'
import { ProjectPreFooter } from '@alecia/projects-ui'
import { getCroppedImageSrc, urlFor } from '@alecia/sanity-util'
import { SiteWrapper } from '@alecia/site-layout'
import { PageContents } from '@alecia/site-navigation'
import { Typography } from '@alecia/ui-kit'
import { getPlaceholderImage } from '@alecia/util'

// TODO: pull metadata from sanity
export const metadata = {
  title: 'Project | alecia.ca',
  description: 'A showcase of my past and present work.',
}

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default async function ProjectPage({ params: { slug } }: ProjectPageProps) {
  const project = await getProject(slug)

  if (!project) notFound()

  const {
    width = 800,
    height = 600,
    src = getPlaceholderImage(800, 600),
  } = project.mainImage !== undefined && project.mainImage !== null
    ? getCroppedImageSrc(project.mainImage as SanityImage) ?? {}
    : {}

  return (
    <SiteWrapper>
      <SimpleHeader
        pretitle="Projects"
        title={project.title}
        pretitleLink={Routes.Projects.Index}
      />
      <PageContents variant="rectangular" className="mb-0 pb-[300px]" isWavy={false}>
        <div className="space-y-6 md:space-y-16 page-container max-xl:page-content-padding mx-auto">
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
      <ProjectPreFooter relatedProjects={[]} />
    </SiteWrapper>
  )
}
