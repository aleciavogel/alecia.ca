import { type FC } from 'react'
import { type Metadata } from 'next'

import ComingSoonPage from '@/components/pages/coming-soon/ComingSoonPage'

const AboutAlecia: FC = () => {
  return <ComingSoonPage pageTitle="About Alecia" />
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `About Alecia | Alecia.ca`,
  }
}

export default AboutAlecia
