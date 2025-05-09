import { validatePreviewUrl } from '@sanity/preview-url-secret'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

import { SANITY_TOKEN } from '@alecia/vendors/sanity/constants/server'
import { sanityClient } from '@alecia/vendors/sanity/util/server/client'

const clientWithToken = sanityClient.withConfig({ token: SANITY_TOKEN })

export async function GET(request: Request): Promise<Response> {
  const { isValid, redirectTo = '/' } = await validatePreviewUrl(clientWithToken, request.url)
  if (!isValid) {
    return new Response('Invalid secret', { status: 401 })
  }

  ;(await draftMode()).enable()

  redirect(redirectTo)
}
