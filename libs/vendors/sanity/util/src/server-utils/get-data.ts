import { draftMode } from 'next/headers'
import { FilteredResponseQueryOptions, type QueryParams } from 'next-sanity'

import { IS_PRODUCTION_MODE } from '@alecia/constants'
import { SANITY_TOKEN } from '@alecia/sanity-constants/server'

import { client as rawClient } from './client'

import 'server-only'

const DEFAULT_PARAMS = {} as QueryParams
const DEFAULT_TAGS = [] as string[]

// Alternative to `client.fetch` that uses the preview token
const preview = <R = any>(
  query: string,
  params: QueryParams | undefined = DEFAULT_PARAMS,
  options: FilteredResponseQueryOptions | undefined = {},
): Promise<R> => {
  if (!SANITY_TOKEN && !options.token) {
    throw new Error('The `SANITY_PREVIEW_TOKEN` environment variable is required.')
  }

  return (
    rawClient
      .withConfig({
        useCdn: false,
        perspective: 'previewDrafts',
        token: options.token ?? SANITY_TOKEN,
      })
      // @ts-expect-error -- tags are undefined for some reason
      .fetch<R>(query, params, {
        cache: 'no-store',
        next: {
          // @ts-expect-error -- tags are not in the types for some reason
          tags: options.next?.tags ?? DEFAULT_TAGS,
        },
      })
  )
}

const client = {
  ...rawClient,
  preview,
  fetch: rawClient.fetch.bind(rawClient),
}

// Query helpers
export const getData = async <T>(
  query: string,
  params: QueryParams = {},
  tags: string[] = [],
): Promise<T> => {
  const isDraftMode = draftMode().isEnabled

  const fetcher = !IS_PRODUCTION_MODE || isDraftMode ? client.preview : client.fetch

  return fetcher<T>(query, params, {
    // @ts-expect-error -- cache is not in the types for some reason
    cache: 'default',
    // @ts-expect-error -- tags are not in the types for some reason
    next: {
      tags,
    },
  })
}
