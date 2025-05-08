import ExperimentDialog from '@alecia/experiments-ui/experiment-dialog'
import ExperimentCard from '@alecia/experiments-ui/experiments-card'
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
