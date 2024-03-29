import { type FC } from 'react'
import { type Metadata } from 'next'

import ComingSoonPage from '@/components/pages/coming-soon/ComingSoonPage'

const Resources: FC = () => {
  return <ComingSoonPage pageTitle="Resources" />
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Resources | Alecia.ca`,
  }
}

export default Resources
