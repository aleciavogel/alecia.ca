import { type FC } from 'react'
import { type Metadata } from 'next'

import ComingSoonPage from '@/components/pages/coming-soon/ComingSoonPage'

const Coding101: FC = () => {
  return <ComingSoonPage pageTitle="Coding 101" />
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Coding 101 | Alecia.ca`,
  }
}

export default Coding101
