import { SimpleHeader } from '@alecia/pages-ui'
import { SiteWrapper } from '@alecia/site-layout'
import { EmptyState } from '@alecia/site-layout-ui'
import { PageContents } from '@alecia/site-navigation'

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
