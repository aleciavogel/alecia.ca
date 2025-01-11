import { settingsQuery } from '@alecia/sanity-queries'
import { SettingsQueryResult } from '@alecia/sanity-types'
import { fetchSanity } from '@alecia/sanity-util/server'

/**
 * Fetches the settings singleton from Sanity.
 */
export const getSettings = async () =>
  fetchSanity<SettingsQueryResult>(settingsQuery, { tag: 'settings' })
