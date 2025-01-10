/** The environment the app is running in */
export const NODE_ENV = process.env['NODE_ENV']

/** Whether the app is running in development mode */
export const IS_DEV_MODE = NODE_ENV === 'development'

/** Whether the app is running in production mode */
export const IS_PRODUCTION_MODE = NODE_ENV === 'production'

/** Whether the app is running in test mode */
export const IS_TEST_MODE = NODE_ENV === 'test'

/** Whether the app is running in Vercel Preview Mode */
export const IS_VERCEL_PREVIEW = process.env['VERCEL_ENV'] === 'preview'
