import { type FC } from 'react'
import { type Metadata } from 'next'

import SiteWrapper from '@/components/layout/SiteWrapper'
import AdvancedProjectsHeader from '@/components/pages/learn-to-code/advanced-projects/AdvancedProjectsHeader'
import AdvancedProjectsMain from '@/components/pages/learn-to-code/advanced-projects/AdvancedProjectsMain'

const AdvancedProjects: FC = () => {
  return (
    <SiteWrapper>
      <AdvancedProjectsHeader />
      <AdvancedProjectsMain />
    </SiteWrapper>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Advanced Projects | Alecia.ca`,
  }
}

export default AdvancedProjects
