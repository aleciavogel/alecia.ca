import { type FC } from 'react'
import { type Metadata } from 'next'

import ComingSoonPage from '@/features/coming-soon'

const Contact: FC = () => {
  return <ComingSoonPage pageTitle="Get In Touch" />
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Get In Touch | Alecia.ca`,
  }
}

export default Contact
