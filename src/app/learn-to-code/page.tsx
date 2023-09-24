import { type FC } from 'react'
import { type Metadata } from 'next'

import ComingSoonPage from '@/components/pages/coming-soon/ComingSoonPage'

const LearnToCode: FC = () => {
  return <ComingSoonPage pageTitle="Learn To Code" />
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Learn To Code | Alecia.ca`,
  }
}

export default LearnToCode
