import { type FC } from 'react'
import { type Metadata } from 'next'

import HomePage from '@/features/home'

const Home: FC = () => {
  return <HomePage />
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: `Senior Full-Stack Software Developer | Alecia.ca`,
  }
}

export default Home
