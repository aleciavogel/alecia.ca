import { ExperimentCard, ExperimentDialog } from '@alecia/experiments-ui'
import { ExperimentIndexQueryResult } from '@alecia/sanity-types'

type SingleExperimentResult = NonNullable<ExperimentIndexQueryResult['experiments']>[number]

export const ExperimentLink = (exp: SingleExperimentResult) => {
  return (
    <ExperimentDialog {...exp}>
      <ExperimentCard {...exp} />
    </ExperimentDialog>
  )
}
