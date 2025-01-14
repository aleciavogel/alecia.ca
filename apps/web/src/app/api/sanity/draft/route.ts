import { validatePreviewUrl } from '@sanity/preview-url-secret'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

import { sanityClient } from '@alecia/sanity-client'
import { SANITY_TOKEN } from '@alecia/sanity-constants/server'

const clientWithToken = sanityClient.withConfig({ token: SANITY_TOKEN })

export async function GET(request: Request): Promise<Response> {
  const { isValid, redirectTo = '/' } = await validatePreviewUrl(clientWithToken, request.url)
  if (!isValid) {
    return new Response('Invalid secret', { status: 401 })
  }

  ;(await draftMode()).enable()

  redirect(redirectTo)
}
