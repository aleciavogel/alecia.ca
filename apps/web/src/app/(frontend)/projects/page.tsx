import * as React from 'react'
import { notFound } from 'next/navigation'

import { ProjectList } from '@alecia/blocks'
import { RenderedBlocks } from '@alecia/pages'
import { SimpleHeader } from '@alecia/pages-ui'
import { getProjectIndex } from '@alecia/projects-data-access/server'
import { SiteWrapper } from '@alecia/site-layout'
import { EmptyState } from '@alecia/site-layout-ui'
import { PageContents } from '@alecia/site-navigation'

// TODO: pull metadata from sanity
export const metadata = {
  title: 'Projects',
  description: 'A showcase of my past and present work.',
}

export default async function ProjectsPage() {
  const { page, projects } = await getProjectIndex()
  const noProjects = !projects || (Array.isArray(projects) && projects.length === 0)

  if (!page) notFound()

  return (
    <SiteWrapper>
      <SimpleHeader
        pretitle={page.pretitle}
        title={page.title}
        subtitle={page.subtitle}
        headerIllustration={page.headerIllustration}
      />
      <PageContents className="pt-64">
        {noProjects ? <EmptyState /> : <ProjectList projects={projects} />}
        <RenderedBlocks modules={page.modules} />
      </PageContents>
    </SiteWrapper>
  )
}
