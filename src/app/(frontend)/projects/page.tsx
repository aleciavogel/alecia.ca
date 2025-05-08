import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Image as SanityImage } from 'sanity'

import { Routes, SITE_BASE_URL } from '@alecia/constants/routes'
import ProjectList from '@alecia/core/blocks/components/project-list'
import RenderedBlocks from '@alecia/core/blocks/components/rendered'
import EmptyState from '@alecia/core/layout/components/states/empty'
import PageContents from '@alecia/core/navigation/components/page-contents/page-contents'
import SimpleHeader from '@alecia/core/pages/components/simple-header'
import SiteWrapper from '@alecia/core/theming/components/site-wrapper/site-wrapper'
import { projectIndexQuery } from '@alecia/vendors/sanity/queries/projects/projects.query'
import { settingsQuery } from '@alecia/vendors/sanity/queries/settings.query'
import {
  ProjectIndexQueryResult,
  SettingsQueryResult,
} from '@alecia/vendors/sanity/types/sanity.types'
import { urlForOpenGraphImage } from '@alecia/vendors/sanity/util/client/sanity-image-utils'
import { getData } from '@alecia/vendors/sanity/util/server/get-data'

export async function generateMetadata(): Promise<Metadata> {
  const [{ page }, settings] = await Promise.all([
    getData<ProjectIndexQueryResult>(projectIndexQuery, {}, [`page:projects`, 'project'], {
      stega: false,
    }),
    getData<SettingsQueryResult>(settingsQuery, {}, ['settings'], { stega: false }),
  ])

  if (!page) {
    return {}
  }

  const pageKeywords = page.metadata?.keywords ?? []
  const combinedKeywords = ['edmonton', 'web development', 'full-stack developer', ...pageKeywords]

  return {
    metadataBase: new URL('https://' + SITE_BASE_URL),
    title: page.metadata?.title ?? page.title,
    description: page.metadata?.description,
    applicationName: settings?.title,
    generator: 'Next.js',
    keywords: combinedKeywords,
    openGraph: {
      type: 'website',
      url: 'https://' + SITE_BASE_URL + Routes.Projects.Index,
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

export default async function ProjectsPage() {
  const { page, projects } = await getData<ProjectIndexQueryResult>(projectIndexQuery)
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
