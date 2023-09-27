'use client'

import { type FC } from 'react'
import { faRocketLaunch, faTransporter } from '@fortawesome/pro-solid-svg-icons'

import { CommandGroup } from '@/common/ui/command'
import SearchLink from '../search-link'

interface TutorialPagesCommandGroupProps {
  runCommand: (callback: () => unknown) => void
}

const TutorialPagesCommandGroup: FC<TutorialPagesCommandGroupProps> = ({ runCommand }) => (
  <CommandGroup>
    <SearchLink
      label="Happy Little Brackets"
      url="/learn-to-code/happy-little-brackets"
      onSelect={runCommand}
    />
    <SearchLink
      label="Coding 101"
      icon={faRocketLaunch}
      url="/learn-to-code/coding-101"
      onSelect={runCommand}
    />
    <SearchLink
      label="Advanced Projects"
      icon={faTransporter}
      url="/learn-to-code/advanced-projects"
      onSelect={runCommand}
    />
  </CommandGroup>
)

export default TutorialPagesCommandGroup
