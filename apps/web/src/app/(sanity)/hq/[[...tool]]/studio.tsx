'use client'

import { NextStudio } from 'next-sanity/studio'

import { SANITY_CONFIG } from '@alecia/sanity-studio'

export const ClientStudio = () => <NextStudio config={SANITY_CONFIG} />
