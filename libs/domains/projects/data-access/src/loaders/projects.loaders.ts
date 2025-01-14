import { projectIndexQuery, projectPageQuery } from '@alecia/sanity-queries'
import { ProjectIndexQueryResult, ProjectPageQueryResult } from '@alecia/sanity-types'
import { loadQuery } from '@alecia/sanity-util/server'

/**
 * Fetches all projects from Sanity, sorted by published date.
 */
export const getProjectIndex = async () =>
  loadQuery<ProjectIndexQueryResult>(projectIndexQuery, {
    tags: ['projects'],
  })

/**
 * Fetches all projects from Sanity, sorted by published date.
 */
export const getProject = async (slug: string) =>
  loadQuery<ProjectPageQueryResult>(projectPageQuery, {
    params: {
      slug,
    },
    tags: ['projects'],
  })
