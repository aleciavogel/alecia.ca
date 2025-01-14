import { FC } from 'react'
import * as React from 'react'
import classNames from 'classnames'

import { ResourcesIndexQueryResult } from '@alecia/sanity-types'
import { urlFor } from '@alecia/sanity-util'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@alecia/ui-kit'

import { ResourceLinkContent } from './resource-link-content'

type SingleResourceCategory = NonNullable<ResourcesIndexQueryResult['resources']>[number]
type SingleResourceLink = NonNullable<SingleResourceCategory['links']>[number]

export const ResourceLink: FC<SingleResourceLink> = (link) => (
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
