'use server'

import { settingsQuery } from '@alecia/sanity-queries'
import { SettingsQueryResult } from '@alecia/sanity-types'
import { loadQuery } from '@alecia/sanity-util/server'

/**
 * Fetches the settings singleton from Sanity.
 */
export const getSettings = async () =>
  loadQuery<SettingsQueryResult>(settingsQuery, { tags: ['settings'] })
getSettings
