import { getApps, initializeApp } from 'firebase/app'
import { getAuth, inMemoryPersistence, setPersistence } from 'firebase/auth'

import {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_MEASUREMENT_ID,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
} from '@alecia/firebase-constants'

export const FIREBASE_CONFIG = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
}

const firebase_app = getApps().length === 0 ? initializeApp(FIREBASE_CONFIG) : getApps()[0]

export const auth = getAuth(firebase_app)

// Force Firebase to use session-based auth (not localStorage)
setPersistence(auth, inMemoryPersistence).catch((error) =>
  console.error('**** [@yoho/data-access-firebase] Failed to set firebase persistence:', error),
)

export default firebase_app
