'use client'

import { NextStudio } from 'next-sanity/studio'

import sanityConfig from '@alecia/vendors/sanity/studio/sanity.config'

export default function StudioPage() {
  return <NextStudio config={sanityConfig} />
}
