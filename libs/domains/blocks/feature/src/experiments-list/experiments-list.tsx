import { ExperimentCard } from '@alecia/experiments-ui'
import { ExperimentIndexQueryResult } from '@alecia/sanity-types'

type ExperimentsResults = NonNullable<ExperimentIndexQueryResult['experiments']>

interface ExperimentsListProps {
  experiments: ExperimentsResults
}

export const ExperimentsList = ({ experiments }: ExperimentsListProps) => (
  <div className="page-container mx-auto px-8 md:px-20">
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      {experiments.map((experiment) => (
        <div key={experiment._id} className="break-inside-avoid">
          <ExperimentCard {...experiment} />
        </div>
      ))}
    </div>
  </div>
)
