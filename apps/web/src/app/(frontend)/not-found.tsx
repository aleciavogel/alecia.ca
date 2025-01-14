import { SimpleHeader } from '@alecia/pages-ui'
import { PageContents, SiteWrapper } from '@alecia/site-layout'
import { EmptyState } from '@alecia/site-layout-ui'

export default function NotFound() {
  return (
    <SiteWrapper>
      <SimpleHeader headerIllustration="none" title="Page Not Found" pretitle="Error 404" />
      <PageContents variant="rectangular">
        <EmptyState resolve="Try using the menu above to navigate somewhere else." />
      </PageContents>
    </SiteWrapper>
  )
}
