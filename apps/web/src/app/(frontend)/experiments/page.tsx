import { notFound } from 'next/navigation'

import { ExperimentsList } from '@alecia/blocks'
import { getExperimentsIndex } from '@alecia/experiments-data-access/server'
import { RenderedBlocks } from '@alecia/pages'
import { SimpleHeader } from '@alecia/pages-ui'
import { SiteWrapper } from '@alecia/site-layout'
import { EmptyState } from '@alecia/site-layout-ui'
import { PageContents } from '@alecia/site-navigation'

// TODO: pull metadata from sanity
export const metadata = {
  title: 'Experiments | alecia.ca',
  description: 'My personal sandbox for trying new things.',
}

export default async function ExperimentsIndexPage() {
  const { page, experiments } = await getExperimentsIndex()
  const noExperiments = !experiments || (Array.isArray(experiments) && experiments.length === 0)

  if (!page) notFound()

  return (
    <SiteWrapper>
      <SimpleHeader
        pretitle={page.pretitle}
        title={page.title}
        subtitle={page.subtitle}
        headerIllustration={page.headerIllustration}
      />
      <PageContents className="md:pt-56 lg:pt-64">
        {noExperiments ? <EmptyState /> : <ExperimentsList experiments={experiments} />}

        <RenderedBlocks modules={page.modules} />
      </PageContents>
    </SiteWrapper>
  )
}
