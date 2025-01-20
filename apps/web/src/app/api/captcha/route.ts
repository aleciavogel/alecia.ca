import { NextRequest, NextResponse } from 'next/server'

import { CLOUDFLARE_TURNSTILE_ROUTE, TURNSTILE_SECRET } from '@alecia/cloudflare-constants/server'

export async function POST(req: NextRequest) {
  const data = await req.json()
  const { token } = data

  if (!token) {
    return NextResponse.json(
      { message: 'Token not found' },
      {
        status: 405,
      },
    )
  }

  try {
    const response = await fetch(CLOUDFLARE_TURNSTILE_ROUTE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: TURNSTILE_SECRET,
        response: token,
      }),
    })

    const responseData = await response.json()

    if (responseData.success) {
      return NextResponse.json(
        { message: 'Success' },
        {
          status: 200,
        },
      )
    } else {
      return NextResponse.json(
        { message: 'Failed to verify' },
        {
          status: 405,
        },
      )
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error)
    }

    return NextResponse.json(
      { message: 'Internal Server Error' },
      {
        status: 500,
      },
    )
  }
}
