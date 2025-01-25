import ExperimentDialog from '@alecia/experiments-ui/experiment-dialog'
import ExperimentCard from '@alecia/experiments-ui/experiments-card'
import { ExperimentIndexQueryResult } from '@alecia/sanity-types/sanity.types'

type SingleExperimentResult = NonNullable<ExperimentIndexQueryResult['experiments']>[number]

const ExperimentLink = (exp: SingleExperimentResult) => {
  return (
    <ExperimentDialog {...exp}>
      <ExperimentCard {...exp} />
    </ExperimentDialog>
  )
}

export default ExperimentLink
