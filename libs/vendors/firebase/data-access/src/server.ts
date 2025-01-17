import { cert, getApps, initializeApp } from 'firebase-admin/app'
import { getAuth, SessionCookieOptions } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'
import { cookies } from 'next/headers'

import {
  GOOGLE_APP_NAME,
  GOOGLE_SERVICE_ACCOUNT_KEY,
  SESSION_COOKIE_NAME,
} from '@alecia/firebase-constants/server'

/**
 * Initialize or retrieve the Firebase Admin app instance
 */
export const firebaseApp =
  getApps().find((app) => app.name === GOOGLE_APP_NAME) ||
  initializeApp(
    {
      credential: cert(JSON.parse(GOOGLE_SERVICE_ACCOUNT_KEY)),
    },
    GOOGLE_APP_NAME,
  )

/**
 * Retrieve the authentication instance from the Firebase Admin app
 */
export const auth = getAuth(firebaseApp)

/**
 * Retrieve the Firestore instance from the Firebase Admin app
 */
export const db = getFirestore(firebaseApp)

/**
 * Checks if the user is authenticated by verifying the session cookie.
 * @param session - The session cookie string. If not provided, retrieves it from cookies.
 * @returns `true` if the user is authenticated and session is valid; otherwise, `false`.
 */
export async function isUserAuthenticated(session: string | undefined = undefined) {
  const _session = session ?? (await getSession())
  if (!_session) return false

  try {
    const isRevoked = !(await auth.verifySessionCookie(_session, true))
    return !isRevoked
  } catch (error) {
    console.log(error)
    return false
  }
}

/**
 * Retrieves the currently authenticated user based on the session cookie.
 * @returns current user object or `null` if not authenticated.
 */
export async function getCurrentUser() {
  const session = await getSession()

  if (!(await isUserAuthenticated(session))) {
    return null
  }

  const decodedIdToken = await auth.verifySessionCookie(session!)
  return await auth.getUser(decodedIdToken.uid)
}

/**
 * Retrieves the session cookie from the request cookies.
 * @returns session cookie string or `undefined` if not found.
 */
async function getSession() {
  try {
    return cookies().get(SESSION_COOKIE_NAME)?.value
  } catch (error) {
    return undefined
  }
}

/**
 * Creates a Firebase session cookie for the specified ID token.
 * @param idToken - The Firebase ID token for the user.
 * @param sessionCookieOptions - Options for the session cookie (e.g., maxAge).
 * @return created session cookie.
 */
export async function createSessionCookie(
  idToken: string,
  sessionCookieOptions: SessionCookieOptions,
) {
  return auth.createSessionCookie(idToken, sessionCookieOptions)
}

/**
 * Revokes all active sessions for the user associated with the provided session cookie.
 * @param {string} session - The session cookie string.
 * @returns {Promise<void>} - Resolves when the sessions are revoked.
 */
export async function revokeAllSessions(session: string) {
  const decodedIdToken = await auth.verifySessionCookie(session)

  return await auth.revokeRefreshTokens(decodedIdToken.sub)
}
