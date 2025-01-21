import { RenderedBlocks } from '@alecia/pages'
import { getHomePage } from '@alecia/pages-data-access/server'
import { WavyHeader } from '@alecia/pages-ui'
import { SiteWrapper } from '@alecia/site-layout'
import { PageContents } from '@alecia/site-navigation'

export default async function HomePage() {
  const data = await getHomePage()

  return (
    <SiteWrapper>
      <WavyHeader
        title={data?.title ?? "I'm Alecia Vogel"}
        pretitle={data?.pretitle ?? 'Oh, hey!'}
        subtitle={data?.subtitle ?? 'Welcome to my little corner of the internet.'}
      />
      <PageContents className="pb-48">
        <RenderedBlocks modules={data?.modules} />
      </PageContents>
    </SiteWrapper>
  )
}
