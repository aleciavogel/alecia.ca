import { loadEnvConfig } from '@next/env'
import { defineCliConfig } from 'sanity/cli'

import { IS_DEV_MODE, IS_VERCEL_PREVIEW } from '@alecia/constants'
import { SANITY_DATASET, SANITY_PROJECT_ID } from '@alecia/sanity-constants'

loadEnvConfig(__dirname, IS_DEV_MODE || IS_VERCEL_PREVIEW, {
  info: () => null,

  error: console.error,
})

export default defineCliConfig({ api: { projectId: SANITY_PROJECT_ID, dataset: SANITY_DATASET } })
