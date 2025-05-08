import EmptyState from '@alecia/core/layout/components/states/empty'
import PageContents from '@alecia/core/navigation/components/page-contents/page-contents'
import SimpleHeader from '@alecia/core/pages/components/simple-header'
import SiteWrapper from '@alecia/core/theming/components/site-wrapper/site-wrapper'

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
