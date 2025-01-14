import { SITE_BASE_URL } from '@alecia/constants'

const API_URL = SITE_BASE_URL + '/api'

/**
 * Get method
 * @param path - the path to the api endpoint
 * @param callback - the callback function to run after the response is received
 */

async function get<R>(path: string, callback: (response: R) => void): Promise<void> {
  const response = await fetch(`${API_URL}${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`${response.status.toString()} Error: ${response.statusText}`)
  }

  const data = (await response.json()) as R
  callback(data)
}

/**
 * Post method
 * @param path - the path to the api endpoint
 * @param payload - the payload to send to the api
 * @param callback - the callback function to run after the response is received
 */
async function post<P, R>(
  path: string,
  payload: P,
  callback: (response: R) => void,
): Promise<void> {
  const response = await fetch(`${API_URL}${path}`, {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(`${response.status.toString()} Error: ${response.statusText}`)
  }

  const data = (await response.json()) as R
  callback(data)
}

/**
 * Put method that emulates a PUT request through POST due to browser limitations with CORS
 * @param path - the path to the api endpoint
 * @param payload - the payload to send to the api
 * @param callback - the callback function to run after the response is received
 */
async function put<P, R>(path: string, payload: P, callback: (response: R) => void): Promise<void> {
  // Emulate PUT request through POST by appending a query parameter
  const modifiedPath = `${path}?_method=PUT`

  // You could directly call the static post method here since the logic is the same.
  // Ensure that any payload modifications specific to PUT requests are handled before this call.
  await post(modifiedPath, payload, callback)
}

export const api = {
  get,
  post,
  put,
}
