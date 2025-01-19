import { RECAPTCHA_SECRET } from '@alecia/recaptcha-constants/server'

export async function POST(req: Request) {
  const data = await req.json()
  const { token } = data

  if (!token) {
    return new Response(JSON.stringify({ message: 'Token not found' }), {
      status: 405,
    })
  }

  try {
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: RECAPTCHA_SECRET,
        response: token,
      }),
    })

    const responseData = await response.json()

    if (responseData.success) {
      return new Response(JSON.stringify({ message: 'Success' }), {
        status: 200,
      })
    } else {
      return new Response(JSON.stringify({ message: 'Failed to verify' }), {
        status: 405,
      })
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
    })
  }
}
