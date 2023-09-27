'use client'

import { type FC } from 'react'
import { faHome, faEnvelope } from '@fortawesome/pro-solid-svg-icons'

import { CommandGroup } from '@/common/ui/command'
import SearchLink from '../search-link'

interface StaticPagesCommandGroupProps {
  runCommand: (callback: () => unknown) => void
}

const StaticPagesCommandGroup: FC<StaticPagesCommandGroupProps> = ({ runCommand }) => (
  <CommandGroup>
    <SearchLink label="Home" url="/" icon={faHome} onSelect={runCommand} />
    <SearchLink label="Get In Touch" url="/contact" icon={faEnvelope} onSelect={runCommand} />
  </CommandGroup>
)

export default StaticPagesCommandGroup
