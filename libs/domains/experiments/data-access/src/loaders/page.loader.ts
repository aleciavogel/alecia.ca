import { experimentIndexQuery, experimentPageQuery } from '@alecia/sanity-queries'
import { ExperimentIndexQueryResult, ExperimentPageQueryResult } from '@alecia/sanity-types'
import { loadQuery } from '@alecia/sanity-util/server'

/**
 * Fetches all experiments from Sanity, sorted by published date.
 */
export const getExperimentsIndex = async () =>
  loadQuery<ExperimentIndexQueryResult>(experimentIndexQuery, {
    tags: ['experiments'],
  })

/**
 * Fetches all projects from Sanity, sorted by published date.
 */
export const getExperiment = async (slug: string) =>
  loadQuery<ExperimentPageQueryResult>(experimentPageQuery, {
    params: {
      slug,
    },
    tags: ['experiments'],
  })
