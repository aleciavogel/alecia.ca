import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Image as SanityImage } from 'sanity'

import { Routes } from '@alecia/constants/routes'
import ProjectList from '@alecia/core/blocks/components/project-list'
import RenderedBlocks from '@alecia/core/blocks/components/rendered'
import EmptyState from '@alecia/core/layout/components/states/empty'
import PageContents from '@alecia/core/navigation/components/page-contents/page-contents'
import SimpleHeader from '@alecia/core/pages/components/simple-header'
import SiteWrapper from '@alecia/core/theming/components/site-wrapper/site-wrapper'
import { projectIndexQuery } from '@alecia/vendors/sanity/queries/projects/projects.query'
import { urlForOpenGraphImage } from '@alecia/vendors/sanity/util/client/sanity-image-utils'
import { sanityFetch } from '@alecia/vendors/sanity/util/server/live'

export async function generateMetadata(): Promise<Metadata> {
  const {
    data: { page },
  } = await sanityFetch({ query: projectIndexQuery, stega: false })

  if (!page) {
    return {}
  }

  const pageKeywords = page.metadata?.keywords ?? []

  return {
    title: page.metadata?.title ?? page.title,
    description: page.metadata?.description,
    keywords: pageKeywords,
    alternates: {
      canonical: Routes.Projects.Index,
    },
    openGraph: {
      url: Routes.Projects.Index,
      title: page.metadata?.title ?? page.title ?? undefined,
      description: page.metadata?.description ?? undefined,
      images: page.metadata?.image
        ? [
            {
              url: urlForOpenGraphImage(page.metadata.image as SanityImage) ?? '',
              width: 1200,
              height: 627,
              alt: page.metadata?.title || page.title || '',
            },
          ]
        : undefined,
    },
  }
}

export default async function ProjectsPage() {
  const {
    data: { page, projects },
  } = await sanityFetch({ query: projectIndexQuery })
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
