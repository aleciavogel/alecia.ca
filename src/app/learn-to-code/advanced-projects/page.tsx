import { type FC } from 'react'
import { type Metadata } from 'next'

import ComingSoonPage from '@/components/pages/coming-soon/ComingSoonPage'

const AdvancedProjects: FC = () => {
  return <ComingSoonPage pageTitle="Advanced Projects" />
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Advanced Projects | Alecia.ca`,
  }
}

export default AdvancedProjects
