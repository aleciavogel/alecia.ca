import { FC } from 'react'

import { ResourcesGroup } from '@alecia/resources-ui'
import { ResourcesIndexQueryResult } from '@alecia/sanity-types'

type ResourcesGroups = NonNullable<ResourcesIndexQueryResult['resources']>

interface ResourcesProps {
  resources: ResourcesGroups
}

export const Resources: FC<ResourcesProps> = ({ resources }) => (
  <div className="page-container mx-auto">
    <div className="columns-1 md:columns-2 gap-6 space-y-6">
      {resources.map((resource) => (
        <div key={resource._id} className="break-inside-avoid">
          <ResourcesGroup {...resource} />
        </div>
      ))}
    </div>
  </div>
)
