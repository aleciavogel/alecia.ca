'use client'

/**
 * Workaround for Next.js 16 + SanityLive: the default revalidateSyncTags
 * server action doesn't trigger router.refresh() correctly on Next.js 16.
 * Returning 'refresh' tells SanityLive to call router.refresh() directly.
 *
 * @see https://www.sanity.io/docs/help/nextjs-16-sanitylive-status
 */
export async function refreshAction(): Promise<'refresh'> {
  return 'refresh'
}
