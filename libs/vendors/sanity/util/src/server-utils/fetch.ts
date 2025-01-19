'use server'

import { draftMode } from 'next/headers'
import { type QueryOptions, type QueryParams } from 'next-sanity'

import { IS_DEV_MODE } from '@alecia/constants'
import { sanityClient } from '@alecia/sanity-client'
import { SANITY_TOKEN } from '@alecia/sanity-constants/server'

import { sanityFetch } from './live'

interface FetchSanityOptions {
  params?: QueryParams
  tags?: string[]
}

export async function loadQuery<T>(query: string, { params = {}, tags }: FetchSanityOptions = {}) {
  const preview = IS_DEV_MODE || (await draftMode()).isEnabled

  return sanityClient.fetch<T>(
    query,
    params,
    preview
      ? {
          stega: true,
          perspective: 'previewDrafts',
          useCdn: false,
          token: SANITY_TOKEN,
          next: {
            revalidate: 0,
            tags,
          },
        }
      : {
          perspective: 'published',
          useCdn: true,
          next: {
            revalidate: 3600, // every hour
            tags,
          },
        },
  )
}

export async function fetchSanityLive<T>(args: Parameters<typeof sanityFetch>[0]) {
  const preview = IS_DEV_MODE || (await draftMode()).isEnabled

  const { data } = await sanityFetch({
    ...args,
    perspective: preview ? 'previewDrafts' : 'published',
  })

  return data as T
}
