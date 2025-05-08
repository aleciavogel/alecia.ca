'use client'

import { NextStudio } from 'next-sanity/studio'

import { SANITY_CONFIG } from '@alecia/vendors/sanity/studio'

export const ClientStudio = () => <NextStudio config={SANITY_CONFIG} />
