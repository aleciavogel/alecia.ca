import { ExperimentLink } from '@alecia/experiments'
import { ExperimentIndexQueryResult } from '@alecia/sanity-types'

type ExperimentsResults = NonNullable<ExperimentIndexQueryResult['experiments']>

interface ExperimentsListProps {
  experiments: ExperimentsResults
}

export const ExperimentsList = ({ experiments }: ExperimentsListProps) => (
  <div className="page-content-block">
    <div className="columns-1 md:columns-2 lg:columns-3 space-y-6 space-x-6">
      {experiments.map((experiment) => (
        <div key={experiment._id} className="break-inside-avoid">
          <ExperimentLink {...experiment} />
        </div>
      ))}
    </div>
  </div>
)
