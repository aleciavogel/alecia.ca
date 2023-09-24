import { type FC } from 'react'
import { type Metadata } from 'next'

import ComingSoonPage from '@/components/pages/coming-soon/ComingSoonPage'

const Resume: FC = () => {
  return <ComingSoonPage pageTitle="Resume" />
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Resume | Alecia.ca`,
  }
}

export default Resume
