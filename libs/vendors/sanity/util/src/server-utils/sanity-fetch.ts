'use server'

import { draftMode } from 'next/headers'
import type {
  ClientPerspective,
  FilteredResponseQueryOptions,
  QueryParams,
  UnfilteredResponseQueryOptions,
  UnfilteredResponseWithoutQuery,
} from 'next-sanity'

import { IS_DEV_MODE } from '@alecia/constants'
import { sanityClient } from '@alecia/sanity-client'
import { SANITY_TOKEN } from '@alecia/sanity-constants/server'

interface FetchSanityParams {
  params?: QueryParams
}

type FetchSanityOptions =
  | (FilteredResponseQueryOptions & FetchSanityParams)
  | (UnfilteredResponseQueryOptions & FetchSanityParams)
  | (UnfilteredResponseWithoutQuery & FetchSanityParams)

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- This is a generic function
function isFilteredResponseQueryOptions(options: any): options is FilteredResponseQueryOptions {
  return options?.filterResponse === true
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- This is a generic function
function isUnfilteredResponseQueryOptions(options: any): options is UnfilteredResponseQueryOptions {
  return options?.returnQuery === true && options?.filterResponse === false
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- This is a generic function
function isUnfilteredResponseWithoutQuery(options: any): options is UnfilteredResponseWithoutQuery {
  return options?.filterResponse === false && !options?.returnQuery
}

/**
 * Fetches data from Sanity using the client.
 * @param query - The GROQ query to fetch data with.
 * @param queryOptions - The query options.
 */
export const fetchSanity = async <T>(
  query: string,
  { params = {}, ...options }: FetchSanityOptions = {},
) => {
  const preview = IS_DEV_MODE || draftMode().isEnabled

  const baseOptions = {
    useCdn: !preview,
    perspective: preview
      ? ('previewDrafts' as ClientPerspective)
      : ('published' as ClientPerspective),
    ...(preview ? { stega: true, token: SANITY_TOKEN } : {}),
  }

  if (isFilteredResponseQueryOptions(options)) {
    return sanityClient.fetch<T>(query, params, {
      ...baseOptions,
      ...options,
    })
  }

  if (isUnfilteredResponseQueryOptions(options)) {
    return sanityClient.fetch<T>(query, params, {
      ...baseOptions,
      ...options,
    })
  }

  if (isUnfilteredResponseWithoutQuery(options)) {
    return sanityClient.fetch<T>(query, params, {
      ...baseOptions,
      ...options,
    })
  }

  throw new Error('Invalid options provided to fetchSanity') // Fallback error handling
}
