import type { GitHubRepoType } from '@alecia/giscus-types'
import { assertValue } from '@alecia/util/styles'

export const GITHUB_REPO_NAME = assertValue(
  process.env['NEXT_PUBLIC_GITHUB_REPO_NAME'],
  'Missing environment variable: NEXT_PUBLIC_GITHUB_REPO_NAME',
) as GitHubRepoType

export const GITHUB_REPO_ID = assertValue(
  process.env['NEXT_PUBLIC_GITHUB_REPO_ID'],
  'Missing environment variable: NEXT_PUBLIC_GITHUB_REPO_ID',
)

export const GITHUB_CATEGORY_ID = assertValue(
  process.env['NEXT_PUBLIC_GITHUB_CATEGORY_ID'],
  'Missing environment variable: NEXT_PUBLIC_GITHUB_CATEGORY_ID',
)
