import { notFound } from 'next/navigation'

import { RenderedBlocks } from '@alecia/pages'
import { SimpleHeader } from '@alecia/pages-ui'
import { getProject } from '@alecia/projects-data-access/server'
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

  return (
    <SiteWrapper>
      <SimpleHeader pretitle="Projects" title={project.title} subtitle={project.subtitle} />
      <PageContents variant="rectangular">
        <div className="space-y-16 page-container mx-auto">
          <div className="space-y-4">
            <Typography variant="blockPretitle" as="h2">
              The Objective
            </Typography>
            <Typography variant="blockTitle">
              Could be a title to hint at further details
            </Typography>
          </div>
          <div>
            <img src={getPlaceholderImage(800, 550)} alt="Placeholder" className="w-full" />
          </div>
          <div>
            <RenderedBlocks modules={project.modules} />
          </div>
        </div>
      </PageContents>
    </SiteWrapper>
  )
}
