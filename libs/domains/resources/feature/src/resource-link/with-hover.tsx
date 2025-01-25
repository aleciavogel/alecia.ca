import { FC } from 'react'
import classNames from 'classnames'

import ResourceLinkContent from '@alecia/resources-ui/resource-link/content'
import { ResourcesIndexQueryResult } from '@alecia/sanity-types/sanity.types'
import { urlFor } from '@alecia/sanity-util/client-utils/sanity-image-utils'
import {
  HoverCardContent,
  HoverCardRoot as HoverCard,
  HoverCardTrigger,
} from '@alecia/ui-kit/ui/hover-card'

type SingleResourceCategory = NonNullable<ResourcesIndexQueryResult['resources']>[number]
type SingleResourceLink = NonNullable<SingleResourceCategory['links']>[number]

const ResourceLinkWithHover: FC<SingleResourceLink> = (link: SingleResourceLink) => (
  <li key={`link-${link._id}`}>
    <HoverCard>
      <HoverCardTrigger asChild>
        <a
          href={link.url ?? '#'}
          className="underline hover:text-accent-600 dark:hover:text-accent-300"
          target="_blank"
          rel="nofollow noreferrer"
        >
          {link.label}
        </a>
      </HoverCardTrigger>
      <HoverCardContent>
        <div
          className={classNames({
            grid: link.image,
            'grid-cols-2': link.layout === 'horizontal' && link.image,
            'grid-cols-1': link.layout === 'vertical' && link.image,
          })}
        >
          {link.image ? (
            <div>
              <img
                src={urlFor(link.image)
                  .height(link.layout === 'horizontal' ? 150 : 400)
                  .width(link.layout === 'horizontal' ? 150 : 200)
                  .fit('crop')
                  .url()}
                alt={link.alt ?? ''}
              />
            </div>
          ) : null}
          <ResourceLinkContent {...link} />
        </div>
      </HoverCardContent>
    </HoverCard>
  </li>
)

export default ResourceLinkWithHover
