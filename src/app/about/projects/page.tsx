import { type FC } from 'react'
import { type Metadata } from 'next'

import ComingSoonPage from '@/components/pages/coming-soon/ComingSoonPage'

const Projects: FC = () => {
  return <ComingSoonPage pageTitle="Projects" />
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Projects | Alecia.ca`,
  }
}

export default Projects
