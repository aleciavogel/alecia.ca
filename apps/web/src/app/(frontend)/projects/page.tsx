import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Image as SanityImage } from 'sanity'

import ProjectList from '@alecia/blocks/project-list'
import RenderedBlocks from '@alecia/blocks/rendered'
import { Routes, SITE_BASE_URL } from '@alecia/constants/routes'
import SimpleHeader from '@alecia/pages-ui/simple-header'
import { projectIndexQuery } from '@alecia/sanity-queries/projects/projects.query'
import { settingsQuery } from '@alecia/sanity-queries/settings.query'
import { ProjectIndexQueryResult, SettingsQueryResult } from '@alecia/sanity-types/sanity.types'
import { urlForOpenGraphImage } from '@alecia/sanity-util/client-utils/sanity-image-utils'
import { getData } from '@alecia/sanity-util/server-utils/get-data'
import SiteWrapper from '@alecia/site-layout/site-wrapper/site-wrapper'
import EmptyState from '@alecia/site-layout-ui/states/empty'
import PageContents from '@alecia/site-navigation/page-contents/page-contents'

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
