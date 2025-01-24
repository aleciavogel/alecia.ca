import { ResourcesGroup } from '@alecia/resources-ui'
import { ResourcesIndexQueryResult } from '@alecia/sanity-types'

type ResourcesGroups = NonNullable<ResourcesIndexQueryResult['resources']>

interface ResourcesProps {
  resources: ResourcesGroups
}

const ResourcesList = ({ resources }: ResourcesProps) => (
  <div className="page-content-block">
    <div className="columns-1 md:columns-2 gap-6 space-y-6">
      {resources.map((resource) => (
        <div key={resource._id} className="break-inside-avoid">
          <ResourcesGroup {...resource} />
        </div>
      ))}
    </div>
  </div>
)

export default ResourcesList
