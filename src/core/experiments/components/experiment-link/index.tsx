import ExperimentDialog from '@alecia/core/experiments/components/experiment-dialog'
import ExperimentCard from '@alecia/core/experiments/components/experiments-card'
import { ExperimentsIndexQueryResult } from '@alecia/vendors/sanity/types/sanity.types'

type SingleExperimentResult = NonNullable<ExperimentsIndexQueryResult['experiments']>[number]

const ExperimentLink = (exp: SingleExperimentResult) => {
  return (
    <ExperimentDialog {...exp}>
      <ExperimentCard {...exp} />
    </ExperimentDialog>
  )
}

export default ExperimentLink
