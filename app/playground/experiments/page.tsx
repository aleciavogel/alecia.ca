import { type FC } from 'react'
import { type Metadata } from 'next'

import ComingSoonPage from '@/features/coming-soon'

const Experiments: FC = () => {
  return <ComingSoonPage pageTitle="Experiments" />
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Experiments | Alecia.ca`,
  }
}

export default Experiments