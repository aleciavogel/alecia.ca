import { FC } from 'react'
import * as React from 'react'

import { ResourceLinkType } from '@alecia/resources-types'
import { ResourceLinkWithHover } from '@alecia/resources-ui'

export const ResourceLink: FC<ResourceLinkType> = (link) => {
  if (link.content || link.image) {
    return <ResourceLinkWithHover {...link} />
  }

  return (
    <li key={`link-${link._id}`}>
      <a
        href={link.url ?? '#'}
        className="underline hover:text-accent-600 dark:hover:text-accent-300"
        target="_blank"
        rel="nofollow noreferrer"
      >
        {link.label}
      </a>
    </li>
  )
}
