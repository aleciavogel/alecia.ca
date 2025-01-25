import { ResourceLinkType } from '@alecia/resources-types'

import ResourceLinkWithHover from './with-hover'

const ResourceLink = (link: ResourceLinkType) => {
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

export default ResourceLink
