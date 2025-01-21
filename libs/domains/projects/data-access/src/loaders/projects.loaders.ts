import { projectIndexQuery, projectPageQuery, projectSlugsQuery } from '@alecia/sanity-queries'
import {
  ProjectIndexQueryResult,
  ProjectPageQueryResult,
  ProjectSlugsQueryResult,
} from '@alecia/sanity-types'
import { loadQuery } from '@alecia/sanity-util/server'

/**
 * Fetches all projects from Sanity, sorted by published date.
 */
export const getProjectIndex = async () =>
  loadQuery<ProjectIndexQueryResult>(projectIndexQuery, {
    tags: ['page:projects'],
  })

/**
 * Fetches a specific project from Sanity via slug
 */
export const getProject = async (slug: string) =>
  loadQuery<ProjectPageQueryResult>(projectPageQuery, {
    params: {
      slug,
    },
    tags: [`project:${slug}`],
  })

/**
 * Fetches all project slugs for generating params
 */
export const getProjectSlugs = async () =>
  loadQuery<ProjectSlugsQueryResult>(projectSlugsQuery, {
    tags: [`project`],
  })
