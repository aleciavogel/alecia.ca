import { FC } from 'react'
import * as React from 'react'

import { ResourceLinkType } from '@alecia/resources-types'

import { ResourceLinkWithHover } from '../resource-link'

export const ResourceLink: FC<ResourceLinkType> = (link) => {
  if (link.content || link.image) {
    return <ResourceLinkWithHover {...link} />
  }

  return (
    <li>
      <a
        href={link.url ?? '#'}
        className="inline-block underline hover:text-accent-600 dark:hover:text-accent-300"
        target="_blank"
        rel="nofollow noreferrer"
      >
        {link.label}
      </a>
    </li>
  )
}
