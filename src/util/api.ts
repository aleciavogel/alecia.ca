/**
 * Get method
 * @param path - the path to the api endpoint
 */
async function get(path: string): Promise<Response> {
  return await fetch(path, {
    mode: 'cors',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

/**
 * Post method
 * @param path - the path to the api endpoint
 * @param payload - the payload to send to the api
 */
async function post<P = unknown>(path: string, payload: P): Promise<Response> {
  return await fetch(path, {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
}

/**
 * Put method that emulates a PUT request through POST due to browser limitations with CORS
 * @param path - the path to the api endpoint
 * @param payload - the payload to send to the api
 */
async function put<P = unknown>(path: string, payload: P): Promise<Response> {
  return await fetch(path, {
    mode: 'cors',
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
}

/**
 * Delete method
 * @param path - the path to the api endpoint
 * @param payload - the payload to send to the api
 */
async function del<P = unknown>(path: string, payload: P): Promise<Response> {
  return await fetch(path, {
    mode: 'cors',
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
}

export const api = {
  get,
  post,
  put,
  del,
}
