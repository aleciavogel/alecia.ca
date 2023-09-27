'use client'

import { type FC } from 'react'

// TODO: replace MAIN_NAV with a new constant for site pages or site nav in @/common/config
import { MAIN_NAV } from '@/features/site-nav/static-nav/constants'
import { CommandGroup } from '@/common/ui/command'
import SearchLink from './search-link'

interface AboutPagesCommandGroupProps {
  heading: string
  groupName?: string
  runCommand: (callback: () => unknown) => void
}

const SearchGroup: FC<AboutPagesCommandGroupProps> = ({ heading, groupName, runCommand }) => {
  const links = MAIN_NAV.find((item) => item.title === groupName ?? heading)

  return (
    <CommandGroup heading={heading}>
      {links?.items?.map((item, index) => (
        <SearchLink
          key={`${encodeURI(heading)}-search-${index}`}
          label={item.title}
          url={item.href ?? ''}
          icon={item.icon}
          onSelect={runCommand}
        />
      ))}
    </CommandGroup>
  )
}

export default SearchGroup
