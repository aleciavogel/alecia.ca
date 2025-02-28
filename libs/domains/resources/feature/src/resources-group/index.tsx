import { ResourcesIndexQueryResult } from '@alecia/sanity-types/sanity.types'
import Typography from '@alecia/ui-kit/ui/typography'

import ResourceLink from '../resource-link'

type SingleResourceCategory = NonNullable<ResourcesIndexQueryResult['resources']>[number]

const ResourcesGroup = ({ _id, title, links }: SingleResourceCategory) => (
  <div className="rounded-lg bg-white p-8 space-y-4">
    <Typography variant="blockPretitle" as="h3">
      {title}
    </Typography>
    <ul>
      {links ? (
        <ul className="space-y-4 list-square list-outside pl-5 text-primary-950">
          {links.map((link, index) => (
            <ResourceLink key={`${_id}-${index}`} {...link} />
          ))}
        </ul>
      ) : null}
    </ul>
  </div>
)

export default ResourcesGroup
