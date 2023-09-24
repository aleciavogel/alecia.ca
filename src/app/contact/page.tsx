import { type FC } from 'react'
import { type Metadata } from 'next'

import ComingSoonPage from '@/components/pages/coming-soon/ComingSoonPage'

const Contact: FC = () => {
  return <ComingSoonPage pageTitle="Get In Touch" />
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Get In Touch | Alecia.ca`,
  }
}

export default Contact
