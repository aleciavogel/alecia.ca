import { type FC } from 'react'
import { type Metadata } from 'next'

import ComingSoonPage from '@/components/pages/coming-soon/ComingSoonPage'

const HappyLittleBrackets: FC = () => {
  return <ComingSoonPage pageTitle="Happy Little Brackets" />
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Happy Little Brackets | Alecia.ca`,
  }
}

export default HappyLittleBrackets
