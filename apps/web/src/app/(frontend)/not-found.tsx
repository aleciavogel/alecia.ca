import SimpleHeader from '@alecia/pages-ui/simple-header'
import SiteWrapper from '@alecia/site-layout/site-wrapper/site-wrapper'
import EmptyState from '@alecia/site-layout-ui/states/empty'
import PageContents from '@alecia/site-navigation/page-contents/page-contents'

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
